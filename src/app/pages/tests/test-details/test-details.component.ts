import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from '../../../services/datafiles.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Esquema } from 'src/app/models/esquema';
import { Test } from '../../../models/test.model';
import { Configuration } from 'src/app/models/configuration';
import { TestsService } from 'src/app/services/tests.service';
import { Datafile } from 'src/app/models/datafile';


@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  test: Test;
  datafile: Datafile;
  datafileId: string;

  extension: string = null;
  fileName: string = null;

  workspaceId: string;
  testId: string;
  isLoading = false;
  isSavingTest = false;
  esquemas: any[];
  selectedEsquema: any;
  configurations: Configuration[] = [];
  selectedConfigurations: string[] = [];

  fileContentForm: FormGroup;
  testForm: FormGroup;
  edit: boolean;

  // tslint:disable-next-line: max-line-length
  constructor(public testsService: TestsService, public datafilesService: DatafileService, public route: ActivatedRoute,
              public usersService: AuthService, private router: Router){
                this.testForm = new FormGroup({
                  'title': new FormControl(null, {validators: [Validators.required]})
                });
                this.fileContentForm = new FormGroup({
                  'fileContent': new FormControl({value: '', disabled: true}),
                });

  }
  get invalidTitle() {
    return this.testForm.get('title').invalid && this.testForm.get('title').touched;
  }
  ngOnInit(){
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.datafileId = paramMap.get('datafileId');
      this.workspaceId = paramMap.get('workspaceId');
      this.testId = paramMap.get('testId');
      this.testsService.getTest(this.testId).subscribe( testData => {
        this.test = testData.test;
        console.log(this.test);
        this.testForm.reset({title: this.test.title});
        this.selectedEsquema = testData.esquema;
        this.selectedConfigurations = testData.configurations;
        console.log(this.selectedEsquema);
        console.log(this.selectedConfigurations);
      });
      this.datafilesService.getDatafile(this.datafileId).subscribe( datafileData => {
        this.fileContentForm.patchValue({fileContent: datafileData.content});

        this.datafile = datafileData.datafile;
        console.log(this.datafile);
        this.esquemas = datafileData.esquemas;
        console.log(this.esquemas);
        const configsAux = datafileData.configurations;
        console.log(datafileData.configurations);

        if (this.datafile.contentPath) {
          const nameWExtension = datafileData.datafile.contentPath.split('/');
          const splitNameWExtension = nameWExtension[2].split('.');
          this.extension = splitNameWExtension[1];

          const extension = '.' + splitNameWExtension[1];
          const nameWDate = nameWExtension[2].split('-');
          const name = nameWDate[0];
          this.fileName = name + extension;
        }

        configsAux.forEach(config => {
          const extraParamsJSON = JSON.stringify(config.extraParams).toString();
          const extraParamsStr1 = extraParamsJSON.replace(/{/g, '');
          const extraParamsStr2 = extraParamsStr1.replace(/}/g, '');
          const extraParamsStr = extraParamsStr2.replace(/,/g, ',\n');
          this.configurations.push({...config, extraParamsStr});
        });
        this.isLoading = false;
        this.edit = false;
      });

    });

  }

  async onDelete(){
    this.isLoading = true;
    await this.testsService.deleteTest(this.testId);
    // /workspace/{{workspaceId}}/datafile/{{datafileId}}/test/{{test._id}}
    this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
  }

  onEdit() {
    this.edit = true;
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
    this.isSavingTest = true;
    const values = this.testForm.getRawValue();
    // tslint:disable-next-line: max-line-length
    await this.testsService.updateTest(this.testId, values.title, this.test.esquema, this.selectedConfigurations, '');
    this.testForm.reset({});
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => {
      this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}/test/${this.testId}`]);
    }).catch( err => {
      console.log(err);
    });
    this.isSavingTest = false;
  }

  async onSaveContent() {
    let file: any;
    const content = this.fileContentForm.value.fileContent;
    if (this.extension === 'csv') {
      const blob = new Blob([content], {type: 'text/csv' });
      file = new File([blob], this.fileName, {type: 'text/csv'});
    } else if (this.extension === 'xlsx') {
      const rows = content.split('\n').map(row => {
        return row.split(',');
      });
      const worksheetName = this.fileName;
      const wsorksheetContent = XLSX.utils.aoa_to_sheet(rows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, wsorksheetContent, worksheetName);
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array'});
      // tslint:disable-next-line: max-line-length
      const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      console.log(data);
      // tslint:disable-next-line: max-line-length
      file = new File([data], this.fileName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
      console.log(file);
    } else {
      return;
    }
    this.isLoading = true;
    await this.datafilesService.updateDatafile( this.datafileId, this.datafile.title, this.datafile.description, file, 'updateContent');
    this.fileContentForm.get('fileContent').disable();
    this.isLoading = false;
  }

  async onEsquemaPicked(event: Event) {
    const esquemaId = (event.target as HTMLInputElement).value;
    if (esquemaId){
      // tslint:disable-next-line: max-line-length
      await this.testsService.updateTest(this.testId, this.test.title, esquemaId, this.selectedConfigurations, '');
      this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}/test/${this.testId}`]);
      }).catch( err => {
        console.log(err);
      });
    }
  }

  checkConfig(configId: string){
    return this.selectedConfigurations.includes(configId);
  }

  async onConfigurationPicked(event: Event) {
    const configurationId = (event.target as HTMLInputElement).value;
    const checked: boolean = (event.target as HTMLInputElement).checked;
    const index: number = this.selectedConfigurations.indexOf(configurationId);
    if (checked && index < 0) {
      console.log(configurationId);
      this.selectedConfigurations.push(configurationId);
      // tslint:disable-next-line: max-line-length
      await this.testsService.updateTest(this.testId, this.test.title, this.test.esquema, this.selectedConfigurations, '');
      this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}/test/${this.testId}`]);
      }).catch( err => {
        console.log(err);
      });
    } else if (!checked && index >= 0) {
      console.log(configurationId);
      this.selectedConfigurations.splice(index, 1);
      // tslint:disable-next-line: max-line-length
      await this.testsService.updateTest(this.testId, this.test.title, this.test.esquema, this.selectedConfigurations, '');
      this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}/test/${this.testId}`]);
      }).catch( err => {
        console.log(err);
      });
    }

  }


  onEditContent() {
    if (this.fileContentForm.get('fileContent').disabled) {
      this.fileContentForm.get('fileContent').enable();
    } else {
      this.fileContentForm.get('fileContent').disable();
    }
  }

  onDownload() {
    if (this.extension === 'xlsx') {
      const worksheetName = this.fileName;
      const wsorksheetContent = XLSX.utils.aoa_to_sheet(this.fileContentForm.value.fileContent);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, wsorksheetContent, worksheetName);
      XLSX.writeFile(workbook, this.fileName); // downloads it
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array'});
      // tslint:disable-next-line: max-line-length
      const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      console.log(data);
      const file: File = new File([data], 'out.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
      console.log(file);
    } else if (this.extension === 'csv') {
      const blob = new Blob([this.fileContentForm.value.fileContent], {type: 'text/csv' })
      saveAs(blob, this.fileName);
    } else {
      return;
    }
  }

  onCancelTestForm(){
    this.edit = false;
    this.testForm.reset({title: this.test.title});
  }


}




