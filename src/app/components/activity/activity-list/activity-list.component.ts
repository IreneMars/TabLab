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
  activities            : Activity[];
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
      this.activitiesService.getActivityUpdateListener().subscribe((activityData: {activities: any}) => {
        this.activities = activityData.activities;
       
        for (var activity of this.activities){
          var workspaceLink :string = '<a href="'+environment.host+'workspace/'+activity.workspace+'">'+activity.workspaceTitle+'</a>'
          activity.message = activity.message.replace("{{workspace}}",workspaceLink);
          
          activity.message = activity.message.replace("{{author}}",activity.authorName);
          if (activity.coleccionTitle){
            var coleccionLink :string = '<a href="'+environment.host+'workspace/'+activity.workspace+'">'+activity.coleccionTitle+'</a>'
            activity.message = activity.message.replace("{{coleccion}}",coleccionLink);
          } 
          if (activity.datafileTitle) {
            var datafileLink :string = '<a href="'+environment.host+'workspace/'+activity.workspace+'/datafile/'+activity.datafile+'">'+activity.datafileTitle+'</a>'
            activity.message = activity.message.replace("{{datafile}}",datafileLink);
          }       
        }
      });

    }

  }
}




