import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Activity } from '../models/activity.model';

const BACKEND_URL = environment.apiUrl + '/activities/';

@Injectable({providedIn: 'root'})
export class ActivitiesService {
  private activities: any[] = [];
  private activitiesUpdated = new Subject<{activities: any[]}>();
  
  constructor(private http: HttpClient) {}
  
  getActivityUpdateListener() {
    
    return this.activitiesUpdated.asObservable();
  }
  
  getActivitiesByUser(userId: String) {
    this.http.get<{message: string, activities: any[]}>(BACKEND_URL +'user/'+ userId)
      .pipe(map( (activityData) => {
        return { 
            activities: activityData.activities.map(activity => {
              
              return {
                id: activity._id,
                message: activity.message,
                workspace: activity.workspace,
                workspaceTitle: activity.workspaceTitle,
                author: activity.author,
                authorName: activity.authorName,
                coleccion: activity.coleccion,
                coleccionTitle: activity.coleccionTitle,
                datafile: activity.datafile,
                datafileTitle: activity.datafileTitle,
                creationMoment: activity.creationMoment
              };
        }),
      };
      }))
      .subscribe((transformedActivityData) => {
        this.activities = transformedActivityData.activities;
        this.activitiesUpdated.next({
          activities: [...this.activities], // para hacer una verdadera copia y no afectar al original
        });
    });
  }

  getActivitiesByWorkspace(workspaceId: String) {
    this.http.get<{message: string, activities: any[]}>(BACKEND_URL +'workspace/'+ workspaceId)
      .pipe(map( (activityData) => {
        return { 
            activities: activityData.activities.map(activity => {
              return {
                id: activity._id,
                message: activity.message,
                workspace: activity.workspace,
                workspaceTitle: activity.workspaceTitle,
                author: activity.author,
                authorName: activity.authorName,
                coleccion: activity.coleccion,
                coleccionTitle: activity.coleccionTitle,
                datafile: activity.datafile,
                datafileTitle: activity.datafileTitle,
                creationMoment: activity.creationMoment
              };
        }),
      };
      }))
      .subscribe((transformedActivityData) => {
        this.activities = transformedActivityData.activities;
        this.activitiesUpdated.next({
          activities: [...this.activities], // para hacer una verdadera copia y no afectar al original
        });
    });
  }
}
