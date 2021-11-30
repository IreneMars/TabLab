import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatafileService } from '../../../services/datafiles.service';
import { EsquemaService } from 'src/app/services/esquemas.service';
import { Esquema } from '../../../models/esquema.model';
import { UploadsService } from 'src/app/services/uploads.service';
import { Datafile } from '../../../models/datafile.model';

@Component({
  selector: 'app-esquema-list',
  templateUrl: './esquema-list.component.html',
  styleUrls: ['./esquema-list.component.css']
})
export class EsquemaListComponent implements OnInit {
  userId               : string;
  userIsAuthenticated  : boolean = false;
  isSaving             : boolean = false;
  isAdding             : boolean = false;
  isInferring          : boolean = false;
  isDeleting           : boolean = false;
  esquemaContent       : any;
  @Input() datafile    : Datafile;
  @Input() workspaceId : string;
  @Input() esquemas    : Esquema[];
  @Input() infer       : boolean;
  savefileChange       : boolean = false;
  esquema              : Esquema = null;
  esquemaForm          : FormGroup;
  
  constructor(public datafilesService: DatafileService, public route: ActivatedRoute, 
              private esquemasService: EsquemaService, public uploadsService: UploadsService){
                this.esquemaForm = new FormGroup({
                  'title': new FormControl('', {validators: [Validators.required,Validators.minLength(1), Validators.maxLength(100)]}),
                  'esquemaContent': new FormControl({value: '', disabled: true}),
                  'esquemaPath': new FormControl(null, {validators: [Validators.required]})
                });
  }

  ngOnInit(){}

  async onDelete( esquemaId: string ){
    this.isDeleting = true;
    this.esquemasService.deleteEsquema(esquemaId)
    .then(response=>{
      // Esquemas
      this.esquemasService.getEsquemasByDatafile(this.datafile.id);
      this.isDeleting = false;
    })
    .catch(err=>{
      console.log("Error on onDelete method: "+err.message);
      // Esquemas
      this.esquemasService.getEsquemasByDatafile(this.datafile.id);
      this.isDeleting = false;
    });
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
      this.esquemaContent = this.esquemaForm.get('esquemaPath').value;
   });
  }

  onInfer() {
    this.isInferring = true;
    this.uploadsService.inferEsquemaContent(this.datafile.id)
    .then(updateResponse=>{   
      this.esquemasService.getEsquemasByDatafile(this.datafile.id);
      this.isInferring = false;
    })
    .catch(err=>{
      console.log("Error on onInfer method: "+err.message);
      this.esquemasService.getEsquemasByDatafile(this.datafile.id);
      this.isInferring = false;
    });

}
}



