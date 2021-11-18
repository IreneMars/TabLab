import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Collection } from 'src/app/models/collection.model';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from 'src/app/services/datafiles.service';
import { CollectionsService } from '../../../services/collections.service';

@Component({
  selector: 'app-datafile-edit',
  templateUrl: './datafile-edit.component.html',
})
export class DatafileEditComponent implements OnInit{
  @Input() edit;
  @Input() datafile;
  @Input() datafileId;
  @Input() workspaceId;
  @Output() editChange   : EventEmitter<boolean> = new EventEmitter<boolean>();
  collections            : Collection[];

  datafileEditForm: FormGroup;
  loading = false;
  collectionPicked:string=null;
  userIsAuthenticated = false;
  userId: string;

  constructor(public datafileService: DatafileService, public authService: AuthService,  private router: Router,
              private formBuilder: FormBuilder, public collectionsService: CollectionsService) {
    this.createForm();
  }

  createForm() {
    this.datafileEditForm = this.formBuilder.group({
      title       : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description : ['', [Validators.maxLength(200)]],
      collection  :  ['', ],
    });
  }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
    this.datafileEditForm.reset({
      title: this.datafile.title,
      description: this.datafile.description,
    });
    // Collections
    this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
    this.collectionsService.getCollectionUpdateListener().subscribe( (collectionData: {collections: Collection[]}) => {
      this.collections = collectionData.collections;
    });
  }

  get invalidTitle() {
    return this.datafileEditForm.get('title').invalid && this.datafileEditForm.get('title').touched;
  }

  get invalidDescription() {
    return this.datafileEditForm.get('description').invalid && this.datafileEditForm.get('description').touched;
  }
  onCollectionPicked(event: Event) {
    const collectionId = (event.target as HTMLInputElement).value;
    this.collectionPicked = collectionId;
  }
  
  async onSave() {
    if (this.datafileEditForm.invalid){
      return Object.values(this.datafileEditForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }

    const values = this.datafileEditForm.getRawValue();

    await this.datafileService.updateDatafile(this.datafileId, values.title, values.description, this.collectionPicked);
    this.datafileEditForm.reset();
    this.editChange.emit(false);
    window.location.reload();

  }

  onCancel() {
    this.datafileEditForm.reset();
    this.editChange.emit(false);
  }

}
