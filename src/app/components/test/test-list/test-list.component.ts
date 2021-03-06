import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatafileService } from '../../../services/datafiles.service';
import { TestsService } from '../../../services/tests.service';
import { Test } from '../../../models/test.model';
import { ConfigurationService } from 'src/app/services/configuration.service';

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
  formattedConfigs        : any[] = [];
  @Input() esquemas       : any[];
  @Input() configurations : any[];

  constructor(public datafilesService: DatafileService, public route: ActivatedRoute,
              public configurationsService: ConfigurationService, public testsService: TestsService){
  }

  ngOnInit(){
    this.configurationsService.getConfigurationsByDatafile(this.datafileId);
    for (var config of this.configurations){
      var extraParamsStr = "";
      if(config.extraParams){
        const extraParamsJSON = JSON.stringify(config.extraParams).toString();
        const extraParamsStr1 = extraParamsJSON.replace(/{/g, '');
        const extraParamsStr2 = extraParamsStr1.replace(/}/g, '');
        var extraParamsStr = extraParamsStr2.replace(/,/g, ',\n');
      }
      const configAux = {...config, extraParamsStr};
      this.formattedConfigs.push(configAux);
    }
  }
  
  async onDelete( testId: string ){
    this.testsService.deleteTest(testId)
    .then(testResponse=>{
      this.testsService.getTestsByDatafile(this.datafileId, this.workspaceId);
    })
    .catch(err=>{
      console.log("Error on onDelete() method: "+err.message);
      this.testsService.getTestsByDatafile(this.datafileId, this.workspaceId);
    });
    
  }

}




