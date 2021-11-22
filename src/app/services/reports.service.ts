import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const BACKEND_URL = environment.apiUrl + '/reports/';

@Injectable({providedIn: 'root'})
export class ReportsService {

  constructor(private http: HttpClient) {}

  addReport(testId: string){
    const executionData: any = { 
      'testId':testId
    };
    return this.http.put<{message: any, testUpdates: any, execBuffer: any, rawData:any}>(BACKEND_URL, executionData);
  }


}
