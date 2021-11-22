import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from 'src/app/services/auth.service';
import { Workspace } from 'src/app/models/workspace.model';
import { WorkspacesService } from '../../../services/workspaces.service';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../../../services/users.service';

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

  constructor( private authService: AuthService, public workspacesService: WorkspacesService, public usersService: UsersService) { }


  ngOnInit() {
    this.isLoading = true;
    // Current User
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
      //Workspaces
      this.workspacesService.getWorkspaces(this.workspacesPerPage, this.currentPage);
      this.workspacesService.getWorkspaceUpdateListener()
      .subscribe( (workspaceData: {workspaces: Workspace[], workspaceCount: number, totalWorkspaces:number}) => {
        this.totalWorkspaces = workspaceData.totalWorkspaces;
        this.workspaces = workspaceData.workspaces;
        this.dataSource = new MatTableDataSource(this.workspaces);
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      });
    }
  }

  onChangedPage( pageData: PageEvent ) {
    this.currentPage = pageData.pageIndex + 1;
    this.workspacesPerPage = pageData.pageSize;
    this.workspacesService.getWorkspaces(this.workspacesPerPage, this.currentPage);
  }

}
