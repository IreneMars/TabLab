import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WorkspacesService } from '../../../services/workspaces.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  isLoading = false;
  signupForm: FormGroup;

  constructor( public authService: AuthService, public usersService: UsersService, private formBuilder: FormBuilder, 
               private router: Router, public workspacesService: WorkspacesService ) {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      username       : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      email          : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
      password       : ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.authService.getAuthStatusListener().subscribe( authStatus => {
      this.isLoading = false;
    });
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

  async onSignup() {
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
    this.usersService.addUser(values.username, values.email, values.password)
    .then(response =>{
      this.router.navigate(['/']);
    })
    .catch(err=>{
      console.log("Error creating an user: "+err.message)
    });
    

    
  }
}

