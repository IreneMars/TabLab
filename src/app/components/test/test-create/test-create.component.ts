import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit, OnDestroy{
  userId                   : string;
  userIsAuthenticated      : boolean = false;
  selectedConfigurations   : string[];
  @Input() testForm        : FormGroup;
  @Input() workspaceId     : string;
  @Input() datafileId      : string;
  //@Input() testSave        : boolean;
  @Output() testSaveChange : EventEmitter<any> = new EventEmitter<any>();
  @Input() esquemas        : any[];
  @Input() configurations  : any[];
  //@Input() test            : any;
  private authStatusSub    : Subscription;

  constructor(public testService: TestsService, public route: ActivatedRoute,
              private formBuilder: FormBuilder, private router: Router, private usersService: AuthService) {
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
    this.userIsAuthenticated = this.usersService.getIsAuth();
    this.authStatusSub = this.usersService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.usersService.getUserId();
    });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

  get invalidTitle() {
    return this.testForm.get('title').invalid && this.testForm.get('title').touched;
  }

  async onSave() {
    if (this.testForm.invalid){
      return Object.values(this.testForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          
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
        console.log("Error on onSave method: "+err);
      });
    this.testForm.reset({});
    this.selectedConfigurations = [];
  }

  onConfigurationPicked(event: Event) {
    const configurationId = (event.target as HTMLInputElement).value;
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
      this.testForm.patchValue({esquema: esquemaId});
    }
  }

  onCancel() {
    this.testForm.reset({});
    this.selectedConfigurations = [];
  }
}


