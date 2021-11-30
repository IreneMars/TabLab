import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Invitation } from 'src/app/models/invitation.model';

const BACKEND_URL = environment.apiUrl + '/invitations/';

@Injectable({providedIn: 'root'})
export class InvitationService {
  private invitations: Invitation[] = [];
  private invitationsUpdated = new Subject<{invitations: Invitation[], invitationCount: number, totalInvitations: number}>();
  private pendingInvitationsUpdated = new Subject<{pendingInvitations: boolean}>();

  constructor(private http: HttpClient) {}
  
  getInvitationUpdateListener() {
    return this.invitationsUpdated.asObservable();
  }
  
  getInvitations(invitationsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${invitationsPerPage}&page=${currentPage}`;
    this.http.get<{message: string, invitations: any, maxInvitations: number, totalInvitations: number }>(BACKEND_URL + queryParams)
      .pipe(map( (invitationData) => {
        return { 
          invitations: invitationData.invitations
          .map( invitation => {
            return {
              id: invitation._id,
              sender: invitation.sender,
              receiver: invitation.receiver,
              status: invitation.status,
              workspace: invitation.workspace,
            };
          }),
          maxInvitations: invitationData.maxInvitations,
          totalInvitations: invitationData.totalInvitations
        };
      }))
      .subscribe((transformedInvitationData) => {
        this.invitations = transformedInvitationData.invitations;
        this.invitationsUpdated.next({
          invitations: [...this.invitations],
          invitationCount: transformedInvitationData.maxInvitations,
          totalInvitations: transformedInvitationData.totalInvitations
        });
    });
  }
  
  checkPendingInvitationsListener() {
    return this.pendingInvitationsUpdated.asObservable();
  }

  checkPendingInvitations() {
    return this.http.get<{message: string, pendingInvitations:boolean}>(BACKEND_URL+"checkPendings").subscribe(pendingInvitationData=>{
      this.pendingInvitationsUpdated.next({
        pendingInvitations: pendingInvitationData.pendingInvitations
      });
    });
  }

  addInvitation( receiverEmail: string, workspaceId: string) {
    const invitation: Invitation = { 
      'id':null, 
      'sender':null, 
      'receiver': receiverEmail, 
      'status':'pending', 
      'workspace': workspaceId 
    };
    return this.http.post<{message: string, invitation: any}>(BACKEND_URL, invitation).toPromise();
  }

  updateInvitation(invitationId: string, status: string){
    const invitationData: Invitation = { 
      'id':invitationId, 
      'sender':null, 
      'receiver': null, 
      'status':status, 
      'workspace': null 
    };
    return this.http.put<{message: string, invitation: any}>(BACKEND_URL + invitationId, invitationData).toPromise();
  }

  deleteInvitation(invitationId: string){
    return this.http.delete<{message: string}>(BACKEND_URL +  invitationId).toPromise();
  }
}
