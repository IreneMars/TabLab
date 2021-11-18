import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { GlobalConfiguration } from "../models/globalConfiguration.model";

const BACKEND_URL = environment.apiUrl + '/gconfiguration/';

@Injectable({providedIn: 'root'})
export class GlobalConfigurationService {
  
    constructor(private http: HttpClient) {}

    getGlobalConfig() {
      return this.http.get<{message: string, globalConfiguration: any}>(BACKEND_URL);
    }

    updateGlobalConfig(globalConfigurationId: string, limitUsers: number, limitWorkspaces: number){
        const globalConfiguration: GlobalConfiguration = { 
          'id': globalConfigurationId,
          'limitUsers': limitUsers, 
          'limitWorkspaces': limitWorkspaces 
        };
        return this.http.put<{message: string, collection: any}>(BACKEND_URL, globalConfiguration).toPromise();
      }
}