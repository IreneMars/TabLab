import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Papa } from 'ngx-papaparse';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from 'src/app/services/datafiles.service';
import { EsquemaService } from 'src/app/services/esquemas.service';
import { Esquema } from '../../../models/esquema.model';
import { UploadsService } from '../../../services/uploads.service';
import { Datafile } from '../../../models/datafile.model';

@Component({
  selector: 'app-esquema-create',
  templateUrl: './esquema-create.component.html',
  styleUrls: ['./esquema-create.component.css']
})
export class EsquemaCreateComponent implements OnInit{
  userId                   : string;
  userIsAuthenticated      : boolean = false;
  invalidFile              : boolean = false;
  invalidExtension         : boolean = false;
  file                     : any = null;
  chain                    : string = '';
  @Input() isSaving        : boolean = false;
  @Output() isSavingChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isAdding        : boolean = false;
  @Output() isAddingChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() esquemas        : Esquema[];
  @Output() esquemasChange : EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() esquemaContent  : any;
  @Input() esquemaForm     : FormGroup;
  @Input() workspaceId     : string;
  @Input() datafile        : Datafile;
  @Input() savefile        : any;
  @Input() esquema         : Esquema;
  @Output() esquemaChange  : EventEmitter<any> = new EventEmitter<any>();
  
  constructor(public esquemaService: EsquemaService, public route: ActivatedRoute, private papa: Papa,
              private authService: AuthService, public datafilesService: DatafileService, 
              public esquemasService: EsquemaService, public uploadsService: UploadsService) {
  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
    }
  }

  get invalidTitle() {
    return this.esquemaForm.get('title').invalid && this.esquemaForm.get('title').touched;
  }

  get invalidEsquemaPath() {
    return this.esquemaForm.get('esquemaPath').invalid && this.esquemaForm.get('esquemaPath').dirty;
  }

  // File upload function
  async onFilePicked(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const uploadedFile = (event.target as HTMLInputElement).files[0];
      const split = uploadedFile.name.split('.');
      const extension = split[1].toLowerCase();
      if (extension !== 'json' && extension !== 'yaml') {
        this.invalidExtension = true;
        return;
      } else {
        this.esquemaForm.get('esquemaContent').enable();
        this.invalidExtension = false;
      }
      this.file = uploadedFile;
      console.log(this.file)
      this.papa.parse(uploadedFile, {
        complete(results) {
          let chain = '';
          for (const data of results.data){
              chain = chain + data + '\n';
          }
          (document.getElementById('esquemaContent') as HTMLInputElement).value = chain;
        }
      });
  }}

  async onSave() {
    if (this.esquema) {
      if (this.esquemaForm.get('title').invalid) {
        this.esquemaForm.get('title').markAsTouched();
        return;
      }
    } else {
      this.esquemaForm.patchValue({esquemaContent: this.esquemaContent});
      if (this.esquemaForm.invalid){
        if (this.esquemaForm.get('esquemaPath').invalid) {
          this.invalidFile = true;
          this.esquemaForm.get('esquemaPath').markAsDirty();
        }
        return Object.values(this.esquemaForm.controls).forEach(control => {
          if (control instanceof FormGroup) {
            Object.values(control.controls).forEach( control => control.markAsTouched());
          } else {
            control.markAsTouched();
          }
        });
      }
    }
    const values = this.esquemaForm.getRawValue();
    const esquemaContent = (document.getElementById('esquemaContent') as HTMLInputElement).value
    if (this.esquema) {
      this.isSavingChange.emit(true);
      this.uploadsService.updateEsquemaContent(this.esquema.id, null, this.esquema.contentPath, this.datafile.id, esquemaContent, 'update')
      .then(updateResponse=>{
        this.esquemaService.updateEsquema(this.esquema.id, values.title, updateResponse.filePath, this.datafile.id)
        .then(response=>{
          // Esquemas
          this.esquemasService.getEsquemasByDatafile(this.datafile.id);
          this.esquemasService.getEsquemaUpdateListener().subscribe((esquemaData: {esquemas: Esquema[]})=>{
            this.esquemasChange.emit(esquemaData.esquemas);
            this.esquemaForm.reset();
            this.esquemaChange.emit(null);
            this.isSavingChange.emit(false);  
          }); 
        })
        .catch(err=>{
          console.log("Error on onUpdateContent (edit mode) method: "+err.message.message);
        });
      })
      .catch(err=>{
        console.log("Error on onSave (edit mode) method: "+err.message.message);
      });
    } else {
      this.isAddingChange.emit(true);
      (document.getElementById('esquemaContent') as HTMLInputElement).value = ""
      console.log(this.file.name)
      console.log(typeof(esquemaContent))
      this.uploadsService.updateEsquemaContent(null, this.file.name, null, this.datafile.id, esquemaContent, 'create')
      .then(updateResponse=>{
        this.esquemaService.addEsquema(values.title, this.datafile.id, updateResponse.filePath, 'create')
        .then(response=>{
          // Esquemas
          this.esquemasService.getEsquemasByDatafile(this.datafile.id);
          this.esquemasService.getEsquemaUpdateListener().subscribe((esquemaData: {esquemas: Esquema[]})=>{
            this.esquemasChange.emit(esquemaData.esquemas);
            this.esquemaForm.reset();
            this.esquemaChange.emit(null);
            this.isAddingChange.emit(false);  
          }); 
        })
        .catch(err=>{
          console.log("Error on onUpdateContent (create mode) method: "+err.message.message);
        });
      })
      .catch(err=>{
        console.log("Error on onSave (create mode) method: "+err.message.message);
      });

    }
  }

  onCancel() {
    this.esquemaForm.reset();
    (document.getElementById('esquemaContent') as HTMLInputElement).value = ""
    this.esquemaChange.emit(null);
    this.esquemaForm.patchValue({esquemaPath: null});
    this.invalidFile = false;
  }
}


