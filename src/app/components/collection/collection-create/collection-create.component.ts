import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-collection-create',
  templateUrl: './collection-create.component.html',
})
export class CollectionCreateComponent implements OnInit{
  collectionForm                  : FormGroup;
  isLoading                       : boolean = false;
  invalidTitle                    : boolean = false;
  workspaceId                     : string;
  @Input() editMode               : boolean;
  @Output() editModeChange        : any = new EventEmitter();
  @Input()  close                 : boolean;
  @Output() closeChange           : any = new EventEmitter();
  @Input()  collectionIndex       : number;
  @Output() collectionIndexChange : any = new EventEmitter();
  @Input()  editCollection        : any;

  constructor(public collectionsService: CollectionsService, public authService: AuthService, private formBuilder: FormBuilder,
              private router: Router, private activatedRoute: ActivatedRoute) {
      this.createForm();
}

  createForm() {
    this.collectionForm = this.formBuilder.group({
    title : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {
    this.authService.getAuthStatusListener().subscribe( authStatus => {
    // this.isLoading = false;
    });
    this.activatedRoute.paramMap.subscribe(params => {
    this.workspaceId = params.get('workspaceId');

    });
    if (this.editCollection) {
      this.editMode = true;
      this.collectionForm.reset({
        title: this.editCollection.title
      });
    }
  }

  async onSave() {
    if (this.collectionForm.invalid){
      this.invalidTitle = true;
      return Object.values(this.collectionForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
  }
    this.isLoading = true;
    const values = this.collectionForm.getRawValue();

    if (this.editMode) {
      await this.collectionsService.updateCollection(this.editCollection.id, values.title, this.workspaceId);
    } else {
      await this.collectionsService.addCollection(values.title, this.workspaceId);
    }
    this.collectionForm.reset();
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => {
        this.router.navigate([`/workspace/${this.workspaceId}`]);
      }).catch( err => {});
    this.isLoading = false;
  }

  onCancel() {
    this.collectionForm.reset();
    if (this.editMode) {
      this.editModeChange.emit(false);
      this.collectionIndexChange.emit(undefined);
    } else {
        this.closeChange.emit(true);
    }
  }

}
