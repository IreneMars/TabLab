import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { InvitationService } from '../../../services/invitations.service';

@Component({
  selector: 'app-invitation-create',
  templateUrl: './invitation-create.component.html',
})
export class InvitationCreateComponent implements OnInit, OnDestroy{
  invitationForm: FormGroup;
  isLoading = false;
  invalidEmail = false;
  workspaceId;
  @Input() create;
  @Input()  invitations;
  @Output() invitationsChange = new EventEmitter();
  private authStatusSub: Subscription;


  constructor(public invitationsService: InvitationService, public authService: AuthService, private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.invitationForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
    });
  }

  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe( authStatus => {
      // this.isLoading = false;
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.workspaceId = params.get('workspaceId');
    });
  }

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

  onInvite() {
    if (this.invitationForm.invalid){
    this.invalidEmail = true;
    return Object.values(this.invitationForm.controls).forEach(control => {
      if (control instanceof FormGroup) {
        // tslint:disable-next-line: no-shadowed-variable
        Object.values(control.controls).forEach( control => control.markAsTouched());
      } else {
        control.markAsTouched();
      }
    });
    }
    // this.isLoading = true;
    const values = this.invitationForm.getRawValue();
    if ( this.create ) {

      this.invitations.push(values.email);
      this.invitationsChange.emit(this.invitations);
    }  else {
      this.invitationsService.addInvitation(values.email, this.workspaceId);
    }
    this.invitationForm.reset();
    // this.isLoading = false;
  }

onReset() {
    this.invitationForm.reset();
  }


}
