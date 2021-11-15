import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const BACKEND_URL = environment.apiUrl + '/reports/';

@Injectable({providedIn: 'root'})
export class ReportsService {

  constructor(private http: HttpClient) {}

  addReport(testId: string){
    let res: any;
    const executionData: any = { 
      'testId':testId
    };
    return this.http.put<{message: any, testUpdates: any}>(BACKEND_URL, executionData);
    // .pipe(map( (testData) => {
    //   return { 
    //     testsUpdates: testData.testsUpdates.map(test => {
    //         return {
    //           id: test._id,
    //           title: test.title,
    //           reportPath: test.reportPath,
    //           status: test.status,
    //           esquema: test.esquema,
    //           configurations: test.configurations,
    //           creationMoment: test.creationMoment,
    //           updateMoment:test .updateMoment,
    //           executionMoment: test.executionMoment,
    //           totalErrors: test.totalErrors,
    //           executable: test.executable,
    //           datafile: test.datafile,
    //         };
    //       })  
    //   };
    // }));

  }


}
