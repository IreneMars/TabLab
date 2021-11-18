import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuration } from 'src/app/models/configuration.model';
import { FricError } from 'src/app/models/fricError.model';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { FricErrorsService } from 'src/app/services/fricErrors.service';

@Component({
  selector: 'app-configuration-create',
  templateUrl: './configuration-create.component.html',
  styleUrls: ['./configuration-create.component.css']
})
export class ConfigurationCreateComponent implements OnInit{
  userId                        : string;
  userIsAuthenticated           : boolean = false;
  @Input() configurationForm    : FormGroup;
  @Input() datafileId           : string;
  @Input() workspaceId          : string;
  @Input() configurationId        : string;
  @Input() savefile             : string;
  @Input() extraControls        : object[] = [];
  @Output() configurationChange : EventEmitter<any> = new EventEmitter<any>();
  @Input() configuration        : Configuration;
  pickedError                   : any;
  fricErrors                    : FricError[];
  extraParams                   : boolean = false;

  constructor(public configurationService: ConfigurationService, public fricErrorsService: FricErrorsService, 
              public route: ActivatedRoute, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    //this.fricErrors = environment.errors;
    this.fricErrorsService.getFricErrors();
    this.fricErrorsService.getFricErrorUpdateListener().subscribe(responseData=>{
      this.fricErrors = responseData.fricErrors;
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
  }

  get invalidTitle() {
    return this.configurationForm.get('title').invalid && this.configurationForm.get('title').touched;
  }

  get invalidErrorCode() {
    return this.configurationForm.get('errorCode').invalid && this.configurationForm.get('errorCode').touched;
  }
  
  //   invalid(paramName: any, value: any){
  //     if (paramName === 'interval' && value < 0) {
  //       return true;
  //     }
  //   }
  invalidParam(param: any, value: any) {
    return this.configurationForm.get(param).invalid && this.configurationForm.get(param).touched;
  }
  
  resetForm(title: string, errorCode: string){
    this.configurationForm = new FormGroup({
      'title': new FormControl('', {validators: [Validators.required, Validators.minLength(1), Validators.maxLength(100)]}),
      'errorCode': new FormControl('', {validators: [Validators.required]}),
    });
    this.configurationForm.reset({
      "title":title,
      "errorCode":errorCode
    });
    this.extraParams = false;
  }
  
  onErrorPicked(event: Event) {
    const errorCode = (event.target as HTMLInputElement).value;
    const fricError: FricError = this.fricErrors.find(element => element.errorCode === errorCode);
    this.pickedError = fricError;
    const title = this.configurationForm.get('title').value;
    this.resetForm(title,errorCode);
    this.extraControls = [];
    if (fricError.extraParams) {
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
                            'hint'      : fricError.extraParams['hints'][extraParam]
                           };
          } else {
            tipo = typeof fricError.extraParams[extraParam];
            extraControl = {
                            'extraParam': extraParam,
                            'tipo'      : tipo,
                            'hint'      : fricError.extraParams['hints'][extraParam]
                           };
          }
          this.configurationForm.addControl(extraParam, new FormControl('', {validators: [Validators.required]}));
          this.extraControls.push(extraControl);
        }
      });

      this.extraParams = true;

    }

  }

  onCancel() {
    this.configurationForm.reset();
    this.extraControls.forEach(newControl => {
      this.configurationForm.removeControl(newControl[0]);
    });
    this.configurationChange.emit([]);
  }

  async onSave() {

    if (this.configurationForm.invalid){
      return Object.values(this.configurationForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    const values = this.configurationForm.getRawValue();
    if (this.configuration) {
      await this.configurationService.updateConfiguration(this.configurationId, values, this.datafileId);
    } else {
      await this.configurationService.addConfiguration(values, this.datafileId);
    }
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => {
      this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
    }).catch( err => {
      console.log("Error on onSave method: "+err);
    });

    // Resets
    this.configurationForm.reset();
    this.extraControls.forEach(newControl => {
        this.configurationForm.removeControl(newControl[0]);
      });
    this.configurationChange.emit([]);

  }

}


