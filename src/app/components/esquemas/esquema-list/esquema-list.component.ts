import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Datafile } from '../../../models/datafile';
import { DatafileService } from '../../../services/datafiles.service';
import { Papa } from 'ngx-papaparse';
import * as XLSX from 'xlsx';
import { Collection } from 'src/app/models/collection';
import { Esquema } from 'src/app/models/esquema';
import { EsquemaService } from 'src/app/services/esquemas.service';

@Component({
  selector: 'app-esquema-list',
  templateUrl: './esquema-list.component.html',
  styleUrls: ['./esquema-list.component.css']
})
export class EsquemaListComponent implements OnInit, OnDestroy{
  isDeleting = false;
  @Input() datafileId: string;
  @Input() workspaceId: string;
  @Input() esquemas: Esquema[];
  @Input() infer: boolean;
  userIsAuthenticated = false;
  userId: string;

  // Para editar
  esquemaForm: FormGroup;
  savefileChange = false;
  esquema = null;
  inferring = false;
  // tslint:disable-next-line: max-line-length
  constructor(public datafilesService: DatafileService, public route: ActivatedRoute, public usersService: AuthService,
              private router: Router, private esquemasService: EsquemaService){
                this.esquemaForm = new FormGroup({
                  'title': new FormControl('', {validators: [Validators.required,Validators.minLength(1), Validators.maxLength(100)]}),
                  'esquemaContent': new FormControl({value: '', disabled: true}),
                  'esquemaPath': new FormControl(null, {validators: [Validators.required]})
                });
  }

  ngOnInit(){

  }

  ngOnDestroy(){

  }

  async onDelete( esquemaId: string ){
    await this.esquemasService.deleteEsquema(esquemaId);
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
      }).catch( err => {});
  }

  setSaveMode(newvalue: boolean) {
    this.savefileChange = newvalue;
  }

  onEdit(esquemaId: string) {
    console.log(this.esquemas);
    console.log(esquemaId);
    this.esquemasService.getEsquema(esquemaId).subscribe(esquemaData => {
      this.esquema = esquemaData.esquema;
      this.esquemaForm.get('esquemaContent').enable();
      this.esquemaForm.patchValue({title: esquemaData.esquema.title, esquemaContent: esquemaData.content});
      (document.getElementById('esquemaContent') as HTMLInputElement).value = this.esquemaForm.get('esquemaPath').value;
   });
  }


  setEsquema(newvalue: any) {
    this.esquema = newvalue;
  }

  onInfer() {
    this.inferring = true;
    this.esquemasService.addEsquema(null, null, null, this.datafileId, this.workspaceId)
    // .then(response => {
    //   console.log(response);
    //   this.inferring = false;
    //   this.router.navigateByUrl('/', {skipLocationChange: true})
    //   .then(() => {
    //     this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
    //   }).catch( err => {});
    // }).catch(error => {
    //   console.log(error);

    // });
  }

}




