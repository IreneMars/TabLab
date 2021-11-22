import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Esquema } from '../models/esquema.model';

const BACKEND_URL = environment.apiUrl + '/esquemas/';

@Injectable({providedIn: 'root'})
export class EsquemaService {
  private esquemas: any[] = [];
  private esquemasUpdated = new Subject<{esquemas: any[]}>();
  
  constructor(private http: HttpClient) {}
  
  getEsquemaUpdateListener() {
    return this.esquemasUpdated.asObservable();
  }
  
  getEsquemasByDatafile(datafileId: string) {
    return this.http.get<{message:string, esquemas: any}>(BACKEND_URL + "datafile/" + datafileId)
    .pipe(map( (esquemaData) => {
      return { 
        esquemas: esquemaData.esquemas
        .map(esquema => {
          return {
            id: esquema._id,
            title: esquema.title,
            contentPath: esquema.contentPath, 
            creationMoment: esquema.creationMoment,
            datafile: esquema.datafile
          };
        }),
      };
    }))
    .subscribe((transformedEsquemaData) => {
      this.esquemas = transformedEsquemaData.esquemas;
      this.esquemasUpdated.next({
        esquemas: [...this.esquemas]
      });
    });
  }

  getEsquema(esquemaId: string) {
    return this.http.get<{message:string, esquema: any, content: any}>(BACKEND_URL + esquemaId);
  }

  addEsquema(title: string, datafileId: string, contentPath:string, operation:string){
    let esquemaData: Esquema = {
      'id': null,
      'title': title, 
      'contentPath': contentPath, 
      'creationMoment':null,
      'datafile':datafileId,
    };
    if (operation === "infer"){
      esquemaData.title = "Inferred esquema - " + title;
    }
    return this.http.post<{message: string, esquema: any}>(BACKEND_URL, esquemaData).toPromise();
  }

  updateEsquema(esquemaId: string, title: string, contentPath: string, datafileId: string) {
    const esquemaData: Esquema = {
      'id': esquemaId,
      'title': title, 
      'contentPath': contentPath, 
      'creationMoment': null,
      'datafile': datafileId,
    };
    return this.http.put<{message: string, esquema: any}>(BACKEND_URL + esquemaId, esquemaData).toPromise();
  }

  deleteEsquema(id: string){
    return this.http.delete<{message: string}>(BACKEND_URL +  id).toPromise()
  }

}
