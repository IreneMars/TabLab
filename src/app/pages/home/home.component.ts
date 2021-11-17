import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AuthService } from 'src/app/services/auth.service';
import { AuthStatusService } from '../../services/authStatus.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  userIsAuthenticated      : boolean = false;
  userId                   : string;
  user                     : User;
  private authStatusSub    : Subscription;

  constructor( private authService: AuthService, private authStatusService: AuthStatusService, 
               public activitiesService: ActivitiesService, public usersService: UsersService) {
  }
  
  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    if(this.userIsAuthenticated){
      const data = this.authService.getUserData();
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
          }
          this.authStatusService.sendAuthStatus(true,this.user);
        });
      }
      this.authStatusSub = this.authService
        .getAuthStatusListener()
        .subscribe(isAuthenticated => {
          this.userIsAuthenticated = isAuthenticated;
        });
    }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    //this.authStatusSub.unsubscribe();
  }


}
