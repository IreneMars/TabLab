import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatafileService } from '../../../services/datafiles.service';
import { TestsService } from '../../../services/tests.service';
import { Test } from '../../../models/test.model';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit, OnDestroy{
  userId                  : string;
  userIsAuthenticated     : boolean = false;
  isDeleting              : boolean = false;
  
  testForm                : FormGroup;
  savefileChange          : boolean = false;
  
  @Input() datafileId     : string;
  @Input() workspaceId    : string;
  @Input() tests          : Test[];
  //@Input() test           : Test;
  @Input() esquemas       : any[];
  @Input() configurations : any[];

  constructor(public datafilesService: DatafileService, public route: ActivatedRoute, public usersService: AuthService,
              private router: Router, public testsService: TestsService){
  }

  ngOnInit(){

  }

  ngOnDestroy(){
    // this.testsSub.unsubscribe();
    // this.authStatusSub.unsubscribe();
  }

  async onDelete( testId: string ){
    await this.testsService.deleteTest(testId);
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
      })
      .catch( err => {
        console.log("Error on onDelete method: "+err)
      });
  }

}




