import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Esquema } from '../models/esquema';

const BACKEND_URL = environment.apiUrl + '/esquemas/';

@Injectable({providedIn: 'root'})
export class EsquemaService {
  private esquemas: Esquema[] = [];
  private esquemasUpdated = new Subject<{esquemas: Esquema[]}>();
  
  constructor(private http: HttpClient, private router: Router) {}
  
  getEsquemaUpdateListener() {
    return this.esquemasUpdated.asObservable();
  }
  
  getEsquema(esquemaId: string) {
    // tslint:disable-next-line: max-line-length
    console.log(esquemaId);
    return this.http.get<{esquema: any, content: any}>(BACKEND_URL + esquemaId);
  }

addEsquema(title: string, esquemaContent: string, fileName: string, datafileId: string, workspaceId:string){
  let res;
  let localPath: string = "";
  let esquemaData: any;
  const pathAux: string = fileName;
  
  if (fileName){
    const split = pathAux.split('.');
    const extension = '.' + split[1].toLowerCase();
    const fileName = split[0].toLowerCase().split(' ').join('_') + "-" + Date.now() + extension;
    localPath = "backend/uploads/esquemas/" + fileName;
    esquemaData = {'title': title, 'esquemaContent': esquemaContent, 'contentPath': fileName, 'datafile':datafileId};
  } else {
    esquemaData = {'title': title, 'esquemaContent': esquemaContent, 'contentPath': null, 'datafile':datafileId};
  }
  console.log(esquemaData)
  this.http.post<{message: string, esquema: Esquema}>(
      BACKEND_URL,
      esquemaData
    )
    .subscribe( responseData => {
        console.log(responseData);
        res = responseData;
        this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => {
          this.router.navigate([`/workspace/${workspaceId}/datafile/${datafileId}`]);
        }).catch( err => {});
      },
      error => {
        console.log(error);
      }
      );
    // return new Promise((resolve, reject) => {
    //       setTimeout(() => {
      //         if (res === undefined) {
    //           reject('Creating a esquema failed!');
    //         } else {
    //           resolve('Esquema added successfully!');
    //         }
    //       }, 2000);
    //     });
  }

  updateEsquema(esquemaId: string, title: string, contentPath: string, esquemaContent: string, datafileId: string) {
    let res;
    const esquemaData = {'title': title, 'contentPath': contentPath, 'esquemaContent': esquemaContent, 'datafile': datafileId};
    console.log(esquemaContent);
    this.http.put(BACKEND_URL + esquemaId, esquemaData).subscribe( response => {
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

  deleteEsquema(id: string){
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

}
