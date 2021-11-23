import { Component, Input, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Activity } from 'src/app/models/activity.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit{
  userId                : string = "";
  @Input() workspaceId  : string = "";
  userIsAuthenticated   : boolean = false;
  @Input() activities            : Activity[];
  constructor(private authService: AuthService, public activitiesService: ActivitiesService){}

  ngOnInit(){
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
      // Activities
      if(this.workspaceId!=''){
        this.activitiesService.getActivitiesByWorkspace(this.workspaceId);
      }else{
        this.activitiesService.getActivitiesByUser(this.userId);

      }
      this.activitiesService.getActivityUpdateListener().subscribe((activityData: {activities: Activity[]}) => {
        this.activities = activityData.activities;
        // http://localhost:3000
        // environment.SOCKET_ENDPOINT
        // [routerLink]="['/workspace', workspaceId,'datafile',datafileId,'test',test.id]"
        for (var activity of this.activities){
          var workspaceLink :string = '<a href="'+environment.host+'workspace/'+activity.workspace['id']+'">'+activity.workspace['title']+'</a>'
          activity.message = activity.message.replace("{{workspace}}",workspaceLink);
          
          activity.message = activity.message.replace("{{author}}",activity.author['name']);
          if (activity.coleccion){
            var coleccionLink :string = '<a href="'+environment.host+'workspace/'+activity.workspace['id']+'">'+activity.coleccion['title']+'</a>'
            activity.message = activity.message.replace("{{coleccion}}",coleccionLink);
          } 
          if (activity.datafile) {
            var datafileLink :string = '<a href="'+environment.host+'workspace/'+activity.workspace['id']+'/datafile/'+activity.datafile['id']+'">'+activity.datafile['title']+'</a>'
            activity.message = activity.message.replace("{{datafile}}",datafileLink);
          }       
        }
      });

    }

  }
}




