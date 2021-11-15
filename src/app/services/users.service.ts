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
    let res: any;
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
    this.http.post<{message: string, user: any}>(BACKEND_URL, authData).subscribe( response => {
      res = response;
    });
   
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Creating an user failed!');
        } else {
          resolve('User created successfully!');
        }
      }, 1000);
    });
  }

  updateUser(userId: string, name: string, username: string, email: string, role: string, actualPass: string, newPass: string, repeatPass: string){
    let res;
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
    this.http.put<{message: string, user: any}>(BACKEND_URL + userId, userData).subscribe( responseData => {
        res = responseData;
    });
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Updating an user failed!');
        } else {
          resolve('User updated successfully!');
        }
      }, 1000);
    });
  }

  deleteAccount(userId: string) {
    let res: any;
    this.http.delete<{message: string}>(BACKEND_URL + userId).subscribe( responseData => {
        res = responseData;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Deleting an user failed!');
        } else {
          resolve('User deleted successfully!');
        }
      }, 1000);
    });
  }



}
