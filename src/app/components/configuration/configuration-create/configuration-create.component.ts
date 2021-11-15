import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/models/configuration.model';
import { FricError } from 'src/app/models/fricError.model';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-configuration-create',
  templateUrl: './configuration-create.component.html',
  styleUrls: ['./configuration-create.component.css']
})
export class ConfigurationCreateComponent implements OnInit, OnDestroy{
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
  fricErrors                    : any;
  private authStatusSub         : Subscription;
  // private fricErrorsSub         : Subscription;

  constructor(public configurationService: ConfigurationService, public route: ActivatedRoute,
              private usersService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.fricErrors = environment.errors;
    this.userIsAuthenticated = this.usersService.getIsAuth();
  }

  ngOnDestroy() {
    //this.authStatusSub.unsubscribe();
  }

  get invalidTitle() {
    return this.configurationForm.get('title').invalid && this.configurationForm.get('title').touched;
  }

  get invalidErrorCode() {
    return this.configurationForm.get('errorCode').invalid && this.configurationForm.get('errorCode').touched;
  }

  invalidParam(param: any, value: any) {
    let invalid = false;
    if (this.pickedError.extraParams && this.configurationForm.get(param)) {
      invalid = this.pickedError.extraParams.invalid(param, this.configurationForm.get(param).value);
      return (invalid || this.configurationForm.get(param).invalid) && this.configurationForm.get(param).touched;
    } else {
      return false;
    }
  }

  onErrorPicked(event: Event) {
    const errorCode = (event.target as HTMLInputElement).value;
    const fricError: any = this.fricErrors.find(element => element.errorCode === errorCode);
    this.pickedError = fricError;
    if (fricError.extraParams) {
      Object.keys(fricError.extraParams).forEach(extraParam => {
        let tipo = '';
        let extraControl = {};
        if ( fricError.extraParams[extraParam].length > 0 ) {
          tipo = 'enum';
          extraControl = {
                          'extraParam': extraParam,
                          'tipo'      : tipo,
                          'enum'      : fricError.extraParams[extraParam],
                          'hint'      : fricError.extraParams.getHint(extraParam)
                         };
        } else if (extraParam !== 'hints') {
          tipo = typeof fricError.extraParams[extraParam];
          extraControl = {
                          'extraParam': extraParam,
                          'tipo'      : tipo,
                          'hint'      : fricError.extraParams.getHint(extraParam)
                         };
        }

        this.configurationForm.addControl(extraParam, new FormControl('', {validators: [Validators.required]}));
        this.extraControls.push(extraControl);
      });
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
    // if (this.configuration) { // Modo edición
    //   if (this.configurationForm.get('title').invalid) {
    //     this.configurationForm.get('title').markAsTouched();
    //     return;
    //   }
    // } else {
    if (this.configurationForm.invalid){
      return Object.values(this.configurationForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    // }
    const values = this.configurationForm.getRawValue();
    if (this.configuration) {
      await this.configurationService.updateConfiguration(this.configurationId, values, this.datafileId);
    } else {
      await this.configurationService.addConfiguration(values, this.datafileId);
      // (document.getElementById('esquemaContent') as HTMLInputElement).value = '';
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


