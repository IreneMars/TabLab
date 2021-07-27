import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Datafile } from '../models/datafile';

const BACKEND_URL = environment.apiUrl + '/datafiles/';

@Injectable({providedIn: 'root'})
export class DatafileService {

  private datafiles: Datafile[] = [];
  private datafilesUpdated = new Subject<{datafiles: Datafile[]}>();

  constructor(private http: HttpClient, private router: Router) {

  }

  getDatafileUpdateListener() {
    return this.datafilesUpdated.asObservable();
  }

  addDatafile( title: string, description: string, collectionId: string, workspaceId: string) {
    let res;
    let collectionIdUpdated = collectionId;
    if (collectionId === 'Ninguna') {
      collectionIdUpdated = null;
    }
    const datafileData = {'title': title, 'description': description, collection: collectionIdUpdated, workspace: workspaceId};
    console.log(datafileData);
    this.http.post<{message: string, datafile: Datafile}>(
        BACKEND_URL,
        datafileData
      )
      .subscribe( responseData => {
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

  getOrphanedDatafiles(workspaceId: string) {
    this.http.get<{message: string, datafiles: any}>(BACKEND_URL)
      .pipe(map( (datafileData) => {
        return { datafiles: datafileData.datafiles.map(datafile => {
          return {
            id: datafile._id,
            title: datafile.title,
            description: datafile.description,
            content: datafile.content,
            errorLimit: datafile.errorLimit,
            delimiter: datafile.delimiter,
            collection: datafile.collection,
            workspace: datafile.workspace,
          };
        }),
      };
      }))
      .subscribe((transformedDatafileData) => {
        this.datafiles = transformedDatafileData.datafiles;
        this.datafilesUpdated.next({
          datafiles: [...this.datafiles], // para hacer una verdadera copia y no afectar al original
    });
  });
}

  getDatafile(datafileId: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<{datafile: any, content: any, esquemas: any, configurations: any, tests: any}>(BACKEND_URL + datafileId);
  }


  deleteDatafile(datafileId: string) {
    let res;
    this.http.delete(BACKEND_URL +  datafileId).subscribe( responseData => {
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


  updateDatafile(datafileId: string, title: string, description: string, file: File | string, operation: string) {
    let res;
    console.log('File Raw');
    console.log(file);

    const datafileData = new FormData();
    datafileData.append('title', title);
    datafileData.append('description', description);
    datafileData.append('file', file);
    datafileData.append('operation', operation);

    console.log('Datafile Data');
    console.log(datafileData);
    this.http.put(BACKEND_URL + datafileId, datafileData).subscribe( response => {
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

