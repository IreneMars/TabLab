import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TestsService } from 'src/app/services/tests.service';
import { ReportsService } from '../../../services/reports.service';
import { CollectionsService } from '../../../services/collections.service';
import { WorkspacesService } from '../../../services/workspaces.service';
import { Workspace } from 'src/app/models/workspace.model';
import { Test } from 'src/app/models/test.model';
import { AuthService } from 'src/app/services/auth.service';
import { TerminalsService } from '../../../services/terminals.service';
import { Terminal } from 'src/app/models/terminal.model';
import { saveAs } from 'file-saver';
import { SuggestionsService } from 'src/app/services/suggestions.service';
@Component({
  selector: 'app-test-execute',
  templateUrl: './test-execute.component.html',
  styleUrls: ['./test-execute.component.css']
})
export class TestExecuteComponent implements OnInit {
  userIsAuthenticated    : boolean = false;
  userId                 : string;
  isLoading              : boolean = false;
  workspaceId            : string;
  workspace              : Workspace;
  testId                 : string;
  selectedTest           : Test;
  selectedTestIDs        : Set<string> = new Set();
  tests                  : Test[];
  inExecution            : boolean = false;
  terminal               : Terminal;
  rawData                : any;
  constructor(private authService: AuthService, public testsService: TestsService, public collectionsService: CollectionsService, 
              public route: ActivatedRoute, public workspacesService: WorkspacesService, public reportsService: ReportsService,
              public terminalsService: TerminalsService, public suggestionsService: SuggestionsService, private router: Router){
  }

  ngOnInit(){
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.workspaceId = paramMap.get('workspaceId');
      if (paramMap.get('testId')) {
        this.testId = paramMap.get('testId');
        this.selectedTestIDs.add(this.testId);     
        // Current User
        this.userIsAuthenticated = this.authService.getIsAuth();
        if(this.userIsAuthenticated){
          this.userId = this.authService.getUserId();
          // Terminal
          this.terminalsService.getTerminal(this.userId).subscribe((response)=>{
            this.terminal = {
              id:response.terminal._id,
              content:response.terminal.content,
              user:response.terminal.user,
            };
            // Tests
            this.testsService.getTestsByWorkspace(this.workspaceId);
            this.testsService.getTestUpdateListener().subscribe( (testData: {tests: any[]}) => {
              this.tests = testData.tests;
              this.isLoading = false;
            });
          });
        }
      }
    });
  }

  onTestPicked(event: Event) {
    const testId: string = (event.target as HTMLInputElement).value;
    const checked: boolean = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedTestIDs.add(testId);
    } else if (!checked) {
      this.selectedTestIDs.delete(testId);
    }
  }

  onSelectAll(event: Event) {
    const checked: boolean = (event.target as HTMLInputElement).checked;
    if (checked) {
      for (var test of this.tests){
        this.selectedTestIDs.add(test.id);
      }
    }
    if (!checked) {
      this.selectedTestIDs = new Set();
    }

  }

  checkTest(testId: string){
    return this.selectedTestIDs.has(testId);
  }
  
  onDownload(testId: string) {
    this.testsService.getTest(testId).subscribe( testData => {
      
      var reportPath: string = testData.test.reportPath;
      var fileNameSplits = reportPath.split("/");
      var fileName = fileNameSplits[2].split(".");
      const blob = new Blob([testData.reportContent], {type: 'text/csv' })
      saveAs(blob, fileName[0]);

    })
  }
  async onClean(){
    this.terminalsService.updateTerminal(this.terminal.id,this.userId,[]).subscribe(()=>{
      this.terminal.content = [];
    })
  }
  onExecute(){
    if(this.selectedTestIDs.size===0){
      return;
    }
      this.inExecution = true;
      for (var selectedTestId of this.selectedTestIDs){
        this.testsService.getTest(selectedTestId).subscribe((testResponse)=>{
          this.terminal.content.push("Test "+testResponse.test.title+" is being executed.");
          // Creation of report
          this.reportsService.addReport(selectedTestId).subscribe(async responseData => {
            var buffer = responseData.execBuffer.split("\n");
            for (var line of buffer){
              this.terminal.content.push(line)
            }
            this.terminal.content.push(responseData.execBuffer);
            this.terminal.content.push(responseData.message);
            const testUpdate: any = {
              id: responseData.testUpdates._id,
              title: responseData.testUpdates.title,
              delimiter: responseData.testUpdates.delimiter,
              reportPath: responseData.testUpdates.reportPath,
              status: responseData.testUpdates.status,
              esquema: responseData.testUpdates.esquema,
              configurations: responseData.testUpdates.configurations,
              creationMoment: responseData.testUpdates.creationMoment,
              updateMoment: responseData.testUpdates.updateMoment,
              executionMoment: responseData.testUpdates.executionMoment,
              totalErrors: responseData.testUpdates.totalErrors,
              executable: responseData.testUpdates.executable,
              datafile: responseData.testUpdates.datafile,
              workspace: this.workspaceId
            };
            this.rawData = responseData.rawData;
            await this.suggestionsService.deleteSuggestionsByDatafile(testUpdate.datafile);
            await this.suggestionsService.addSuggestionsByDatafile(testUpdate.datafile,this.rawData, testUpdate.delimiter);
            // Updating test with report information
            this.testsService.updateTest(testUpdate).then(async (data:any)=>{
              if (data !==  undefined){
                this.terminal.content.push(data);
              }
              this.terminalsService.updateTerminal(this.terminal.id,this.userId,this.terminal.content).subscribe(terminalData =>{
                this.inExecution = false;
              })
            })
            .catch(err=>{
              this.terminal.content.push(err);
              this.inExecution = false;
            });
            for (var test of this.tests){
              if(this.selectedTestIDs.has(test.id) && test.id===selectedTestId){
                const index = this.tests.indexOf(test);
                this.tests.splice(index,1,testUpdate);
              }
            }        
          });
          
    
        });
      }
  }

}




