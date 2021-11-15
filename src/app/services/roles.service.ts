import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role.model';

const BACKEND_URL = environment.apiUrl + '/roles/';

@Injectable({providedIn: 'root'})
export class RolesService {
  
  constructor(private http: HttpClient) {}

  addRole(workspaceId: string, userId: string){
    let res: any;
    const role: Role = {
      'id': null,
      'role': null, 
      'workspace': workspaceId, 
      'user': userId
    };
    this.http.post<{message: string, role: any}>(BACKEND_URL, role).subscribe( responseData => {
      res = responseData;  
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Creating a role failed!');
        } else {
          resolve('Role added successfully!');
        }
      }, 1000);
    });
  }
  
  updateRole(roleId: string, roleName: string){
    let res: any;
    const role: Role = {
      'id': roleId,
      'role': roleName, 
      'workspace': null, 
      'user': null
    };
    this.http.put<{message: string, role: any}>(BACKEND_URL + roleId, role).subscribe( response => {
      res = response;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Updating a role failed!');
        } else {
          resolve('Role updated successfully!');
        }
      }, 1000);
    });
  }

  deleteRole(workspaceId: string){
    let res: any;
    this.http.delete<{message: string}>(BACKEND_URL + workspaceId).subscribe( responseData => {
      res = responseData;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Deleting a role failed!');
        } else {
          resolve('Role deleted successfully!');
        }
      }, 1000);
    });
  }
  
}
