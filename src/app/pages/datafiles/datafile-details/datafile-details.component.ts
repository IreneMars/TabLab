import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Datafile } from '../../../models/datafile';
import { DatafileService } from '../../../services/datafiles.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { map } from 'rxjs/operators';
import { Esquema } from 'src/app/models/esquema';


@Component({
  selector: 'app-datafile-details',
  templateUrl: './datafile-details.component.html',
  styleUrls: ['./datafile-details.component.css']
})
export class DatafileDetailsComponent implements OnInit, OnDestroy{
  datafile: Datafile;
  datafileId: string;
  isLoading = false;
  isUploading = false;
  userIsAuthenticated = false;
  userId: string;
  esquemas: Esquema[];
  configurations: any[];
  formattedConfigs: any[];
  tests: any[];
  private authStatusSub: Subscription;
  infer = false;
  edit = false;
  fileForm: FormGroup;
  fileContentForm: FormGroup;
  filePreview: string;
  content: any = null;
  arrayBuffer: any;
  file: any = null;
  fileName: string = '';
  invalidExtension = false;
  extension;
  workspaceId;

  constructor(public datafilesService: DatafileService, public route: ActivatedRoute, public usersService: AuthService,
              private router: Router){
                this.fileForm = new FormGroup({
                  'contentPath': new FormControl(null, {validators: [Validators.required]})
                });
                this.fileContentForm = new FormGroup({
                  'fileContent': new FormControl({value: '', disabled: true}),
                });
  }

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const datafileId = paramMap.get('datafileId');
      this.workspaceId = paramMap.get('workspaceId');
      this.datafileId = datafileId;
      this.isLoading = true;
      this.datafilesService.getDatafile(datafileId).subscribe(datafileData => {
        this.isLoading = false;
        this.datafile = {
          title: datafileData.datafile.title,
          description: datafileData.datafile.description,
          contentPath: datafileData.datafile.contentPath,
          errorLimit: datafileData.datafile.errorLimit,
          delimiter: datafileData.datafile.delimiter,
          coleccion: datafileData.datafile.coleccion,
          workspace: datafileData.datafile.workspace,
        };
        this.content = datafileData.content;
        this.esquemas = datafileData.esquemas;
        this.configurations = datafileData.configurations;
        this.tests = datafileData.tests;

        this.formattedConfigs = [];
        this.configurations.forEach(config => {
          const extraParamsJSON = JSON.stringify(config.extraParams).toString();
          const extraParamsStr1 = extraParamsJSON.replace(/{/g, '');
          const extraParamsStr2 = extraParamsStr1.replace(/}/g, '');
          const extraParamsStr = extraParamsStr2.replace(/,/g, ',\n');
          console.log(extraParamsStr);
          this.formattedConfigs.push({...config, extraParamsStr});
        });

        if (this.content !== null) {
          this.infer = true;
        }
        this.fileForm = new FormGroup({
          'contentPath': new FormControl(null, {validators: [Validators.required]})
        });
        if (this.datafile.contentPath) {
          // contentPath: {backend/files/fulls_dmf_full_v1_20200504_short_10-1622910312416.csv",
          const nameWExtension = this.datafile.contentPath.split('/');
          const splitNameWExtension = nameWExtension[2].split('.');
          this.extension = splitNameWExtension[1]; // setted in order to use it on onDownload() method
          const extension = '.' + splitNameWExtension[1];
          const nameWDate = nameWExtension[2].split('-');
          const name = nameWDate[0];
          this.fileName = name + extension;
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

      });
    });

    this.userIsAuthenticated = this.usersService.getIsAuth();
    this.authStatusSub = this.usersService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.usersService.getUserId();
    });
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

  async onDelete(){
    this.isLoading = true;
    await this.datafilesService.deleteDatafile(this.datafileId);
    this.router.navigate([`/workspace/${this.datafile.workspace}`]);
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
      // tslint:disable-next-line: max-line-length
      await this.datafilesService.updateDatafile( this.datafileId, this.datafile.title, this.datafile.description, this.file, 'updateFile');

      this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
      }).catch( err => {console.log(err);});
      this.isUploading = false;
    }}

    async onSave() {
      let file: any;
      let content = this.fileContentForm.value.fileContent;
      console.log(content);
      if (this.extension === 'csv') {
        const blob = new Blob([content], {type: 'text/csv' });
        file = new File([blob], this.fileName, {type: 'text/csv'});
      } else if (this.extension === 'xlsx') {
        console.log(typeof content);
        let rows = content.split('\n').map(row => {
          return row.split(',');
        });
        console.log(rows);
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

    async onDeleteFile() {
      this.isUploading = true;
      await this.datafilesService.updateDatafile(this.datafileId, this.datafile.title, this.datafile.description, null, 'deleteFile');
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => {
          this.router.navigate([`/workspace/${this.datafileId}/datafile/${this.datafileId}`]);
        }).catch( err => {
          console.log(err);
        });

      this.isUploading = false;
    }

    onDownload() {
      if (this.extension === 'xlsx') {
        console.log(this.content);
        const worksheetName = this.fileName;
        const wsorksheetContent = XLSX.utils.aoa_to_sheet(this.content);
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




