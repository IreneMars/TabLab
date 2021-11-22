import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Configuration } from '../models/configuration.model';

const BACKEND_URL = environment.apiUrl + '/configurations/';

@Injectable({providedIn: 'root'})
export class ConfigurationService {
  private configurations: any[] = [];
  private configurationsUpdated = new Subject<{configurations: any[]}>();
  constructor(private http: HttpClient) {}
  
  getConfigurationUpdateListener() {
    return this.configurationsUpdated.asObservable();
  }

  getConfiguration(configurationId: string) {
    return this.http.get<{message:string, configuration: any}>(BACKEND_URL + configurationId);
  }

  getConfigurationsByDatafile(datafileId: string) {
    return this.http.get<{message:string, configurations: any}>(BACKEND_URL + "datafile/" + datafileId)
    .pipe(map( (configurationData) => {
      return { 
        configurations: configurationData.configurations
        .map(configuration => {
          return {
            id: configuration._id,
            title: configuration.title,
            creationMoment: configuration.creationMoment,
            errorCode: configuration.errorCode, 
            extraParams: configuration.extraParams, 
            datafile: configuration.datafile
          };
        }),
      };
    }))
    .subscribe((transformedConfigurationData) => {
      this.configurations = transformedConfigurationData.configurations;
      this.configurationsUpdated.next({
        configurations: [...this.configurations]
      });
    });
  }
  
  addConfiguration(values: any, datafileId: string){
    const {title, errorCode, ...extraParams} = values;
    const configuration: Configuration = {
      'id':null,
      'title': title, 
      'creationMoment': null, 
      'errorCode': errorCode, 
      'extraParams': extraParams, 
      'datafile': datafileId
    };
    return this.http.post<{message: string, configuration: any}>(BACKEND_URL, configuration).toPromise();
  }
 
  updateConfiguration(configurationId: string, values: any, datafileId: string) {
    const {title, errorCode, ...extraParams} = values;
    const configuration: Configuration = {
      'id': configurationId,
      'title': title, 
      'creationMoment': null, 
      'errorCode': errorCode, 
      'extraParams': extraParams, 
      'datafile': datafileId
    };
    return this.http.put<{message: string, configuration: any}>(BACKEND_URL + configurationId, configuration).toPromise();
  }
  
  deleteConfiguration(configurationId: string){
    return this.http.delete<{message: string}>(BACKEND_URL + configurationId).toPromise();
  }
}
