import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatafileService } from '../../../services/datafiles.service';
import { TestsService } from '../../../services/tests.service';
import { Test } from '../../../models/test.model';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit{
  userId                  : string;
  userIsAuthenticated     : boolean = false;
  isDeleting              : boolean = false;
  isSaving                : boolean = false;
  testForm                : FormGroup;  
  @Input() datafileId     : string;
  @Input() workspaceId    : string;
  @Input() tests          : Test[];
  @Output() testsChange         : EventEmitter<any[]> = new EventEmitter<any[]>();

  //@Input() test           : Test;
  @Input() esquemas       : any[];
  @Input() configurations : any[];

  constructor(public datafilesService: DatafileService, public route: ActivatedRoute,
              private router: Router, public testsService: TestsService){
  }

  ngOnInit(){}
  
  async onDelete( testId: string ){
    this.testsService.deleteTest(testId)
    .then(testResponse=>{
      this.testsService.getTestsByDatafile(this.datafileId, this.workspaceId);
      this.testsService.getTestUpdateListener().subscribe(testData=>{
        this.testsChange.emit(testData.tests);
      });
    })
    .catch(err=>{
      console.log("Error on onDelete() method: "+err.message.message);
    });
    
  }

}




