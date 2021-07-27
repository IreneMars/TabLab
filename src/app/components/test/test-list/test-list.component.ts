import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from '../../../services/datafiles.service';
import { TestsService } from '../../../services/tests.service';


@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit, OnDestroy{
  isDeleting = false;
  @Input() datafileId: string;
  @Input() workspaceId: string;
  @Input() tests: any[];
  @Input() test;
  @Input() esquemas: any[];
  @Input() configurations: any[];
  userIsAuthenticated = false;
  userId: string;

  // Para editar
  testForm: FormGroup;
  savefileChange = false;

  // tslint:disable-next-line: max-line-length
  constructor(public datafilesService: DatafileService, public route: ActivatedRoute, public usersService: AuthService,
              private router: Router, public testsService: TestsService){
  }

  ngOnInit(){

  }

  ngOnDestroy(){
    // console.log(this.esquemasSub);
    // this.testsSub.unsubscribe();
    // this.authStatusSub.unsubscribe();
  }

  async onDelete( testId: string ){
    await this.testsService.deleteTest(testId);
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
      }).catch( err => {});
  }


  // setSaveMode(newvalue: boolean) {
  //   this.savefileChange = newvalue;
  // }

  // onEdit(esquemaId: string) {

  //   this.esquemasService.getEsquema(esquemaId).subscribe(esquemaData => {
  //     this.esquema = esquemaData.esquema;
  //     this.esquemaForm.get('esquemaContent').enable();
  //     this.esquemaForm.patchValue({title: esquemaData.esquema.title, esquemaContent: esquemaData.content});
  //     (document.getElementById('esquemaContent') as HTMLInputElement).value = this.esquemaForm.get('esquemaPath').value;
  //     // document.getElementById('contentEsquema').innerHTML = esquemaData.content;
  //     // let chain = '';
  //     // for (const data of esquemaData.content){
  //     //     chain = chain + data + '\n';
  //     // }
  //     // chain;
  //  });
  // }

  // setEsquema(newvalue: any) {
  //   this.esquema = newvalue;
  // }


}




