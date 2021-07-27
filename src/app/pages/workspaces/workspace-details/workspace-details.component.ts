import { OnInit, OnDestroy } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { WorkspaceService } from '../../../services/workspaces.service';
import { RolesService } from '../../../services/roles.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Workspace } from 'src/app/models/workspace.model';
import { User } from '../../auth/login/login.component';
import { CollectionsService } from 'src/app/services/collections.service';
import { Collection } from 'src/app/models/collection';
import { DatafileService } from '../../../services/datafiles.service';
import { Datafile } from 'src/app/models/datafile';

@Component({
  selector: 'app-workspace-details',
  templateUrl: './workspace-details.component.html',
  styleUrls: ['./workspace-details.component.css']
})
export class WorkspaceDetailsComponent implements OnInit, OnDestroy{
  edit = false;
  enteredDescription = '';
  enteredTitle = '';
  workspace: Workspace;
  workspaceId: string;
  isLoading = false;
  userIsAuthenticated = false;
  userId: string;
  users: User[];
  collections: Collection[];
  close: boolean = true;
  editMode: boolean = false;
  collectionIndex: number;
  editCollection: Collection;
  private usersSub: Subscription;
  private authStatusSub: Subscription;
  private collectionsSub: Subscription;
  private datafilesSub: Subscription;

  savefileChange = false;
  orphanedDatafiles: Datafile[];

  constructor(public workspacesService: WorkspaceService, public rolesService: RolesService, public route: ActivatedRoute,
              public usersService: AuthService, public collectionsService: CollectionsService,
              public datafilesService: DatafileService, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const workId = paramMap.get('workspaceId');
      this.workspaceId = workId;

      this.isLoading = true;
      this.workspacesService.getWorkspace(workId).subscribe(workspaceData => {
        this.isLoading = false;
        this.workspace = {
          title: workspaceData.workspace.title,
          description: workspaceData.workspace.description,
          mandatory: workspaceData.workspace.mandatory
        };
        this.orphanedDatafiles = workspaceData.orphanedDatafiles;
      });
    });
    // Users
    this.usersService.getUsersByWorkspace(this.workspaceId);
    this.usersSub = this.usersService.getUserUpdateListener()
      .subscribe( (userData: {users: User[]}) => {
        this.isLoading = false;
        this.users = userData.users;
      });

    // Collections
    this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
    this.collectionsSub = this.collectionsService.getCollectionUpdateListener()
      .subscribe( (collectionData: {collections: Collection[]}) => {
        this.collections = collectionData.collections;
        console.log(this.collections);
      });

    this.userIsAuthenticated = this.usersService.getIsAuth();
    this.authStatusSub = this.usersService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.usersService.getUserId();
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
    this.rolesService.deleteRole(this.workspaceId).subscribe(response => {
      this.router.navigate(['/workspaces']);
    }, error => {

    });
  }

  onEdit() {
    this.edit = true;
  }

  onAddCollection() {
    this.close = false;
  }

  async onDeleteCollection(collectionId: string) {
    this.isLoading = true;
    await this.collectionsService.deleteCollection(collectionId);
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}`]);
      }).catch( err => {});
    this.isLoading = false;
  }

  async onUpdateCollection(index: number) {
    this.isLoading = true;
    this.editMode = true;
    this.collectionIndex = index;
    this.isLoading = false;
  }

  setSaveMode(newvalue: boolean) {
    this.savefileChange = newvalue;
  }

}
