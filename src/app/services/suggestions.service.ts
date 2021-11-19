import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Suggestion } from '../models/suggestion.model';
import { map } from 'rxjs/operators';

const BACKEND_URL = environment.apiUrl + '/suggestions/';

@Injectable({providedIn: 'root'})
export class SuggestionsService {
    private suggestions: Suggestion[] = [];
    private suggestionsUpdated = new Subject<{suggestions: Suggestion[]}>();
  constructor(private http: HttpClient) {}
  
  getSuggestionUpdateListener() {
    return this.suggestionsUpdated.asObservable();
  }
  
  getSuggestionsByDatafile(datafileId: string){
    return this.http.get<{message: string, suggestions: any[]}>(BACKEND_URL+"get/"+datafileId)
    .pipe(map( (suggestionData) => {
        return { 
          suggestions: suggestionData.suggestions.map(suggestion => {
          return {
            id: suggestion._id,
            errorCode: suggestion.errorCode, 
            tags: suggestion.tags, 
            label: suggestion.label, 
            fieldName: suggestion.fieldName,
            fieldPosition: suggestion.fieldPosition, 
            rowPosition: suggestion.rowPosition,
            errorMessage: suggestion.errorMessage,
            errorCell: suggestion.errorCell,
            datafile: suggestion.datafile,
          };
        }),
      };
      }))
      .subscribe((transformedSuggestionData) => {
        this.suggestions = transformedSuggestionData.suggestions;
        this.suggestionsUpdated.next({
          suggestions: [...this.suggestions]
        });
      });
  }
  
  addSuggestionsByDatafile(datafileId: string, rawData: any, testDelimiter:string){
    const suggestionsData = {
      'rawData': rawData, 
      'testDelimiter':testDelimiter
    };
    console.log(suggestionsData)
    return this.http.post<{message: string, suggestions: any[]}>(BACKEND_URL+"add/"+datafileId,suggestionsData).toPromise();
  }
  
  applySuggestion(suggestionId: string, operation:string, testDelimiter:string, contentLines:string[]){
    const operationData = {
        'operation':operation,
        'contentLines':contentLines,
        'testDelimiter':testDelimiter
      };
    return this.http.put<{message: string, data:any}>(BACKEND_URL +"apply/"+ suggestionId, operationData).toPromise()
  }

  deleteSuggestionsByDatafile(datafileId: string){
    return this.http.delete<{message: string}>(BACKEND_URL + "deleteAll/" +  datafileId).toPromise();
  }

  deleteSuggestion(suggestionId: string){
    return this.http.delete<{message: string}>(BACKEND_URL + suggestionId).toPromise();
  }
  
}
