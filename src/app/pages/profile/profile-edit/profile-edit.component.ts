import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "src/app/services/auth.service";
import { WorkspacesService } from "src/app/services/workspaces.service";
import { mimeType } from "./mime-type.validator";
import { UploadsService } from "src/app/services/uploads.service";
import { HeaderComponent } from "src/app/components/header/header.component";
import { UsersService } from "src/app/services/users.service";
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit{
  userIsAuthenticated : boolean = false;
  user                : User;
  userId              : string;
  isLoading           : boolean = false;
  isSaving            : boolean = false;
  savedValues         : boolean = false;
  userForm            : FormGroup;
  photoPreview        : string;

  constructor(public authService: AuthService, public usersService: UsersService, public route: ActivatedRoute, 
              public workspacesService: WorkspacesService, private uploadsService: UploadsService) {
  }
  
  ngOnInit() {
    this.isLoading = true;
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        this.userId = paramMap.get('userId');
        // User
        this.usersService.getUser(this.userId);
        this.usersService.getUserUpdateListener().subscribe(userData => {
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
          
          this.userForm = new FormGroup({ 
            'username': new FormControl(null, {validators: [Validators.minLength(4), Validators.maxLength(32)]}), 
            'name': new FormControl(null, {validators: [Validators.minLength(4), Validators.maxLength(32)]}), 
            'photo': new FormControl(null, {asyncValidators: [mimeType]}) 
          });
          this.userForm.reset({
            name: this.user.name,
            username: this.user.username,
            photo: this.user.photo
          });
          this.isLoading = false;
        });
      });
    }
  }

  get pristineUser() {
    return this.userForm.get('username').pristine && this.userForm.get('name').pristine && this.userForm.get('photo').pristine;
  }

  get invalidUsername() {
    return this.userForm.get('username').invalid && this.userForm.get('username').touched;
  }

  get invalidName() {
    return this.userForm.get('name').invalid && this.userForm.get('name').touched;
  }
  
  onImagePicked(event: Event) { 
 
    const file = (event.target as HTMLInputElement).files[0]; 
    this.userForm.patchValue({photo: file});
    this.userForm.get('photo').markAsDirty(); 
    this.userForm.get('photo').updateValueAndValidity(); 
    const reader = new FileReader(); 
    reader.onload = () => { 
      this.photoPreview = reader.result as string; 
    }; 
    reader.readAsDataURL(file); 
  }

  onCancelUserForm() {
    this.userForm.reset({
      username: this.user.username,
      name: this.user.name,
      photo: this.user.photo
    });
    this.photoPreview = null;
    this.savedValues = false;
  }

  async onSaveUser() {
    this.isSaving = true;
    this.savedValues = false;
    if (this.userForm.invalid){
      this.isSaving = false;
      return Object.values(this.userForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    const values = this.userForm.getRawValue();
    if (values.photo) {
      await this.uploadsService.updatePhoto(this.userId,values.photo);
    }
    await this.usersService.updateUser(this.userId, values.name, values.username, null, this.user.role, null, null, null);
    // User
    this.usersService.getUser(this.userId);
    this.usersService.getUserUpdateListener().subscribe(userData => {
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
      this.userForm.reset({
        name: this.user.name,
        username: this.user.username,
        photo: this.user.photo
      });
      this.isSaving = false;
      this.savedValues = true;
    });
  }
}