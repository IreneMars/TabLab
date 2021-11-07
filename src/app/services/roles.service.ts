import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl + '/roles/';

@Injectable({providedIn: 'root'})
export class RolesService {
  
  constructor(private http: HttpClient) {}

  deleteRole(workspaceId: string){
    return this.http.delete(BACKEND_URL +  workspaceId);
  }
}
