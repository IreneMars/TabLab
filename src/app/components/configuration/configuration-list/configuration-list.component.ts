import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from '../../../services/datafiles.service';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { Configuration } from '../../../models/configuration.model';
import { FricError } from 'src/app/models/fricError.model';
import { FricErrorsService } from 'src/app/services/fricErrors.service';


@Component({
  selector: 'app-configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})
export class ConfigurationListComponent implements OnInit{
  userId                  : string;
  userIsAuthenticated     : boolean = false;
  isDeleting              : boolean = false;
  @Input() datafileId     : string;
  @Input() workspaceId    : string;
  @Input() configurations : Configuration[];
  isSaving                : boolean = false;
  configurationForm       : FormGroup;
  configurationId         : string;
  configuration           : Configuration = null;
  inferring               : boolean = false;
  extraControls           : object[] = [];
  extraParams             : boolean = false;  
  fricErrors              : FricError[];
  createEdit              : boolean;
  
  constructor(public datafilesService: DatafileService, public route: ActivatedRoute, public authService: AuthService,
              public configurationsService: ConfigurationService, public fricErrorsService: FricErrorsService){
    this.configurationForm = new FormGroup({
      'title': new FormControl('', {validators: [Validators.required, Validators.minLength(1), Validators.maxLength(100)]}),
      'errorCode': new FormControl('', {validators: [Validators.required]}),
    });
  }
  
  ngOnInit(){
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
      // Frictionless Errors
      this.fricErrorsService.getFricErrors();
      this.fricErrorsService.getFricErrorUpdateListener().subscribe(responseData=>{
        this.fricErrors = responseData.fricErrors;
      });
    }
  }

  async onDelete( configurationId: string ){
    this.isDeleting = true;
    this.configurationsService.deleteConfiguration(configurationId)
    .then(response=>{
      // Collections
      this.configurationsService.getConfigurationsByDatafile(this.datafileId);
      this.isDeleting = false;  
    })
    .catch(err=>{
      console.log("Error on onDelete method: "+err.message);
      // Collections
      this.configurationsService.getConfigurationsByDatafile(this.datafileId);
      this.isDeleting = false;
    });
  }

  setExtraParams(newvalue: any) {
    this.extraControls = newvalue;
  }

  onEdit(configurationId: string) {
    this.configurationsService.getConfiguration(configurationId).subscribe(configurationData => {
      this.configurationId = configurationData.configuration._id;
      this.configuration = {
        id: configurationData.configuration._id,
        title: configurationData.configuration.title,
        creationMoment: configurationData.configuration.creationMoment,
        errorCode: configurationData.configuration.errorCode,
        extraParams: configurationData.configuration.extraParams,
        datafile: configurationData.configuration.datafile,
      }
      this.configurationForm.patchValue({title: configurationData.configuration.title,
                                         errorCode: configurationData.configuration.errorCode});
      if(this.configuration.extraParams){
        const fricError: FricError = this.fricErrors.find(element => element.errorCode === this.configuration.errorCode);
        Object.keys(fricError.extraParams).forEach(extraParam => {
          let tipo = '';
          let extraControl = {};
          if (extraParam !== 'hints'){
            if ( fricError.extraParams[extraParam].length > 0 ) {
              tipo = 'enum';
              extraControl = {
                              'extraParam': extraParam,
                              'tipo'      : tipo,
                              'enum'      : fricError.extraParams[extraParam],
                              'hint'      : fricError.extraParams['hints'][extraParam],
                              'value'     : this.configuration.extraParams[extraParam]
                             };
            } else {
              tipo = typeof fricError.extraParams[extraParam];
              extraControl = {
                              'extraParam': extraParam,
                              'tipo'      : tipo,
                              'hint'      : fricError.extraParams['hints'][extraParam],
                              'value'     : this.configuration.extraParams[extraParam]
                             };
            }

            this.configurationForm.addControl(extraParam, new FormControl(this.configuration.extraParams[extraParam], {validators: [Validators.required]}));
            this.extraControls.push(extraControl);
            this.configurationForm.patchValue({extraParam:this.configuration.extraParams[extraParam]});
          }
        });
        this.extraParams = true;
      }
    });
  }

}




