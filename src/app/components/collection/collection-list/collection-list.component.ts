import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from 'src/app/models/collection.model';
import { Datafile } from 'src/app/models/datafile.model';
import { AuthService } from 'src/app/services/auth.service';
import { CollectionsService } from 'src/app/services/collections.service';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity.model';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']

})
export class CollectionListComponent implements OnInit{
  userIsAuthenticated         : boolean = false;
  userId                      : string;
  isDeleting                  : boolean = false;
  isLoading                   : boolean = false;
  close                       : boolean = true;
  editMode                    : boolean = false;
  hideButton                  : boolean = false;
  editCollection              : any = null;
  collectionIndex             : any = null;
  collections                 : Collection[];
  @Input() workspaceId        : string;
  orphanedDatafiles           : Datafile[];
  @Input() activities         : Activity[];
  
  constructor(public collectionsService: CollectionsService, public authService: AuthService,
              public workspacesService: WorkspacesService, public router: Router,
              public activitiesService: ActivitiesService) {
  }

  ngOnInit(){
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.userId = this.authService.getUserId();
    // Collections and Orphaned Datafiles
    this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
    this.collectionsService.getCollectionUpdateListener().subscribe(collectionData=>{
      this.collections = collectionData.collections;
      this.orphanedDatafiles = collectionData.orphanedDatafiles;
    });
  }

  onAddCollection() {
    this.close = false;
    this.hideButton = true;
  }

  async onUpdateCollection(collection: any, index: any) {
    this.isLoading = true;
    this.editMode = true;
    this.editCollection = collection;
    this.collectionIndex = index;
    this.isLoading = false;
  }
  
  async onDelete(collectionId: string) {
    this.isDeleting = true;
    this.collectionsService.deleteCollection(collectionId)
    .then(response=>{
      // Collections
      this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
      // Activities
      this.activitiesService.getActivitiesByWorkspace(this.workspaceId);
      this.isDeleting = false;   
    })
    .catch(err=>{
      console.log("Error on onDelete method: "+err.message);
      // Collections
      this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
      // Activities
      this.activitiesService.getActivitiesByWorkspace(this.workspaceId);
      this.isDeleting = false;  
    });

  }
  
  onReload(datafileId: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/workspace/${this.workspaceId}/datafile/${datafileId}`]);
    }); 
  }


}
