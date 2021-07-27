import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from '../../../services/datafiles.service';
import { ConfigurationService } from 'src/app/services/configuration.service';


@Component({
  selector: 'app-configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})
export class ConfigurationListComponent implements OnInit, OnDestroy{
  isDeleting = false;
  @Input() datafileId: string;
  @Input() workspaceId: string;
  @Input() configurations: any[];
  userIsAuthenticated = false;
  userId: string;
  private authStatusSub: Subscription;

  // Para editar
  configurationForm: FormGroup;
  saveconfigChange = false;
  configuration = null;
  inferring = false;
  extraControls: string[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(public datafilesService: DatafileService, public route: ActivatedRoute, public usersService: AuthService,
              private router: Router, private configurationsService: ConfigurationService){
    this.configurationForm = new FormGroup({
      'title': new FormControl('', {validators: [Validators.required, Validators.minLength(1), Validators.maxLength(100)]}),
      'errorCode': new FormControl('', {validators: [Validators.required]}),
    });
  }

  ngOnInit(){
    this.userIsAuthenticated = this.usersService.getIsAuth();
    this.authStatusSub = this.usersService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.usersService.getUserId();
    });
  }

  ngOnDestroy(){
    // console.log(this.esquemasSub);
    // this.configurationsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
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
      this.configuration = configurationData.configuration;
      // this.configurationForm.get('esquemaContent').enable();
      console.log(this.configuration);
      this.configurationForm.patchValue({title: configurationData.configuration.title,
                                         errorCode: configurationData.configuration.errorCode});
      const extraParamsObj = configurationData.configuration.extraParams;
      Object.keys(extraParamsObj).forEach(extraParam => {
        this.configurationForm.addControl(extraParam, new FormControl('', {validators: [Validators.required]}));
        this.extraControls.push(extraParam);
        this.configurationForm.patchValue(extraParamsObj);
      });
      console.log(this.extraControls);
      console.log(this.configurationForm);

    });
  }

  // setEsquema(newvalue: any) {
  //   this.esquema = newvalue;
  // }


}




