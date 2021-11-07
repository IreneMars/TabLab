import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ReplaySubject, Subscription, Observable } from 'rxjs';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
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
  url: RequestInfo;
  private authStatusSub: Subscription;
  user: SocialUser;
  loggedIn: boolean;

  private auth2: gapi.auth2.GoogleAuth;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);

  constructor( public authService: AuthService, private formBuilder: FormBuilder, private socialAuthService: SocialAuthService ) {
    this.createForm();
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '303403440470-rllj320ep4gefudqkscfovdm7qug9ebd.apps.googleusercontent.com'
      });
    });
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username       : ['', [Validators.required, Validators.minLength(4)]],
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
    this.url = (window.location.hostname.includes('localhost')) ?
                            'http://localhost:3000/api/users/google' :
                            'https://restserver-curso-fher.herokuapp.com/api/auth/google';
    console.log(this.url);
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
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
    console.log(values)
    this.authService.login(values.username, values.password);
    if  (values.rememberme) {
      localStorage.setItem('username', values.username);
    } else {
      localStorage.removeItem('username');
    }
    this.isLoading = false;
  }

  async onGoogleLogin(){
    this.auth2 = gapi.auth2.getAuthInstance();
    this.isLoading = true;

    if (!this.auth2.isSignedIn.get()){
      await this.auth2.signIn();
      const id_token = this.auth2.currentUser.get().getAuthResponse().id_token;
      const data1 = { id_token };
      this.authService.googleLogin(id_token);

      // const resp = await fetch( this.url, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify( data1 )
      // });
      // const data2 = await resp.json();
      // console.log( 'Nuestro server', data2 );
      this.isLoading = false;
  } else {
    console.log('Already signed in!');
  }
}

  observable(): Observable<gapi.auth2.GoogleUser>{
    return this.subject.asObservable();
  }

}
