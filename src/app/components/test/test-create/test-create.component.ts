import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TestsService } from 'src/app/services/tests.service';
import { Test } from '../../../models/test.model';
import { DatafileService } from '../../../services/datafiles.service';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit{
  userId                   : string;
  userIsAuthenticated      : boolean = false;
  selectedConfigurations   : string[];
  @Input() tests           : Test[];
  @Output() testsChange    : EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input() isSaving        : boolean = false;
  @Output() isSavingChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() testForm        : FormGroup;
  @Input() workspaceId     : string;
  @Input() datafileId      : string;
  @Input() esquemas        : any[];
  @Input() configurations  : any[];
  @Output() testSaveChange : EventEmitter<any> = new EventEmitter<any>();

  constructor(public testService: TestsService, public route: ActivatedRoute,
              private formBuilder: FormBuilder, public datafilesService: DatafileService, private authService: AuthService) {
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
      delimiter      : [''],
      esquema        : [''],
      configurations : [[]]
    });
  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
    }
  }

  get invalidTitle() {
    return this.testForm.get('title').invalid && this.testForm.get('title').touched;
  }

  get invalidDelimiter() {
    return this.testForm.get('delimiter').invalid && this.testForm.get('delimiter').touched;
  }
  
  async onSave() {
    this.isSavingChange.emit(true);
    if (this.testForm.invalid){
      this.isSavingChange.emit(false);
      return Object.values(this.testForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
     }
    const values = this.testForm.getRawValue();
    await this.testService.addTest(values.title, values.delimiter, values.esquema, values.configurations, this.datafileId);
    // Tests
    this.testService.getTestsByDatafile(this.datafileId,this.workspaceId);
    this.testService.getTestUpdateListener().subscribe(testData => {
      this.testsChange.emit(testData.tests);
      this.testForm.reset({});
      this.selectedConfigurations = [];
      this.isSavingChange.emit(false);  
    });
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


