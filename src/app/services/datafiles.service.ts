import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Datafile } from '../models/datafile.model';

const BACKEND_URL = environment.apiUrl + '/datafiles/';

@Injectable({providedIn: 'root'})
export class DatafileService {
  private datafiles: Datafile[] = [];
  private datafilesUpdated = new Subject<{datafiles: Datafile[]}>();

  constructor(private http: HttpClient) {}
  
  getDatafileUpdateListener() {
    return this.datafilesUpdated.asObservable();
  }
  
  getDatafiles() {
    return this.http.get<{message: string, datafiles: any[]}>(BACKEND_URL)
    .pipe(map( (datafileData) => {
      return { 
        datafiles: datafileData.datafiles.map(datafile => {
        return {
          id: datafile._id,
          title: datafile.title, 
          description: datafile.description, 
          contentPath: datafile.contentPath, 
          errLimit: datafile.errLimit,
          collection: datafile.collection, 
          workspace: datafile.workspace
        };
      }),
    };
    }))
    .subscribe((transformedDatafileData) => {
      this.datafiles = transformedDatafileData.datafiles;
      this.datafilesUpdated.next({
        datafiles: [...this.datafiles]
      });
    });
  }
  
  getDatafile(datafileId: string) {
    return this.http.get<{message: string, datafile: any, content: string, esquemas: any[], configurations: any[], tests: any[]}>(BACKEND_URL + datafileId)
    .pipe(map( (datafileData) => {
      return { 
        datafile: datafileData.datafile,         
        content: datafileData.content,
        esquemas: datafileData.esquemas.map( esquema => {
          return {
            id: esquema._id,
            title: esquema.title,
            contentPath: esquema.contentPath,
            creationMoment: esquema.creationMoment,
            datafile: esquema.datafile,
          };
        }),
        configurations: datafileData.configurations.map( configuration => {
          return {
            id: configuration._id,
            title: configuration.title,
            creationMoment: configuration.creationMoment,
            errorCode: configuration.errorCode,
            extraParams: configuration.extraParams,
            datafile: configuration.datafile,
          };
        }),
        tests: datafileData.tests.map( test => {
          return {
            id: test._id,
            title: test.title,
            delimiter: test.delimiter,
            reportPath: test.reportPath,
            status: test.status,
            esquema: test.esquema,
            configurations: test.configurations,
            creationMoment: test.creationMoment,
            updateMoment: test.updateMoment,
            executionMoment: test.executionMoment,
            totalErrors: test.totalErrors,
            executable: test.executable,
            datafile: test.datafile
          };
        })
      };
    }));
  }

  addDatafile( title: string, description: string, collectionId: string, workspaceId: string) {
    let res;
    const datafileData: Datafile = {
      'id': null,
      'title': title, 
      'description': description, 
      'contentPath': null, 
      'errLimit': null,
      'collection': collectionId, 
      'workspace': workspaceId
    };
    this.http.post<{message: string, datafile: any}>(
        BACKEND_URL,
        datafileData
      )
      .subscribe( responseData => {
        res = responseData;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Creating a datafile failed!');
        } else {
          resolve('Datafile added successfully!');
        }
      }, 1000);
    });
  }
      
  updateDatafile(datafileId: string, title: string, description: string, collection:string) {
    let res;
    const datafileData: Datafile = {
      'id':datafileId,
      'title': title, 
      'description': description, 
      'contentPath': null, 
      'errLimit': null,
      'collection': collection, 
      'workspace': null
    };
    console.log(datafileData)
    this.http.put<{message: string, datafile: any}>(BACKEND_URL + datafileId, datafileData).subscribe( response => {
      res = response;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          resolve('Updating a datafile failed!');
        } else {
          resolve('Datafile updated successfully!');
        }
      }, 3000);
    });
  }
  
  deleteDatafile(datafileId: string) {
    let res;
    this.http.delete<{message: string}>(BACKEND_URL +  datafileId).subscribe( responseData => {
        res = responseData;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Deleting a datafile failed!');
        } else {
          resolve('Datafile deleted successfully!');
        }
      }, 1000);
    });
  }

}

