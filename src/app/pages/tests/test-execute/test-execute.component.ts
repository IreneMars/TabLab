import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TestsService } from 'src/app/services/tests.service';
import { Datafile } from 'src/app/models/datafile';
import { ReportsService } from '../../../services/reports.service';
import { CollectionsService } from '../../../services/collections.service';
import { Observable, Subscription } from 'rxjs';
import { WorkspaceService } from '../../../services/workspaces.service';
import { Workspace } from 'src/app/models/workspace.model';
import { Collection } from 'src/app/models/collection';
import { Test } from 'src/app/models/test.model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
//import { SocketioService } from 'src/app/services/socketio.service';

@Component({
  selector: 'app-test-execute',
  templateUrl: './test-execute.component.html',
  styleUrls: ['./test-execute.component.css']
})
export class TestExecuteComponent implements OnInit, OnDestroy {

  // test: Test;
  // datafile: Datafile;
  // datafileId: string;
  workspace: Workspace;
  selectedTest: Test;
  workspaceId: string;
  testId: string;
  isLoading = false;
  collections: any[];
  private collectionsSub: Subscription;
  orphanedDatafiles: Datafile[];
  datafilesWTests: any[];
  tests: any[];
  selectedTests: any[] = [];
  selectedDatafile;
  inExecution = false;
  terminal: any[] = [];


  // // tslint:disable-next-line: max-line-length
  constructor(public testsService: TestsService, public collectionsService: CollectionsService, public route: ActivatedRoute,
              public workspacesService: WorkspaceService, public reportsService: ReportsService,
              //private socketService: SocketioService
              ){

  }

  ngOnDestroy(): void {
    this.collectionsSub.unsubscribe();
  }

  ngOnInit(){
    //this.socketService.emitMessage();

    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.workspaceId = paramMap.get('workspaceId');
      if (paramMap.get('testId')) {
        this.testId = paramMap.get('testId');
        this.testsService.getTest(this.testId).subscribe( testData => {
          this.selectedTest = testData.test;
          this.selectedDatafile = testData.test.datafile;
          this.selectedTests.push(this.selectedTest);
        });
      }
      // Workspace and orphaned datafiles
      this.workspacesService.getWorkspace(this.workspaceId).subscribe(workspaceData => {
        this.isLoading = false;
        this.workspace = {
          title: workspaceData.workspace.title,
          description: workspaceData.workspace.description,
          mandatory: workspaceData.workspace.mandatory
        };
        this.orphanedDatafiles = workspaceData.orphanedDatafiles;
        this.datafilesWTests = workspaceData.datafiles;
        this.tests = workspaceData.tests;
        console.log(this.tests);
      });
      this.isLoading = false;
    });
  }

  onTestPicked(event: Event) {

  }

  onDatafilePicked(event: Event) {

  }

  checkDatafile(datafileId: string){
    return this.selectedDatafile === datafileId;
  }

  checkTest(datafileId: string){
    return this.selectedDatafile === datafileId;
  }

  onExecute(){
    this.inExecution = true;
    this.selectedTests.forEach(async test => {
      console.log(test);
      this.reportsService.runTest(this.workspaceId, test._id).subscribe( response => {
        console.log(response);
        const lines = response.buffer.split('\r\n');
        console.log(lines);
        for (const line of lines) {
          this.terminal.push(line);
        }
        console.log(this.terminal);
        // this.terminal = response.buffer;
        this.testsService.updateTest(test._id, test.title, test.esquema, test.configurations, 'execute');

        this.inExecution = false;
      });

    });
  }

}




