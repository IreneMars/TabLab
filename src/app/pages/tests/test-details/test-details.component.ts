import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from '../../../services/datafiles.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { TestsService } from 'src/app/services/tests.service';
import { Datafile } from 'src/app/models/datafile.model';
import { UploadsService } from 'src/app/services/uploads.service';
import { Configuration } from 'src/app/models/configuration.model';
import { Test } from 'src/app/models/test.model';
import { Esquema } from '../../../models/esquema.model';
import { UsersService } from '../../../services/users.service';
import { Workspace } from 'src/app/models/workspace.model';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { SuggestionsService } from '../../../services/suggestions.service';
import { Suggestion } from '../../../models/suggestion.model';
import { EsquemaService } from 'src/app/services/esquemas.service';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit, OnDestroy{
  isLoading                : boolean = false;
  userId                   : string;
  user                     : any;
  userIsAuthenticated      : boolean = false;

  testId                   : string;
  test                     : Test;
  selectedEsquema          : Esquema;
  selectedConfigurationIDs : string[] = [];
  
  workspaceId              : string;
  workspace                : Workspace;
  datafileId               : string;
  datafile                 : Datafile;
  esquemas                 : Esquema[];
  configurations           : Configuration[] = [];
  formattedConfigs         : any[] = [];

  extension                : string = null;
  fileName                 : string = null;
  isSavingTest             : boolean = false;
  edit                     : boolean;

  fileContentForm          : FormGroup;
  testForm                 : FormGroup;
  hideEditableContent      : boolean = true;
  contentLines             : string[];
  suggestions              : Suggestion[];
  suggestionQueryResult    : any = null;
  onDestroy                : boolean = false;
  suggestionForm           : FormGroup = null;
  suggestionId             : string;

  constructor(public testsService: TestsService, public datafilesService: DatafileService, public uploadsService: UploadsService, 
              public route: ActivatedRoute, public workspacesService: WorkspacesService,
              public authService: AuthService, public usersService: UsersService, public suggestionsService: SuggestionsService,
              private router: Router, public esquemasService: EsquemaService, public configurationsService: ConfigurationService){

                this.testForm = new FormGroup({
                  'title': new FormControl(null, {validators: [Validators.required]}),
                });
                
                this.fileContentForm = new FormGroup({
                  'fileContent': new FormControl({value: '', disabled: true}),
                });
  }
  ngOnDestroy(): void {
    this.onDestroy=true;
  }
  
  get invalidTitle() {
    return this.testForm.get('title').invalid && this.testForm.get('title').touched;
  }
  
  ngOnInit(){
    this.isLoading = true;
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
      // Current User
      this.usersService.getUser(this.userId).subscribe(userData=>{
        this.user = {
          id: userData.user._id,
          username: userData.user.username,
          email: userData.user.email,
          password: userData.user.password,
          photo: userData.user.photo,
          name: userData.user.name,
          role: userData.user.role,
          status: userData.user.status,
          google: userData.user.google
        };
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          this.datafileId = paramMap.get('datafileId');
          this.workspaceId = paramMap.get('workspaceId');
          this.testId = paramMap.get('testId');
          if(this.datafileId && this.workspaceId && this.testId){
          // Workspace
          this.workspacesService.getWorkspace(this.workspaceId).subscribe(workspaceData => {
            this.workspace = {
              id: workspaceData.workspace.id,
              title: workspaceData.workspace.title,
              description: workspaceData.workspace.description,
              creationMoment: workspaceData.workspace.creationMoment,
              mandatory: workspaceData.workspace.mandatory,
              owner:workspaceData.workspace.owner
            };
            // Test, Esquema seleccionado y configuraciones seleccionadas
            this.testsService.getTest(this.testId).subscribe( testData => {
              this.test = {
                id: testData.test._id,
                title: testData.test.title,
                reportPath: testData.test.reportPath,
                status: testData.test.status,
                esquema: testData.test.esquema,
                configurations: testData.test.configurations,
                creationMoment: testData.test.creationMoment,
                updateMoment: testData.test.updateMoment,
                executionMoment: testData.test.executionMoment,
                totalErrors: testData.test.totalErrors,
                executable: testData.test.executable,
                datafile: testData.test.datafile,
              };
              this.testForm.reset({title: this.test.title});
              this.selectedEsquema = {
                id: testData.esquema._id,
                title: testData.esquema.title,
                contentPath: testData.esquema.contentPath,
                creationMoment: testData.esquema.creationMoment,
                datafile: testData.esquema.datafile,
              }
              this.selectedConfigurationIDs = testData.configurationIDs;
              // Datafile, esquemas y configuraciones
              this.datafilesService.getDatafile(this.datafileId).subscribe( datafileData => {
                this.contentLines = datafileData.content.split("\n");
                this.fileContentForm.patchValue({fileContent: datafileData.content});
                this.fileContentForm.get('fileContent').enable();

                this.datafile = {
                  id: datafileData.datafile.id,
                  title: datafileData.datafile.title,
                  delimiter: datafileData.datafile.delimiter,
                  description: datafileData.datafile.description,
                  contentPath: datafileData.datafile.contentPath,
                  errLimit: datafileData.datafile.errLimit,
                  coleccion: datafileData.datafile.coleccion,
                  workspace: datafileData.datafile.workspace,
                };
                // Esquemas
                this.esquemasService.getEsquemasByDatafile(this.datafileId);
                this.esquemasService.getEsquemaUpdateListener().subscribe(esquemaData =>{
                  this.esquemas = esquemaData.esquemas;
                  // Configurations

                  if(!this.onDestroy){
                    this.configurationsService.getConfigurationsByDatafile(this.datafileId);
                    this.configurationsService.getConfigurationUpdateListener().subscribe(configurationData =>{
                      this.configurations = configurationData.configurations;
                      if (this.datafile.contentPath) {
                        const nameWExtension = datafileData.datafile.contentPath.split('/');
                        const splitNameWExtension = nameWExtension[nameWExtension.length-1].split('.');
                        this.extension = splitNameWExtension[splitNameWExtension.length-1];
                        var name = nameWExtension[nameWExtension.length-1];
                        if (name.includes("-")){
                          const nameWDate = nameWExtension[nameWExtension.length-1].split('-');
                          name = nameWDate[0] + '.' + this.extension;
                        }
                        this.fileName = name;
                      }
                      for (var config of this.configurations){
                        const extraParamsJSON = JSON.stringify(config.extraParams).toString();
                        const extraParamsStr1 = extraParamsJSON.replace(/{/g, '');
                        const extraParamsStr2 = extraParamsStr1.replace(/}/g, '');
                        const extraParamsStr = extraParamsStr2.replace(/,/g, ',\n');
                        const configAux = {...config, extraParamsStr};
                        this.formattedConfigs.push(configAux);
                      }
                      // Suggestions
                      this.suggestionsService.getSuggestionsByDatafile(this.datafileId);
                      this.suggestionsService.getSuggestionUpdateListener().subscribe(suggestionData=>{
                        this.suggestions = suggestionData.suggestions;
                        this.isLoading = false;
                        this.edit = false;
                      });
                    });
                  }
                });
              });
            });
          });}
        });
      });
    }
  }

  async onDelete(){
    this.isLoading = true;
    await this.testsService.deleteTest(this.testId);
    this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
  }

  onEdit() {
    this.edit = true;
  }

  async onSave() {
    this.isSavingTest = true;
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
    this.test.title =  values.title;
    this.test.executable = true;
    await this.testsService.updateTest(this.test);
    this.testsService.getTest(this.testId).subscribe( testData => {
      this.test = {
        id: testData.test._id,
        title: testData.test.title,
        reportPath: testData.test.reportPath,
        status: testData.test.status,
        esquema: testData.test.esquema,
        configurations: testData.test.configurations,
        creationMoment: testData.test.creationMoment,
        updateMoment: testData.test.updateMoment,
        executionMoment: testData.test.executionMoment,
        totalErrors: testData.test.totalErrors,
        executable: testData.test.executable,
        datafile: testData.test.datafile,
      };
      this.testForm.reset({title: this.test.title});
      this.edit = false;
      this.isSavingTest = false;
    });
  }

  async onSaveContent() {
    this.isLoading = true;
    const content = this.fileContentForm.value.fileContent;
    const file = this.generateFile(content);
    if(file){
      await this.uploadsService.updateFile(this.datafileId, file);
    }
    this.hideEditableContent = true;
    this.isLoading = false;
  }

  async onEsquemaPicked(event: Event) {
    const esquemaId = (event.target as HTMLInputElement).value;
    if (esquemaId){
      this.test.esquema =  esquemaId;
      this.test.executable = true;
    }
  }

  checkConfig(configId: string){
    return this.selectedConfigurationIDs.includes(configId);
  }

  async onConfigurationPicked(event: Event) {
    const configurationId: string = (event.target as HTMLInputElement).value;
    const checked: boolean = (event.target as HTMLInputElement).checked;
    const index: number = this.selectedConfigurationIDs.indexOf(configurationId);
    if (checked && index < 0) {
      this.selectedConfigurationIDs.push(configurationId);
      this.test.configurations = this.selectedConfigurationIDs;
      this.test.executable = true;
      await this.testsService.updateTest(this.test);
    } else if (!checked && index >= 0) {
      this.selectedConfigurationIDs.splice(index, 1);
      this.test.configurations = this.selectedConfigurationIDs;
      this.test.executable = true;
      this.testsService.updateTest(this.test);
    }
  }

  onEditContent() {
    if (this.hideEditableContent) {
      this.hideEditableContent = false;
    } else {
      this.hideEditableContent = true;
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
      const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      const file: File = new File([data], 'out.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
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
  
  get invalidRowContent() {
    return this.suggestionForm.get('rowContent').invalid && this.suggestionForm.get('rowContent').touched;
  }

  async onApplyRow() {
    if (this.suggestionForm.invalid){
      return Object.values(this.suggestionForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    const values = this.suggestionForm.getRawValue();
    const result = await this.suggestionsService.applySuggestion(this.suggestionId, "updateRow", this.datafile.delimiter, this.contentLines, values.rowContent);
    this.suggestionQueryResult = result.data.rowContent;
    const newFile = this.generateFile(result.data.content)
    await this.uploadsService.updateFile(this.datafileId, newFile);
    await this.suggestionsService.deleteSuggestion(this.suggestionId);
    // Datafile, esquemas y configuraciones
    this.datafilesService.getDatafile(this.datafileId).subscribe( datafileData => {
      this.contentLines = datafileData.content.split("\n");
      this.fileContentForm.patchValue({fileContent: datafileData.content});
      // Suggestions
      this.suggestionsService.getSuggestionsByDatafile(this.datafileId);
    });
  }
  
  async onApplyChanges(suggestionId:string, operation:string){
    this.suggestionId = suggestionId;
    this.suggestionQueryResult = null;
    const result = await this.suggestionsService.applySuggestion(suggestionId, operation, this.datafile.delimiter, this.contentLines, null);
    this.suggestionQueryResult = result.data.rowContent;
    this.suggestionForm = new FormGroup({
      'rowContent': new FormControl('', {validators: [Validators.required]}),
    });
    this.suggestionForm.reset({'rowContent': result.data.rowContent})
    if(operation==="deleteRow"){
      const newFile = this.generateFile(result.data.content)
      await this.uploadsService.updateFile(this.datafileId, newFile);
      await this.suggestionsService.deleteSuggestion(suggestionId);
      // Datafile, esquemas y configuraciones
      this.datafilesService.getDatafile(this.datafileId).subscribe( datafileData => {
        this.contentLines = datafileData.content.split("\n");
        this.fileContentForm.patchValue({fileContent: datafileData.content});
        // Suggestions
        this.suggestionsService.getSuggestionsByDatafile(this.datafileId);
      });
    }
  }

  private generateFile(content:any){
    if (this.extension === 'csv') {
      const blob = new Blob([content], {type: 'text/csv' });
      return new File([blob], this.fileName, {type: 'text/csv'});
    } else if (this.extension === 'xlsx') {
      const rows = content.split('\n').map(row => {
        return row.split(',');
      });
      const worksheetName = this.fileName;
      const wsorksheetContent = XLSX.utils.aoa_to_sheet(rows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, wsorksheetContent, worksheetName);
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array'});
      const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      return new File([data], this.fileName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
    } else {
      return null;
    }
  }

}




