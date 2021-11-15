import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EsquemaForm } from '../models/esquemaForm.model';

const BACKEND_URL = environment.apiUrl + '/esquemas/';

@Injectable({providedIn: 'root'})
export class EsquemaService {

  constructor(private http: HttpClient) {}
  
  getEsquema(esquemaId: string) {
    // 
    return this.http.get<{message:string, esquema: any, content: any}>(BACKEND_URL + esquemaId);
  }

  addEsquema(title: string, esquemaContent: string, fileName: string, datafileId: string, workspaceId:string){
    let res: any;
    let newFileName: string;
    let esquemaData: EsquemaForm = {
      'id': null,
      'title': title, 
      'contentPath': null, 
      'creationMoment':null,
      'datafile':datafileId,
      'esquemaContent': esquemaContent
    };
    
    if (fileName){//Manual creation
      const split = fileName.split('.');
      const extension = '.' + split[1].toLowerCase();
      newFileName = split[0].toLowerCase().split(' ').join('_') + "-" + Date.now() + extension;
      const localPath = 'backend/uploads/esquemas/' + newFileName;            
      esquemaData.contentPath = localPath;
    } else {//Inferring
      esquemaData.title = "Inferred esquema - " + title;
    }

    this.http.post<{message: string, esquema: any}>(
        BACKEND_URL,
        esquemaData
      )
      .subscribe( responseData => {
          res = responseData;
      });

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (res === undefined) {
            reject('Creating an esquema failed!');
          } else {
            resolve('Esquema added successfully!');
          }
        }, 2000);
      });
    }

  updateEsquema(esquemaId: string, title: string, contentPath: string, esquemaContent: string, datafileId: string) {
    let res;
    const esquemaData: EsquemaForm = {
      'id': esquemaId,
      'title': title, 
      'contentPath': contentPath, 
      'creationMoment': null,
      'datafile': datafileId,
      'esquemaContent': esquemaContent
    };
    
    this.http.put<{message: string, esquema: any}>(BACKEND_URL + esquemaId, esquemaData).subscribe( response => {
      res = response;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Updating an esquema failed!');
        } else {
          resolve('Esquema updated successfully!');
        }
      }, 1000);
    });
  }

  deleteEsquema(id: string){
    let res;
    this.http.delete<{message: string}>(BACKEND_URL +  id).subscribe( responseData => {
      res = responseData;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Deleting an esquema failed!');
        } else {
          resolve('Esquema deleted successfully!');
        }
      }, 1000);
    });
  }

}
