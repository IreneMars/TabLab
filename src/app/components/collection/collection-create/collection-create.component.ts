import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/models/activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { CollectionsService } from 'src/app/services/collections.service';
import { ActivitiesService } from '../../../services/activities.service';

@Component({
  selector: 'app-collection-create',
  templateUrl: './collection-create.component.html',
})
export class CollectionCreateComponent implements OnInit{
  userId                          : string = "";
  userIsAuthenticated             : boolean = false;
  collectionForm                  : FormGroup;
  isSaving                        : boolean = false;
  invalidTitle                    : boolean = false;
  workspaceId                     : string;
  @Input() collections            : any[];
  @Output() collectionsChange     : EventEmitter<any[]> = new EventEmitter();
  @Input() activities             : Activity[];
  @Output() activitiesChange      : EventEmitter<Activity[]> = new EventEmitter();
  @Input() editMode               : boolean;
  @Output() editModeChange        : any = new EventEmitter();
  @Input()  close                 : boolean;
  @Output() closeChange           : any = new EventEmitter();
  @Input()  collectionIndex       : number;
  @Output() collectionIndexChange : any = new EventEmitter();
  @Input()  editCollection        : any;
  @Input() hideButton             : boolean;
  @Output() hideButtonChange      : any = new EventEmitter();

  constructor(public collectionsService: CollectionsService, public authService: AuthService, private formBuilder: FormBuilder,
              public activitiesService: ActivitiesService, private activatedRoute: ActivatedRoute) {
      this.createForm();
}

  createForm() {
    this.collectionForm = this.formBuilder.group({
    title : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
      this.activatedRoute.paramMap.subscribe(params => {
        this.workspaceId = params.get('workspaceId');
        if (this.editCollection) {
          this.editMode = true;
          this.collectionForm.reset({
            title: this.editCollection.title
          });
        }
      });
    }
  }

  async onSave() {
    if (this.collectionForm.invalid){
      this.invalidTitle = true;
      return Object.values(this.collectionForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
  }
    this.isSaving = true;
    const values = this.collectionForm.getRawValue();

    if (this.editMode) {
      this.collectionsService.updateCollection(this.editCollection.id, values.title, this.workspaceId)
      .then(response=>{
        // Collections
        this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
        // Activities
        this.activitiesService.getActivitiesByWorkspace(this.workspaceId);
        this.isSaving = false;
        this.editModeChange.emit(false);
        this.hideButtonChange.emit(false);
        this.collectionForm.reset();         
      })      
      .catch(err=>{
        console.log("Error on onSave() (edit mode) method: "+err.message);
      });
    } else {
      this.collectionsService.addCollection(values.title, this.workspaceId)
      .then(response=>{
        // Collections
        this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
        // Activities
        this.activitiesService.getActivitiesByWorkspace(this.workspaceId);
        this.isSaving = false;
        this.hideButtonChange.emit(false);
        this.collectionForm.reset(); 
      })
      .catch(err=>{
        console.log("Error on onSave() (create mode) method: "+err.message);
      });
    }

  }

  onCancel() {
    this.collectionForm.reset();
    if (this.editMode) {
      this.hideButtonChange.emit(false);
      this.editModeChange.emit(false);
      this.collectionIndexChange.emit(undefined);
    } else {
        this.closeChange.emit(true);
    }
  }

}
