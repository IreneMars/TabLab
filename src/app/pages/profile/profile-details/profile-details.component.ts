import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { WorkspacesService } from "src/app/services/workspaces.service";

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.css']
  })
  export class ProfileDetailsComponent implements OnInit{
    user: User;
    userId: string;
    isLoading: boolean = false;
    constructor(public authService: AuthService, public usersService: UsersService,
                public route: ActivatedRoute, public workspacesService: WorkspacesService) {}

    ngOnInit() {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            this.userId = paramMap.get('userId');
            this.isLoading = true;
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
        });    
    }
}