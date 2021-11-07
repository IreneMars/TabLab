import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

const BACKEND_URL = environment.apiUrl + '/users/';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [];
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private usersUpdated = new Subject<{users: User[]}>();
  private authStatusListener = new Subject<boolean>();
  private auth2: gapi.auth2.GoogleAuth;
  private username: string = "";
  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUserData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    if (!token || !expirationDate) {
      return;
    }
    return {userId, username};
  }

  login(username: string, password: string) {
    const authData = { username, password };
    console.log(authData)
    this.http
    .post<{ token: string; expiresIn: number, user: any}>(
      BACKEND_URL + '/login',
      authData
      )
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response.user._id;
          this.username = response.user.username;
          
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate, this.userId, this.username);
          this.router.navigate(['/']);
        }
      }, error => {
        this.authStatusListener.next(false);
      });
    }
    
  googleLogin(tokenId: string) {
    const authData = { tokenId };
    this.http
    .post<{ token: string; expiresIn: number, user: any }>(
      BACKEND_URL + 'google',
      authData
      )
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response.user._id;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate, this.userId, this.username);
          this.router.navigate(['/']);
      }
    }, error => {
      this.authStatusListener.next(false);
    });
  }
  
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }
  
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
    this.auth2 = gapi.auth2.getAuthInstance();
    this.auth2.signOut().then(() => {
      console.log('Signed out.');
    });
  }
    
  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }
    
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, username) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
      userId,
      username
    };
  }

  getUser(userId: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<{user: any}>(BACKEND_URL + userId);
  }

  createUser(username: string, email: string, password: string) {
    const authData: User = { username, email, password, photo: null };
    return this.http
      .post( BACKEND_URL + '/signup', authData)
      .subscribe(() => {
        // tslint:disable-next-line: no-unused-expression
        this.router.navigate(['/']);
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  getUsersByWorkspace(workspaceId: string) {
    return this.http.get<{message: string, users: any}>(BACKEND_URL + 'workspace/'+workspaceId)
    .pipe(map( (userData) => {
      return { users: userData.users.map(user => {
        return {
          username: user.username,
          photo: user.photo,
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

  updateUser(id: string, name: string, username: string, email: string, role: string, actualPass: string, newPass: string, repeatPass: string){
    let res;
    console.log("role");

    console.log(role);
    const userData = {'id': id, 'name': name, 'username': username, 'email': email, 'role': role, 'actualPass': actualPass, 
                  'newPass': newPass, 'repeatPass': repeatPass};
    this.http
      .put(BACKEND_URL + id, userData)
      .subscribe( response => {
        res = response;
    });
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject();
        } else {
          resolve(res);
        }
      }, 1000);
    });
  }

  deleteAccount(id: string) {
    let res;

    this.http
      .delete(BACKEND_URL + id)
      .subscribe( response => {
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
