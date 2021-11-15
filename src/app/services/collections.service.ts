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
    let res: any;
    const collection: Collection = { 
      'id': null,
      'title': title, 
      'workspace': workspaceId 
    };
    this.http.post<{message: string, collection: any}>(BACKEND_URL, collection).subscribe( responseData => {
      res = responseData;
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Creating a collection failed!');
        } else {
          resolve('Collection added successfully!');
        }
      }, 1000);
    });
  }

  updateCollection(collectionId: string, title: string, workspaceId: string){
    let res: any;
    const collection: Collection = { 
      'id': collectionId,
      'title': title, 
      'workspace': workspaceId 
    };
    this.http.put<{message: string, collection: any}>(BACKEND_URL + collectionId, collection).subscribe( response => {
      res = response;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Updating a collection failed!');
        } else {
          resolve('Collection updated successfully!');
        }
      }, 1000);
    });
  }
  
  deleteCollection(collectionId: string) {
    let res: any;
    this.http.delete<{message: string}>(BACKEND_URL + collectionId).subscribe( responseData => {
        res = responseData;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject('Deleting a collection failed!');
        } else {
          resolve('Collection deleted successfully!');
        }
      }, 1000);
    });
  }
}
