import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { PostCreateComponent } from './pages/posts/post-create/post-create.component';

import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkspaceListComponent } from './pages/workspaces/workspace-list/workspace-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { InvitationCreateComponent } from './components/invitation/invitation-create/invitation-create.component';
import { InvitationListComponent } from './pages/invitations/invitation-list/invitation-list.component';
import { WorkspaceCreateComponent } from './pages/workspaces/workspace-create/workspace-create.component';
import { WorkspaceDetailsComponent } from './pages/workspaces/workspace-details/workspace-details.component';
import { DatafileDetailsComponent } from './pages/datafiles/datafile-details/datafile-details.component';
import { TestDetailsComponent } from './pages/tests/test-details/test-details.component';
import { TestExecuteComponent } from './pages/tests/test-execute/test-execute.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'workspaces', component: WorkspaceListComponent, canActivate: [AuthGuard] },
  { path: 'workspace/create', component: WorkspaceCreateComponent, canActivate: [AuthGuard] },
  { path: 'invitations', component: InvitationListComponent, canActivate: [AuthGuard] },
  { path: 'invite', component: InvitationCreateComponent, canActivate: [AuthGuard] },
  { path: 'posts', component: PostListComponent, canActivate: [AuthGuard]},
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'workspace/:workspaceId', component: WorkspaceDetailsComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'workspace/:workspaceId/datafile/:datafileId/test/:testId', component: TestDetailsComponent, canActivate: [AuthGuard] },
  { path: 'workspace/:workspaceId/datafile/:datafileId', component: DatafileDetailsComponent, canActivate: [AuthGuard] },
  {path: 'workspace/:workspaceId/runner', component: TestExecuteComponent, canActivate: [AuthGuard]},
  {path: 'workspace/:workspaceId/runner/:testId', component: TestExecuteComponent, canActivate: [AuthGuard]},
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) }, // './auth/auth.module#AuthModule'
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {}
