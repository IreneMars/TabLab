import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from 'src/app/services/auth.service';
import { Workspace } from 'src/app/models/workspace.model';
import { WorkspacesService } from '../../../services/workspaces.service';

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
export class WorkspaceListComponent implements OnInit {
  userId                   : string;
  userIsAuthenticated      : boolean = false;
  isLoading                : boolean = false;
  displayedColumns         : string[] = ['title', 'description', 'creationMoment', 'users'];
  workspaces               : Workspace[] = [];
  totalWorkspaces          : number = 0;
  workspacesPerPage        : number = 2;
  currentPage              : number = 1;
  dataSource               : any = null;
  pageSizeOptions          : number[] = [1, 2, 5, 10];
  @ViewChild(MatSort) sort : MatSort;

  constructor( public workspacesService: WorkspacesService, private authService: AuthService) { }


  ngOnInit() {
    this.isLoading = true;
    this.workspacesService.getWorkspaces(this.workspacesPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    //Workspaces
    this.workspacesService.getWorkspaceUpdateListener()
    .subscribe( (workspaceData: {workspaces: Workspace[], workspaceCount: number, totalWorkspaces:number}) => {
      this.isLoading = false;
      this.totalWorkspaces = workspaceData.totalWorkspaces;
      this.workspaces = workspaceData.workspaces;
      this.dataSource = new MatTableDataSource(this.workspaces);
      this.dataSource.sort = this.sort;
    });
    //Users by workspace
    this.workspaces.map(function(workspace) {
      this.authService.getUsersById(workspace.id).subscribe((usersData: {users: any[]}) => {
        this.isLoading = false;
        workspace['users'] = usersData.users;
      });
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    //Auth
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
  }

  onChangedPage( pageData: PageEvent ) {
    this.currentPage = pageData.pageIndex + 1;
    this.workspacesPerPage = pageData.pageSize;
    this.workspacesService.getWorkspaces(this.workspacesPerPage, this.currentPage);
  }

}
