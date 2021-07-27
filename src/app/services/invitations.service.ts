import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Invitation } from 'src/app/models/invitation.model';

const BACKEND_URL = environment.apiUrl + '/invitations/';

@Injectable({providedIn: 'root'})
export class InvitationService {
  private invitations: Invitation[] = [];
  private invitationsUpdated = new Subject<{invitations: Invitation[], invitationCount: number}>();

  constructor(private http: HttpClient, private router: Router) {

  }

  getInvitations(invitationsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${invitationsPerPage}&page=${currentPage}`;
    this.http.get<{message: string, invitations: any, maxInvitations: number }>(BACKEND_URL + queryParams)
      .pipe(map( (invitationData) => {
        return { invitations: invitationData.invitations.map(invitation => {
          return {
            id: invitation._id,
            sender: invitation.sender,
            receiver: invitation.receiver,
            status: invitation.status,
            workspace: invitation.workspace,
          };
        }),
        maxInvitations: invitationData.maxInvitations
      };
      }))
      .subscribe((transformedInvitationData) => {
        this.invitations = transformedInvitationData.invitations;
        this.invitationsUpdated.next({
          invitations: [...this.invitations], // para hacer una verdadera copia y no afectar al original
          invitationCount: transformedInvitationData.maxInvitations});
    });
  }

  getInvitationUpdateListener() {
    return this.invitationsUpdated.asObservable();
  }

  getInvitation(id: string) {
    return this.http.get<{_id: string, sender: string, receiver: string, status: string}>(BACKEND_URL + id);
  }

  addInvitation( receiverEmail: string, workspaceId: string) {
    const invitationData: Invitation = { receiver: receiverEmail, workspace: workspaceId };

    this.http.post<{invitation: Invitation}>(
        BACKEND_URL,
        invitationData
      )
      .subscribe( responseData => {
        this.router.navigate(['/']);
    });

  }

  updateInvitation(id: string, status: string){

    const invitationData = { id: id, status: status};

    this.http
      .put(BACKEND_URL + id, invitationData)
      .subscribe( response => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/invitations']));
    });
  }

  deleteInvitation(id: string){
    return this.http.delete(BACKEND_URL +  id);
  }
}
