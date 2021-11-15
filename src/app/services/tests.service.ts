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
  
  getTests(workspaceId: string) {
    const queryParams = `?workspaceId=${workspaceId}`;
    this.http.get<{message: string, tests: any}>(BACKEND_URL + queryParams)
    .pipe(map( (testData) => {
      return { tests: testData.tests.map(test => {
        return {
          id: test._id,
          title: test.title,
          reportPath: test.reportPath,
          status: test.status,
          esquema: test.esquema,
          configurations: test.configurations,
          creationMoment: test.creationMoment,
          updateMoment: test.updateMoment,
          executionMoment: test.executionMoment,
          totalErrors: test.totalErrors,
          executable: test.executable,
          datafileId: test.datafile,
          datafileTitle: test.datafileTitle
        };
      }),
    };
    }))
    .subscribe((transformedTestData) => {
      this.tests = transformedTestData.tests;
      this.testsUpdated.next({
        tests: [...this.tests], // para hacer una verdadera copia y no afectar al original
      });
  });
  }

  getTest(testId: string) {
    return this.http.get<{message: string, test: any, esquema: any, configurationIDs: string[], reportContent: string}>(BACKEND_URL + testId);
  }
  
  addTest(title: string, esquemaId: string, configurations: string[], datafileId: string){
    let res;
    const test: Test = {
      'id': null,
      'title': title,
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
    
    this.http.post<{message: string, test: any}>(BACKEND_URL, test).subscribe( responseData => {
        res = responseData;
    });
      
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Creating a test failed!');
        } else {
          resolve('Test added successfully!');
        }
      }, 1000);
    });
  }
    
  updateTest(test:Test) {
    let res: any;
    this.http.put<{message: string, test: any, content}>(BACKEND_URL + test.id, test).subscribe( responseData => {
      res = responseData;
      console.log(responseData)
    });
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Updating a test failed!');
        } else {
          resolve('Test updated successfully!');
        }
      }, 4000);
    });
  }
    
  deleteTest(testId: string){
    let res: any;
    this.http.delete(BACKEND_URL + testId).subscribe( responseData => {
      res = responseData;
    });
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Deleting a test failed!');
        } else {
          resolve('Test deleted successfully!');
        }
      }, 1000);
    });
  }

}
