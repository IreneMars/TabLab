import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({providedIn: 'root'})
export class AuthStatusService {

  private authStatus = new BehaviorSubject({
    'isAuthenticated':false,
    'user':null
  });
  currentAuthStatus = this.authStatus.asObservable();

  constructor() { }

  sendAuthStatus(isAuthenticated: boolean, user:User) {
    const values = {
      'isAuthenticated':isAuthenticated,
      'user':user
    }
    this.authStatus.next(values)
  }

}