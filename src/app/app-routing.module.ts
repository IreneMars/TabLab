import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkspaceListComponent } from './pages/workspaces/workspace-list/workspace-list.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { InvitationListComponent } from './pages/invitations/invitation-list/invitation-list.component';
import { WorkspaceCreateComponent } from './pages/workspaces/workspace-create/workspace-create.component';
import { WorkspaceDetailsComponent } from './pages/workspaces/workspace-details/workspace-details.component';
import { DatafileDetailsComponent } from './pages/datafiles/datafile-details/datafile-details.component';
import { TestDetailsComponent } from './pages/tests/test-details/test-details.component';
import { TestExecuteComponent } from './pages/tests/test-execute/test-execute.component';
import { ProfileEditComponent } from './pages/profile/profile-edit/profile-edit.component';
import { ProfileAccountEditComponent } from './pages/profile/profile-account-edit/profile-account-edit.component';
import { GlobalConfigurationComponent } from './pages/globalConfiguration/globalConfiguration.component';

const routes: Routes = [
  // Authentication (login, signup)
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},
  // Global Configuration
  { path: 'gconfiguration', component: GlobalConfigurationComponent, canActivate: [AuthGuard]},
  // Datafiles (details)
  { path: 'workspace/:workspaceId/datafile/:datafileId', component: DatafileDetailsComponent, canActivate: [AuthGuard]},
  // Home
  { path: '', component: HomeComponent},
  // Invitations (list, create)
  //{ path: 'invite', component: InvitationCreateComponent, canActivate: [AuthGuard]},//
  { path: 'invitations', component: InvitationListComponent, canActivate: [AuthGuard]},
  // Profile (account edit, details, edit)
  { path: 'account/:userId/edit', component: ProfileAccountEditComponent, canActivate: [AuthGuard]},
  { path: 'profile/:userId/edit', component: ProfileEditComponent, canActivate: [AuthGuard]},
  // Tests (details)
  { path: 'workspace/:workspaceId/datafile/:datafileId/test/:testId', component: TestDetailsComponent, canActivate: [AuthGuard]},
  { path: 'workspace/:workspaceId/runner', component: TestExecuteComponent, canActivate: [AuthGuard]},
  { path: 'workspace/:workspaceId/runner/:testId', component: TestExecuteComponent, canActivate: [AuthGuard]},
  // Workspaces (create, details, list)
  { path: 'workspace/create', component: WorkspaceCreateComponent, canActivate: [AuthGuard]},
  { path: 'workspace/:workspaceId', component: WorkspaceDetailsComponent, canActivate: [AuthGuard]},
  { path: 'workspaces', component: WorkspaceListComponent, canActivate: [AuthGuard]},
  
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {}
