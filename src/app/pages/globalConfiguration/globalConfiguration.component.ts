import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { GlobalConfigurationService } from 'src/app/services/globalConfig.service';
import { GlobalConfiguration } from 'src/app/models/globalConfiguration.model';
import { WorkspacesService } from '../../services/workspaces.service';
import { DatafileService } from '../../services/datafiles.service';
import { TestsService } from '../../services/tests.service';
import { Datafile } from '../../models/datafile.model';
import { Workspace } from 'src/app/models/workspace.model';
import { Test } from '../../models/test.model';

@Component({
  selector: 'app-globalconfiguration',
  templateUrl: './globalConfiguration.component.html',
  styleUrls: ['./globalConfiguration.component.css']
})
export class GlobalConfigurationComponent implements OnInit {
  isLoading           : boolean = false;
  userIsAuthenticated : boolean = false;
  userId              : string;
  user                : User;
  edit                : boolean = false;
  globalConfig        : GlobalConfiguration;
  users               : any[] = [];
  workspaces          : any[] = [];
  datafiles           : any[] = [];
  tests               : any[] = [];
  
  constructor( private authService: AuthService, public globalConfigService: GlobalConfigurationService,
                public usersService: UsersService, public workspacesService: WorkspacesService, public datafilesService: DatafileService,
                public testsService: TestsService) {
  }

  ngOnInit(): void { 
    this.isLoading = true;
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated) {
      this.userId = this.authService.getUserId();
      //Current User
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
        this.globalConfigService.getGlobalConfig().subscribe(globalConfigData=>{
          this.globalConfig = {
            "id": globalConfigData.globalConfiguration._id,
            "limitUsers": globalConfigData.globalConfiguration.limitUsers,
            "limitWorkspaces": globalConfigData.globalConfiguration.limitWorkspaces,
          }
          this.usersService.getUsers();
          this.usersService.getUserUpdateListener()
          .subscribe( (userData: {users: User[]}) => {
            this.users = userData.users;
            this.workspacesService.getWorkspaces(null,null);
            this.workspacesService.getWorkspaceUpdateListener()
            .subscribe( (workspaceData: {workspaces: Workspace[]}) => {
                this.workspaces = workspaceData.workspaces;
                this.datafilesService.getDatafiles();
                this.datafilesService.getDatafileUpdateListener()
                .subscribe( (datafileData: {datafiles: Datafile[]}) => {
                    this.datafiles = datafileData.datafiles;
                    this.testsService.getTests();
                    this.testsService.getTestUpdateListener()
                    .subscribe( (testData: {tests: Test[]}) => {
                        this.tests = testData.tests;
                        console.log(this.tests)
                        this.isLoading = false;
                    });
                });
            });           
          });
        });
      });
    }

  }

  onEdit() {
    this.edit = true;
  }

  onDeleteAccount(userId: string) {
    this.usersService.deleteAccount(userId)
    .then(res => {
      if (this.userId===userId) {
        this.authService.logout();
      }
      window.location.reload();

    }).catch( err => {
      console.log("Error on onDeleteAccount method: "+err);
    });
    
  }

}
