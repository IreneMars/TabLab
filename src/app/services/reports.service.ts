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
    return this.http.put<{message: any, testUpdates: any, execBuffer: any}>(BACKEND_URL, executionData);
  }


}
