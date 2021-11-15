import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from '../../../services/datafiles.service';
import { EsquemaService } from 'src/app/services/esquemas.service';
import { Esquema } from '../../../models/esquema.model';

@Component({
  selector: 'app-esquema-list',
  templateUrl: './esquema-list.component.html',
  styleUrls: ['./esquema-list.component.css']
})
export class EsquemaListComponent implements OnInit, OnDestroy{
  userId               : string;
  userIsAuthenticated  : boolean = false;
  isDeleting           : boolean = false;
  @Input() datafileId  : string;
  @Input() workspaceId : string;
  @Input() esquemas    : Esquema[];
  @Input() infer       : boolean;
  // Para editar
  savefileChange       : boolean = false;
  esquema              : Esquema = null;
  inferring            : boolean = false;
  esquemaForm          : FormGroup;
  
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
    this.esquemasService.getEsquema(esquemaId).subscribe(esquemaData => {
      this.esquema = {
        id: esquemaData.esquema._id,
        title: esquemaData.esquema.title,
        contentPath: esquemaData.esquema.contentPath,
        creationMoment: esquemaData.esquema.creationMoment,
        datafile: esquemaData.esquema.datafile,
      };
      this.esquemaForm.get('esquemaContent').enable();
      this.esquemaForm.patchValue({
        title: esquemaData.esquema.title, 
        esquemaContent: esquemaData.content
      });
      (document.getElementById('esquemaContent') as HTMLInputElement).value = this.esquemaForm.get('esquemaPath').value;
   });
  }


  setEsquema(newvalue: any) {
    this.esquema = newvalue;
  }

  onInfer() {
    this.inferring = true;
    this.esquemasService.addEsquema(null, null, null, this.datafileId, this.workspaceId)
    .then(response => {
       this.inferring = false;
       this.router.navigateByUrl('/', {skipLocationChange: true})
       .then(() => {
         this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
       })
       .catch( err => {
        console.log("Error on onInfer method: "+ err);
       });
     })
     .catch(error => {
        console.log("Error on onInfer method: "+error);
     });
  }

}




