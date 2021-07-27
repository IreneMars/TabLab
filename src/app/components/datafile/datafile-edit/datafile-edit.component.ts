import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from 'src/app/services/datafiles.service';

@Component({
  selector: 'app-datafile-edit',
  templateUrl: './datafile-edit.component.html',
})
export class DatafileEditComponent implements OnInit, OnDestroy{
  @Input() edit;
  @Input() datafile;
  @Input() datafileId;
  @Output() editChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  datafileEditForm: FormGroup;
  loading = false;

  userIsAuthenticated = false;
  userId: string;
  private authStatusSub: Subscription;

  constructor(public datafileService: DatafileService, public authService: AuthService,  private router: Router,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.datafileEditForm = this.formBuilder.group({
      title       : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description : ['', [Validators.maxLength(200)]],
    });
  }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.authService.getUserId();
    });
    this.datafileEditForm.reset({
      title: this.datafile.title,
      description: this.datafile.description,
    });
  }

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

  get invalidTitle() {
    return this.datafileEditForm.get('title').invalid && this.datafileEditForm.get('title').touched;
  }

  get invalidDescription() {
    return this.datafileEditForm.get('description').invalid && this.datafileEditForm.get('description').touched;
  }

  async onSave() {
    if (this.datafileEditForm.invalid){
      return Object.values(this.datafileEditForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }

    this.loading = true;
    const values = this.datafileEditForm.getRawValue();

    await this.datafileService.updateDatafile(this.datafileId, values.title, values.description, null, '');
    this.datafileEditForm.reset();
    this.editChange.emit(false);
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => {
      this.router.navigate([`/datafile/${this.datafileId}`]);
    }).catch( err => {});
    this.loading = false;
  }

  onCancel() {
    this.datafileEditForm.reset();
    this.editChange.emit(false);
  }

}
