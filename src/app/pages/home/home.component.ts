import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit{
  userIsAuthenticated      : boolean = false;
  userId                   : string;
  user                     : User;

  constructor( private authService: AuthService, public activitiesService: ActivitiesService, 
               public usersService: UsersService) {
  }
  
  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    if(this.userIsAuthenticated){
      const data = this.authService.getUserData();
      this.userId = data.userId;
      // Current User
      this.usersService.getUser(this.userId);
      this.usersService.getUserUpdateListener().subscribe(userData => {
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
        });
      }

    }

  onLogout() {
    this.authService.logout();
  }

}
