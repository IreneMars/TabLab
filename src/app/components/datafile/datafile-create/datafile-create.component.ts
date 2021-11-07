import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from 'src/app/services/datafiles.service';

@Component({
  selector: 'app-datafile-create',
  templateUrl: './datafile-create.component.html',
  styleUrls: ['./datafile-create.component.css']
})
export class DatafileCreateComponent implements OnInit, OnDestroy{
  datafileForm: FormGroup;
  private authStatusSub: Subscription;
  userIsAuthenticated = false;
  userId: string;
  @Input() savefile;
  @Output() savefileChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() workspaceId;
  @Input() collections;

  constructor(public datafileService: DatafileService, public route: ActivatedRoute,
              private formBuilder: FormBuilder, private usersService: AuthService) {
                this.createForm();
                this.datafileForm.reset({
                  title: '',
                  description: '',
                  collection: 'Ninguna'
                });
              }

  ngOnInit(){
    this.userIsAuthenticated = this.usersService.getIsAuth();
    this.authStatusSub = this.usersService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.usersService.getUserId();
    });
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

  createForm() {
    this.datafileForm = this.formBuilder.group({
      title       : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description : ['', [Validators.maxLength(200)]],
      collection : ['', ],
    });
  }
  get invalidTitle() {
    return this.datafileForm.get('title').invalid && this.datafileForm.get('title').touched;
  }

  get invalidDescription() {
    return this.datafileForm.get('description').invalid && this.datafileForm.get('description').touched;
  }

  async onSave() {
    if (this.datafileForm.invalid){
      return Object.values(this.datafileForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    this.savefileChange.emit(true);
    const values = this.datafileForm.getRawValue();
    if(values.collection==='Ninguna'){
      values.collection = null;
    }
    await this.datafileService.addDatafile(values.title, values.description, values.collection, this.workspaceId);
    this.datafileForm.reset({
      title: '',
      description: '',
      collection: 'Ninguna'
    });
    this.savefileChange.emit(false);
  }
}
