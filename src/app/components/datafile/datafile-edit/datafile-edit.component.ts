import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Collection } from 'src/app/models/collection.model';
import { Datafile } from 'src/app/models/datafile.model';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from 'src/app/services/datafiles.service';
import { CollectionsService } from '../../../services/collections.service';

@Component({
  selector: 'app-datafile-edit',
  templateUrl: './datafile-edit.component.html',
})
export class DatafileEditComponent implements OnInit{
  userIsAuthenticated  : boolean = false;
  userId               : string;
  isSaving             : boolean = false;
  datafileEditForm     : FormGroup;
  collections          : Collection[];
  @Input() edit        : boolean = false;
  @Input() datafileId  : string;
  @Input() workspaceId : string;
  @Output() editChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() datafile    : Datafile;
  @Output() datafileChange : EventEmitter<Datafile> = new EventEmitter<Datafile>();
  
  constructor(public datafileService: DatafileService, public authService: AuthService,  private router: Router,
              private formBuilder: FormBuilder, public collectionsService: CollectionsService) {
    this.createForm();
  }

  createForm() {
    this.datafileEditForm = this.formBuilder.group({
      title       : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description : ['', [Validators.maxLength(200)]],
      collection  : ['', ],
    });
  }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();  
      // Collections
      this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
      this.collectionsService.getCollectionUpdateListener().subscribe( (collectionData: {collections: Collection[]}) => {
        this.collections = collectionData.collections;
        var selectedCollection = this.datafile.coleccion;
        if (selectedCollection == null){
          selectedCollection = "None";
        }
        this.datafileEditForm.reset({
          title: this.datafile.title,
          description: this.datafile.description,
          collection: selectedCollection,
        });
      });
    }
  }
  
  get invalidTitle() {
    return this.datafileEditForm.get('title').invalid && this.datafileEditForm.get('title').touched;
  }

  get invalidDescription() {
    return this.datafileEditForm.get('description').invalid && this.datafileEditForm.get('description').touched;
  }
  
  async onSave() {
    this.isSaving = true;
    if (this.datafileEditForm.invalid){
      this.isSaving = false;
      return Object.values(this.datafileEditForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    const values = this.datafileEditForm.getRawValue();
    var selectedCollection = values.collection;
    if (selectedCollection == "None"){
      selectedCollection = null;
    }
    await this.datafileService.updateDatafile(this.datafileId, values.title, values.description, selectedCollection);
    this.datafileService.getDatafile(this.datafileId).subscribe((datafileData)=>{
      this.datafile = {
        id: datafileData.datafile._id,
        title: datafileData.datafile.title,
        description: datafileData.datafile.description,
        contentPath: datafileData.datafile.contentPath,
        errLimit: datafileData.datafile.errLimit,
        coleccion: datafileData.datafile.coleccion,
        workspace: datafileData.datafile.workspace,
      };
      this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
      this.datafileChange.emit(this.datafile);
      this.editChange.emit(false);
      this.datafileEditForm.reset();
      this.isSaving = false;
    });
  }

  onCancel() {
    this.datafileEditForm.reset();
    this.editChange.emit(false);
  }

}
