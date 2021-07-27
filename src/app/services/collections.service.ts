import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Collection } from '../models/collection';

const BACKEND_URL = environment.apiUrl + '/collections/';

@Injectable({providedIn: 'root'})
export class CollectionsService {
  private collections: Collection[] = [];
  private collectionsUpdated = new Subject<{collections: Collection[]}>();

  constructor(private http: HttpClient, private router: Router) {
  }

  getCollectionUpdateListener() {
    return this.collectionsUpdated.asObservable();
  }

  getCollectionsByWorkspace(workspaceId: string) {
    return this.http.get<{message: string, collections: any}>(BACKEND_URL + workspaceId)
    .pipe(map( (collectionData) => {
      return { collections: collectionData.collections.map(collection => {
        return {
          title: collection.title,
          id: collection._id,
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

  createCollection(title: string, workspaceId: string) {
    var res;
    const collectionData: Collection = { title: title, workspace: workspaceId };
    this.http.post<{collection: Collection}>(BACKEND_URL, collectionData).subscribe( responseData => {
      res = responseData;
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject();
        } else {
          resolve(true);
        }
      }, 1000);
    });
  }

  deleteCollection(collectionId: string) {
    let res;
    this.http.delete(BACKEND_URL +  collectionId).subscribe( responseData => {
        res = responseData;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject();
        } else {
          resolve(true);
        }
      }, 1000);
    });
  }

  updateCollection(collectionId: string, title: string){
    var res;
    const collection: Collection = {'title': title, 'workspace': null };
    this.http.put(BACKEND_URL + collectionId, collection).subscribe( response => {
      res = response;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === undefined) {
          reject();
        } else {
          resolve(true);
        }
      }, 1000);
    });
  }

}
