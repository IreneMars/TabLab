import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { Router } from '@angular/router';
import { GlobalConfigurationService } from 'src/app/services/globalConfig.service';
import { GlobalConfiguration } from 'src/app/models/globalConfiguration.model';

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
  globalConfig          : GlobalConfiguration;
  
  constructor( public workspacesService: WorkspacesService, private formBuilder: FormBuilder, private authService: AuthService,
               private router: Router, public globalConfigService: GlobalConfigurationService ) {
    this.createForm();
  }

  createForm() {
    this.workspaceForm = this.formBuilder.group({
      title       : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description : ['', [Validators.maxLength(200)]],
    });
  }

  get invalidTitle() {
    return this.workspaceForm.get('title').invalid && this.workspaceForm.get('title').touched;
  }

  get invalidDescription() {
    return this.workspaceForm.get('description').invalid && this.workspaceForm.get('description').touched;
  }

  get invalidInvitations() {
    return this.invitations.length>=this.globalConfig.limitUsers;
  }

  ngOnInit() {
    this.isLoading = true;
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });

    this.globalConfigService.getGlobalConfig().subscribe((configurationData)=>{
      this.globalConfig = {
        id: configurationData.globalConfiguration._id,
        limitUsers: configurationData.globalConfiguration.limitUsers,
        limitWorkspaces:configurationData.globalConfiguration.limitWorkspaces
      }
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.create = false;
  }

  onSave() {
    if(this.invitations.length>=this.globalConfig.limitUsers){
      return;
    }
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

