import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Esquema } from '../models/esquema';
const BACKEND_URL = environment.apiUrl + '/reports/';

@Injectable({providedIn: 'root'})
export class ReportsService {

  constructor(private http: HttpClient, private router: Router) {}

  runTest(workspaceId: string, testId: string){
    const testParams = new HttpParams().set('testId', testId);
    // return this.http.get<{_id: string, title: string, content: string, imagePath: string, creator: string}>
    // let res;
    return this.http.get<{message: any, buffer: any}>(BACKEND_URL + workspaceId, { params: testParams });
    // .subscribe( responseData => {
    //   console.log(responseData);
    //   res = responseData;
    // });
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (res === undefined) {
    //       reject();
    //     } else {
    //       resolve(res);
    //     }
    //   }, 10000);
    // });
  }


}
