import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { InvitationService } from '../../services/invitations.service';
import { Invitation } from 'src/app/models/invitation.model';
import { AuthStatusService } from 'src/app/services/authStatus.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{
  isLoading           : boolean = false;
  hasInvitations   : boolean = false;
  userId              : string;
  userIsAuthenticated : boolean = false;
  user                : User = null;

  constructor( private authService: AuthService, private authStatusService: AuthStatusService,
               public usersService: UsersService, public invitationsService: InvitationService ) {
  }
  
  isAdmin(){
    return this.user && this.user.role=="admin";
  }
  
  ngOnInit(): void {
    this.isLoading = true;
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authService.getAuthStatusListener().subscribe(authStatus=>{
      this.initResources(authStatus);
    });
    if(this.userIsAuthenticated){
      this.initResources(this.userIsAuthenticated)
    }else{
      this.isLoading = false;
    }

  }
  
  initResources(authStatus:boolean){
    this.userIsAuthenticated = authStatus;
      console.log("User is authenticated: "+authStatus)
      this.userId = this.authService.getUserId();
      // Current User
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
        
        // Invitations
        this.invitationsService.getInvitationsHeader().subscribe( (invitationData: {invitations: Invitation[]}) => {
          var invitations = invitationData.invitations;
          for (var invitation of invitations) {
            if(invitation.status==='pending'){
              this.hasInvitations = true;
            }
          }
          this.isLoading = false;
        });
      });
  }


  onLogout() {
    this.isLoading = false;
    this.authService.logout();
  }

  checkInvitations(){
    if(this.userIsAuthenticated){
      // Invitations
      this.invitationsService.getInvitationsHeader().subscribe( (invitationData: {invitations: Invitation[]}) => {
        var invitations = invitationData.invitations;
        for (var invitation of invitations) {
          if(invitation.status==='pending'){
            this.hasInvitations = true;
            return true;
          }
        }
      });
    }else{
      return false;
    }
  }

}
