import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from '../../../services/datafiles.service';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { Configuration } from '../../../models/configuration.model';


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
  
  // Para editar
  configurationForm       : FormGroup;
  saveconfigChange        : boolean = false;
  configurationId         : string;
  configuration           : Configuration = null;
  inferring               : boolean = false;
  extraControls           : string[] = [];

  constructor(public datafilesService: DatafileService, public route: ActivatedRoute, public usersService: AuthService,
              private router: Router, private configurationsService: ConfigurationService){
    this.configurationForm = new FormGroup({
      'title': new FormControl('', {validators: [Validators.required, Validators.minLength(1), Validators.maxLength(100)]}),
      'errorCode': new FormControl('', {validators: [Validators.required]}),
    });
  }

  ngOnInit(){
    this.userIsAuthenticated = this.usersService.getIsAuth();
    this.usersService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.usersService.getUserId();
    });
  }

  async onDelete( configurationId: string ){
    await this.configurationsService.deleteConfiguration(configurationId);
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
      }).catch( err => {});
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
      // this.configurationForm.get('esquemaContent').enable();
      this.configurationForm.patchValue({title: configurationData.configuration.title,
                                         delimiter:configurationData.configuration.delimiter,
                                         errorCode: configurationData.configuration.errorCode});
      if(configurationData.configuration.extraParams){
        const extraParamsObj = configurationData.configuration.extraParams;
        Object.keys(extraParamsObj).forEach(extraParam => {
          this.configurationForm.addControl(extraParam, new FormControl('', {validators: [Validators.required]}));
          this.extraControls.push(extraParam);
          this.configurationForm.patchValue(extraParamsObj);
        });
      }
    });
  }

  // setEsquema(newvalue: any) {
  //   this.esquema = newvalue;
  // }
}




