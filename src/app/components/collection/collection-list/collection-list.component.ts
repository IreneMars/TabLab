import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Collection } from 'src/app/models/collection.model';
import { Datafile } from 'src/app/models/datafile.model';
import { AuthService } from 'src/app/services/auth.service';
import { CollectionsService } from 'src/app/services/collections.service';
import { WorkspacesService } from 'src/app/services/workspaces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']

})
export class CollectionListComponent implements OnInit, OnDestroy{
  userIsAuthenticated    : boolean = false;
  userId                 : string;
  close                  : boolean = true;
  collectionIndex        : number;
  editMode               : boolean = false;
  collections            : any[];
  orphanedDatafiles      : Datafile[];
  private collectionsSub : Subscription;
  private authStatusSub  : Subscription;
  datafiles              : any[];
  @Input() workspaceId   : string;
  @Input() isLoading     : boolean;
  @Output() isLoadingChange = new EventEmitter();

  selectedDatafileId     : string;

  constructor(public collectionsService: CollectionsService, public authService: AuthService,
              public workspacesService: WorkspacesService, public router: Router) {
  }

  ngOnInit(){
    // Collections
    this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
    this.collectionsSub = this.collectionsService.getCollectionUpdateListener()
    .subscribe( (collectionData: {collections: Collection[]}) => {
      this.collections = collectionData.collections;
      // Orphaned Datafiles
      this.workspacesService.getWorkspace(this.workspaceId).subscribe(workspaceData => {
        this.orphanedDatafiles = workspaceData.orphanedDatafiles;
        this.isLoadingChange.emit(false);
      });
    });
    
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
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
  
  onReload(datafileId: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/workspace/${this.workspaceId}/datafile/${datafileId}`]);
  }); 
  }

}
