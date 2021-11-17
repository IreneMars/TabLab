import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Terminal } from '../models/terminal.model';

const BACKEND_URL = environment.apiUrl + '/terminals/';

@Injectable({providedIn: 'root'})
export class TerminalsService {
  
  constructor(private http: HttpClient) {}

  getTerminal(userId: string){
    return this.http.get<{message: string, terminal: any}>(BACKEND_URL + userId)
  }
  
  updateTerminal(terminalId: string, userId:string, content: string[]){
    let res: any;
    const terminal: Terminal = {
      'id': terminalId,
      'content': content,
      'user': userId
    };
    return this.http.put<{message: string, role: any}>(BACKEND_URL + terminalId, terminal)
  }  
}