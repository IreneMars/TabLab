import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TestsService } from 'src/app/services/tests.service';
import { ReportsService } from '../../../services/reports.service';
import { CollectionsService } from '../../../services/collections.service';
import { WorkspacesService } from '../../../services/workspaces.service';
import { Workspace } from 'src/app/models/workspace.model';
import { Test } from 'src/app/models/test.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

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
  tests                  : any[];
  inExecution            : boolean = false;
  terminal               : any[] = [];
  private authStatusSub  : Subscription;
  private testsSub       : Subscription;

  constructor(private authService: AuthService, public testsService: TestsService, public collectionsService: CollectionsService, 
              public route: ActivatedRoute, public workspacesService: WorkspacesService, public reportsService: ReportsService){
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
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
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
    console.log(this.selectedTestIDs)
  }

  onSelectAll(event: Event) {
    const checked: boolean = (event.target as HTMLInputElement).checked;
    if (checked) {
      console.log("Select All")
      for (var test of this.tests){
        this.selectedTestIDs.add(test.id);
      }
      console.log(this.selectedTestIDs)
    }
    if (!checked) {
      console.log("Deselect All")
      this.selectedTestIDs = new Set();
      console.log(this.selectedTestIDs)
    }
    console.log(this.selectedTestIDs)

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

  onExecute(){
    if(this.selectedTestIDs.size===0){
      return;
    }
      this.inExecution = true;
      for (var selectedTestId of this.selectedTestIDs){
        console.log(selectedTestId)
        this.reportsService.addReport(selectedTestId).subscribe(async responseData => {
          console.log(responseData)
          const testUpdate: Test = {
            id: responseData.testUpdates._id,
            title: responseData.testUpdates.title,
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
          this.testsService.updateTest(testUpdate).then(data=>{
            console.log(data);
            this.inExecution = false;
          })
          .catch(err=>{
            console.log(err)
            this.inExecution = false;
          });
     
        });
      }
    
  }

}




