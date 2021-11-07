import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileEditComponent } from 'src/app/pages/profile/profile-edit/profile-edit.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  private userId: string;
  private user: any;
  isLoading = false;

  constructor( private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
    const data = this.authService.getUserData();
    if (data) {
      this.userId = data.userId;
      this.authService.getUser(this.userId).subscribe(userData => {
        this.user = {
            username: userData.user.username,
            name: userData.user.name,
            email: userData.user.email,
            photo: userData.user.photo,
            password: userData.user.password
        };
        this.isLoading = false;

      });
    }
  }

  onLogout() {
    this.authService.logout();
  }

}
