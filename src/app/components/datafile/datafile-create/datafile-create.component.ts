import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/models/activity.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from 'src/app/services/datafiles.service';
import { CollectionsService } from '../../../services/collections.service';
import { WorkspacesService } from '../../../services/workspaces.service';
import { Collection } from '../../../models/collection.model';

@Component({
  selector: 'app-datafile-create',
  templateUrl: './datafile-create.component.html',
  styleUrls: ['./datafile-create.component.css']
})
export class DatafileCreateComponent implements OnInit{
  datafileForm                      : FormGroup;
  userIsAuthenticated               : boolean = false;
  userId                             : string;
  collections                : Collection[];                        
  @Input() workspaceId              : string;
  
  @Input() isSaving                 : boolean = false;
  @Output() isSavingChange          : EventEmitter<boolean> = new EventEmitter<boolean>();
  
  @Input() activities             : Activity[];
  @Output() activitiesChange      : EventEmitter<Activity[]> = new EventEmitter();
  
  constructor(public datafileService: DatafileService, public route: ActivatedRoute,
              private formBuilder: FormBuilder, private authService: AuthService, 
              public collectionsService: CollectionsService, public workspacesService: WorkspacesService,
              public activitiesService: ActivitiesService) {
                this.createForm();
                this.datafileForm.reset({
                  title: '',
                  description: '',
                  collection: 'Ninguna'
                });
              }

  ngOnInit(){
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
      this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
      this.collectionsService.getCollectionUpdateListener().subscribe(collectionData=>{
        this.collections=collectionData.collections;
      });
    }
  }
  

  createForm() {
    this.datafileForm = this.formBuilder.group({
      title       : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      delimiter   : [''],
      description : ['', [Validators.maxLength(200)]],
      collection  : [''],
    });
  }

  get invalidTitle() {
    return this.datafileForm.get('title').invalid && this.datafileForm.get('title').touched;
  }

  get invalidDescription() {
    return this.datafileForm.get('description').invalid && this.datafileForm.get('description').touched;
  }

  get invalidDelimiter() {
    return this.datafileForm.get('delimiter').invalid && this.datafileForm.get('delimiter').touched;
  }

  async onSave() {
    this.isSavingChange.emit(true);
    if (this.datafileForm.invalid){
      this.isSavingChange.emit(false);
      return Object.values(this.datafileForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    const values = this.datafileForm.getRawValue();
    if(values.collection==='Ninguna'){
      values.collection = null;
    }
    this.datafileService.addDatafile(values.title, values.delimiter, values.description, values.collection, this.workspaceId)
    .then((response)=>{
      if(values.collection){
        this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
        // Activities
        this.activitiesService.getActivitiesByWorkspace(this.workspaceId);
        this.datafileForm.reset({
          title: '',
          description: '',
          collection: 'Ninguna'
        });
        this.isSavingChange.emit(false);   
      }else{
        this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
        // Activities
        this.activitiesService.getActivitiesByWorkspace(this.workspaceId);          
        this.datafileForm.reset({
          title: '',
          description: '',
          collection: 'Ninguna'
        });
        this.isSavingChange.emit(false);          
      
      }
    })
    .catch(err=>{
      console.log("Error on onSave() method: "+err.message);
    })
    
    
  }
}
