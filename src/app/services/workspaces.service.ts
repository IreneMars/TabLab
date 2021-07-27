import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Workspace } from 'src/app/models/workspace.model';

const BACKEND_URL = environment.apiUrl + '/workspaces/';

@Injectable({providedIn: 'root'})
export class WorkspaceService {
  private workspaces: Workspace[] = [];
  private workspacesUpdated = new Subject<{workspaces: Workspace[], workspaceCount: number}>();

  constructor(private http: HttpClient, private router: Router) {

  }

  getWorkspaces(workspacesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${workspacesPerPage}&page=${currentPage}`;
    this.http.get<{message: string, workspaces: any, maxWorkspaces: number }>(BACKEND_URL + queryParams)
      .pipe(map( (workspaceData) => {
        return { workspaces: workspaceData.workspaces.map(workspace => {
          return {
            title: workspace.title,
            description: workspace.description,
            id: workspace._id,
            mandatory: workspace.mandatory,
          };
        }),
        maxWorkspaces: workspaceData.maxWorkspaces
      };
      }))
      .subscribe((transformedWorkspaceData) => {
        this.workspaces = transformedWorkspaceData.workspaces;
        this.workspacesUpdated.next({
          workspaces: [...this.workspaces], // para hacer una verdadera copia y no afectar al original
          workspaceCount: transformedWorkspaceData.maxWorkspaces});
    });
  }

  getWorkspaceUpdateListener() {
    return this.workspacesUpdated.asObservable();
  }

  getWorkspace(id: string) {
    return this.http.get<{workspace: any, orphanedDatafiles: any[], datafiles: any[], tests: any[]}>(BACKEND_URL + id);
  }

  addWorkspace( title: string, description: string, invitations: string[]) {
    const workspaceData = {'title': title, 'description': description, 'mandatory': false, 'invitations': invitations};
    console.log(workspaceData);
    this.http.post<{message: string, workspace: Workspace}>(
        BACKEND_URL,
        workspaceData
      )
      .subscribe( responseData => {
        this.router.navigate(['/workspaces']);
    });

  }

  updateWorkspace(id: string, title: string, description: string){
    var res;
    const workspace: Workspace = {'title': title, 'description': description, 'mandatory': null};
    this.http.put(BACKEND_URL + id, workspace).subscribe( response => {
      res = response;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject();
        } else {
          resolve(true);
        }
      }, 1000);
    });
  }

  deleteWorkspace(id: string) {
    return this.http.delete(BACKEND_URL +  id);
  }

}
