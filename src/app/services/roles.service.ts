import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role.model';

const BACKEND_URL = environment.apiUrl + '/roles/';

@Injectable({providedIn: 'root'})
export class RolesService {
  
  constructor(private http: HttpClient) {}

  addRole(workspaceId: string, userId: string){
    const role: Role = {
      'id': null,
      'role': null, 
      'workspace': workspaceId, 
      'user': userId
    };
    return this.http.post<{message: string, role: any}>(BACKEND_URL, role).toPromise();
  }
  
  updateRole(roleId: string, roleName: string, workspaceId: string){
    let res: any;
    const role: Role = {
      'id': roleId,
      'role': roleName, 
      'user': null,
      'workspace': workspaceId
    };
    return this.http.put<{message: string, role: any}>(BACKEND_URL + roleId, role).toPromise();
  }

  deleteRole(workspaceId: string){
    return this.http.delete<{message: string}>(BACKEND_URL + workspaceId).toPromise();
  }
  
}
