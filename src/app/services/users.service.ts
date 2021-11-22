import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

const BACKEND_URL = environment.apiUrl + '/users/';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<{users: User[]}>();
  
  constructor(private http: HttpClient) {}
  
  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }
  
  getUsers() {
    return this.http.get<{message: string, users: any[]}>(BACKEND_URL)
    .pipe(map( (userData) => {
      return { 
        users: userData.users.map(user => {
        return {
          id:user._id,
          username: user.username,
          email:user.email,
          password:user.password,
          photo: user.photo,
          name:user.name,
          role:user.role,
          status:user.status,
          google:user.google,
          roleId: user.roleId,
          roleName: user.roleName
        };
      }),
    };
    }))
    .subscribe((transformedUserData) => {
      this.users = transformedUserData.users;
      this.usersUpdated.next({
        users: [...this.users]
      });
    });
  }
  
  getUsersByWorkspace(workspaceId: string) {
    return this.http.get<{message: string, users: any}>(BACKEND_URL + 'workspace/'+workspaceId)
    .pipe(map( (userData) => {
      return { 
        users: userData.users.map(user => {
        return {
          id:user._id,
          username: user.username,
          email:user.email,
          password:user.password,
          photo: user.photo,
          name:user.name,
          role:user.role,
          status:user.status,
          google:user.google,
          roleId: user.roleId,
          roleName: user.roleName
        };
      }),
    };
    }))
    .subscribe((transformedUserData) => {
      this.users = transformedUserData.users;
      this.usersUpdated.next({
        users: [...this.users]
      });
    });
  }
  
  getUser(userId: string) {
    return this.http.get<{message:string, user: any}>(BACKEND_URL + userId);
  }

  addUser(username: string, email: string, password: string) {
    const authData: User = { 
      'id':null, 
      'username':username, 
      'name':null, 
      'email':email, 
      'password':password, 
      'photo': null, 
      'role':'USER', 
      'status':null, 
      'google':null 
    };
    return this.http.post<{message: string, user: any}>(BACKEND_URL, authData).toPromise();
  }

  updateUser(userId: string, name: string, username: string, email: string, role: string, actualPass: string, newPass: string, repeatPass: string){
    const userData = {
      'id': userId, 
      'name': name, 
      'username': username, 
      'email': email, 
      'role': role, 
      'actualPass': actualPass,      
      'newPass': newPass, 
      'repeatPass': repeatPass
    };
    return this.http.put<{message: string, user: any}>(BACKEND_URL + userId, userData).toPromise();
  }

  deleteAccount(userId: string) {
    return this.http.delete<{message: string}>(BACKEND_URL + userId).toPromise();
  }



}
