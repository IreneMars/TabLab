import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Workspace } from 'src/app/models/workspace.model';

const BACKEND_URL = environment.apiUrl + '/roles/';

@Injectable({providedIn: 'root'})
export class RolesService {
  private workspaces: Workspace[] = [];
  private workspacesUpdated = new Subject<{workspaces: Workspace[], workspaceCount: number}>();

  constructor(private http: HttpClient, private router: Router) {

  }

  deleteRole(id: string){
    return this.http.delete(BACKEND_URL +  id);
  }
}
