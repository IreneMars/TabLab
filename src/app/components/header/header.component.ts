import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { InvitationService } from '../../services/invitations.service';
import { Invitation } from 'src/app/models/invitation.model';
import { AuthStatusService } from 'src/app/services/authStatus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoading           : boolean = false;
  pendingInvitation   : boolean = false;
  userId              : string;
  userIsAuthenticated : boolean = false;
  user                : User = null;
  invitationsSub      : Subscription;
  invitations         : Invitation[] = [];
  private authListenerSubs : Subscription;
  subscription: Subscription;

  constructor( private authService: AuthService, private authStatusService: AuthStatusService,
               public usersService: UsersService, public invitationsService: InvitationService ) {
  }
  
  checkUser(){
    this.subscription = this.authStatusService.currentAuthStatus.subscribe((authStatus:any) => {
      if (!this.user) {
        if(authStatus.user){
          this.user = authStatus.user;
          this.userIsAuthenticated = true;
        }
      }
    })
  }

  isAdmin(){
    var res = false;
    if (this.user && this.user.role=="admin") {
      res = true;     
    }
    return res;
  }
  
  ngOnInit(): void {
    this.isLoading = true;
    this.userIsAuthenticated = this.authService.getIsAuth();
    console.log("User is authenticated: "+this.authService.getIsAuth())
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
        this.invitationsService.getInvitationsHeader().subscribe( (invitationData: {invitations: Invitation[]}) => {
          this.invitations = invitationData.invitations;
          for (var invitation of this.invitations) {
            if(invitation.status==='pending'){
              this.pendingInvitation = true;
              break;
            }
          }
          this.isLoading = false;
        });
      });
    }else{
      this.isLoading = false;
    }
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });

  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  

}
