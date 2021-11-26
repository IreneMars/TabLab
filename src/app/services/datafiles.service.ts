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
          delimiter: datafile.delimiter,
          description: datafile.description, 
          contentPath: datafile.contentPath, 
          errLimit: datafile.errLimit,
          coleccion: datafile.collection, 
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
    return this.http.get<{message: string, datafile: any, content: string}>(BACKEND_URL + datafileId)
    .pipe(map( (datafileData) => {
      return { 
        datafile: datafileData.datafile,         
        content: datafileData.content,
      };
    }));
  }

  addDatafile( title: string, delimiter: string, description: string, coleccionId: string, workspaceId: string) {
    const datafileData: Datafile = {
      'id': null,
      'title': title, 
      'delimiter':delimiter,
      'description': description, 
      'contentPath': null, 
      'errLimit': null,
      'coleccion': coleccionId, 
      'workspace': workspaceId
    };
    return this.http.post<{message: string, datafile: any}>(BACKEND_URL, datafileData).toPromise();
  }
      
  updateDatafile(datafileId: string,  title: string, delimiter: string, errLimit: number, description: string, coleccion:string) {
    const datafileData: Datafile = {
      'id':datafileId,
      'title': title, 
      'delimiter':delimiter,
      'description': description, 
      'contentPath': null, 
      'errLimit': errLimit,
      'coleccion': coleccion, 
      'workspace': null
    };
    return this.http.put<{message: string, datafile: any}>(BACKEND_URL + datafileId, datafileData).toPromise();
  }
  
  deleteDatafile(datafileId: string) {
    return this.http.delete<{message: string}>(BACKEND_URL +  datafileId).toPromise();
  }

}

