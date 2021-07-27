import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InvitationCreateComponent } from './invitation/invitation-create/invitation-create.component';
import { InvitationListComponent } from '../pages/invitations/invitation-list/invitation-list.component';
import { WorkspaceEditComponent } from './workspace/workspace-edit/workspace-edit.component';
import { CollectionCreateComponent } from './collection/collection-create/collection-create.component';
import { DatafileCreateComponent } from './datafile/datafile-create/datafile-create.component';
import { DatafileEditComponent } from './datafile/datafile-edit/datafile-edit.component';
import { EsquemaListComponent } from './esquemas/esquema-list/esquema-list.component';
import { EsquemaCreateComponent } from './esquemas/esquema-create/esquema-create.component';
import { ConfigurationListComponent } from './configuration/configuration-list/configuration-list.component';
import { TestListComponent } from './test/test-list/test-list.component';
import { ConfigurationCreateComponent } from './configuration/configuration-create/configuration-create.component';
import { TestCreateComponent } from './test/test-create/test-create.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InvitationCreateComponent,
    WorkspaceEditComponent,
    CollectionCreateComponent,
    DatafileCreateComponent,
    DatafileEditComponent,
    EsquemaListComponent,
    EsquemaCreateComponent,
    ConfigurationListComponent,
    TestListComponent,
    ConfigurationCreateComponent,
    TestCreateComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InvitationCreateComponent,
    WorkspaceEditComponent,
    CollectionCreateComponent,
    DatafileCreateComponent,
    DatafileEditComponent,
    EsquemaListComponent,
    EsquemaCreateComponent,
    ConfigurationListComponent,
    TestListComponent,
    ConfigurationCreateComponent,
    TestCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class ComponentsModule { }
