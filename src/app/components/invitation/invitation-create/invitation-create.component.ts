import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Invitation } from 'src/app/models/invitation.model';
import { InvitationService } from '../../../services/invitations.service';

@Component({
  selector: 'app-invitation-create',
  templateUrl: './invitation-create.component.html',
})
export class InvitationCreateComponent implements OnInit{
  isLoading                   : boolean = false;
  workspaceId                 : string;
  invalidEmail                : boolean = false;
  invitationForm              : FormGroup;
  @Input() create             : any;
  @Input()  invitations       : Invitation[];
  @Output() invitationsChange : any = new EventEmitter();

  constructor(public invitationsService: InvitationService, private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,  private router: Router) {
    this.createForm();
  }

  createForm() {
    this.invitationForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.workspaceId = params.get('workspaceId');
    });
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
    const values = this.invitationForm.getRawValue();
    if ( this.create ) {

      this.invitations.push(values.email);
      this.invitationsChange.emit(this.invitations);
    }  else {
      this.invitationsService.addInvitation(values.email, this.workspaceId)
        .then(response=>{
          this.router.navigate(['/']);
        })
        .catch(err=>{
          console.log("Error on onInvite method: "+err);
        });
    }
    this.invitationForm.reset();
  }

  onReset() {
    this.invitationForm.reset();
  }

}
