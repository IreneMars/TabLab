import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = environment.apiUrl + '/uploads/';

@Injectable({ providedIn: 'root' })
export class UploadsService {
  
  constructor(private http: HttpClient) {}

  updatePhoto(userId: string, photo: File){
    let userData = new FormData();
    userData.append('userId',userId);
    userData.append('file', photo);
    return this.http.put(BACKEND_URL + "users/" + userId, userData).toPromise()
  }

  updateFile(datafileId: string, file: File){
    let datafileData = new FormData();
    datafileData.append('file', file);
    
    return this.http.put(BACKEND_URL + "datafiles/" + datafileId, datafileData).toPromise();
  }

  deleteFile(datafileId: string){
    return this.http.delete(BACKEND_URL + "datafiles/" + datafileId).toPromise();
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