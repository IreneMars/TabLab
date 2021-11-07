import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Papa } from 'ngx-papaparse';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EsquemaService } from 'src/app/services/esquemas.service';

@Component({
  selector: 'app-esquema-create',
  templateUrl: './esquema-create.component.html',
  styleUrls: ['./esquema-create.component.css']
})
export class EsquemaCreateComponent implements OnInit, OnDestroy{
  @Input() esquemaForm: FormGroup;
  private authStatusSub: Subscription;
  userIsAuthenticated = false;
  userId: string;
  @Input() workspaceId;
  @Input() datafileId;
  @Input() savefile;
  @Output() savefileChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  invalidFile = false;
  invalidExtension = false;
  @Output() esquemaChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() esquema;
  file = null;
  chain = '';

  constructor(public esquemaService: EsquemaService, public route: ActivatedRoute, private papa: Papa,
              private usersService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.userIsAuthenticated = this.usersService.getIsAuth();
    this.authStatusSub = this.usersService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.userId = this.usersService.getUserId();
    });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

  get invalidTitle() {
    return this.esquemaForm.get('title').invalid && this.esquemaForm.get('title').touched;
  }

  get invalidEsquemaPath() {
    // tslint:disable-next-line: max-line-length
    return this.esquemaForm.get('esquemaPath').invalid && this.esquemaForm.get('esquemaPath').dirty;
  }


// File upload function
async onFilePicked(event: Event) {
  const files = (event.target as HTMLInputElement).files;
  if (files && files.length > 0) {
    const uploadedFile = (event.target as HTMLInputElement).files[0];
    const split = uploadedFile.name.split('.');
    const extension = split[1].toLowerCase();
    if (extension !== 'json' && extension !== 'yaml') {
      this.invalidExtension = true;
      return;
    } else {
      this.esquemaForm.get('esquemaContent').enable();
      this.invalidExtension = false;
    }
    this.file = uploadedFile;

    this.papa.parse(uploadedFile, {
      complete(results) {
        let chain = '';
        for (const data of results.data){
            chain = chain + data + '\n';
        }
        (document.getElementById('esquemaContent') as HTMLInputElement).value = chain;
        // this.esquemaForm.updateValueAndValidity();
      }
    });
  }}

  async onSave() {
    if (this.esquema) {
      if (this.esquemaForm.get('title').invalid) {
        this.esquemaForm.get('title').markAsTouched();
        return;
      }
    } else {
      const content = (document.getElementById('esquemaContent') as HTMLInputElement).value;
      this.esquemaForm.patchValue({esquemaContent: content});
      if (this.esquemaForm.invalid){
        if (this.esquemaForm.get('esquemaPath').invalid) {
          this.invalidFile = true;
          this.esquemaForm.get('esquemaPath').markAsDirty();
        }
        return Object.values(this.esquemaForm.controls).forEach(control => {
          if (control instanceof FormGroup) {
            // tslint:disable-next-line: no-shadowed-variable
            Object.values(control.controls).forEach( control => control.markAsTouched());
          } else {
            control.markAsTouched();
          }
        });
      }
    }
    this.savefileChange.emit(true);
    const values = this.esquemaForm.getRawValue();
    if (this.esquema) {
      await this.esquemaService.updateEsquema(this.esquema._id, values.title, this.esquema.contentPath, values.esquemaContent, this.datafileId);
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => {
          this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
        }).catch( err => {});
    } else {
      this.esquemaService.addEsquema(values.title, values.esquemaContent, this.file.name, this.datafileId, this.workspaceId);
    }
    (document.getElementById('esquemaContent') as HTMLInputElement).value = '';
    this.esquemaForm.reset();
    this.esquemaChange.emit(null);
    this.savefileChange.emit(false);

  }

  onCancel() {
    this.esquemaForm.reset();
    this.esquemaChange.emit(null);
    if (!this.esquema) {
      (document.getElementById('esquemaContent') as HTMLInputElement).value = '';
    }
    this.esquemaForm.patchValue({esquemaPath: null});
    this.invalidFile = false;
  }
}


