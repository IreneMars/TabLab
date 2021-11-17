import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TestsService } from 'src/app/services/tests.service';
import { ReportsService } from '../../../services/reports.service';
import { CollectionsService } from '../../../services/collections.service';
import { WorkspacesService } from '../../../services/workspaces.service';
import { Workspace } from 'src/app/models/workspace.model';
import { Test } from 'src/app/models/test.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TerminalsService } from '../../../services/terminals.service';
import { Terminal } from 'src/app/models/terminal.model';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-test-execute',
  templateUrl: './test-execute.component.html',
  styleUrls: ['./test-execute.component.css']
})
export class TestExecuteComponent implements OnInit, OnDestroy {
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
  private authStatusSub  : Subscription;
  private testsSub       : Subscription;
  
  constructor(private authService: AuthService, public testsService: TestsService, public collectionsService: CollectionsService, 
              public route: ActivatedRoute, public workspacesService: WorkspacesService, public reportsService: ReportsService,
              public terminalsService: TerminalsService, private router: Router){
  }

  ngOnInit(){
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.workspaceId = paramMap.get('workspaceId');
      if (paramMap.get('testId')) {
        this.testId = paramMap.get('testId');
        this.selectedTestIDs.add(this.testId);     
      }
      // Tests
      this.testsService.getTests(this.workspaceId);
      this.testsSub = this.testsService.getTestUpdateListener()
        .subscribe( (testData: {tests: any[]}) => {
          this.isLoading = false;
          this.tests = testData.tests;
        });
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    if(this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
      this.terminalsService.getTerminal(this.userId).subscribe((response)=>{
        this.terminal = {
          id:response.terminal._id,
          content:response.terminal.content,
          user:response.terminal.user,
        };
        console.log(this.terminal.content)
      });
    }
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }
  
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
    this.testsSub.unsubscribe();
  }

  onTestPicked(event: Event) {
    const testId: string = (event.target as HTMLInputElement).value;
    const checked: boolean = (event.target as HTMLInputElement).checked;
    // const index: number = this.selectedTestIDs.indexOf(testId);
    if (checked) {
    // if (checked && index < 0) {
      this.selectedTestIDs.add(testId);
    } else if (!checked) {
    //} else if (!checked && index >= 0) {
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
          this.reportsService.addReport(selectedTestId).subscribe(async responseData => {
            var buffer = responseData.execBuffer.split("\n");
            for (var line of buffer){
              this.terminal.content.push(line)
            }
            this.terminal.content.push(responseData.execBuffer);
            this.terminal.content.push(responseData.message);
            const testUpdate: Test = {
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
            };
            this.testsService.updateTest(testUpdate).then(async (data:any)=>{
              if (data !==  undefined){
                this.terminal.content.push(data);
              }
              console.log(this.terminal.content)
              this.terminalsService.updateTerminal(this.terminal.id,this.userId,this.terminal.content).subscribe(terminalData =>{
                console.log(terminalData)
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




