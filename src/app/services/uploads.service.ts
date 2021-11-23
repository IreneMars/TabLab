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

  updateEsquemaContent(esquemaId: string, fileName: string, contentPath: string, datafileId: string, esquemaContent: string, operation: string){
    const esquemaData = {
      'fileName':fileName,
      'contentPath': contentPath, 
      'esquemaContent': esquemaContent,
      'datafile':datafileId,
      'operation': operation,
      'entity':'esquemas'
    };

    if (fileName){//Manual creation
      const split = fileName.split('.');
      const extension = '.' + split[1].toLowerCase();
      const newFileName = split[0].toLowerCase().split(' ').join('_') + "-" + Date.now() + extension;
      esquemaData.fileName = newFileName;
    }
    return this.http.put<{message: string, fileName: any, filePath:any}>(BACKEND_URL+'esquema', esquemaData).toPromise();
  }
}