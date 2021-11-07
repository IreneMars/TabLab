import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

const BACKEND_URL = environment.apiUrl + '/uploads/';

@Injectable({ providedIn: 'root' })
export class UploadsService {
  constructor(private http: HttpClient, private router: Router) {}

  updatePhoto(userId: string, photo: string | File){
    let res;
    let userData: any | FormData;
    if (typeof(photo) === 'object') { 
        userData = new FormData();
        userData.append('userId',userId);
        userData.append('entity','users');
        userData.append('file', photo);
    } else { 
        userData = {'userId':userId,'entity':'users','filePath': photo}; 
    } 
    console.log(userData)
    this.http
      .put(BACKEND_URL + userId, userData)
      .subscribe( response => {
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

  updateFile(userId: string, datafileId: string, operation: string, file: string | File){
    let res: any;
    let datafileData: any | FormData;
    if (typeof(file) === 'object') { 
      datafileData = new FormData();
      datafileData.append('userId',userId);
      datafileData.append('datafileId',datafileId);
      datafileData.append('entity','datafiles');
      datafileData.append('operation',operation);
      datafileData.append('file', file);
    } else { 
      datafileData = {'userId':userId, 'datafileId':datafileId,'entity':'datafiles','operation':operation,'filePath': file}; 
    } 
    this.http
      .put(BACKEND_URL + datafileId, datafileData)
      .subscribe( response => {
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
}