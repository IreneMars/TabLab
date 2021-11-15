import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Collection } from 'src/app/models/collection.model';
import { Datafile } from 'src/app/models/datafile.model';
import { AuthService } from 'src/app/services/auth.service';
import { CollectionsService } from 'src/app/services/collections.service';
import { WorkspacesService } from 'src/app/services/workspaces.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']

})
export class CollectionListComponent implements OnInit, OnDestroy{
  isLoading              : boolean = false;
  userIsAuthenticated    : boolean = false;
  userId                 : string;
  close                  : boolean = true;
  collectionIndex        : number;
  editMode               : boolean = false;
  collections            : Collection[];
  orphanedDatafiles      : Datafile[];
  private collectionsSub : Subscription;
  private authStatusSub  : Subscription;
  
  @Input() workspaceId   : string;

  constructor(public collectionsService: CollectionsService, public authService: AuthService,
              public workspacesService: WorkspacesService,) {
  }

  ngOnInit(){
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
    
    // Orphaned Datafiles
    this.isLoading = true;
    this.workspacesService.getWorkspace(this.workspaceId).subscribe(workspaceData => {
      this.isLoading = false;
      this.orphanedDatafiles = workspaceData.orphanedDatafiles;
    });

    // Collections
    this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
    this.collectionsSub = this.collectionsService.getCollectionUpdateListener()
    .subscribe( (collectionData: {collections: Collection[]}) => {
      this.collections = collectionData.collections;
    });
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
    this.collectionsSub.unsubscribe();
  }

  onAddCollection() {
    this.close = false;
  }

  async onUpdateCollection(index: number) {
    this.isLoading = true;
    this.editMode = true;
    this.collectionIndex = index;
    this.isLoading = false;
  }

}
