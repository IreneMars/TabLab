import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Workspace } from 'src/app/models/workspace.model';
import { WorkspaceService } from '../../../services/workspaces.service';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.css']
})
export class WorkspaceListComponent implements OnInit, OnDestroy{
  displayedColumns: string[] = ['title', 'description', 'creationMoment', 'users'];
  clickedRows = new Set<Workspace>();
  // dataSource = [];
  isLoading = false;
  workspaces: Workspace[] = [];
  totalWorkspaces = 0;
  workspacesPerPage = 2;
  currentPage = 1;
  dataSource = null;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  private workspacesSub: Subscription;
  private authStatusSub: Subscription;

  @ViewChild(MatSort) sort: MatSort;

  constructor( public workspacesService: WorkspaceService, private authService: AuthService) { }


  ngOnInit() {
    this.isLoading = true;
    this.workspacesService.getWorkspaces(this.workspacesPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    // this.workspaces = this.postsService.getPosts();
    // tslint:disable-next-line: deprecation
    this.workspacesSub = this.workspacesService.getWorkspaceUpdateListener()
    .subscribe( (workspaceData: {workspaces: Workspace[], workspaceCount: number}) => {
      this.isLoading = false;
      this.totalWorkspaces = workspaceData.workspaceCount;
      this.workspaces = workspaceData.workspaces;

      // console.log('On Init');
      // console.log(this.totalWorkspaces);
      // console.log(this.workspaces);
      const dataSource = new MatTableDataSource(this.workspaces);
      dataSource.sort = this.sort;
      // console.log('Ng After Init');
      // console.log(dataSource.data);
      // console.log(dataSource.sort);
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
  }

  onChangedPage( pageData: PageEvent ) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.workspacesPerPage = pageData.pageSize;
    this.workspacesService.getWorkspaces(this.workspacesPerPage, this.currentPage);
    console.log('New call');
    console.log(pageData);
    console.log('Current page: '+ this.currentPage);
    console.log('Workspace per page: '+ this.workspacesPerPage);

  }

  ngOnDestroy() {
    this.workspacesSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
