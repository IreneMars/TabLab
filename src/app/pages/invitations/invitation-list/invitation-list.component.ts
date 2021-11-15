import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Invitation } from 'src/app/models/invitation.model';
import { AuthService } from '../../../services/auth.service';
import { InvitationService } from '../../../services/invitations.service';
import { PageEvent } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.css']
})
export class InvitationListComponent implements OnInit, OnDestroy{
  userId                   : string;
  userIsAuthenticated      : boolean = false;
  isLoading                : boolean = false;
  workspaceId              : string;
  invalidEmail             : boolean = false;
  
  displayedColumns         : string[] = ['sender', 'workspace', 'status'];
 
  invitations              : Invitation[] = [];
  totalInvitations         : number = 0;
  invitationsPerPage       : number = 2;
  currentPage              : number = 1;
  dataSource               : any = null;
  pageSizeOptions          : number[] = [1, 2, 5, 10];
  private invitationsSub   : Subscription;
  private authStatusSub    : Subscription;
  invitationForm           : FormGroup;

  @ViewChild(MatSort) sort : MatSort;

  constructor(public invitationsService: InvitationService, public authService: AuthService, private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.invitationForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.invitationsService.getInvitations(this.invitationsPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    
    this.invitationsSub = this.invitationsService.getInvitationUpdateListener()
    .subscribe( (invitationData: {invitations: Invitation[], invitationCount: number, totalInvitations: number}) => {
      this.isLoading = false;
      this.totalInvitations = invitationData.totalInvitations;
      this.invitations = invitationData.invitations;
      this.dataSource = new MatTableDataSource(this.invitations);
      this.dataSource.sort = this.sort;
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.workspaceId = params.workspaceId;
    });
  }

  onChangedPage( pageData: PageEvent ) {
    this.currentPage = pageData.pageIndex + 1;
    this.invitationsPerPage = pageData.pageSize;
    this.invitationsService.getInvitations(this.invitationsPerPage, this.currentPage);
  }

  ngOnDestroy(): void {
    this.invitationsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

  onInvite() {
    if (this.invitationForm.invalid){
      this.invalidEmail = true;
      return Object.values(this.invitationForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }

    // this.isLoading = true;
    const values = this.invitationForm.getRawValue();
    this.invitationsService.addInvitation(values.email, this.workspaceId)
    .then(response=>{
      this.router.navigate(['/']);
    })
    .catch(err=>{
      console.log("Error on onInvite method: "+err);
    });
    this.invitationForm.reset();
    // this.isLoading = false;
  }

  onEditStatus(object, newStatus) {
    this.invitationsService.updateInvitation(object.id, newStatus)
      .then(response=>{
        // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        // this.router.navigate(['/invitations']));
        window.location.reload();

      })
      .catch(err=>{
        console.log("Error on onInvite method: "+err);
      });
  }
}
