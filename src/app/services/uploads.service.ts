import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = environment.apiUrl + '/uploads/';

@Injectable({ providedIn: 'root' })
export class UploadsService {
  
  constructor(private http: HttpClient) {}

  updatePhoto(userId: string, photo: string | File){
    let userData: any | FormData;
    if (typeof(photo) === 'object') { 
        userData = new FormData();
        userData.append('userId',userId);
        userData.append('file', photo);
    } else { 
        userData = {'userId':userId,'filePath': photo}; 
    } 
    return this.http.put(BACKEND_URL + "users/" + userId, userData).toPromise()
  }

  updateFile(userId: string, datafileId: string, operation: string, file: string | File){
    let datafileData: any | FormData;
    if (typeof(file) === 'object') { 
      datafileData = new FormData();
      datafileData.append('userId',userId);
      datafileData.append('operation',operation);
      datafileData.append('file', file);
    } else { 
      datafileData = {'userId':userId, 'operation':operation,'filePath': file}; 
    } 
    return this.http.put(BACKEND_URL + "datafiles/" + datafileId, datafileData).toPromise();
  }

  addEsquemaContent(title:string, datafileId: string, fileName: string, esquemaContent: string){
    const esquemaData = {
      'title': title,
      'datafile':datafileId,
      'fileName':fileName,
      'esquemaContent': esquemaContent,
    };

    return this.http.post<{message: string, esquema: any, newContent:any}>(BACKEND_URL+'esquema/create', esquemaData).toPromise();
  }

  updateEsquemaContent(esquemaId: string, title:string, datafileId: string, esquemaContent: string){
    const esquemaData = {
      'title': title,
      'datafile':datafileId,
      'esquemaContent': esquemaContent,
    };

    return this.http.put<{message: string, esquema: any, newContent:any}>(BACKEND_URL+'esquema/'+esquemaId, esquemaData).toPromise();
  }

  inferEsquemaContent(datafileId: string){
    return this.http.get<{message: string, esquema:any}>(BACKEND_URL+'esquema/infer/'+datafileId).toPromise();
  }
}