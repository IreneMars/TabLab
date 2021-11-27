import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { AuthService } from "src/app/services/auth.service";
import { WorkspacesService } from "src/app/services/workspaces.service";
import { UsersService } from '../../../services/users.service';

@Component({
    selector: 'app-profile-account--edit',
    templateUrl: './profile-account-edit.component.html',
    styleUrls: ['./profile-account-edit.component.css']
  })
  export class ProfileAccountEditComponent implements OnInit{
    userIsAuthenticated : boolean = false;
    userId              : string;
    isSavingEmail       : boolean = false;
    isSavingPassword    : boolean = false;

    savedEmail          : boolean = false;
    savedPassword       : boolean = false;

    isLoading           : boolean = false;
    user                : User;
    emailForm           : FormGroup;
    passForm            : FormGroup;



    constructor(public authService: AuthService, public usersService: UsersService, public route: ActivatedRoute, 
                public workspacesService: WorkspacesService, private router: Router, private formBuilder: FormBuilder) {
                  this.createEmailForm();
                  this.createPassForm();
    }

    ngOnInit() {
      this.isLoading = true;
      this.userIsAuthenticated = this.authService.getIsAuth();
      if (this.userIsAuthenticated){
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          this.userId = paramMap.get('userId');
          // Current User
          this.usersService.getUser(this.userId).subscribe(userData => {
            this.user = {
              id: userData.user._id,
              username: userData.user.username,
              email: userData.user.email,
              password: userData.user.password,
              photo: userData.user.photo,
              name: userData.user.name,
              role: userData.user.role,
              status: userData.user.status,
              google: userData.user.google
            };
            this.emailForm.reset({
              email: this.user.email
            });
            this.isLoading = false;
          });
      }); 
    }  
  }

  createEmailForm() {
    this.emailForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
    });
  }

  createPassForm() {
    this.passForm = this.formBuilder.group({
    actualPass : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
    newPass : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
    repeatPass : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]]
    });
  }

  get pristineEmail() {
    return this.emailForm.get('email').pristine;
  }

  get invalidEmail() {
    return this.emailForm.get('email').invalid && this.emailForm.get('email').touched;
  }

  get pristinePass() {
    return this.passForm.get('actualPass').pristine && this.passForm.get('newPass').pristine && this.passForm.get('repeatPass').pristine;
  }

  get invalidActualPass() {
    return this.passForm.get('actualPass').invalid && this.passForm.get('actualPass').touched;
  }

  get invalidNewPass() {
    return this.passForm.get('newPass').invalid && this.passForm.get('newPass').touched;
  }

  get invalidRepeatPass() {
    return this.passForm.get('repeatPass').invalid && this.passForm.get('repeatPass').touched;
  }

  onCancelEmailForm() {
    this.emailForm.reset({
      email: this.user.email
    });
    this.savedEmail = false;
  }

  onCancelPassForm() {
    this.passForm.reset();
    this.savedPassword= false;
  }

  onSaveEmail() {
    this.isSavingEmail = true;
    this.savedEmail = false;

    if (this.emailForm.invalid){
      this.isSavingEmail = false;
      return Object.values(this.emailForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    const values = this.emailForm.getRawValue();
    this.usersService.updateUser(this.userId, null, null,  values.email, this.user.role, null, null, null)
    .then(userData=>{
      this.user = userData.user;
      this.emailForm.reset({
        email: this.user.email
      });
      this.isSavingEmail = false;
      this.savedEmail = true;
    })
    .catch(err=>{
      console.log("Error on onSaveEmail() method: "+err.message);
      this.emailForm.reset({
        email: this.user.email
      });
      this.isSavingEmail = false;
    });
  }

  async onSavePass() {
    this.isSavingPassword = true;
    this.savedPassword = false;

    if (this.passForm.invalid){
      this.isSavingPassword = false;
      return Object.values(this.passForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    const values = this.passForm.getRawValue();

    this.usersService.updateUser(this.userId, null, null, null, this.user.role, values.actualPass, values.newPass, values.repeatPass)
    .then(userData=>{
      this.user = userData.user;
      this.passForm.reset();
      this.isSavingPassword = false;
      this.savedPassword = true;
    })
    .catch(err=>{
      console.log("Error on onSavePass() method: "+err.message);
      this.isSavingPassword = false;
      this.passForm.reset();
      this.isSavingPassword = false;
    });
  }

  onDeleteAccount(userId: string) {
    this.usersService.deleteAccount(userId)
    .then(res => {
      this.authService.logout();
      window.location.reload();

    }).catch(err=>{
      console.log("Error on onDeleteAccount method: "+err.message);
    });
    
  }

}