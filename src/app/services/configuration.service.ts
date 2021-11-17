import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Configuration } from '../models/configuration.model';

const BACKEND_URL = environment.apiUrl + '/configurations/';

@Injectable({providedIn: 'root'})
export class ConfigurationService {
  
  constructor(private http: HttpClient) {}
  
  getConfiguration(configurationId: string) {
    // 
    return this.http.get<{message:string, configuration: any}>(BACKEND_URL + configurationId);
  }
  
  addConfiguration(values: any, datafileId: string){
    let res: any;
    //const configuration = {...values};
    const {title, errorCode, delimiter, ...extraParams} = values;
    const configuration: Configuration = {
      'id':null,
      'title': title, 
      'creationMoment': null, 
      'errorCode': errorCode, 
      'extraParams': extraParams, 
      'datafile': datafileId
    };

    this.http.post<{message: string, configuration: any}>(BACKEND_URL, configuration).subscribe( responseData => {
      res = responseData;
    });
    
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
 
  updateConfiguration(configurationId: string, values: any, datafileId: string) {
    let res: any;
    //const configuration = {...values};
    const {title, errorCode, delimiter, ...extraParams} = values;
    const configuration: Configuration = {
      'id': configurationId,
      'title': title, 
      'creationMoment': null, 
      'errorCode': errorCode, 
      'extraParams': extraParams, 
      'datafile': datafileId
    };
    
    this.http.put<{message: string, configuration: any}>(
      BACKEND_URL + configurationId,
      configuration
    ).subscribe( response => {
      res = response;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Updating a configuration failed!');
        } else {
          resolve('Configuration updated successfully!');
        }
      }, 1000);
    });
  }
  
  deleteConfiguration(configurationId: string){
    let res: any;
    this.http.delete<{message: string}>(BACKEND_URL + configurationId).subscribe( responseData => {
      res = responseData;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Deleting a configuration failed!');
        } else {
          resolve('Configuration deleted successfully!');
        }
      }, 1000);
    });
  }
}
