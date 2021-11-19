import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AuthService } from 'src/app/services/auth.service';
import { AuthStatusService } from '../../services/authStatus.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  userIsAuthenticated      : boolean = false;
  userId                   : string;
  user                     : User;

  constructor( private authService: AuthService, private authStatusService: AuthStatusService, 
               public activitiesService: ActivitiesService, public usersService: UsersService) {
  }
  
  ngOnInit(): void {
    // Current User
    this.userIsAuthenticated = this.authService.getIsAuth();
    if(this.userIsAuthenticated){
      const data = this.authService.getUserData();
      this.userId = data.userId;
      this.usersService.getUser(this.userId).subscribe(userData => {
        this.user = {
            id: userData.user._id,
            username: userData.user.username,
            email: userData.user.email,
            password: userData.user.password,
            photo: userData.user.photo,
            name: userData.user.name,
            role: userData.user.role,
            status: userData.user.status,
            google: userData.user.google
          }
          this.authStatusService.sendAuthStatus(true,this.user);//Its principal use is after login()
        });
      }

    }

  onLogout() {
    this.authService.logout();
  }

}
