import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AuthService } from 'src/app/services/auth.service';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { Workspace } from '../../../models/workspace.model';

@Component({
  selector: 'app-workspace-edit',
  templateUrl: './workspace-edit.component.html',
})
export class WorkspaceEditComponent implements OnInit{
  userId                    : string;
  userIsAuthenticated       : boolean = false;
  isSaving                  : boolean = false;
  workspaceEditForm         : FormGroup;
  @Input() edit             : boolean;
  @Output() editChange      : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() workspace        : Workspace;
  @Output() workspaceChange : EventEmitter<Workspace> = new EventEmitter<Workspace>();


  constructor(public workspaceService: WorkspacesService, public authService: AuthService,
              public activitiesService: ActivitiesService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.workspaceEditForm = this.formBuilder.group({
      title       : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description : ['', [Validators.maxLength(200)]],
    });
  }

  ngOnInit(): void {
    // Current User
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.userId = this.authService.getUserId();

    this.workspaceEditForm.reset({
      title: this.workspace.title,
      description: this.workspace.description,
    });
  }

  get invalidTitle() {
    return this.workspaceEditForm.get('title').invalid && this.workspaceEditForm.get('title').touched;
  }

  get invalidDescription() {
    return this.workspaceEditForm.get('description').invalid && this.workspaceEditForm.get('description').touched;
  }

  async onSave() {
    this.isSaving = true;
    if (this.workspaceEditForm.invalid){
      this.isSaving = false;
      return Object.values(this.workspaceEditForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }

    const values = this.workspaceEditForm.getRawValue();
    await this.workspaceService.updateWorkspace(this.workspace.id, values.title, values.description);
    // Workspace
    console.log("Workspace Edit")
    this.workspaceService.getWorkspace(this.workspace.id).subscribe(workspaceData => {
      const workspace = {
        id: workspaceData.workspace._id,
        title: workspaceData.workspace.title,
        description: workspaceData.workspace.description,
        creationMoment: workspaceData.workspace.creationMoment,
        mandatory: workspaceData.workspace.mandatory,
        owner:workspaceData.workspace.owner
      };
      this.workspaceChange.emit(workspace);
      // Activities
      this.activitiesService.getActivitiesByWorkspace(this.workspace.id);
      this.editChange.emit(false);
      this.workspaceEditForm.reset();
      this.isSaving = false;
    });
  }

  onCancel() {
    this.workspaceEditForm.reset();
    this.editChange.emit(false);
  }

}
