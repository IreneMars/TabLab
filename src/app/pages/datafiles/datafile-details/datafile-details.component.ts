import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Datafile } from '../../../models/datafile.model';
import { DatafileService } from '../../../services/datafiles.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { UploadsService } from 'src/app/services/uploads.service';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { Workspace } from '../../../models/workspace.model';
import { Configuration } from '../../../models/configuration.model';
import { Esquema } from '../../../models/esquema.model';
import { Test } from '../../../models/test.model';
import { UsersService } from '../../../services/users.service';
import { CollectionsService } from 'src/app/services/collections.service';
import { Collection } from 'src/app/models/collection.model';


@Component({
  selector: 'app-datafile-details',
  templateUrl: './datafile-details.component.html',
  styleUrls: ['./datafile-details.component.css']
})
export class DatafileDetailsComponent implements OnInit{
  userId                : string;
  user                  : any;
  userIsAuthenticated   : boolean = false;
  isLoading             : boolean = false;
  isSaving              : boolean = false;
  isUploading           : boolean = false;
  isDeleting            : boolean = false;
  infer                 : boolean = false;
  edit                  : boolean = false;
  invalidExtension      : boolean = false;
  collections           : any[];
  datafileId            : string;
  datafile              : Datafile;
  workspaceId           : string;
  workspace             : Workspace;
  esquemas              : Esquema[];
  configurations        : Configuration[];
  formattedConfigs      : any[] = [];
  tests                 : Test[];
  fileForm              : FormGroup;
  fileContentForm       : FormGroup;
  filePreview           : string;
  content               : any = null;
  arrayBuffer           : any;
  file                  : any = null;
  fileName              : string = '';
  extension             : string;
  orphanedDatafiles         : Datafile[];
  constructor(public datafilesService: DatafileService, public workspacesService: WorkspacesService, 
              public uploadsService: UploadsService, public route: ActivatedRoute, 
              public authService: AuthService, public usersService: UsersService, 
              public collectionsService: CollectionsService, private router: Router){
                this.fileForm = new FormGroup({
                  'contentPath': new FormControl(null, {validators: [Validators.required]})
                });
                this.fileContentForm = new FormGroup({
                  'fileContent': new FormControl({value: '', disabled: true}),
                });
    }
    
  ngOnInit(){
    this.isLoading = true;
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
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
        }

        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          this.datafileId = paramMap.get('datafileId');
          this.workspaceId = paramMap.get('workspaceId');
          
