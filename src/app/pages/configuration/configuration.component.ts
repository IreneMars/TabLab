import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html'
})
export class ConfigurationComponent implements OnInit {
  isLoading           : boolean = false;
  userIsAuthenticated : boolean = false;
  userId              : string;
  user                : User;

  //private authListenerSubs: Subscription;

  constructor( private authService: AuthService, public activitiesService: ActivitiesService,
                public usersService: UsersService, ) {
  }


  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    const data = this.authService.getUserData();
    if (data) {
      this.userId = data.userId;
      this.usersService.getUser(this.userId).subscribe(userData => {
        this.user = {
          id: userData.user.id,
          username: userData.user.username,
          email: userData.user.email,
          password: userData.user.password,
          photo: userData.user.photo,
          name: userData.user.name,
          role: userData.user.role,
          status: userData.user.status,
          google: userData.user.google
        };
        this.isLoading = false;

      });
    }
  }

  onLogout() {
    this.authService.logout();
  }


}
