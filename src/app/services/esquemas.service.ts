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

  deleteEsquema(id: string){
    return this.http.delete<{message: string}>(BACKEND_URL +  id).toPromise()
  }

}