          this.workspacesService.getWorkspace(this.workspaceId).subscribe(workspaceData => {
            this.workspace = {
              id: workspaceData.workspace.id,
              title: workspaceData.workspace.title,
              description: workspaceData.workspace.description,
              creationMoment: workspaceData.workspace.creationMoment,
              mandatory: workspaceData.workspace.mandatory,
              owner:workspaceData.workspace.owner
            };
            this.orphanedDatafiles = workspaceData.orphanedDatafiles;
            this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
            this.collectionsService.getCollectionUpdateListener().subscribe((collectionData: {collections: Collection[]})=>{
              this.collections = collectionData.collections;
              this.datafilesService.getDatafile(this.datafileId).subscribe(datafileData => {
                this.datafile = {
                  id: datafileData.datafile.id,
                  title: datafileData.datafile.title,
                  description: datafileData.datafile.description,
                  contentPath: datafileData.datafile.contentPath,
                  errLimit: datafileData.datafile.errLimit,
                  collection: datafileData.datafile.coleccion,
                  workspace: datafileData.datafile.workspace,
                };
                this.content = datafileData.content;
                this.esquemas = datafileData.esquemas;
                this.configurations = datafileData.configurations;
                this.tests = datafileData.tests;
          
                this.configurations.forEach(config => {
                  const extraParamsJSON = JSON.stringify(config.extraParams).toString();
                  const extraParamsStr1 = extraParamsJSON.replace(/{/g, '');
                  const extraParamsStr2 = extraParamsStr1.replace(/}/g, '');
                  const extraParamsStr = extraParamsStr2.replace(/,/g, ',\n');
                  this.formattedConfigs.push({...config, extraParamsStr});
                });
                if (this.content !== null) {
                  this.infer = true;
                }
                this.fileForm = new FormGroup({
                  'contentPath': new FormControl(null, {validators: [Validators.required]})
                });
                if (this.datafile.contentPath) {
                  // contentPath: {backend/uploads/datafiles/capital-1234.csv",
                  const nameWExtension = this.datafile.contentPath.split('/');
                  const splitNameWExtension = nameWExtension[3].split('.');
                  this.extension = splitNameWExtension[1]; // setted in order to use it on onDownload() method
                  const nameWDate = nameWExtension[3].split('-');
                  const name = nameWDate[0];
                  this.fileName = name + '.' + this.extension;
                }
                if (this.extension === 'xlsx') {
                  let res = this.content[0].join(',')+ '\n';
                  for (let arr of this.content) {
                    res = res + arr.join(',') + '\n';
                  }
                  this.fileContentForm.patchValue({fileContent: res});
                } else if (this.extension === 'csv') {
                  this.fileContentForm.patchValue({fileContent: datafileData.content });
                }
                this.isLoading = false;
              });
            })
          });
        });
      });
    }
  }

  async onDelete(){
    this.isDeleting = true;
    await this.datafilesService.deleteDatafile(this.datafileId);
    this.router.navigate([`/workspace/${this.datafile.workspace}`]);
    this.isDeleting = false;
  }

  onEdit() {
    this.edit = true;
  }

  // File upload function
  async onFilePicked(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const uploadedFile = (event.target as HTMLInputElement).files[0];
      const split = uploadedFile.name.split('.');
      const extension = split[1].toLowerCase();
      if (extension !== 'xlsx' && extension !== 'csv') {
        this.invalidExtension = true;
        return;
      } else {
        this.invalidExtension = false;
      }

      this.file = uploadedFile;
      this.isUploading = true;
      await this.uploadsService.updateFile(this.userId, this.datafileId, 'updateFile', this.file);
      await this.datafilesService.updateDatafile( this.datafileId, this.datafile.title, this.datafile.description, null);

      this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
      }).catch( err => {
        console.log("Error on onFilePicked method: "+err);
      });
      this.isUploading = false;
    }}

    async onSave() {
      let file: any;
      let content = this.fileContentForm.value.fileContent;
      if (this.extension === 'csv') {
        const blob = new Blob([content], {type: 'text/csv' });
        file = new File([blob], this.fileName, {type: 'text/csv'});
      } else if (this.extension === 'xlsx') {
        let rows = content.split('\n').map(row => {
          return row.split(',');
        });
        const worksheetName = this.fileName;

        const wsorksheetContent = XLSX.utils.aoa_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, wsorksheetContent, worksheetName);
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array'});
        const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        file = new File([data], this.fileName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
      } else {
        return;
      }
      this.isSaving = true;
      await this.uploadsService.updateFile(this.userId, this.datafileId, 'updateContent', file);
      await this.datafilesService.updateDatafile( this.datafileId, this.datafile.title, this.datafile.description, null);
      this.fileContentForm.get('fileContent').disable();
      this.isSaving = false;
    }

    async onDeleteFile() {
      this.isUploading = true;
      await this.uploadsService.updateFile(this.userId, this.datafileId,'deleteFile', null);
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => {
          this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
        }).catch( err => {
          console.log("Error on onDeleteFile method: "+err);
        });

      this.isUploading = false;
    }

    onDownload() {
      if (this.extension === 'xlsx') {
        const worksheetName = this.fileName;
        const wsorksheetContent = XLSX.utils.aoa_to_sheet(this.content);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, wsorksheetContent, worksheetName);
        XLSX.writeFile(workbook, this.fileName); // downloads it
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array'});
        const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        const file: File = new File([data], 'out.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
      } else if (this.extension === 'csv') {
        const blob = new Blob([this.content], {type: 'text/csv' })
        saveAs(blob, this.fileName);
      } else {
        return;
      }
    }

    onEditContent() {
      if (this.fileContentForm.get('fileContent').disabled) {
        this.fileContentForm.get('fileContent').enable();
      } else {
        this.fileContentForm.get('fileContent').disable();
      }
    }
}




