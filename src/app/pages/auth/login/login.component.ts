import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
export class User {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  private authStatusSub: Subscription;

  constructor( public authService: AuthService, private formBuilder: FormBuilder, private router: Router ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username       : ['', [Validators.required, Validators.minLength(5)]],
      // email          : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
      password       : ['', Validators.required],
      rememberme     : [false]
    });
  }

  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe( authStatus => {
      this.isLoading = false;
    });
    if  (localStorage.getItem('email')) {
      this.loginForm.reset({
        username: localStorage.getItem('username'),
        // email: localStorage.getItem('email'),
        rememberme: true,
      });

    }
  }

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

  get invalidUsername() {
    return this.loginForm.get('username').invalid && this.loginForm.get('username').touched;
  }

  get invalidEmail() {
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched;
  }

  get invalidPassword() {
    return this.loginForm.get('password').invalid;
  }

  onLogin() {
    if (this.loginForm.invalid){
      return Object.values(this.loginForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          // tslint:disable-next-line: no-shadowed-variable
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }

    this.isLoading = true;
    const values = this.loginForm.getRawValue();
    this.authService.login(values.username, values.password);

    if  (values.rememberme) {
      localStorage.setItem('username', values.username);
      // localStorage.setItem('email', values.email);
    } else {
      localStorage.removeItem('username');
      // localStorage.removeItem('email');
    }
    this.isLoading = false;

  }
}
