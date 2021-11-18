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
          workspaces: [...this.workspaces], // para hacer una verdadera copia y no afectar al original
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
              collection: datafile.coleccion,
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
    this.http.post<{message: string, workspace: any}>(BACKEND_URL, workspaceData).subscribe( responseData => {
      res = responseData;  
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Creating a workspace failed!');
        } else {
          resolve('Workspace added successfully!');
        }
      }, 1000);
    });

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
    this.http.put<{message: string, workspace: any}>(BACKEND_URL + workspaceId, workspace).subscribe( response => {
      res = response;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Updating a workspace failed!');
        } else {
          resolve('Workspace updated successfully!');
        }
      }, 1000);
    });
  }

  deleteWorkspace(workspaceId: string) {
    let res: any;
    this.http.delete<{message: string}>(BACKEND_URL +  workspaceId).subscribe( responseData => {
      res = responseData;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Deleting a workspace failed!');
        } else {
          resolve('Workspace deleted successfully!');
        }
      }, 1000);
    });
  }

}
