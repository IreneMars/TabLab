import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { WorkspacesService } from '../../../services/workspaces.service';
import { RolesService } from '../../../services/roles.service';
import { AuthService } from 'src/app/services/auth.service';
import { Workspace } from 'src/app/models/workspace.model';
import { CollectionsService } from 'src/app/services/collections.service';
import { Collection } from 'src/app/models/collection.model';
import { DatafileService } from '../../../services/datafiles.service';
import { UsersService } from '../../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Datafile } from 'src/app/models/datafile.model';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-workspace-details',
  templateUrl: './workspace-details.component.html',
  styleUrls: ['./workspace-details.component.css']
})
export class WorkspaceDetailsComponent implements OnInit {
  isLoading              : boolean = false; 
  userIsAuthenticated    : boolean = false;
  userId                 : string;
  edit                   : boolean = false;
  editMode               : boolean = false;
  savefileChange         : boolean = false;
  enteredDescription     : string = '';
  enteredTitle           : string = '';
  workspaceId            : string;
  workspace              : Workspace;
  users                  : any[];
  user                   : any;
  collections            : Collection[];
  orphanedDatafiles      : Datafile[];
  roleForm               : FormGroup;
  availableRoles         : string[] = ['admin','owner','member']
  currentUserRole        : string;
  activities             : Activity[] = []

  constructor(private formBuilder: FormBuilder, public workspacesService: WorkspacesService, public rolesService: RolesService, public route: ActivatedRoute,
              public usersService: UsersService, public authService: AuthService, public collectionsService: CollectionsService,
              public datafilesService: DatafileService, private router: Router) {
    this.createForm();
  }
  
  createForm() {
    this.roleForm = this.formBuilder.group({
    role : ['', [Validators.required]],
    });
  }
  
  ngOnInit() {
    this.isLoading = true;
    // Current User
    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        const workId = paramMap.get('workspaceId');
        this.workspaceId = workId;
        // Workspace
        this.workspacesService.getWorkspace(workId).subscribe(workspaceData => {
          this.workspace = {
            id: workspaceData.workspace._id,
            title: workspaceData.workspace.title,
            description: workspaceData.workspace.description,
            creationMoment: workspaceData.workspace.creationMoment,
            mandatory: workspaceData.workspace.mandatory,
            owner:workspaceData.workspace.owner
          };
          this.orphanedDatafiles = workspaceData.orphanedDatafiles;
          // Users
          this.usersService.getUsersByWorkspace(this.workspaceId);
          this.usersService.getUserUpdateListener().subscribe( (userData: {users: User[]}) => {
            this.users = userData.users;
            for (var userIndex in this.users){
              const user = this.users[userIndex]
              if(user.id===this.userId){
                this.user = user;
                this.currentUserRole = user.roleName;
              }
            }
            // Collections
            this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
            this.collectionsService.getCollectionUpdateListener().subscribe( (collectionData: {collections: Collection[]}) => {
              this.collections = collectionData.collections;
              this.isLoading = false;
            });  
          });
        });
      });
    }
    
    
  }

  onDelete(){
    this.isLoading = true;
    if(this.workspace.owner === this.userId || this.user.role === "ADMIN"){
      this.workspacesService.deleteWorkspace(this.workspaceId)
      .then(workspaceResult=>{
        this.router.navigate(['/workspaces']);
        this.isLoading = false;
      })
      .catch(err=>{
        this.isLoading = false;
        console.log("Error on onDelete() method: "+err.message);
      })
    }else{
      this.isLoading = false;
    }
    
  }

  onLeave(){
    this.isLoading = true;
    this.rolesService.deleteRole(this.workspaceId).then( response => {
      this.router.navigate(['/workspaces']);
    }, err => {
      console.log("Error on onLeave method: "+err.message);
    });
  }

  onEdit() {
    this.edit = true;
  }

  async onDeleteCollection(collectionId: string) {
    this.isLoading = true;
    await this.collectionsService.deleteCollection(collectionId)
    .then(collectionResponse=>{
      // Collections
      this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
      this.collectionsService.getCollectionUpdateListener().subscribe( (collectionData: {collections: Collection[]}) => {
        this.collections = collectionData.collections;
        this.isLoading = false;
      });
    })
    .catch(err=>{
      console.log("Error on onDeleteCollection() method: "+err.message.message);
    });
  }

  setSaveMode(newvalue: boolean) {
    this.savefileChange = newvalue;
  }

  async onRolePicked(event, user) {
    const workspaceRole = (event.target as HTMLInputElement).value;
    this.rolesService.updateRole(user.roleId, workspaceRole, this.workspaceId)
    .then(roleData=>{
        // Users
        this.usersService.getUsersByWorkspace(this.workspaceId);
        this.usersService.getUserUpdateListener().subscribe( (userData: {users: User[]}) => {
          this.users = userData.users;
          for (var userIndex in this.users){
            const user = this.users[userIndex]
            if(user.id===this.userId){
              this.user = user;
              this.currentUserRole = user.roleName;
            }
          }
        });
    })
    .catch(err=>{
      console.log("Error on onRolePicked method: "+err.message.message)
    });  
            

  }

}
