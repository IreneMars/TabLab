import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Workspace } from 'src/app/models/workspace.model';

const BACKEND_URL = environment.apiUrl + '/workspaces/';

@Injectable({providedIn: 'root'})
export class WorkspacesService {
  private workspaces: Workspace[] = [];
  private workspacesUpdated = new Subject<{workspaces: Workspace[], workspaceCount: number, totalWorkspaces: number}>();
  
  constructor(private http: HttpClient) {}
  
  getWorkspaceUpdateListener() {
    return this.workspacesUpdated.asObservable();
  }
  
  getWorkspaces(workspacesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${workspacesPerPage}&page=${currentPage}`;
    this.http.get<{message: string, workspaces: any, maxWorkspaces: number, totalWorkspaces: number }>(BACKEND_URL + queryParams)
      .pipe(map( (workspaceData) => {
        return { workspaces: workspaceData.workspaces.map(workspace => {
          return {
            id: workspace._id,
            title: workspace.title,
            description: workspace.description,
            creationMoment: workspace.creationMoment,
            mandatory: workspace.mandatory,
            owner: workspace.owner,
            users: workspace.users
          };
        }),
        maxWorkspaces: workspaceData.maxWorkspaces,
        totalWorkspaces: workspaceData.totalWorkspaces
      };
      }))
      .subscribe((transformedWorkspaceData) => {
        this.workspaces = transformedWorkspaceData.workspaces;
        this.workspacesUpdated.next({
          workspaces: [...this.workspaces],
          workspaceCount: transformedWorkspaceData.maxWorkspaces,
          totalWorkspaces: transformedWorkspaceData.totalWorkspaces});
    });
  }
  
  getWorkspace(workspaceId: string) {
    return this.http.get<{message: string, workspace: any, orphanedDatafiles: any[], datafilesWTests: any[], tests: any[]}>(BACKEND_URL + workspaceId)
    .pipe(map( (workspaceData) => {
      return { 
        workspace: workspaceData.workspace,
        orphanedDatafiles: workspaceData.orphanedDatafiles
          .map(datafile => {
            return {
              id: datafile._id,
              title: datafile.title,
              description: datafile.description,
              contentPath: datafile.contentPath,
              errLimit: datafile.errLimit,
              coleccion: datafile.coleccion,
              workspace: datafile.workspace
            };
          })  
      };
    }));
  }

  addWorkspace(title: string, description: string, mandatory: boolean, invitations: string[]) {
    let res: any;
    const workspaceData = {
      'id':null,
      'title': title, 
      'description': description, 
      'creationMoment': null,
      'mandatory': mandatory,
      'invitations': invitations,
      'owner':null
    };
    return this.http.post<{message: string, workspace: any}>(BACKEND_URL, workspaceData).toPromise();

  }

  updateWorkspace(workspaceId: string, title: string, description: string){
    let res: any;
    const workspace: Workspace = {
      'id': workspaceId,
      'title': title, 
      'description': description, 
      'creationMoment': null,
      'mandatory': null,
      'owner':null
    };
    return this.http.put<{message: string, workspace: any}>(BACKEND_URL + workspaceId, workspace).toPromise();
  }

  deleteWorkspace(workspaceId: string) {
    return this.http.delete<{message: string}>(BACKEND_URL +  workspaceId).toPromise();
  }

}
