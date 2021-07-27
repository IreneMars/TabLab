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

  getEsquemas(datafileId: string) {
    console.log(datafileId);
    const datafileParams = new HttpParams().set('datafileId', datafileId);

    this.http.get<{message: string, esquemas: any}>(BACKEND_URL, { params: datafileParams })
      .pipe(map( (esquemaData) => {
        return { esquemas: esquemaData.esquemas.map(esquema => {
          return {
            id: esquema._id,
            title: esquema.title,
            contentPath: esquema.contentPath,
            creationMoment: esquema.creationMoment,
            datafile: esquema.datafile,
          };
        }),
      };
      }))
      .subscribe((transformedEsquemaData) => {
        this.esquemas = transformedEsquemaData.esquemas;
        this.esquemasUpdated.next({
          esquemas: [...this.esquemas], // para hacer una verdadera copia y no afectar al original
      });
    });
  }

  addEsquema(title: string, esquemaContent: string, fileName: string, datafileId: string, workspaceId:string){
    let res;
    const esquemaData = {'title': title, 'esquemaContent': esquemaContent, 'fileName': fileName};
    this.http.post<{message: string, esquema: Esquema}>(
        BACKEND_URL + datafileId,
        esquemaData
      )
      .subscribe(
        responseData => {
          // Handle result
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

  getEsquema(esquemaId: string) {
    // tslint:disable-next-line: max-line-length
    console.log(esquemaId);
    return this.http.get<{esquema: any, content: any}>(BACKEND_URL + esquemaId);
  }

  updateEsquema(esquemaId: string, title: string, contentPath: string, esquemaContent: string) {
    let res;
    const esquemaData = {'title': title, 'contentPath': contentPath, 'esquemaContent': esquemaContent};
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

}
