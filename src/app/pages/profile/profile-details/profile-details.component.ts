import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { AuthService } from "src/app/services/auth.service";
import { WorkspaceService } from "src/app/services/workspaces.service";

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.css']
  })
  export class ProfileDetailsComponent implements OnInit{
    user: any;
    userId: string;
    isLoading: boolean = false;
    constructor(public usersService: AuthService, public route: ActivatedRoute, public workspacesService: WorkspaceService, 
                private router: Router) {}

    ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        this.userId = paramMap.get('userId');
        this.isLoading = true;
        this.usersService.getUser(this.userId).subscribe(userData => {
        this.user = {
            username: userData.user.username,
            name: userData.user.name,
            email: userData.user.email,
            photo: userData.user.photo,
            password: userData.user.password
        };
        console.log(this.user)
        this.isLoading = false;
        });
        });    
    }
}