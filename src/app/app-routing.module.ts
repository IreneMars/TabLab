import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkspaceListComponent } from './pages/workspaces/workspace-list/workspace-list.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { InvitationCreateComponent } from './components/invitation/invitation-create/invitation-create.component';
import { InvitationListComponent } from './pages/invitations/invitation-list/invitation-list.component';
import { WorkspaceCreateComponent } from './pages/workspaces/workspace-create/workspace-create.component';
import { WorkspaceDetailsComponent } from './pages/workspaces/workspace-details/workspace-details.component';
import { DatafileDetailsComponent } from './pages/datafiles/datafile-details/datafile-details.component';
import { TestDetailsComponent } from './pages/tests/test-details/test-details.component';
import { TestExecuteComponent } from './pages/tests/test-execute/test-execute.component';
import { ProfileDetailsComponent } from './pages/profile/profile-details/profile-details.component';
import { ProfileEditComponent } from './pages/profile/profile-edit/profile-edit.component';
import { ProfileAccountEditComponent } from './pages/profile/profile-account-edit/profile-account-edit.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';

const routes: Routes = [
  // Authentication (login, signup)
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},
  // Global Configuration
  { path: 'configuration', component: ConfigurationComponent, canActivate: [AuthGuard]},
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
  { path: 'profile/:userId', component: ProfileDetailsComponent, canActivate: [AuthGuard]},
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {}
