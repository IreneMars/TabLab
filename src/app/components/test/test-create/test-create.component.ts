import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Papa } from 'ngx-papaparse';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TestsService } from 'src/app/services/tests.service';
import { EsquemaService } from '../../../services/esquemas.service';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit, OnDestroy{
  @Input() testForm: FormGroup;
  private authStatusSub: Subscription;
  userIsAuthenticated = false;
  userId: string;
  @Input() workspaceId;
  @Input() datafileId;

  @Input() testSave;
  @Output() testSaveChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() esquemas;
  @Input() configurations;
  @Input() test;
  selectedConfigurations: string[];

  constructor(public testService: TestsService, public route: ActivatedRoute, private papa: Papa,
              private formBuilder: FormBuilder, private router: Router) {
                this.createForm();
                this.testForm.reset({
                  title: '',
                  esquema: '',
                  consfigurations: []
                });
                this.selectedConfigurations = [];
  }

  createForm() {
    this.testForm = this.formBuilder.group({
      title          : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      esquema        : [''],
      configurations : [[]]
    });
  }

  ngOnInit() {
    // this.userIsAuthenticated = this.usersService.getIsAuth();
    // this.authStatusSub = this.usersService.getAuthStatusListener().subscribe(isAuthenticated => {
    //   this.userIsAuthenticated = isAuthenticated;
    //   this.userId = this.usersService.getUserId();
    // });
  }

  ngOnDestroy() {
    // this.authStatusSub.unsubscribe();
  }

  get invalidTitle() {
    return this.testForm.get('title').invalid && this.testForm.get('title').touched;
  }

  async onSave() {
    if (this.testForm.invalid){
      return Object.values(this.testForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          // tslint:disable-next-line: no-shadowed-variable
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
     }
    const values = this.testForm.getRawValue();
    await this.testService.addTest(values.title, values.esquema, values.configurations, this.datafileId);
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
      }).catch( err => {
        console.log(err);
      });
    this.testForm.reset({});
    this.selectedConfigurations = [];
  }

  onConfigurationPicked(event: Event) {
    const configurationId = (event.target as HTMLInputElement).value;
    console.log(configurationId);
    const checked: boolean = (event.target as HTMLInputElement).checked;
    const index: number = this.selectedConfigurations.indexOf(configurationId);
    if (checked && index < 0) {
      this.selectedConfigurations.push(configurationId);
    } else if (!checked && index >= 0) {
      this.selectedConfigurations.pop();
    }
    this.testForm.patchValue({configurations: this.selectedConfigurations});
  }

  onEsquemaPicked(event: Event) {
    const esquemaId = (event.target as HTMLInputElement).value;
    if (esquemaId){
      console.log(esquemaId);
      this.testForm.patchValue({esquema: esquemaId});
    }
  }

  onCancel() {
    this.testForm.reset({});
    console.log(this.testForm);
    this.selectedConfigurations = [];
  }
}


