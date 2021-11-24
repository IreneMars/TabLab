import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Test } from '../models/test.model';

const BACKEND_URL = environment.apiUrl + '/tests/';

@Injectable({providedIn: 'root'})
export class TestsService {
  private tests: any[] = [];
  private testsUpdated = new Subject<{tests: any[]}>();
  
  constructor(private http: HttpClient) {}
  
  getTestUpdateListener() {
    return this.testsUpdated.asObservable();
  }
  
  getTests() {
    return this.http.get<{message: string, tests: any[]}>(BACKEND_URL)
    .pipe(map( (testData) => {
      return { tests: testData.tests.map(test => {
        return {
          id: test._id,
          title: test.title,
          delimiter: test.delimiter,
          reportPath: test.reportPath,
          status: test.status,
          esquema: test.esquema,
          configurations: test.configurations,
          creationMoment: test.creationMoment,
          updateMoment: test.updateMoment,
          executionMoment: test.executionMoment,
          totalErrors: test.totalErrors,
          executable: test.executable,
          datafile: test.datafile,
          workspace: test.workspace
        };
      }),
    };
    }))
    .subscribe((transformedTestData) => {
      this.tests = transformedTestData.tests;
      this.testsUpdated.next({
        tests: [...this.tests],
      });
  });
  }

  getTestsByWorkspace(workspaceId: string) {
    this.http.get<{message: string, tests: any}>(BACKEND_URL + "workspace/" + workspaceId)
    .pipe(map( (testData) => {
      return { tests: testData.tests.map(test => {
        return {
          id: test._id,
          title: test.title,
          delimiter: test.delimiter,
          reportPath: test.reportPath,
          status: test.status,
          esquema: test.esquema,
          configurations: test.configurations,
          creationMoment: test.creationMoment,
          updateMoment: test.updateMoment,
          executionMoment: test.executionMoment,
          totalErrors: test.totalErrors,
          executable: test.executable,
          datafile: test.datafile,
          datafileTitle: test.datafileTitle,
          workspace: test.workspace

        };
      }),
    };
    }))
    .subscribe((transformedTestData) => {
      this.tests = transformedTestData.tests;
      this.testsUpdated.next({
        tests: [...this.tests],
      });
    });
  }

  getTestsByDatafile(datafileId: string, workspaceId: string) {
    this.http.get<{message: string, tests: any}>(BACKEND_URL + "workspace/" + workspaceId + "/datafile/" + datafileId)
    .pipe(map( (testData) => {
      return { tests: testData.tests.map(test => {
        return {
          id: test._id,
          title: test.title,
          delimiter: test.delimiter,
          reportPath: test.reportPath,
          status: test.status,
          esquema: test.esquema,
          configurations: test.configurations,
          creationMoment: test.creationMoment,
          updateMoment: test.updateMoment,
          executionMoment: test.executionMoment,
          totalErrors: test.totalErrors,
          executable: test.executable,
          datafile: test.datafile,
          datafileTitle: test.datafileTitle,
          workspace: test.workspace

        };
      }),
    };
    }))
    .subscribe((transformedTestData) => {
      this.tests = transformedTestData.tests;
      this.testsUpdated.next({
        tests: [...this.tests],
      });
    });
  }

  getTest(testId: string) {
    return this.http.get<{message: string, test: any, esquema: any, configurationIDs: string[], reportContent: string}>(BACKEND_URL + testId);
  }
  
  addTest(title: string, delimiter:string, esquemaId: string, configurations: string[], datafileId: string){
    const test: Test = {
      'id': null,
      'title': title,
      'delimiter': delimiter,
      'reportPath': null,
      'status': null,
      'esquema': esquemaId,
      'configurations': configurations,
      'creationMoment': null,
      'updateMoment': null,
      'executionMoment': null,
      'totalErrors': null,
      'executable': null,
      'datafile': datafileId,
    };
    return this.http.post<{message: string, test: any}>(BACKEND_URL, test).toPromise();
  }
    
  updateTest(test:Test) {
    return this.http.put<{message: string, test: any, content}>(BACKEND_URL + test.id, test).toPromise();
  }
    
  deleteTest(testId: string){
    return this.http.delete(BACKEND_URL + testId).toPromise();
  }

}
