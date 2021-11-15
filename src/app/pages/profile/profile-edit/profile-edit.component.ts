import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "src/app/services/auth.service";
import { WorkspacesService } from "src/app/services/workspaces.service";
import { mimeType } from "./mime-type.validator";
import { UploadsService } from "src/app/services/uploads.service";
import { HeaderComponent } from "src/app/components/header/header.component";
import { UsersService } from "src/app/services/users.service";

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit{
  user: any;
  isLoading: boolean = false;
  userForm: FormGroup;
  photoPreview: string;
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;


  constructor(public authService: AuthService, public usersService: UsersService, public route: ActivatedRoute, 
              public workspacesService: WorkspacesService, private uploadsService: UploadsService) {
  }
    
  // createUserForm() {
  //   this.userForm = this.formBuilder.group({
  //     username : ['', [Validators.required, Validators.minLength(5)]],
  //     name     : ['', [Validators.required, Validators.minLength(5)]],
  //     photo    : [null, [Validators.required, mimeType]]
  //   })
  // }
  ngOnInit() {
    this.userForm = new FormGroup({ 
      'username': new FormControl(null, {validators: [Validators.minLength(4)]}), 
      'name': new FormControl(null, {validators: [Validators.minLength(4)]}), 
      'photo': new FormControl(null, {asyncValidators: [mimeType]}) 
    });
    
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const userId = paramMap.get('userId');
      this.isLoading = true;
      this.usersService.getUser(userId).subscribe(userData => {
      this.user = {
        id: userData.user.id,
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
      this.isLoading = false;
      });
    });
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
  }

  async onSaveUser() {
    if (this.userForm.invalid){
      return Object.values(this.userForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    this.isLoading = true;
    const values = this.userForm.getRawValue();
    if (values.photo) {
      await this.uploadsService.updatePhoto(this.user.userId,values.photo);
    }
    await this.usersService.updateUser(this.user.userId, values.name, values.username, null, this.user.role, null, null, null);
    //this.router.navigate([`/profile/${this.user.userId}/edit`]);
    window.location.reload();
    //this.isLoading = false;
  }
}