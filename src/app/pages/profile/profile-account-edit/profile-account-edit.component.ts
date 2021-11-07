import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { AuthService } from "src/app/services/auth.service";
import { WorkspaceService } from "src/app/services/workspaces.service";

@Component({
    selector: 'app-profile-account--edit',
    templateUrl: './profile-account-edit.component.html',
    styleUrls: ['./profile-account-edit.component.css']
  })
  export class ProfileAccountEditComponent implements OnInit{
    user: any;
    isLoading: boolean = false;
    emailForm: FormGroup;
    passForm: FormGroup;

    constructor(public usersService: AuthService, public route: ActivatedRoute, public workspacesService: WorkspaceService, 
                private router: Router, private formBuilder: FormBuilder) {
                  this.createEmailForm();
                  this.createPassForm();
    }

    ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        const userId = paramMap.get('userId');
        this.usersService.getUser(userId).subscribe(userData => {
        this.user = {
            userId: userData.user._id,
            username: userData.user.username,
            name: userData.user.name,
            email: userData.user.email,
            photo: userData.user.photo,
            password: userData.user.password
        };
        this.emailForm.reset({
          email: this.user.email
        });
        });
    });    
  }

  createEmailForm() {
    this.emailForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
    });
  }

  createPassForm() {
    this.passForm = this.formBuilder.group({
    actualPass : ['', [Validators.required, Validators.minLength(4)]],
    newPass : ['', [Validators.required, Validators.minLength(4)]],
    repeatPass : ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get pristineEmail() {
    return this.emailForm.get('email').pristine;
  }

  get invalidEmail() {
    return this.emailForm.get('email').invalid && this.emailForm.get('email').touched;
  }

  get pristinePass() {
    return this.passForm.get('actualPass').pristine && this.passForm.get('actualPass').pristine && this.passForm.get('actualPass').pristine;
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
  }

  onCancelPassForm() {
    this.passForm.reset();
  }

  onSaveEmail() {
    if (this.emailForm.invalid){
      return Object.values(this.emailForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    this.isLoading = true;
    const values = this.emailForm.getRawValue();
    this.usersService.updateUser(this.user.userId, null, null,  values.email, this.user.role, null, null, null);
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => {
      this.router.navigate([`/account/${this.user.userId}/edit`]);
    }).catch( err => {
      console.log(err);
    });
    this.isLoading = false;
  }

  onSavePass() {
    if (this.passForm.invalid){
      return Object.values(this.passForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    this.isLoading = true;
    const values = this.passForm.getRawValue();
    this.usersService.updateUser(this.user.userId, null, null, null, this.user.role, values.actualPass, values.newPass, values.repeatPass);
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => {
      this.router.navigate([`/account/${this.user.userId}/edit`]);
    }).catch( err => {
      console.log(err);
    });
    this.isLoading = false;
  }

  onDeleteAccount() {
    this.usersService.deleteAccount(this.user.userId)
    .then(() => {
      this.usersService.logout();
    }).catch( err => {
      console.log(err);
    });
    
  }

}