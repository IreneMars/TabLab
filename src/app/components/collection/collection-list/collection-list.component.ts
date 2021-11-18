import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class CollectionListComponent implements OnInit{
  userIsAuthenticated       : boolean = false;
  userId                    : string;
  close                     : boolean = true;
  collectionIndex           : number;
  editMode                  : boolean = false;
  datafiles                 : any[];
  selectedDatafileId        : string;
  @Input() collections      : any[];
  @Input()orphanedDatafiles : Datafile[];
  @Input() workspaceId      : string;
  @Input() isLoading        : boolean;
  @Output() isLoadingChange : any = new EventEmitter();

  constructor(public collectionsService: CollectionsService, public authService: AuthService,
              public workspacesService: WorkspacesService, public router: Router) {
  }

  ngOnInit(){
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
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
