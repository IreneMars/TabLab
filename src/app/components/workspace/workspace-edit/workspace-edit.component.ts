import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { Workspace } from '../../../models/workspace.model';

@Component({
  selector: 'app-workspace-edit',
  templateUrl: './workspace-edit.component.html',
})
export class WorkspaceEditComponent implements OnInit, OnDestroy{
  userId               : string;
  userIsAuthenticated  : boolean = false;
  loading              : boolean = false;
  workspaceEditForm    : FormGroup;
  
  @Input() edit        : boolean;
  @Input() workspace   : Workspace;
  @Input() workspaceId : string;
  @Output() editChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  private authStatusSub: Subscription;

  constructor(public workspaceService: WorkspacesService, public authService: AuthService,  private router: Router,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.workspaceEditForm = this.formBuilder.group({
      title       : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description : ['', [Validators.maxLength(200)]],
    });
  }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
    this.workspaceEditForm.reset({
      title: this.workspace.title,
      description: this.workspace.description,
    });
  }

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

  get invalidTitle() {
    return this.workspaceEditForm.get('title').invalid && this.workspaceEditForm.get('title').touched;
  }

  get invalidDescription() {
    return this.workspaceEditForm.get('description').invalid && this.workspaceEditForm.get('description').touched;
  }

  async onSave() {
    if (this.workspaceEditForm.invalid){
      return Object.values(this.workspaceEditForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }

    this.loading = true;
    const values = this.workspaceEditForm.getRawValue();

    await this.workspaceService.updateWorkspace(this.workspaceId, values.title, values.description);
    this.workspaceEditForm.reset();
    this.editChange.emit(false);
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => {
      this.router.navigate([`/workspace/${this.workspaceId}`]);
    }).catch( err => {});
    this.loading = false;
  }

  onCancel() {
    this.workspaceEditForm.reset();
    this.editChange.emit(false);
  }

}
