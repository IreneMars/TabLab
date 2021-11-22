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
  isSaving                     : boolean = false;
  globalConfigurationEditForm  : FormGroup;
  @Input() globalConfig        : GlobalConfiguration;
  @Input() edit                : boolean;
  @Output() globalConfigChange : EventEmitter<GlobalConfiguration> = new EventEmitter<GlobalConfiguration>();
  @Output() editChange         : EventEmitter<boolean> = new EventEmitter<boolean>();

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
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();

      this.globalConfigurationEditForm.reset({
        limitUsers: this.globalConfig.limitUsers,
        limitWorkspaces: this.globalConfig.limitWorkspaces,
      });
    }
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

    const values = this.globalConfigurationEditForm.getRawValue();
    await this.globalConfigurationService.updateGlobalConfig(this.globalConfig.id, values.limitUsers, values.limitWorkspaces);
    this.globalConfigurationService.getGlobalConfig().subscribe((globalConfigData)=>{
      this.globalConfigurationEditForm.reset();
      this.isSaving = false;
      this.globalConfigChange.emit(globalConfigData.globalConfiguration)
      this.editChange.emit(false);
    });
  }

  onCancel() {
    this.globalConfigurationEditForm.reset();
    this.editChange.emit(false);
  }

}
