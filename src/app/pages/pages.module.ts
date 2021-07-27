import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkspaceListComponent } from './workspaces/workspace-list/workspace-list.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { InvitationListComponent } from './invitations/invitation-list/invitation-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { WorkspaceCreateComponent } from './workspaces/workspace-create/workspace-create.component';
import { WorkspaceDetailsComponent } from './workspaces/workspace-details/workspace-details.component';
import { DatafileDetailsComponent } from './datafiles/datafile-details/datafile-details.component';
import { TestDetailsComponent } from './tests/test-details/test-details.component';
import { TestExecuteComponent } from './tests/test-execute/test-execute.component';

@NgModule({
  declarations: [
    HomeComponent,
    WorkspaceDetailsComponent,
    WorkspaceListComponent,
    WorkspaceCreateComponent,
    InvitationListComponent,
    PostCreateComponent,
    PostListComponent,
    DatafileDetailsComponent,
    TestDetailsComponent,
    TestExecuteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
