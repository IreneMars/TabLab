import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Esquema } from '../models/esquema';

const BACKEND_URL = environment.apiUrl + '/configurations/';
export interface ConfigForm {
  title: string;
  errorCode: string;
  extraParams: object;
}
@Injectable({providedIn: 'root'})
export class ConfigurationService {
  
  constructor(private http: HttpClient, private router: Router) {}
  
  getConfiguration(configurationId: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<{configuration: any}>(BACKEND_URL + configurationId);
  }
  
  addConfiguration(values: any, datafileId: string){
    let res;
    const configuration = {...values};
    const {title, errorCode, ...extraParams} = configuration;
    const configurationData = {'title': title, 'errorCode': errorCode, 'extraParams': extraParams, 'datafile': datafileId};

    this.http.post<{message: string, configuration: any}>(
        BACKEND_URL,
        configurationData
      )
      .subscribe(
        responseData => {
          res = responseData;
        },
        error => {
          console.log(error);
        }
    );
    return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (res === undefined) {
              reject('Creating a configuration failed!');
            } else {
              resolve('Configuration added successfully!');
            }
          }, 1000);
        });
  }
 
  updateConfiguration(configurationId: string, values: any) {
    let res;
    const configuration = {...values};
    const {title, errorCode, ...extraParams} = configuration;
    const configurationData = {'title': title, 'errorCode': errorCode, 'extraParams': extraParams};
    
    this.http.put(BACKEND_URL + configurationId, configurationData).subscribe( response => {
      res = response;
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
  
  deleteConfiguration(id: string){
    let res;
    this.http.delete(BACKEND_URL +  id).subscribe( responseData => {
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
}
