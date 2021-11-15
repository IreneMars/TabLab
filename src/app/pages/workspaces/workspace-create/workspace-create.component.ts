import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspace-create',
  templateUrl: './workspace-create.component.html',
  styleUrls: ['./workspace-create.component.css']
})
export class WorkspaceCreateComponent implements OnInit, OnDestroy{
  isLoading             : boolean = false;
  userId                : string;
  userIsAuthenticated   : boolean = false;
  create                : boolean = true;
  invitations           : string[] = [];
  workspaceForm         : FormGroup;
  private authStatusSub : Subscription;

  constructor( public workspacesService: WorkspacesService, private formBuilder: FormBuilder, private authService: AuthService,
               private router: Router ) {
    this.createForm();
  }

  createForm() {
    this.workspaceForm = this.formBuilder.group({
      title       : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description : ['', [Validators.maxLength(200)]],
      invitations : ['', ],
    });
  }

  get invalidTitle() {
    return this.workspaceForm.get('title').invalid && this.workspaceForm.get('title').touched;
  }

  get invalidDescription() {
    return this.workspaceForm.get('description').invalid && this.workspaceForm.get('description').touched;
  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
  }

  ngOnDestroy() {
    this.create = false;
    this.authStatusSub.unsubscribe();
  }

  onSave() {
    if (this.workspaceForm.invalid){
      return Object.values(this.workspaceForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    this.isLoading = true;
    const values = this.workspaceForm.getRawValue();
    this.workspacesService.addWorkspace(values.title, values.description, false, this.invitations)
    .then(()=>{
      this.router.navigate(['/workspaces']);
    })
    .catch(err=>{
      console.log("Error on onSave() method: "+err)
    });
    this.isLoading = false;
  }

  onCancel() {
    this.workspaceForm.reset();
    this.router.navigate(['/workspaces']);
  }
}

