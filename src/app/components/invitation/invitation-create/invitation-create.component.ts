import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Invitation } from 'src/app/models/invitation.model';
import { AuthService } from 'src/app/services/auth.service';
import { InvitationService } from '../../../services/invitations.service';
import { WorkspacesService } from '../../../services/workspaces.service';

@Component({
  selector: 'app-invitation-create',
  templateUrl: './invitation-create.component.html',
})
export class InvitationCreateComponent implements OnInit{
  userIsAuthenticated         : boolean = false;
  userId                      : string;
  isLoading                   : boolean = false;
  invitationAdded             : boolean = false;

  @Input() workspaceId        : string;
  invalidEmail                : boolean = false;
  invitationForm              : FormGroup;
  @Input() create             : any;
  @Input()  invitations       : Invitation[];
  @Output() invitationsChange : any = new EventEmitter();
  personal                    : boolean = false;
  constructor(public invitationsService: InvitationService, public authService: AuthService, private formBuilder: FormBuilder,
              private workspacesService: WorkspacesService) {
    this.createForm();
  }

  createForm() {
    this.invitationForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
    });
  }

  ngOnInit(): void {
    this.isLoading = true;          

    this.userIsAuthenticated = this.authService.getIsAuth();
    if (this.userIsAuthenticated){
      this.userId = this.authService.getUserId();
      console.log("Workspace Edit")

      this.workspacesService.getWorkspace(this.workspaceId).subscribe(workspaceData=>{
          this.personal = workspaceData.workspace.mandatory;
          this.isLoading = false;          
      });
    }
  }

  onInvite() {
    this.invitationAdded = false;
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
    const values = this.invitationForm.getRawValue();
    if ( this.create ) {

      this.invitations.push(values.email);
      this.invitationsChange.emit(this.invitations);
    }  else {
      this.invitationsService.addInvitation(values.email, this.workspaceId)
        .then(response=>{
          this.invitationAdded = true;
        })
        .catch(err=>{
          console.log("Error on onInvite method: "+err.message.message);
        });
    }
    this.invitationForm.reset();
  }

  onReset() {
    this.invitationForm.reset();
  }

}
