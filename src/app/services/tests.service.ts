import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Test } from '../models/test.model';

const BACKEND_URL = environment.apiUrl + '/tests/';

@Injectable({providedIn: 'root'})
export class TestsService {
  private tests: Test[] = [];
  private testsUpdated = new Subject<{tests: Test[], workspaceCount: number}>();

  constructor(private http: HttpClient, private router: Router) {
  }

  addTest(title: string, esquema: string, configurations: string[], datafileId: string){
    let res;
    const testData = {'title': title, 'esquema': esquema, 'configurations': configurations, 'datafile':datafileId};
    this.http.post<{message: string, test: Test}>(
        BACKEND_URL,
        testData
      )
      .subscribe(
        responseData => {
          console.log(responseData);
          res = responseData;
        },
        error => {
          console.log(error);
        }
    );
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

  deleteTest(id: string){
    let res;
    this.http.delete(BACKEND_URL +  id).subscribe( responseData => {
      console.log(responseData);
      res = responseData;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject();
        } else {
          resolve(true);
        }
      }, 1000);
    });
  }

  getTest(testId: string) {
    return this.http.get<{test: any, esquema: any, configurations: string[]}>(BACKEND_URL + testId);
  }

  updateTest(testId: string, title: string, esquemaId: string, configurations: string[], action: string) {
    let res;
    const testData = {'title': title, 'esquema': esquemaId, 'configurations': configurations, 'action': action};
    this.http.put(BACKEND_URL + testId, testData).subscribe( response => {
      res = response;
      console.log(res);
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject();
        } else {

          resolve(true);
        }
      }, 1000);
    });
  }
}
