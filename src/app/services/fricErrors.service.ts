import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

const BACKEND_URL = environment.apiUrl + '/fricErrors/';

@Injectable({providedIn: 'root'})
export class FricErrorsService {
    private fricErrors: any[] = [];
    private fricErrorsUpdated = new Subject<{fricErrors: any[]}>();
  
    constructor(private http: HttpClient) {}
  
    getFricErrorUpdateListener() {
      return this.fricErrorsUpdated.asObservable();
    }
  
    getFricErrors() {
      return this.http.get<{message: string, fricErrors: any[]}>(BACKEND_URL)
      .pipe(map( (fricErrorData) => {
        return { 
            fricErrors: fricErrorData.fricErrors
          .map(fricError => {
            return {
              id: fricError._id,
              errorCode: fricError.errorCode,
              extraParams: fricError.extraParams
            };
        }),
      };
      }))
      .subscribe((transformedFricErrorData) => {
        this.fricErrors = transformedFricErrorData.fricErrors;
        this.fricErrorsUpdated.next({
            fricErrors: [...this.fricErrors]
        });
      });
    }
}