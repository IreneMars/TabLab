import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CollectionsService } from '../../../services/collections.service';
import { GlobalConfiguration } from '../../../models/globalConfiguration.model';
import { GlobalConfigurationService } from '../../../services/globalConfig.service';

@Component({
  selector: 'app-globalconfiguration-edit',
  templateUrl: './globalConfiguration-edit.component.html',
})
export class GlobalConfigurationEditComponent implements OnInit{
  userIsAuthenticated          : boolean = false;
  userId                       : string;
  @Input() globalConfig        : GlobalConfiguration;
  @Input() edit                : boolean;
  @Output() editChange         : EventEmitter<boolean> = new EventEmitter<boolean>();
  globalConfigurationEditForm  : FormGroup;
  isSaving                     : boolean = false;

  constructor(public globalConfigurationService: GlobalConfigurationService, public authService: AuthService,  private router: Router,
              private formBuilder: FormBuilder, public collectionsService: CollectionsService) {
    this.createForm();
  }

  createForm() {
    this.globalConfigurationEditForm = this.formBuilder.group({
      limitUsers      : ['', [Validators.required, Validators.min(1)]],
      limitWorkspaces : ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
    this.globalConfigurationEditForm.reset({
      limitUsers: this.globalConfig.limitUsers,
      limitWorkspaces: this.globalConfig.limitWorkspaces,
    });
  }

  get invalidLimitUsers() {
    return this.globalConfigurationEditForm.get('limitUsers').invalid && this.globalConfigurationEditForm.get('limitUsers').touched;
  }

  get invalidLimitWorkspaces() {
    return this.globalConfigurationEditForm.get('limitWorkspaces').invalid && this.globalConfigurationEditForm.get('limitWorkspaces').touched;
  }
  
  async onSave() {
    this.isSaving = true;
    if (this.globalConfigurationEditForm.invalid){
      return Object.values(this.globalConfigurationEditForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    // globalConfigurationId: string, limitUsers: number, limitWorkspaces: number){

    const values = this.globalConfigurationEditForm.getRawValue();
    await this.globalConfigurationService.updateGlobalConfig(this.globalConfig.id, values.limitUsers, values.limitWorkspaces);
    this.globalConfigurationEditForm.reset();
    this.isSaving = false;
    this.editChange.emit(false);
    window.location.reload();
  }

  onCancel() {
    this.globalConfigurationEditForm.reset();
    this.editChange.emit(false);
  }

}
