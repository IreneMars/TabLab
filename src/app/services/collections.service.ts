import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Collection } from '../models/collection.model';

const BACKEND_URL = environment.apiUrl + '/collections/';

@Injectable({providedIn: 'root'})
export class CollectionsService {
  private collections: any[] = [];
  private collectionsUpdated = new Subject<{collections: any[]}>();

  constructor(private http: HttpClient) {}

  getCollectionUpdateListener() {
    return this.collectionsUpdated.asObservable();
  }

  getCollectionsByWorkspace(workspaceId: string) {
    return this.http.get<{message: string, collections: any[], orphanedDatafiles: any[]}>(BACKEND_URL + workspaceId)
    .pipe(map( (collectionData) => {
      return { 
        collections: collectionData.collections
        .map(collection => {
          return {
            id: collection._id,
            title: collection.title,
            workspace: collection.workspace,
            datafiles: collection.datafiles
          };
      }),
    };
    }))
    .subscribe((transformedCollectionData) => {
      this.collections = transformedCollectionData.collections;
      this.collectionsUpdated.next({
        collections: [...this.collections]
      });
    });
  }

  addCollection(title: string, workspaceId: string) {
    const collection: Collection = { 
      'id': null,
      'title': title, 
      'workspace': workspaceId,
      'datafiles':null
    };
    return this.http.post<{message: string, collection: any}>(BACKEND_URL, collection).toPromise();
  }

  updateCollection(collectionId: string, title: string, workspaceId: string){
    const collection: Collection = { 
      'id': collectionId,
      'title': title, 
      'workspace': workspaceId,
      'datafiles':null
    };
    return this.http.put<{message: string, collection: any}>(BACKEND_URL + collectionId, collection).toPromise();
  }
  
  deleteCollection(collectionId: string) {
    return this.http.delete<{message: string}>(BACKEND_URL + collectionId).toPromise()
  }
}
