import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy{
  isLoading = false;
  signupForm: FormGroup;
  private authStatusSub: Subscription;

  constructor( public authService: AuthService, private formBuilder: FormBuilder, private router: Router ) {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      username       : ['', [Validators.required, Validators.minLength(5)]],
      email          : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
      password       : ['', Validators.required],
      // rememberme     : [false]
    });
  }

  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe( authStatus => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

  get invalidUsername() {
    return this.signupForm.get('username').invalid && this.signupForm.get('username').touched;
  }

  get invalidEmail() {
    return this.signupForm.get('email').invalid && this.signupForm.get('email').touched;
  }

  get invalidPassword() {
    return this.signupForm.get('password').invalid;
  }

  onSignup() {
    if (this.signupForm.invalid){
      return Object.values(this.signupForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    this.isLoading = true;
    const values = this.signupForm.getRawValue();
    this.authService.createUser(values.username, values.email, values.password);
    }
  }

