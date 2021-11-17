import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { WorkspacesService } from '../../../services/workspaces.service';
import { RolesService } from '../../../services/roles.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Workspace } from 'src/app/models/workspace.model';
import { User } from '../../auth/login/login.component';
import { CollectionsService } from 'src/app/services/collections.service';
import { Collection } from 'src/app/models/collection.model';
import { DatafileService } from '../../../services/datafiles.service';
import { UsersService } from '../../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workspace-details',
  templateUrl: './workspace-details.component.html',
  styleUrls: ['./workspace-details.component.css']
})
export class WorkspaceDetailsComponent implements OnInit, OnDestroy{
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
  collections            : Collection[];
  private usersSub       : Subscription;
  private authStatusSub  : Subscription;
  private collectionsSub : Subscription;
  roleForm               : FormGroup;
  availableRoles         : string[] = ['admin','owner','member']
  currentUserRole        : string;
  

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
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const workId = paramMap.get('workspaceId');
      this.workspaceId = workId;
      this.workspacesService.getWorkspace(workId).subscribe(workspaceData => {
        this.workspace = {
          id: workspaceData.workspace._id,
          title: workspaceData.workspace.title,
          description: workspaceData.workspace.description,
          creationMoment: workspaceData.workspace.creationMoment,
          mandatory: workspaceData.workspace.mandatory
        };
      });
    });
    
    // Users
    this.usersService.getUsersByWorkspace(this.workspaceId);
    this.usersSub = this.usersService.getUserUpdateListener().subscribe( (userData: {users: User[]}) => {
      this.users = userData.users;
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.userId = this.authService.getUserId();
      for (var userIndex in this.users){
        const user = this.users[userIndex]
        if(user.id===this.userId){
          this.currentUserRole = user.roleName;
        }
      }
      this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    });
    
    // Collections
    this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
    this.collectionsSub = this.collectionsService.getCollectionUpdateListener()
    .subscribe( (collectionData: {collections: Collection[]}) => {
      this.collections = collectionData.collections;
    });
    
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
    this.usersSub.unsubscribe();
    this.collectionsSub.unsubscribe();
  }

  onDelete(){
    this.isLoading = true;
    this.workspacesService.deleteWorkspace(this.workspaceId);
    this.router.navigate(['/workspaces']);
  }

  onLeave(){
    this.isLoading = true;
    this.rolesService.deleteRole(this.workspaceId).then( response => {
      this.router.navigate(['/workspaces']);
    }, error => {
      console.log("Error on onLeave method: "+error);
    });
  }

  onEdit() {
    this.edit = true;
  }

  async onDeleteCollection(collectionId: string) {
    this.isLoading = true;
    await this.collectionsService.deleteCollection(collectionId);
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}`]);
      }).catch( err => {
        console.log("Error on onDeleteCollection method: "+err);
      });
    this.isLoading = false;
  }

  setSaveMode(newvalue: boolean) {
    this.savefileChange = newvalue;
  }

  async onRolePicked(event, user) {
    const workspaceRole = (event.target as HTMLInputElement).value;
    this.rolesService.updateRole(user.roleId, workspaceRole, this.workspaceId)
      .then(res=>{
        this.router.navigateByUrl('/', {skipLocationChange: true})
          .then(() => {
            this.router.navigate([`/workspace/${this.workspaceId}`]);
          }).catch( err => {
            console.log("Error on onRolePicked method: "+err)
          });
      })
      .catch(err=>{
        this.router.navigateByUrl('/', {skipLocationChange: true})
          .then(() => {
            this.router.navigate([`/workspace/${this.workspaceId}`]);
          }).catch( err => {
            console.log("Error on onRolePicked method: "+err)
          });
      });
  }

}
