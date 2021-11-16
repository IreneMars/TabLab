(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/L8O":
/*!************************************************************************************!*\
  !*** ./src/app/components/collection/collection-list/collection-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: CollectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionListComponent", function() { return CollectionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/collections.service */ "k/Ee");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/workspaces.service */ "952Z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _collection_create_collection_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../collection-create/collection-create.component */ "gpP9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








function CollectionListComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-collection-create", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("collectionIndexChange", function CollectionListComponent_div_6_div_1_Template_app_collection_create_collectionIndexChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.collectionIndex = $event; })("editModeChange", function CollectionListComponent_div_6_div_1_Template_app_collection_create_editModeChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.editMode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionIndex", ctx_r5.collectionIndex)("editMode", ctx_r5.editMode)("editCollection", collection_r3);
} }
function CollectionListComponent_div_6_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const datafile_r12 = ctx.$implicit;
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "collapse" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/workspace/", ctx_r11.workspaceId, "/datafile/", datafile_r12._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](datafile_r12.title);
} }
function CollectionListComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CollectionListComponent_div_6_div_2_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onUpdateCollection(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CollectionListComponent_div_6_div_2_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const collection_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onDeleteCollection(collection_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CollectionListComponent_div_6_div_2_div_15_Template, 3, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const collection_r3 = ctx_r19.$implicit;
    const i_r4 = ctx_r19.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("aria-controls", collection_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-bs-target", "#collapse" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", collection_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", collection_r3.datafiles);
} }
function CollectionListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CollectionListComponent_div_6_div_1_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CollectionListComponent_div_6_div_2_Template, 16, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.editMode && ctx_r0.collectionIndex === i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.collectionIndex !== i_r4);
} }
function CollectionListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const datafile_r20 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/workspace/", ctx_r1.workspaceId, "/datafile/", datafile_r20.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](datafile_r20.title);
} }
function CollectionListComponent_app_collection_create_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-collection-create", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closeChange", function CollectionListComponent_app_collection_create_9_Template_app_collection_create_closeChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.close = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("close", ctx_r2.close);
} }
class CollectionListComponent {
    constructor(collectionsService, authService, workspacesService) {
        this.collectionsService = collectionsService;
        this.authService = authService;
        this.workspacesService = workspacesService;
        this.isLoading = false;
        this.userIsAuthenticated = false;
        this.close = true;
        this.editMode = false;
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
        // Orphaned Datafiles
        this.isLoading = true;
        this.workspacesService.getWorkspace(this.workspaceId).subscribe(workspaceData => {
            this.isLoading = false;
            this.orphanedDatafiles = workspaceData.orphanedDatafiles;
        });
        // Collections
        this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
        this.collectionsSub = this.collectionsService.getCollectionUpdateListener()
            .subscribe((collectionData) => {
            this.collections = collectionData.collections;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
        this.collectionsSub.unsubscribe();
    }
    onAddCollection() {
        this.close = false;
    }
    onUpdateCollection(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.editMode = true;
            this.collectionIndex = index;
            this.isLoading = false;
        });
    }
}
CollectionListComponent.ɵfac = function CollectionListComponent_Factory(t) { return new (t || CollectionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__["CollectionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_4__["WorkspacesService"])); };
CollectionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CollectionListComponent, selectors: [["app-collection-list"]], inputs: { workspaceId: "workspaceId" }, decls: 16, vars: 3, consts: [[1, "row", "mt-4", "ps-4", "pe-3"], [1, "col-8"], [1, "mb-2"], [1, "row", "mt-0"], ["id", "accordionFlushExample", 1, "accordion", "accordion-flush", "pb-5"], [4, "ngFor", "ngForOf"], ["class", "accordion-collapse collapse show linebreak pt-2 mt-2", 4, "ngFor", "ngForOf"], [1, "row", "mt-2", "ps-4", "pe-3"], [3, "close", "closeChange", 4, "ngIf"], [1, "col"], [1, "d-grid", "gap-2"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus"], ["class", "row mt-2 ps-3 pe-2", 4, "ngIf"], ["class", "accordion-item", 4, "ngIf"], [1, "row", "mt-2", "ps-3", "pe-2"], [3, "collectionIndex", "editMode", "editCollection", "collectionIndexChange", "editModeChange"], [1, "accordion-item"], ["id", "flush-headingOne", 1, "row", "accordion-header", "m-0", "pt-1", "pb-1"], ["data-bs-toggle", "collapse", "aria-expanded", "false", 1, "col-10", "ps-4", "pe-2", "pt-1", "collapsed", 3, "aria-controls"], [1, "col-2", "d-flex", "justify-content-end"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "btn-sm", "expand-files"], [1, "fas", "fa-ellipsis-h"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "dropdown-item", "danger", 3, "click"], ["class", "accordion-collapse collapse ", "aria-labelledby", "flush-headingOne", "data-bs-parent", "#accordionFlushExample", 4, "ngFor", "ngForOf"], ["aria-labelledby", "flush-headingOne", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], [1, "accordion-body", "pt-2", "pb-2", "ps-5", "pe-2", 3, "routerLink"], [1, "accordion-collapse", "collapse", "show", "linebreak", "pt-2", "mt-2"], [3, "close", "closeChange"]], template: function CollectionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Collections");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CollectionListComponent_div_6_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CollectionListComponent_div_7_Template, 3, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CollectionListComponent_app_collection_create_9_Template, 1, 1, "app-collection-create", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CollectionListComponent_Template_button_click_13_listener() { return ctx.onAddCollection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " A\u00F1adir Colecci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orphanedDatafiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.close);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _collection_create_collection_create_component__WEBPACK_IMPORTED_MODULE_6__["CollectionCreateComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], styles: ["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 1rem;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n.add-file[_ngcontent-%COMP%] {\r\n    color: grey;\r\n}\r\n\r\n.my-custom-scrollbar[_ngcontent-%COMP%] {\r\n    height: 60%;\r\n    overflow: auto;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    \r\n    color: black;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    \r\n    color: black;\r\n}\r\n\r\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\r\n    color: black !important;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3 !important;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\r\n    background-color: #e7e7e7 !important;\r\n}\r\n\r\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed)::after {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n        padding-top: 15px;\r\n    }\r\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n.user-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.members[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3;\r\n}\r\n\r\n.collections[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3;\r\n}\r\n\r\n.btn-outline-light[_ngcontent-%COMP%] {\r\n    color: rgb(156, 156, 156) !important;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n    color: #dc3845;\r\n}\r\n\r\n.complete-height[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.accordion-header[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3;\r\n}\r\n\r\n.accordion-header[_ngcontent-%COMP%]:hover {\r\n    background-color: #dbdbdb;\r\n}\r\n\r\n.btn-outline-secondary[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\r\n    color: #6c757d;\r\n    background-color: #cccccc;\r\n}\r\n\r\n.add-file[_ngcontent-%COMP%] {\r\n    color: #6c757d;\r\n    border-color: #6c757d;\r\n}\r\n\r\n.add-file[_ngcontent-%COMP%]:hover {\r\n    color: #6c757d;\r\n    background-color: #cccccc;\r\n    border-color: #cccccc;\r\n}\r\n\r\n.linebreak[_ngcontent-%COMP%] {\r\n    border-width: 1px 0 0 0;\r\n    border-style: solid;\r\n    border-top-color: #6c757d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtrQkFDYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDhSQUE4UjtBQUNsUzs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJjb2xsZWN0aW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmFkZC1maWxlIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYzO1xyXG59XHJcblxyXG4uc2lkZW5hdiBoMiB7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4IDBweCA1cHggMjBweDtcclxuICAgIG1hcmdpbjogMHB4OyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc2lkZW5hdiBoNCB7XHJcbiAgICAvKiBtYXJnaW46IDBweDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZW5hdiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZW5hdiBkaXY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCk6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyUyMzAwMCclM2UlM2NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTEuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggMTAuMjkzbDUuNjQ2LTUuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDggMGwtNi02YS41LjUgMCAwIDEgMC0uNzA4eicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZW5hdiBhIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51c2VyLXBob3RvIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLm1lbWJlcnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMztcclxufVxyXG5cclxuLmNvbGxlY3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjM7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodCB7XHJcbiAgICBjb2xvcjogcmdiKDE1NiwgMTU2LCAxNTYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gICAgY29sb3I6ICNkYzM4NDU7XHJcbn1cclxuXHJcbi5jb21wbGV0ZS1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYzO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWhlYWRlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbi5hZGQtZmlsZSB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmFkZC1maWxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGJvcmRlci1jb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuLmxpbmVicmVhayB7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNmM3NTdkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\irene\Desktop\TabLab\src\main.ts */"zUnb");


/***/ }),

/***/ "0ceX":
/*!*******************************************!*\
  !*** ./src/app/services/roles.service.ts ***!
  \*******************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/roles/';
class RolesService {
    constructor(http) {
        this.http = http;
    }
    addRole(workspaceId, userId) {
        let res;
        const role = {
            'id': null,
            'role': null,
            'workspace': workspaceId,
            'user': userId
        };
        this.http.post(BACKEND_URL, role).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Creating a role failed!');
                }
                else {
                    resolve('Role added successfully!');
                }
            }, 1000);
        });
    }
    updateRole(roleId, roleName) {
        let res;
        const role = {
            'id': roleId,
            'role': roleName,
            'workspace': null,
            'user': null
        };
        this.http.put(BACKEND_URL + roleId, role).subscribe(response => {
            res = response;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Updating a role failed!');
                }
                else {
                    resolve('Role updated successfully!');
                }
            }, 1000);
        });
    }
    deleteRole(workspaceId) {
        let res;
        this.http.delete(BACKEND_URL + workspaceId).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Deleting a role failed!');
                }
                else {
                    resolve('Role deleted successfully!');
                }
            }, 1000);
        });
    }
}
RolesService.ɵfac = function RolesService_Factory(t) { return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RolesService, factory: RolesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_activities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/activities.service */ "Tlm4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/activity/activity-list/activity-list.component */ "dSgO");





function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Prueba tus tablas!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ahorra tiempo validando tus tablas de forma r\u00E1pida y sencilla mediante el uso de TabLab.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Prueba tus tablas!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ahorra tiempo validando tus tablas de forma r\u00E1pida y sencilla mediante el uso de TabLab.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-activity-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(authService, activitiesService) {
        this.authService = authService;
        this.activitiesService = activitiesService;
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_activities_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[1, "m-5"], [4, "ngIf"], ["class", "row ps-2 pe-2 complete-height", 4, "ngIf"], [1, "m-3"], [1, "text-align-left"], [1, "row", "ps-2", "pe-2", "complete-height"], [1, "col-3", "p-0"], [1, "col-6"], [1, "col-3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_4__["ActivityListComponent"]], encapsulation: 2 });


/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "6Qg2");
/* harmony import */ var _services_invitations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/invitations.service */ "qNvm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = function () { return ["workspaces"]; };
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Espacios de Trabajo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function HeaderComponent_li_8_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
const _c1 = function () { return ["invitations"]; };
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Invitaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_li_8_i_3_Template, 1, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userIsAuthenticated && ctx_r1.pendingInvitation);
} }
const _c2 = function () { return ["configuration"]; };
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Configuraci\u00F3n Global ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["auth/login"]; };
const _c4 = function () { return ["auth/signup"]; };
function HeaderComponent_form_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Iniciar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c4));
} }
function HeaderComponent_form_12_div_3_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
function HeaderComponent_form_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_form_12_div_3_img_1_Template, 1, 0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading);
} }
function HeaderComponent_form_12_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_form_12_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Configuraci\u00F3n de la cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_form_12_ul_5_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cerrar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r8.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Logueado/a como ", ctx_r8.user.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/account/", ctx_r8.userId, "/edit");
} }
function HeaderComponent_form_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_form_12_div_3_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_form_12_img_4_Template, 1, 1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_form_12_ul_5_Template, 10, 3, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
} }
class HeaderComponent {
    constructor(authService, usersService, invitationsService) {
        this.authService = authService;
        this.usersService = usersService;
        this.invitationsService = invitationsService;
        this.isLoading = false;
        this.pendingInvitation = false;
        this.userIsAuthenticated = false;
        this.invitations = [];
    }
    ngOnInit() {
        this.isLoading = true;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            console.log(this.userIsAuthenticated);
        });
        const data = this.authService.getUserData();
        if (data) {
            this.userId = data.userId;
            this.usersService.getUser(this.userId).subscribe(userData => {
                this.user = {
                    id: userData.user.id,
                    username: userData.user.username,
                    email: userData.user.email,
                    password: userData.user.password,
                    photo: userData.user.photo,
                    name: userData.user.name,
                    role: userData.user.role,
                    status: userData.user.status,
                    google: userData.user.google
                };
                this.isLoading = false;
            });
        }
        this.isLoading = true;
        this.userId = this.authService.getUserId();
        if (this.userId) {
            this.invitationsService.getInvitationsHeader().subscribe((invitationData) => {
                this.isLoading = false;
                this.invitations = invitationData.invitations;
                for (var invitation of this.invitations) {
                    if (invitation.status === 'pending') {
                        this.pendingInvitation = true;
                        break;
                    }
                }
            });
        }
    }
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
    }
    onLogout() {
        this.authService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_invitations_service__WEBPACK_IMPORTED_MODULE_3__["InvitationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "p-3"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["class", "form-inline", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["class", "ms-1 fas fa-envelope", "style", "width: 40px; color: rgb(169, 85, 248);", 4, "ngIf"], [1, "ms-1", "fas", "fa-envelope", 2, "width", "40px", "color", "rgb(169, 85, 248)"], [1, "form-inline"], ["routerLinkActive", "active", 1, "btn", "btn-outline-primary", "me-2", 3, "routerLink"], ["routerLinkActive", "active", 1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm"], ["class", "mt-2", 4, "ngIf"], ["class", "border rounded-circle", "style", "width: 40px;", "alt", "", 3, "src", 4, "ngIf"], ["class", "dropdown-menu dropdown-menu-end", "aria-labelledby", "dropdownMenuButton1", 4, "ngIf"], [1, "mt-2"], ["src", "/backend/assets/default-user-little.png", "class", "border rounded-circle", "style", "width: 40px;", "alt", "", 4, "ngIf"], ["src", "/backend/assets/default-user-little.png", "alt", "", 1, "border", "rounded-circle", 2, "width", "40px"], ["alt", "", 1, "border", "rounded-circle", 2, "width", "40px", 3, "src"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink"], ["routerLinkActive", "active", 1, "dropdown-item", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TabLab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 4, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_form_11_Template, 5, 4, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_form_12_Template, 6, 3, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated && ctx.user.role === "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" User is authenticated: ", ctx.userIsAuthenticated, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"]], encapsulation: 2 });


/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5fFZ":
/*!************************************************!*\
  !*** ./src/app/pages/auth/auth-interceptor.ts ***!
  \************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");


class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        });
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "6Qg2":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/users/';
class UsersService {
    constructor(http) {
        this.http = http;
        this.users = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getUserUpdateListener() {
        return this.usersUpdated.asObservable();
    }
    getUsersByWorkspace(workspaceId) {
        return this.http.get(BACKEND_URL + 'workspace/' + workspaceId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((userData) => {
            return {
                users: userData.users.map(user => {
                    return {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        password: user.password,
                        photo: user.photo,
                        name: user.name,
                        role: user.role,
                        status: user.status,
                        google: user.google,
                    };
                }),
            };
        }))
            .subscribe((transformedUserData) => {
            this.users = transformedUserData.users;
            this.usersUpdated.next({
                users: [...this.users]
            });
        });
    }
    getUser(userId) {
        return this.http.get(BACKEND_URL + userId);
    }
    addUser(username, email, password) {
        let res;
        const authData = {
            'id': null,
            'username': username,
            'name': null,
            'email': email,
            'password': password,
            'photo': null,
            'role': 'USER',
            'status': null,
            'google': null
        };
        this.http.post(BACKEND_URL, authData).subscribe(response => {
            res = response;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Creating an user failed!');
                }
                else {
                    resolve('User created successfully!');
                }
            }, 1000);
        });
    }
    updateUser(userId, name, username, email, role, actualPass, newPass, repeatPass) {
        let res;
        const userData = {
            'id': userId,
            'name': name,
            'username': username,
            'email': email,
            'role': role,
            'actualPass': actualPass,
            'newPass': newPass,
            'repeatPass': repeatPass
        };
        this.http.put(BACKEND_URL + userId, userData).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Updating an user failed!');
                }
                else {
                    resolve('User updated successfully!');
                }
            }, 1000);
        });
    }
    deleteAccount(userId) {
        let res;
        this.http.delete(BACKEND_URL + userId).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Deleting an user failed!');
                }
                else {
                    resolve('User deleted successfully!');
                }
            }, 1000);
        });
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "952Z":
/*!************************************************!*\
  !*** ./src/app/services/workspaces.service.ts ***!
  \************************************************/
/*! exports provided: WorkspacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspacesService", function() { return WorkspacesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/workspaces/';
class WorkspacesService {
    constructor(http) {
        this.http = http;
        this.workspaces = [];
        this.workspacesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getWorkspaceUpdateListener() {
        return this.workspacesUpdated.asObservable();
    }
    getWorkspaces(workspacesPerPage, currentPage) {
        const queryParams = `?pagesize=${workspacesPerPage}&page=${currentPage}`;
        this.http.get(BACKEND_URL + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((workspaceData) => {
            return { workspaces: workspaceData.workspaces.map(workspace => {
                    return {
                        id: workspace._id,
                        title: workspace.title,
                        description: workspace.description,
                        creationMoment: workspace.creationMoment,
                        mandatory: workspace.mandatory,
                        users: workspace.users
                    };
                }),
                maxWorkspaces: workspaceData.maxWorkspaces,
                totalWorkspaces: workspaceData.totalWorkspaces
            };
        }))
            .subscribe((transformedWorkspaceData) => {
            this.workspaces = transformedWorkspaceData.workspaces;
            this.workspacesUpdated.next({
                workspaces: [...this.workspaces],
                workspaceCount: transformedWorkspaceData.maxWorkspaces,
                totalWorkspaces: transformedWorkspaceData.totalWorkspaces
            });
        });
    }
    getWorkspace(workspaceId) {
        return this.http.get(BACKEND_URL + workspaceId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((workspaceData) => {
            return {
                workspace: workspaceData.workspace,
                orphanedDatafiles: workspaceData.orphanedDatafiles
                    .map(datafile => {
                    return {
                        id: datafile._id,
                        title: datafile.title,
                        description: datafile.description,
                        contentPath: datafile.contentPath,
                        errLimit: datafile.errLimit,
                        delimiter: datafile.delimiter,
                        coleccion: datafile.coleccion,
                        workspace: datafile.workspace
                    };
                })
            };
        }));
    }
    addWorkspace(title, description, mandatory, invitations) {
        let res;
        const workspaceData = {
            'title': title,
            'description': description,
            'creationMoment': null,
            'mandatory': mandatory,
            'invitations': invitations
        };
        this.http.post(BACKEND_URL, workspaceData).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Creating a workspace failed!');
                }
                else {
                    resolve('Workspace added successfully!');
                }
            }, 1000);
        });
    }
    updateWorkspace(workspaceId, title, description) {
        let res;
        const workspace = {
            'id': workspaceId,
            'title': title,
            'description': description,
            'creationMoment': null,
            'mandatory': null
        };
        this.http.put(BACKEND_URL + workspaceId, workspace).subscribe(response => {
            res = response;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Updating a workspace failed!');
                }
                else {
                    resolve('Workspace updated successfully!');
                }
            }, 1000);
        });
    }
    deleteWorkspace(workspaceId) {
        let res;
        this.http.delete(BACKEND_URL + workspaceId).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Deleting a workspace failed!');
                }
                else {
                    resolve('Workspace deleted successfully!');
                }
            }, 1000);
        });
    }
}
WorkspacesService.ɵfac = function WorkspacesService_Factory(t) { return new (t || WorkspacesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
WorkspacesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: WorkspacesService, factory: WorkspacesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var src_app_models_fricError_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/fricError.model */ "F3AD");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const average = [
    'mean',
    'median',
    'mode'
];
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
    SOCKET_ENDPOINT: 'http://localhost:3000',
    errors: [
        new src_app_models_fricError_model__WEBPACK_IMPORTED_MODULE_0__["FricError"]('duplicate-row', null),
        new src_app_models_fricError_model__WEBPACK_IMPORTED_MODULE_0__["FricError"]('deviated-value', new src_app_models_fricError_model__WEBPACK_IMPORTED_MODULE_0__["DeviatedValueParams"]('', average, 0))
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.



/***/ }),

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ErrorComponent {
    constructor(data) {
        this.data = data;
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "mat-body-1"], ["maat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "An Error ocurred");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Okay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "CV7a":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/workspaces/workspace-create/workspace-create.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WorkspaceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceCreateComponent", function() { return WorkspaceCreateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/workspaces.service */ "952Z");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_invitation_invitation_create_invitation_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/invitation/invitation-create/invitation-create.component */ "OeXY");











function WorkspaceCreateComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
function WorkspaceCreateComponent_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un t\u00EDtulo adecuado (entre 1 y 100 caracteres). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceCreateComponent_div_1_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese una descripci\u00F3n adecuada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceCreateComponent_div_1_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceCreateComponent_div_1_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceCreateComponent_div_1_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceCreateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function WorkspaceCreateComponent_div_1_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Nuevo Espacio de Trabajo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, WorkspaceCreateComponent_div_1_small_10_Template, 2, 0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WorkspaceCreateComponent_div_1_small_14_Template, 2, 0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-invitation-create", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("invitationsChange", function WorkspaceCreateComponent_div_1_Template_app_invitation_create_invitationsChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.invitations = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, WorkspaceCreateComponent_div_1_a_18_Template, 2, 0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, WorkspaceCreateComponent_div_1_button_19_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.workspaceForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.invalidTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.invalidDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("invitations", ctx_r1.invitations)("create", ctx_r1.create);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
} }
class WorkspaceCreateComponent {
    constructor(workspacesService, formBuilder, authService, router) {
        this.workspacesService = workspacesService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.userIsAuthenticated = false;
        this.create = true;
        this.invitations = [];
        this.createForm();
    }
    createForm() {
        this.workspaceForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(100)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(200)]],
            invitations: ['',],
        });
    }
    get invalidTitle() {
        return this.workspaceForm.get('title').invalid && this.workspaceForm.get('title').touched;
    }
    get invalidDescription() {
        return this.workspaceForm.get('description').invalid && this.workspaceForm.get('description').touched;
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
    }
    ngOnDestroy() {
        this.create = false;
        this.authStatusSub.unsubscribe();
    }
    onSave() {
        if (this.workspaceForm.invalid) {
            return Object.values(this.workspaceForm.controls).forEach(control => {
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    Object.values(control.controls).forEach(control => control.markAsTouched());
                }
                else {
                    control.markAsTouched();
                }
            });
        }
        this.isLoading = true;
        const values = this.workspaceForm.getRawValue();
        this.workspacesService.addWorkspace(values.title, values.description, false, this.invitations)
            .then(() => {
            this.router.navigate(['/workspaces']);
        })
            .catch(err => {
            console.log("Error on onSave() method: " + err);
        });
        this.isLoading = false;
    }
    onCancel() {
        this.workspaceForm.reset();
        this.router.navigate(['/workspaces']);
    }
}
WorkspaceCreateComponent.ɵfac = function WorkspaceCreateComponent_Factory(t) { return new (t || WorkspaceCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_2__["WorkspacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
WorkspaceCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkspaceCreateComponent, selectors: [["app-workspace-create"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "row justify-content-sm-center mt-5", 4, "ngIf"], [1, "row", "justify-content-sm-center", "mt-5"], [1, "col-4"], [1, "card", "animate__animated", "animate__fadeIn", "animate__faster"], [1, "card-body"], [1, "card-body", 3, "formGroup", "ngSubmit"], [1, "card-title"], ["matInput", "", "type", "text", "placeholder", "T\u00EDtulo", "formControlName", "title"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "type", "description", "placeholder", "Descripci\u00F3n", "formControlName", "description"], [3, "invitations", "create", "invitationsChange"], [1, "row"], [1, "col", "d-flex", "justify-content-end"], ["class", "mt-3 me-1 btn btn-outline-secondary btn-block", 3, "click", 4, "ngIf"], ["type", "submit", "class", "mt-3 btn btn-primary btn-block", 4, "ngIf"], [1, "text-danger"], [1, "mt-3", "me-1", "btn", "btn-outline-secondary", "btn-block", 3, "click"], ["type", "submit", 1, "mt-3", "btn", "btn-primary", "btn-block"]], template: function WorkspaceCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WorkspaceCreateComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkspaceCreateComponent_div_1_Template, 20, 11, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _components_invitation_invitation_create_invitation_create_component__WEBPACK_IMPORTED_MODULE_9__["InvitationCreateComponent"]], styles: ["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 1rem;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzcGFjZS1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJ3b3Jrc3BhY2UtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "F3AD":
/*!*******************************************!*\
  !*** ./src/app/models/fricError.model.ts ***!
  \*******************************************/
/*! exports provided: FricError, DeviatedValueParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FricError", function() { return FricError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviatedValueParams", function() { return DeviatedValueParams; });
// export interface FricError {
//   errorCode: string;
//   extraParams: Map<any, any>;
// }
class FricError {
    constructor(errorCode, extraParams) {
        this.errorCode = errorCode;
        this.extraParams = extraParams;
    }
}
class DeviatedValueParams {
    constructor(fieldName, average, interval) {
        this.fieldName = fieldName;
        this.average = average;
        this.interval = interval;
        this.hints = { 'fieldName': 'Debe ingresar el nombre de uno de los campos del contenido del fichero.',
            'average': '',
            'interval': 'Este parámetro es numérico y superior o igual a 0.' };
    }
    invalid(paramName, value) {
        if (paramName === 'fieldName') {
            return false;
        }
        else if (paramName === 'average') {
            return false;
        }
        else if (paramName === 'interval' && value < 0) {
            return true;
        }
        else {
            return false;
        }
    }
    getHint(paramName) {
        if (paramName === 'fieldName') {
            return 'Debe ingresar el nombre de uno de los campos del contenido del fichero.';
        }
        else if (paramName === 'average') {
            return '';
        }
        else if (paramName === 'interval') {
            return 'Este parámetro es numérico y superior o igual a 0.';
        }
        else {
            return '';
        }
    }
}


/***/ }),

/***/ "Ig03":
/*!****************************************************************!*\
  !*** ./src/app/pages/configuration/configuration.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_activities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/activities.service */ "Tlm4");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ConfigurationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Configuraci\u00F3n Global");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ConfigurationComponent {
    //private authListenerSubs: Subscription;
    constructor(authService, activitiesService, usersService) {
        this.authService = authService;
        this.activitiesService = activitiesService;
        this.usersService = usersService;
        this.isLoading = false;
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        const data = this.authService.getUserData();
        if (data) {
            this.userId = data.userId;
            this.usersService.getUser(this.userId).subscribe(userData => {
                this.user = {
                    id: userData.user.id,
                    username: userData.user.username,
                    email: userData.user.email,
                    password: userData.user.password,
                    photo: userData.user.photo,
                    name: userData.user.name,
                    role: userData.user.role,
                    status: userData.user.status,
                    google: userData.user.google
                };
                this.isLoading = false;
            });
        }
    }
    onLogout() {
        this.authService.logout();
    }
}
ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) { return new (t || ConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_activities_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"])); };
ConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigurationComponent, selectors: [["app-configuration"]], decls: 2, vars: 1, consts: [[1, "m-5"], ["class", "row ps-2 pe-2 complete-height", 4, "ngIf"], [1, "row", "ps-2", "pe-2", "complete-height"], [1, "col-3", "p-0"], [1, "col-6"], [1, "col-3"]], template: function ConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigurationComponent_div_1_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated && ctx.user.role === "ADMIN");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "JPLv":
/*!***************************************************!*\
  !*** ./src/app/services/configuration.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/configurations/';
class ConfigurationService {
    constructor(http) {
        this.http = http;
    }
    getConfiguration(configurationId) {
        // 
        return this.http.get(BACKEND_URL + configurationId);
    }
    addConfiguration(values, datafileId) {
        let res;
        //const configuration = {...values};
        const { title, errorCode } = values, extraParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(values, ["title", "errorCode"]);
        const configuration = {
            'id': null,
            'title': title,
            'creationMoment': null,
            'errorCode': errorCode,
            'extraParams': extraParams,
            'datafile': datafileId
        };
        this.http.post(BACKEND_URL, configuration).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Creating a configuration failed!');
                }
                else {
                    resolve('Configuration added successfully!');
                }
            }, 1000);
        });
    }
    updateConfiguration(configurationId, values, datafileId) {
        let res;
        //const configuration = {...values};
        const { title, errorCode } = values, extraParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(values, ["title", "errorCode"]);
        const configuration = {
            'id': configurationId,
            'title': title,
            'creationMoment': null,
            'errorCode': errorCode,
            'extraParams': extraParams,
            'datafile': datafileId
        };
        this.http.put(BACKEND_URL + configurationId, configuration).subscribe(response => {
            res = response;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Updating a configuration failed!');
                }
                else {
                    resolve('Configuration updated successfully!');
                }
            }, 1000);
        });
    }
    deleteConfiguration(configurationId) {
        let res;
        this.http.delete(BACKEND_URL + configurationId).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Deleting a configuration failed!');
                }
                else {
                    resolve('Configuration deleted successfully!');
                }
            }, 1000);
        });
    }
}
ConfigurationService.ɵfac = function ConfigurationService_Factory(t) { return new (t || ConfigurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ConfigurationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfigurationService, factory: ConfigurationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KY19":
/*!*********************************************!*\
  !*** ./src/app/services/reports.service.ts ***!
  \*********************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/reports/';
class ReportsService {
    constructor(http) {
        this.http = http;
    }
    addReport(testId) {
        let res;
        const executionData = {
            'testId': testId
        };
        return this.http.put(BACKEND_URL, executionData);
        // .pipe(map( (testData) => {
        //   return { 
        //     testsUpdates: testData.testsUpdates.map(test => {
        //         return {
        //           id: test._id,
        //           title: test.title,
        //           reportPath: test.reportPath,
        //           status: test.status,
        //           esquema: test.esquema,
        //           configurations: test.configurations,
        //           creationMoment: test.creationMoment,
        //           updateMoment:test .updateMoment,
        //           executionMoment: test.executionMoment,
        //           totalErrors: test.totalErrors,
        //           executable: test.executable,
        //           datafile: test.datafile,
        //         };
        //       })  
        //   };
        // }));
    }
}
ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ReportsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReportsService, factory: ReportsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() {
        this.anio = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 1, consts: [[1, "footer", "bg-dark", "text-center"], [1, "row", "justify-content-sm-center"], [1, "col-sm-1"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " T\u00E9rminos de Uso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Privacidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 TabLab ", ctx.anio, " ");
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    color: white;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "OeXY":
/*!****************************************************************************************!*\
  !*** ./src/app/components/invitation/invitation-create/invitation-create.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InvitationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationCreateComponent", function() { return InvitationCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_invitations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/invitations.service */ "qNvm");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");









function InvitationCreateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.invalidEmail);
} }
function InvitationCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A\u00F1adir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidEmail);
} }
function InvitationCreateComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ingrese un correo adecuado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvitationCreateComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6, " ");
} }
function InvitationCreateComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InvitationCreateComponent_div_7_div_3_Template, 9, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.invitations);
} }
function InvitationCreateComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invitar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvitationCreateComponent_div_8_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InvitationCreateComponent {
    constructor(invitationsService, authService, formBuilder, activatedRoute, router) {
        this.invitationsService = invitationsService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isLoading = false;
        this.invalidEmail = false;
        this.invitationsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createForm();
    }
    createForm() {
        this.invitationForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
        });
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            // this.isLoading = false;
        });
        this.activatedRoute.paramMap.subscribe(params => {
            this.workspaceId = params.get('workspaceId');
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    onInvite() {
        if (this.invitationForm.invalid) {
            this.invalidEmail = true;
            return Object.values(this.invitationForm.controls).forEach(control => {
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                    Object.values(control.controls).forEach(control => control.markAsTouched());
                }
                else {
                    control.markAsTouched();
                }
            });
        }
        // this.isLoading = true;
        const values = this.invitationForm.getRawValue();
        if (this.create) {
            this.invitations.push(values.email);
            this.invitationsChange.emit(this.invitations);
        }
        else {
            this.invitationsService.addInvitation(values.email, this.workspaceId)
                .then(response => {
                this.router.navigate(['/']);
            })
                .catch(err => {
                console.log("Error on onInvite method: " + err);
            });
        }
        this.invitationForm.reset();
        // this.isLoading = false;
    }
    onReset() {
        this.invitationForm.reset();
    }
}
InvitationCreateComponent.ɵfac = function InvitationCreateComponent_Factory(t) { return new (t || InvitationCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_invitations_service__WEBPACK_IMPORTED_MODULE_2__["InvitationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
InvitationCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvitationCreateComponent, selectors: [["app-invitation-create"]], inputs: { create: "create", invitations: "invitations" }, outputs: { invitationsChange: "invitationsChange" }, decls: 9, vars: 6, consts: [[1, "row", "mt-2", 3, "formGroup", "ngSubmit"], ["class", "row m-0 p-0", 4, "ngIf"], ["class", "input-group", 4, "ngIf"], [1, "row", "ms-0", "mb-2", "p-0"], [1, "col", "d-flex", "justify-content-start"], ["class", "text-danger", 4, "ngIf"], ["class", "row ms-0 p-0", 4, "ngIf"], ["class", "row mt-1 m-0 p-0", 4, "ngIf"], [1, "row", "m-0", "p-0"], [1, "col", "input-group", "input-group-sm"], ["type", "email", "placeholder", "Introduce un email...", "formControlName", "email", 1, "form-control"], [1, "input-group"], ["type", "button", "type", "submit", "id", "button-addon2", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "text-danger"], [1, "row", "ms-0", "p-0"], [1, "col"], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "list-group-item", "container", "p-1"], [1, "row", "ps-2", "pe-3"], [1, "col-10", "mt-1"], [1, "col-2", "m-0", "p-0", "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], [1, "fas", "fa-times"], [1, "row", "mt-1", "m-0", "p-0"], [1, "col", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "me-1"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"]], template: function InvitationCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InvitationCreateComponent_Template_form_ngSubmit_0_listener() { return ctx.onInvite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvitationCreateComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvitationCreateComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InvitationCreateComponent_small_6_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InvitationCreateComponent_div_7_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InvitationCreateComponent_div_8_Template, 6, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.invitationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.create);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.create);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.create);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.create);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2 });


/***/ }),

/***/ "PSlf":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/configuration/configuration-create/configuration-create.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ConfigurationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationCreateComponent", function() { return ConfigurationCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/configuration.service */ "JPLv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ConfigurationCreateComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un t\u00EDtulo adecuado (entre 1 y 100 caracteres). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfigurationCreateComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fricError_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", fricError_r7.errorCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fricError_r7.errorCode);
} }
function ConfigurationCreateComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Seleccione un c\u00F3digo de error. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfigurationCreateComponent_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extraControl_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r9.invalidParam(extraControl_r8.extraParam));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", extraControl_r8.extraParam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", extraControl_r8.extraParam);
} }
function ConfigurationCreateComponent_div_20_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enumVal_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", enumVal_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](enumVal_r15);
} }
function ConfigurationCreateComponent_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfigurationCreateComponent_div_20_div_3_option_4_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extraControl_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r10.invalidParam(extraControl_r8.extraParam));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", extraControl_r8.extraParam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", extraControl_r8.extraParam, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", extraControl_r8.enum);
} }
function ConfigurationCreateComponent_div_20_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extraControl_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r11.invalidParam(extraControl_r8.extraParam));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", extraControl_r8.extraParam);
} }
function ConfigurationCreateComponent_div_20_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extraControl_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", extraControl_r8.hint, " ");
} }
function ConfigurationCreateComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConfigurationCreateComponent_div_20_div_2_Template, 2, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfigurationCreateComponent_div_20_div_3_Template, 5, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfigurationCreateComponent_div_20_div_4_Template, 2, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ConfigurationCreateComponent_div_20_small_6_Template, 2, 1, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extraControl_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", extraControl_r8.extraParam, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", extraControl_r8.tipo === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", extraControl_r8.tipo === "enum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", extraControl_r8.tipo === "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.invalidParam(extraControl_r8.extraParam));
} }
function ConfigurationCreateComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationCreateComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Guardar cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfigurationCreateComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationCreateComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear configuraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfigurationCreateComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationCreateComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear configuraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ConfigurationCreateComponent {
    // private fricErrorsSub         : Subscription;
    constructor(configurationService, route, usersService, router) {
        this.configurationService = configurationService;
        this.route = route;
        this.usersService = usersService;
        this.router = router;
        this.userIsAuthenticated = false;
        this.extraControls = [];
        this.configurationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    //
    ngOnInit() {
        this.fricErrors = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].errors;
        this.userIsAuthenticated = this.usersService.getIsAuth();
    }
    ngOnDestroy() {
        //this.authStatusSub.unsubscribe();
    }
    get invalidTitle() {
        return this.configurationForm.get('title').invalid && this.configurationForm.get('title').touched;
    }
    get invalidErrorCode() {
        return this.configurationForm.get('errorCode').invalid && this.configurationForm.get('errorCode').touched;
    }
    invalidParam(param, value) {
        let invalid = false;
        if (this.pickedError.extraParams && this.configurationForm.get(param)) {
            invalid = this.pickedError.extraParams.invalid(param, this.configurationForm.get(param).value);
            return (invalid || this.configurationForm.get(param).invalid) && this.configurationForm.get(param).touched;
        }
        else {
            return false;
        }
    }
    onErrorPicked(event) {
        const errorCode = event.target.value;
        const fricError = this.fricErrors.find(element => element.errorCode === errorCode);
        this.pickedError = fricError;
        if (fricError.extraParams) {
            Object.keys(fricError.extraParams).forEach(extraParam => {
                let tipo = '';
                let extraControl = {};
                if (fricError.extraParams[extraParam].length > 0) {
                    tipo = 'enum';
                    extraControl = {
                        'extraParam': extraParam,
                        'tipo': tipo,
                        'enum': fricError.extraParams[extraParam],
                        'hint': fricError.extraParams.getHint(extraParam)
                    };
                }
                else if (extraParam !== 'hints') {
                    tipo = typeof fricError.extraParams[extraParam];
                    extraControl = {
                        'extraParam': extraParam,
                        'tipo': tipo,
                        'hint': fricError.extraParams.getHint(extraParam)
                    };
                }
                this.configurationForm.addControl(extraParam, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }));
                this.extraControls.push(extraControl);
            });
        }
    }
    onCancel() {
        this.configurationForm.reset();
        this.extraControls.forEach(newControl => {
            this.configurationForm.removeControl(newControl[0]);
        });
        this.configurationChange.emit([]);
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (this.configuration) { // Modo edición
            //   if (this.configurationForm.get('title').invalid) {
            //     this.configurationForm.get('title').markAsTouched();
            //     return;
            //   }
            // } else {
            if (this.configurationForm.invalid) {
                return Object.values(this.configurationForm.controls).forEach(control => {
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                        Object.values(control.controls).forEach(control => control.markAsTouched());
                    }
                    else {
                        control.markAsTouched();
                    }
                });
            }
            // }
            const values = this.configurationForm.getRawValue();
            if (this.configuration) {
                yield this.configurationService.updateConfiguration(this.configurationId, values, this.datafileId);
            }
            else {
                yield this.configurationService.addConfiguration(values, this.datafileId);
                // (document.getElementById('esquemaContent') as HTMLInputElement).value = '';
            }
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
            }).catch(err => {
                console.log("Error on onSave method: " + err);
            });
            // Resets
            this.configurationForm.reset();
            this.extraControls.forEach(newControl => {
                this.configurationForm.removeControl(newControl[0]);
            });
            this.configurationChange.emit([]);
        });
    }
}
ConfigurationCreateComponent.ɵfac = function ConfigurationCreateComponent_Factory(t) { return new (t || ConfigurationCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ConfigurationCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfigurationCreateComponent, selectors: [["app-configuration-create"]], inputs: { configurationForm: "configurationForm", datafileId: "datafileId", workspaceId: "workspaceId", configurationId: "configurationId", savefile: "savefile", extraControls: "extraControls", configuration: "configuration" }, outputs: { configurationChange: "configurationChange" }, decls: 27, vars: 12, consts: [["id", "configuratioModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "placeholder", "T\u00EDtulo", "formControlName", "title", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "errorCode", 1, "form-select", "form-select-sm", 3, "change"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger ", 4, "ngIf"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", "class", "btn btn-primary", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "text-danger"], [3, "value"], [4, "ngIf"], ["type", "text", 1, "form-control", 3, "placeholder", "formControlName"], [1, "form-select", "form-select-sm", 3, "formControlName"], ["value", "", "selected", ""], ["type", "number", 1, "form-control", 3, "formControlName"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function ConfigurationCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "A\u00F1adir Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationCreateComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ConfigurationCreateComponent_Template_form_ngSubmit_8_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ConfigurationCreateComponent_small_12_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ConfigurationCreateComponent_Template_select_change_14_listener($event) { return ctx.onErrorPicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " C\u00F3digo de Error ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ConfigurationCreateComponent_option_17_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ConfigurationCreateComponent_small_19_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ConfigurationCreateComponent_div_20_Template, 7, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigurationCreateComponent_Template_button_click_22_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ConfigurationCreateComponent_button_24_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ConfigurationCreateComponent_button_25_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ConfigurationCreateComponent_button_26_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.configurationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidErrorCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fricErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidErrorCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.extraControls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.configuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.configuration && ctx.configurationForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.configuration && !ctx.configurationForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmF0aW9uLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "QX/8":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/profile-details/profile-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function() { return ProfileDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/workspaces.service */ "952Z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");







function ProfileDetailsComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function ProfileDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Editar Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Configuraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Special title treatment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "With supporting text below as a natural lead-in to additional content.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Go somewhere");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r1.userId, "/edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/account/", ctx_r1.userId, "/edit");
} }
class ProfileDetailsComponent {
    constructor(authService, usersService, route, workspacesService) {
        this.authService = authService;
        this.usersService = usersService;
        this.route = route;
        this.workspacesService = workspacesService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            this.userId = paramMap.get('userId');
            this.isLoading = true;
            this.usersService.getUser(this.userId).subscribe(userData => {
                this.user = {
                    id: userData.user.id,
                    username: userData.user.username,
                    email: userData.user.email,
                    password: userData.user.password,
                    photo: userData.user.photo,
                    name: userData.user.name,
                    role: userData.user.role,
                    status: userData.user.status,
                    google: userData.user.google
                };
                this.isLoading = false;
            });
        });
    }
}
ProfileDetailsComponent.ɵfac = function ProfileDetailsComponent_Factory(t) { return new (t || ProfileDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_4__["WorkspacesService"])); };
ProfileDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileDetailsComponent, selectors: [["app-profile-details"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "container mt-5", 4, "ngIf"], [1, "container", "mt-5"], [1, "row", "justify-content-center"], [1, "col-9", "col-auto"], [1, "row"], [1, "col-4"], ["alt", "", 1, "border", "rounded-circle", "me-2", 2, "width", "100px", 3, "src"], [1, "mt-2"], [1, ""], [1, "btn", "btn-primary", "me-1", 3, "routerLink"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "col-8", "card", "text-center", "p-0"], [1, "card-header"], [1, "nav", "nav-tabs", "card-header-tabs"], [1, "nav-item"], ["aria-current", "true", "href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"]], template: function ProfileDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileDetailsComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileDetailsComponent_div_1_Template, 36, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "SJn0":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





class ErrorInterceptor {
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMessage = 'An unknown error ocurred!';
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");





// import { SocketioService } from './services/socketio.service';
class AppComponent {
    constructor(authService) {
        this.authService = authService;
    }
    //private socketService: SocketioService) {}
    ngOnInit() {
        this.authService.autoAuthUser();
        //this.socketService.setupSocketConnection();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "SyKm":
/*!*********************************************!*\
  !*** ./src/app/services/uploads.service.ts ***!
  \*********************************************/
/*! exports provided: UploadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsService", function() { return UploadsService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/uploads/';
class UploadsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    updatePhoto(userId, photo) {
        let res;
        let userData;
        if (typeof (photo) === 'object') {
            userData = new FormData();
            userData.append('userId', userId);
            userData.append('entity', 'users');
            userData.append('file', photo);
        }
        else {
            userData = { 'userId': userId, 'entity': 'users', 'filePath': photo };
        }
        this.http
            .put(BACKEND_URL + userId, userData)
            .subscribe(response => {
            res = response;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject();
                }
                else {
                    resolve(true);
                }
            }, 1000);
        });
    }
    updateFile(userId, datafileId, operation, file) {
        let res;
        let datafileData;
        if (typeof (file) === 'object') {
            datafileData = new FormData();
            datafileData.append('userId', userId);
            datafileData.append('datafileId', datafileId);
            datafileData.append('entity', 'datafiles');
            datafileData.append('operation', operation);
            datafileData.append('file', file);
        }
        else {
            datafileData = { 'userId': userId, 'datafileId': datafileId, 'entity': 'datafiles', 'operation': operation, 'filePath': file };
        }
        this.http
            .put(BACKEND_URL + datafileId, datafileData)
            .subscribe(response => {
            res = response;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject();
                }
                else {
                    resolve(true);
                }
            }, 1000);
        });
    }
}
UploadsService.ɵfac = function UploadsService_Factory(t) { return new (t || UploadsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UploadsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UploadsService, factory: UploadsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Tlm4":
/*!************************************************!*\
  !*** ./src/app/services/activities.service.ts ***!
  \************************************************/
/*! exports provided: ActivitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesService", function() { return ActivitiesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/activities/';
class ActivitiesService {
    constructor(http) {
        this.http = http;
        this.activities = [];
        this.activitiesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getActivityUpdateListener() {
        return this.activitiesUpdated.asObservable();
    }
    getActivities(userId) {
        //const queryParams = `?pagesize=${workspacesPerPage}&page=${currentPage}`;
        this.http.get(BACKEND_URL + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((activityData) => {
            return {
                workspaces: activityData.activities.map(activity => {
                    return {
                        id: activity._id,
                        message: activity.message,
                        workspace: activity.workspace,
                        author: activity.author,
                        coleccion: activity.coleccion,
                        datafile: activity.datafile,
                        creationMoment: activity.creationMoment
                    };
                }),
            };
        }))
            .subscribe((transformedWorkspaceData) => {
            this.activities = transformedWorkspaceData.workspaces;
            this.activitiesUpdated.next({
                activities: [...this.activities],
            });
        });
    }
}
ActivitiesService.ɵfac = function ActivitiesService_Factory(t) { return new (t || ActivitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ActivitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ActivitiesService, factory: ActivitiesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "V7ju":
/*!********************************************************************!*\
  !*** ./src/app/pages/tests/test-details/test-details.component.ts ***!
  \********************************************************************/
/*! exports provided: TestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDetailsComponent", function() { return TestDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tests.service */ "s0o0");
/* harmony import */ var _services_datafiles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/datafiles.service */ "g6qS");
/* harmony import */ var src_app_services_uploads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/uploads.service */ "SyKm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");















function TestDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TestDetailsComponent_div_5_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingrese un t\u00EDtulo adecuado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TestDetailsComponent_div_5_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TestDetailsComponent_div_5_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TestDetailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function TestDetailsComponent_div_5_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TestDetailsComponent_div_5_small_5_Template, 2, 0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TestDetailsComponent_div_5_button_8_Template, 2, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TestDetailsComponent_div_5_button_9_Template, 3, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TestDetailsComponent_div_5_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.onCancelTestForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.testForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.invalidTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isSavingTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isSavingTest);
} }
function TestDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TestDetailsComponent_div_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Ejecutar Prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TestDetailsComponent_div_6_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Eliminar Prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r2.test.title, " (from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("routerLink", "/workspace/", ctx_r2.workspaceId, "/datafile/", ctx_r2.datafileId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.datafile.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("routerLink", "/workspace/", ctx_r2.workspaceId, "/runner/", ctx_r2.test.id, "");
} }
function TestDetailsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TestDetailsComponent_div_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.onDownload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TestDetailsComponent_div_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.onEditContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TestDetailsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Nombre del archivo: ", ctx_r4.fileName, " ");
} }
function TestDetailsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Ejecutar Prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TestDetailsComponent_div_20_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.onSaveContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Guardar cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("routerLink", "/workspace/", ctx_r5.workspaceId, "/runner/", ctx_r5.test.id, "");
} }
function TestDetailsComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ----- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TestDetailsComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const esquema_r23 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", esquema_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx_r7.selectedEsquema && esquema_r23.id == ctx_r7.selectedEsquema.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](esquema_r23.title);
} }
function TestDetailsComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TestDetailsComponent_div_58_Template_input_change_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.onConfigurationPicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const configuration_r24 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](configuration_r24.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](configuration_r24.errorCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", configuration_r24.extraParamsStr || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", configuration_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r8.checkConfig(configuration_r24.id));
} }
class TestDetailsComponent {
    constructor(testsService, datafilesService, uploadsService, route, usersService, router) {
        this.testsService = testsService;
        this.datafilesService = datafilesService;
        this.uploadsService = uploadsService;
        this.route = route;
        this.usersService = usersService;
        this.router = router;
        this.isLoading = false;
        this.selectedConfigurationIDs = [];
        this.formattedConfigs = [];
        this.extension = null;
        this.fileName = null;
        this.isSavingTest = false;
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
        this.fileContentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'fileContent': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
        });
    }
    get invalidTitle() {
        return this.testForm.get('title').invalid && this.testForm.get('title').touched;
    }
    ngOnInit() {
        this.isLoading = true;
        this.route.paramMap.subscribe((paramMap) => {
            this.datafileId = paramMap.get('datafileId');
            this.workspaceId = paramMap.get('workspaceId');
            this.testId = paramMap.get('testId');
            console.log(this.testId);
            this.testsService.getTest(this.testId).subscribe(testData => {
                this.test = {
                    id: testData.test._id,
                    title: testData.test.title,
                    reportPath: testData.test.reportPath,
                    status: testData.test.status,
                    esquema: testData.test.esquema,
                    configurations: testData.test.configurations,
                    creationMoment: testData.test.creationMoment,
                    updateMoment: testData.test.updateMoment,
                    executionMoment: testData.test.executionMoment,
                    totalErrors: testData.test.totalErrors,
                    executable: testData.test.executable,
                    datafile: testData.test.datafile,
                };
                this.testForm.reset({ title: this.test.title });
                this.selectedEsquema = {
                    id: testData.esquema._id,
                    title: testData.esquema.title,
                    contentPath: testData.esquema.contentPath,
                    creationMoment: testData.esquema.creationMoment,
                    datafile: testData.esquema.datafile,
                };
                this.selectedConfigurationIDs = testData.configurationIDs;
            });
            this.datafilesService.getDatafile(this.datafileId).subscribe(datafileData => {
                this.fileContentForm.patchValue({ fileContent: datafileData.content });
                this.datafile = {
                    id: datafileData.datafile.id,
                    title: datafileData.datafile.title,
                    description: datafileData.datafile.description,
                    contentPath: datafileData.datafile.contentPath,
                    errLimit: datafileData.datafile.errLimit,
                    delimiter: datafileData.datafile.delimiter,
                    coleccion: datafileData.datafile.coleccion,
                    workspace: datafileData.datafile.workspace,
                };
                this.esquemas = datafileData.esquemas;
                this.configurations = datafileData.configurations;
                if (this.datafile.contentPath) {
                    const nameWExtension = datafileData.datafile.contentPath.split('/');
                    const splitNameWExtension = nameWExtension[3].split('.');
                    this.extension = splitNameWExtension[1];
                    const nameWDate = splitNameWExtension[0].split('-');
                    const name = nameWDate[0];
                    this.fileName = name + '.' + this.extension;
                }
                this.configurations.forEach(config => {
                    const extraParamsJSON = JSON.stringify(config.extraParams).toString();
                    const extraParamsStr1 = extraParamsJSON.replace(/{/g, '');
                    const extraParamsStr2 = extraParamsStr1.replace(/}/g, '');
                    const extraParamsStr = extraParamsStr2.replace(/,/g, ',\n');
                    this.formattedConfigs.push(Object.assign(Object.assign({}, config), { extraParamsStr }));
                });
                this.isLoading = false;
                this.edit = false;
            });
        });
    }
    onDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            yield this.testsService.deleteTest(this.testId);
            this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
        });
    }
    onEdit() {
        this.edit = true;
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.testForm.invalid) {
                return Object.values(this.testForm.controls).forEach(control => {
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                        Object.values(control.controls).forEach(control => control.markAsTouched());
                    }
                    else {
                        control.markAsTouched();
                    }
                });
            }
            this.isSavingTest = true;
            const values = this.testForm.getRawValue();
            this.test.title = values.title;
            this.test.executable = true;
            // this.testsService.updateTest(this.test).subscribe( responseData => {
            //   this.testForm.reset({});
            //   this.router.navigateByUrl('/', {skipLocationChange: true})
            //   .then(() => {
            //     this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}/test/${this.testId}`]);
            //   }).catch( err => {
            //     console.log("Error on onSave method: "+err);
            //   });
            //   this.isSavingTest = false;
            // });
        });
    }
    onSaveContent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let file;
            const content = this.fileContentForm.value.fileContent;
            if (this.extension === 'csv') {
                const blob = new Blob([content], { type: 'text/csv' });
                file = new File([blob], this.fileName, { type: 'text/csv' });
            }
            else if (this.extension === 'xlsx') {
                const rows = content.split('\n').map(row => {
                    return row.split(',');
                });
                const worksheetName = this.fileName;
                const wsorksheetContent = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(rows);
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
                xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(workbook, wsorksheetContent, worksheetName);
                const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
                // 
                const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
                // 
                file = new File([data], this.fileName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
            }
            else {
                return;
            }
            this.isLoading = true;
            //await this.uploadsService.updateFile(this.userId, this.datafileId, 'updateContent', file);
            yield this.datafilesService.updateDatafile(this.datafileId, this.datafile.title, this.datafile.description);
            this.fileContentForm.get('fileContent').disable();
            this.isLoading = false;
        });
    }
    onEsquemaPicked(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const esquemaId = event.target.value;
            if (esquemaId) {
                this.test.esquema = esquemaId;
                this.test.executable = true;
                // this.testsService.updateTest(this.test).subscribe( responseData => {
                //   this.router.navigateByUrl('/', {skipLocationChange: true})
                //   .then(() => {
                //     this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}/test/${this.testId}`]);
                //   }).catch( err => {
                //     console.log("Error on onEsquemaPicked method: "+err);
                //   });
                // });
            }
        });
    }
    checkConfig(configId) {
        return this.selectedConfigurationIDs.includes(configId);
    }
    onConfigurationPicked(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const configurationId = event.target.value;
            const checked = event.target.checked;
            const index = this.selectedConfigurationIDs.indexOf(configurationId);
            if (checked && index < 0) {
                this.selectedConfigurationIDs.push(configurationId);
                this.test.configurations = this.selectedConfigurationIDs;
                this.test.executable = true;
                // this.testsService.updateTest(this.test).subscribe( responseData => {
                //   console.log("Added!")
                // });
            }
            else if (!checked && index >= 0) {
                this.selectedConfigurationIDs.splice(index, 1);
                this.test.configurations = this.selectedConfigurationIDs;
                this.test.executable = true;
                // this.testsService.updateTest(this.test).subscribe( responseData => {
                //   console.log("Added!")
                // });
            }
        });
    }
    onEditContent() {
        if (this.fileContentForm.get('fileContent').disabled) {
            this.fileContentForm.get('fileContent').enable();
        }
        else {
            this.fileContentForm.get('fileContent').disable();
        }
    }
    onDownload() {
        if (this.extension === 'xlsx') {
            const worksheetName = this.fileName;
            const wsorksheetContent = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(this.fileContentForm.value.fileContent);
            const workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(workbook, wsorksheetContent, worksheetName);
            xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](workbook, this.fileName); // downloads it
            const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
            // 
            const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
            const file = new File([data], 'out.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        }
        else if (this.extension === 'csv') {
            const blob = new Blob([this.fileContentForm.value.fileContent], { type: 'text/csv' });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, this.fileName);
        }
        else {
            return;
        }
    }
    onCancelTestForm() {
        this.edit = false;
        this.testForm.reset({ title: this.test.title });
    }
}
TestDetailsComponent.ɵfac = function TestDetailsComponent_Factory(t) { return new (t || TestDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_5__["TestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_datafiles_service__WEBPACK_IMPORTED_MODULE_6__["DatafileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_uploads_service__WEBPACK_IMPORTED_MODULE_7__["UploadsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
TestDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TestDetailsComponent, selectors: [["app-test-details"]], decls: 59, vars: 10, consts: [[1, "row", "complete-height"], [1, "col-2"], [1, "col-7"], ["class", "mt-2", 4, "ngIf"], [1, "container", "mt-4"], ["class", "row ms-0 me-0 mb-1 p-0", 4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], [1, "row", "mt-1"], [1, "col-9"], [1, "mb-0"], ["class", "col-3 d-flex justify-content-end", 4, "ngIf"], [1, "row"], [1, "form-floating"], [3, "formGroup"], ["formControlName", "fileContent", "id", "floatingTextarea2", 1, "form-control", "mt-2", "pt-1", 2, "height", "400px"], [1, "col-6"], [4, "ngIf"], [1, "col-6", "mt-2", "d-flex", "justify-content-end"], [1, "col-3"], [1, "container", "mt-4", "ps-0"], [1, "row", "mt-4", "pe-2"], [1, "col", "pe-0"], [1, "col-4", "pe-0"], [1, "col-8"], [1, "form-select", "form-select-sm", 3, "change"], ["value", "None", "selected", "", 4, "ngIf"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [1, "row", "mt-1", "pe-2"], [1, "col", "p-0"], [1, "container"], [1, "row", "p-2", "border-header"], [1, "col-3", "d-flex", "justify-content-start"], [1, "col-4", "d-flex", "justify-content-center"], [1, "col-1"], [1, "row", "mt-0", "p-2", "border-content"], [1, "col"], ["class", "row mt-1 mb-1", 4, "ngFor", "ngForOf"], [1, "mt-2"], [1, "row", "ms-0", "me-0", "mb-1", "p-0"], [1, "p-0", 3, "formGroup", "ngSubmit"], [1, "col", "ps-0", "pe-0", "d-flex", "justify-content-start"], ["type", "text", "placeholder", "T\u00EDtulo", "formControlName", "title", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "row", "ms-0", "me-0", "mt-1", "mb-1", "p-0"], [1, "col", "ps-0", "pe-0", "d-flex", "justify-content-end"], ["type", "submit", "class", "btn btn-sm btn-primary me-1", 4, "ngIf"], ["type", "submit", "class", "btn btn-sm btn-primary me-1", "disabled", "", 4, "ngIf"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "text-danger"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "me-1"], ["type", "submit", "disabled", "", 1, "btn", "btn-sm", "btn-primary", "me-1"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "row", "mt-4"], [1, "col-10"], [3, "routerLink"], [1, "col-2", "d-flex", "justify-content-end"], [1, "me-1"], ["type", "button", 1, "btn", "btn-outline-light", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "btn-sm"], [1, "fas", "fa-ellipsis-h"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", "danger", 3, "click"], [1, "col-3", "d-flex", "justify-content-end"], [1, "fas", "fa-download"], [1, "ms-1"], [1, "btn", "btn-outline-primary", "btn-sm", "me-1", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["value", "None", "selected", ""], [3, "selected", "value"], [1, "row", "mt-1", "mb-1"], ["type", "button", 1, "btn", "btn-outline-light", "btn-sm", 3, "matTooltip"], [1, "far", "fa-eye"], [1, "col-1", "d-flex", "justify-content-center"], [1, "form-check"], ["type", "checkbox", "id", "flexCheckDefault", 1, "form-check-input", 3, "value", "checked", "change"]], template: function TestDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TestDetailsComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TestDetailsComponent_div_5_Template, 12, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TestDetailsComponent_div_6_Template, 21, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Contenido del fichero");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TestDetailsComponent_div_11_Template, 7, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, TestDetailsComponent_div_18_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, TestDetailsComponent_div_20_Template, 5, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Esquema");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TestDetailsComponent_Template_select_change_34_listener($event) { return ctx.onEsquemaPicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, TestDetailsComponent_option_35_Template, 2, 0, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, TestDetailsComponent_option_36_Template, 2, 3, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Configuraciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "C\u00F3digo de Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Par\u00E1metros");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, TestDetailsComponent_div_58_Template, 14, 5, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.edit && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datafile.contentPath);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.fileContentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datafile.contentPath);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.selectedEsquema);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.esquemas);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.formattedConfigs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"]], styles: [".btn-outline-light[_ngcontent-%COMP%] {\r\n    color: rgb(156, 156, 156) !important;\r\n    border-color: #ced4da;\r\n}\r\n\r\n.btn-outline-light[_ngcontent-%COMP%]:hover {\r\n    color: white !important;\r\n    background-color: #ced4da !important;\r\n    border-color: #ced4da;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n    color: #dc3845;\r\n}\r\n\r\n.my-custom-scrollbar[_ngcontent-%COMP%] {\r\n    height: 60%;\r\n    overflow: auto;\r\n}\r\n\r\n.border-header[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #ced4da;\r\n    border-right: 1px solid #ced4da;\r\n    border-left: 1px solid #ced4da;\r\n    border-radius: 4px 4px 0 0;\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.border-content[_ngcontent-%COMP%] {\r\n    border-radius: 0 0 4px 4px;\r\n    border: 1px solid #ced4da;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoidGVzdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1NiwgMTU2KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2VkNGRhO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VkNGRhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNjZWQ0ZGE7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gICAgY29sb3I6ICNkYzM4NDU7XHJcbn1cclxuXHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5ib3JkZXItaGVhZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxufVxyXG5cclxuLmJvcmRlci1jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "WVMI":
/*!******************************************************************!*\
  !*** ./src/app/components/test/test-list/test-list.component.ts ***!
  \******************************************************************/
/*! exports provided: TestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestListComponent", function() { return TestListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_datafiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/datafiles.service */ "g6qS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _services_tests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tests.service */ "s0o0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _test_create_test_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../test-create/test-create.component */ "mihJ");








function TestListComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " A\u00F1adir prueba ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " A\u00F1adir prueba ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestListComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Editar Prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestListComponent_div_24_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const test_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onDelete(test_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Eliminar Prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const test_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](test_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, test_r3.updateMoment, "EEEE d MMMM y, h:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate3"]("routerLink", "/workspace/", ctx_r2.workspaceId, "/datafile/", ctx_r2.datafileId, "/test/", test_r3.id, "");
} }
class TestListComponent {
    constructor(datafilesService, route, usersService, router, testsService) {
        this.datafilesService = datafilesService;
        this.route = route;
        this.usersService = usersService;
        this.router = router;
        this.testsService = testsService;
        this.userIsAuthenticated = false;
        this.isDeleting = false;
        this.savefileChange = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // this.testsSub.unsubscribe();
        // this.authStatusSub.unsubscribe();
    }
    onDelete(testId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.testsService.deleteTest(testId);
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
            })
                .catch(err => {
                console.log("Error on onDelete method: " + err);
            });
        });
    }
}
TestListComponent.ɵfac = function TestListComponent_Factory(t) { return new (t || TestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_datafiles_service__WEBPACK_IMPORTED_MODULE_2__["DatafileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tests_service__WEBPACK_IMPORTED_MODULE_5__["TestsService"])); };
TestListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestListComponent, selectors: [["app-test-list"]], inputs: { datafileId: "datafileId", workspaceId: "workspaceId", tests: "tests", esquemas: "esquemas", configurations: "configurations" }, decls: 25, vars: 7, consts: [[1, "row", "mt-4"], [1, "col-5"], [1, "col-7", "d-flex", "justify-content-end"], ["type", "button", "class", "btn btn-outline-primary btn-sm", "data-bs-toggle", "modal", "data-bs-target", "#testCreateModal", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary btn-sm", "disabled", "", 4, "ngIf"], [3, "workspaceId", "datafileId", "esquemas", "configurations"], [1, "row", "mt-2", "mb-4"], [1, "col", "p-0"], [1, "container"], [1, "row", "border-header", "p-2"], [1, "col-3", "d-flex", "justify-content-start"], [1, "col-6", "d-flex", "justify-content-center"], [1, "col-3", "d-flex", "justify-content-end"], [1, "row", "mt-0", "p-2", "border-content"], [1, "col"], ["class", "row mt-1 mb-1", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#testCreateModal", 1, "btn", "btn-outline-primary", "btn-sm"], ["type", "button", "disabled", "", 1, "btn", "btn-outline-primary", "btn-sm"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "row", "mt-1", "mb-1"], [1, "col-3", "d-flex", "justify-content-start", "pt-2", "pe-0"], [1, "col-6", "d-flex", "justify-content-center", "pt-2"], [1, "col-3", "d-flex", "justify-content-end", "pe-4"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "btn-sm"], [1, "fas", "fa-ellipsis-h"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], ["data-bs-toggle", "modal", 1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", "danger", 3, "click"]], template: function TestListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Pruebas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TestListComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TestListComponent_button_7_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-test-create", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00DAltima modificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Opciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TestListComponent_div_24_Template, 19, 8, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.savefileChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.savefileChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("workspaceId", ctx.workspaceId)("datafileId", ctx.datafileId)("esquemas", ctx.esquemas)("configurations", ctx.configurations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tests);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _test_create_test_create_component__WEBPACK_IMPORTED_MODULE_7__["TestCreateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".btn-outline-light[_ngcontent-%COMP%] {\r\n    color: rgb(156, 156, 156) !important;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n    color: #dc3845;\r\n}\r\n\r\n.my-custom-scrollbar[_ngcontent-%COMP%] {\r\n    height: 60%;\r\n    overflow: auto;\r\n}\r\n\r\n.border-header[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #ced4da;\r\n    border-right: 1px solid #ced4da;\r\n    border-left: 1px solid #ced4da;\r\n    border-radius: 4px 4px 0 0;\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.border-content[_ngcontent-%COMP%] {\r\n    border-radius: 0 0 4px 4px;\r\n    border: 1px solid #ced4da;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoidGVzdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1NiwgMTU2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZGMzODQ1O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYm9yZGVyLWhlYWRlciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbn1cclxuXHJcbi5ib3JkZXItY29udGVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "WgP+":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/workspaces/workspace-list/workspace-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WorkspaceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceListComponent", function() { return WorkspaceListComponent; });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_workspaces_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/workspaces.service */ "952Z");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");










function WorkspaceListComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " T\u00EDtulo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WorkspaceListComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r12.title, " ");
} }
function WorkspaceListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WorkspaceListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r13.description, " ");
} }
function WorkspaceListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Fecha de creaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WorkspaceListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r14.creationMoment, "medium"), " ");
} }
function WorkspaceListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Miembros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WorkspaceListComponent_td_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", user_r17.photo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function WorkspaceListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WorkspaceListComponent_td_24_div_1_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", element_r15.users);
} }
function WorkspaceListComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 25);
} }
const _c0 = function (a1) { return ["/workspace", a1]; };
function WorkspaceListComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, row_r18.id));
} }
function WorkspaceListComponent_mat_paginator_28_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-paginator", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function WorkspaceListComponent_mat_paginator_28_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.onChangedPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx_r10.totalWorkspaces)("pageSize", ctx_r10.workspacesPerPage)("pageSizeOptions", ctx_r10.pageSizeOptions);
} }
function WorkspaceListComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No se han a\u00F1adido espacios de trabajo a\u00FAn!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/workspace/create"]; };
class WorkspaceListComponent {
    constructor(workspacesService, authService) {
        this.workspacesService = workspacesService;
        this.authService = authService;
        this.userIsAuthenticated = false;
        this.isLoading = false;
        this.displayedColumns = ['title', 'description', 'creationMoment', 'users'];
        //clickedRows              : Set<Workspace> = new Set<Workspace>();
        this.workspaces = [];
        this.totalWorkspaces = 0;
        this.workspacesPerPage = 2;
        this.currentPage = 1;
        this.dataSource = null;
        this.pageSizeOptions = [1, 2, 5, 10];
    }
    ngOnInit() {
        this.isLoading = true;
        this.workspacesService.getWorkspaces(this.workspacesPerPage, this.currentPage);
        this.userId = this.authService.getUserId();
        this.workspacesSub = this.workspacesService.getWorkspaceUpdateListener()
            .subscribe((workspaceData) => {
            this.isLoading = false;
            this.totalWorkspaces = workspaceData.totalWorkspaces;
            this.workspaces = workspaceData.workspaces;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.workspaces);
            this.dataSource.sort = this.sort;
        });
        this.workspaces.map(function (workspace) {
            this.authService.getUsersById(workspace.id).subscribe((usersData) => {
                this.isLoading = false;
                workspace['users'] = usersData.users;
            });
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
    }
    onChangedPage(pageData) {
        this.currentPage = pageData.pageIndex + 1;
        this.workspacesPerPage = pageData.pageSize;
        this.workspacesService.getWorkspaces(this.workspacesPerPage, this.currentPage);
    }
    ngOnDestroy() {
        this.workspacesSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    }
}
WorkspaceListComponent.ɵfac = function WorkspaceListComponent_Factory(t) { return new (t || WorkspaceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_workspaces_service__WEBPACK_IMPORTED_MODULE_3__["WorkspacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
WorkspaceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WorkspaceListComponent, selectors: [["app-workspace-list"]], viewQuery: function WorkspaceListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 30, vars: 7, consts: [[1, "container", "mt-5"], [1, "row", "justify-content-center"], [1, "col-9", "col-auto"], [1, "row"], [1, "col-8"], [1, "col-4", "d-flex", "justify-content-end"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "routerLink"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z1", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "creationMoment"], ["matColumnDef", "users"], ["mat-cell", "", "class", "d-flex flex-row bd-highlight", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], ["class", "col-auto", 3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], ["class", " info-text mat-body-1 ", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "d-flex", "flex-row", "bd-highlight"], [4, "ngFor", "ngForOf"], [1, "p-2", "bd-highlight"], ["alt", "", 1, "border", "rounded-circle", 2, "width", "40px", 3, "src"], ["mat-header-row", ""], ["mat-row", "", 3, "routerLink"], [1, "col-auto", 3, "length", "pageSize", "pageSizeOptions", "page"], [1, "info-text", "mat-body-1"]], template: function WorkspaceListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Espacios de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Nuevo Espacio de Trabajo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, WorkspaceListComponent_th_14_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, WorkspaceListComponent_td_15_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, WorkspaceListComponent_th_17_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, WorkspaceListComponent_td_18_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, WorkspaceListComponent_th_20_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, WorkspaceListComponent_td_21_Template, 3, 4, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, WorkspaceListComponent_th_23_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, WorkspaceListComponent_td_24_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, WorkspaceListComponent_tr_25_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, WorkspaceListComponent_tr_26_Template, 1, 3, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, WorkspaceListComponent_mat_paginator_28_Template, 1, 3, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, WorkspaceListComponent_p_29_Template, 2, 0, "p", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.workspaces.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.workspaces.length <= 0 && !ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.info-text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\nmat-paginator[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.user-photo[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.user-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid transparent;\r\n    border-top: 1px solid transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%] {\r\n    background: whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzcGFjZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJ3b3Jrc3BhY2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uaW5mby10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi51c2VyLXBob3RvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnVzZXItcGhvdG8gaW1nIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1hdC1yb3cgLm1hdC1jZWxsIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIgLm1hdC1jZWxsIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-interceptor */ "SJn0");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-material.module */ "rhD1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/auth/auth-interceptor */ "5fFZ");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14__);


// import { FormsModule } from '@angular/forms';














// import { SocketioService } from './services/socketio.service';
Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _pages_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
            useValue: 'es'
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_11__["PagesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_11__["PagesModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "aGuG":
/*!********************************************************************!*\
  !*** ./src/app/pages/tests/test-execute/test-execute.component.ts ***!
  \********************************************************************/
/*! exports provided: TestExecuteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestExecuteComponent", function() { return TestExecuteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tests.service */ "s0o0");
/* harmony import */ var _services_collections_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/collections.service */ "k/Ee");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_workspaces_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/workspaces.service */ "952Z");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/reports.service */ "KY19");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");










function TestExecuteComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestExecuteComponent_div_5_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestExecuteComponent_div_5_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.onExecute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Ejecutar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestExecuteComponent_div_5_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestExecuteComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TestExecuteComponent_div_5_div_6_button_1_Template, 3, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TestExecuteComponent_div_5_div_6_button_2_Template, 3, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.inExecution);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.inExecution);
} }
function TestExecuteComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Runner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TestExecuteComponent_div_5_div_6_Template, 3, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.selectedTestIDs, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedTestIDs.size > 0);
} }
function TestExecuteComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TestExecuteComponent_div_18_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onTestPicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const test_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", test_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.checkTest(test_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", test_r10.title, " (", test_r10.datafileTitle, ") ");
} }
function TestExecuteComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", line_r13, " ");
} }
function TestExecuteComponent_div_60_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const test_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](test_r14.totalErrors);
} }
function TestExecuteComponent_div_60_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestExecuteComponent_div_60_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestExecuteComponent_div_60_div_15_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const test_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onDownload(test_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestExecuteComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TestExecuteComponent_div_60_div_8_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestExecuteComponent_div_60_div_9_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TestExecuteComponent_div_60_div_15_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const test_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](test_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](test_r14.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", test_r14.totalErrors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !test_r14.totalErrors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 6, test_r14.executionMoment, "EEEE d MMMM y, h:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", test_r14.totalErrors && test_r14.totalErrors > 0);
} }
class TestExecuteComponent {
    constructor(authService, testsService, collectionsService, route, workspacesService, reportsService) {
        this.authService = authService;
        this.testsService = testsService;
        this.collectionsService = collectionsService;
        this.route = route;
        this.workspacesService = workspacesService;
        this.reportsService = reportsService;
        this.userIsAuthenticated = false;
        this.isLoading = false;
        this.selectedTestIDs = new Set();
        this.inExecution = false;
        this.terminal = [];
    }
    ngOnInit() {
        this.isLoading = true;
        this.route.paramMap.subscribe((paramMap) => {
            this.workspaceId = paramMap.get('workspaceId');
            if (paramMap.get('testId')) {
                this.testId = paramMap.get('testId');
                this.selectedTestIDs.add(this.testId);
            }
            // Tests
            this.testsService.getTests(this.workspaceId);
            this.testsSub = this.testsService.getTestUpdateListener()
                .subscribe((testData) => {
                this.isLoading = false;
                this.tests = testData.tests;
            });
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
        this.testsSub.unsubscribe();
    }
    onTestPicked(event) {
        const testId = event.target.value;
        const checked = event.target.checked;
        // const index: number = this.selectedTestIDs.indexOf(testId);
        if (checked) {
            // if (checked && index < 0) {
            this.selectedTestIDs.add(testId);
        }
        else if (!checked) {
            //} else if (!checked && index >= 0) {
            this.selectedTestIDs.delete(testId);
        }
        console.log(this.selectedTestIDs);
    }
    onSelectAll(event) {
        const checked = event.target.checked;
        if (checked) {
            console.log("Select All");
            for (var test of this.tests) {
                this.selectedTestIDs.add(test.id);
            }
            console.log(this.selectedTestIDs);
        }
        if (!checked) {
            console.log("Deselect All");
            this.selectedTestIDs = new Set();
            console.log(this.selectedTestIDs);
        }
        console.log(this.selectedTestIDs);
    }
    checkTest(testId) {
        return this.selectedTestIDs.has(testId);
    }
    onDownload(testId) {
        this.testsService.getTest(testId).subscribe(testData => {
            var reportPath = testData.test.reportPath;
            var fileNameSplits = reportPath.split("/");
            var fileName = fileNameSplits[2].split(".");
            const blob = new Blob([testData.reportContent], { type: 'text/csv' });
            saveAs(blob, fileName[0]);
        });
    }
    onExecute() {
        if (this.selectedTestIDs.size === 0) {
            return;
        }
        this.inExecution = true;
        for (var selectedTestId of this.selectedTestIDs) {
            console.log(selectedTestId);
            this.reportsService.addReport(selectedTestId).subscribe((responseData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(responseData);
                const testUpdate = {
                    id: responseData.testUpdates._id,
                    title: responseData.testUpdates.title,
                    reportPath: responseData.testUpdates.reportPath,
                    status: responseData.testUpdates.status,
                    esquema: responseData.testUpdates.esquema,
                    configurations: responseData.testUpdates.configurations,
                    creationMoment: responseData.testUpdates.creationMoment,
                    updateMoment: responseData.testUpdates.updateMoment,
                    executionMoment: responseData.testUpdates.executionMoment,
                    totalErrors: responseData.testUpdates.totalErrors,
                    executable: responseData.testUpdates.executable,
                    datafile: responseData.testUpdates.datafile,
                };
                this.testsService.updateTest(testUpdate).then(data => {
                    console.log(data);
                    this.inExecution = false;
                })
                    .catch(err => {
                    console.log(err);
                    this.inExecution = false;
                });
            }));
        }
    }
}
TestExecuteComponent.ɵfac = function TestExecuteComponent_Factory(t) { return new (t || TestExecuteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_3__["TestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_collections_service__WEBPACK_IMPORTED_MODULE_4__["CollectionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_workspaces_service__WEBPACK_IMPORTED_MODULE_6__["WorkspacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reports_service__WEBPACK_IMPORTED_MODULE_7__["ReportsService"])); };
TestExecuteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestExecuteComponent, selectors: [["app-test-execute"]], decls: 61, vars: 6, consts: [[1, "row", "complete-height"], [1, "col-3"], [1, "col-5"], ["class", "mt-2", 4, "ngIf"], [1, "container", "mt-4"], ["class", "row mt-4", 4, "ngIf"], [1, "row", "mt-1"], [1, "col-6"], [1, "mb-0"], [1, "col-6", "d-flex", "justify-content-end"], [1, "form-check"], ["type", "checkbox", "id", "selectAllTests", 1, "form-check-input", 3, "checked", "change"], ["for", "selectAllTests", 1, "form-check-label"], [1, "row"], [1, "col"], [1, "container", "overflow-auto", "my-scrollbar"], ["class", "row pt-2", 4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "col", "d-flex", "justify-content-start"], [1, "container", "overflow-auto", "my-scrollbar-terminal"], [4, "ngFor", "ngForOf"], [1, "col-4"], [1, "container", "mt-4", "ps-0"], [1, "row", "mt-4", "pe-2"], [1, "col", "pe-0"], [1, "col-4", "pe-0"], [1, "row", "mt-1", "pe-2"], [1, "col", "p-0"], [1, "container"], [1, "row", "p-2", "border-header"], [1, "col-3", "d-flex", "justify-content-start"], [1, "col-2", "d-flex", "justify-content-center"], [1, "col-3", "d-flex", "justify-content-center"], [1, "row", "mt-0", "p-2", "border-content"], ["class", "row mt-1 mb-1", 4, "ngFor", "ngForOf"], [1, "mt-2"], [4, "ngIf"], ["class", "btn btn-outline-light btn-sm", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-light btn-sm", "type", "button", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-light", "btn-sm", 3, "click"], [1, "fas", "fa-play"], ["type", "button", 1, "btn", "btn-outline-light", "btn-sm"], [1, "fas", "fa-pen"], [1, "row", "pt-2"], [1, "col-8", "pt-2", "pb-1"], ["type", "checkbox", "id", "datafileCheck", 1, "form-check-input", 3, "value", "checked", "change"], ["for", "datafileCheck", 1, "form-check-label"], [1, "row", "mt-1", "mb-1"], [1, "fas", "fa-download", 3, "click"]], template: function TestExecuteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TestExecuteComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TestExecuteComponent_div_5_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Orden de Ejecuci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TestExecuteComponent_Template_input_change_12_listener($event) { return ctx.onSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Seleccionar Todos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TestExecuteComponent_div_18_Template, 6, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Terminal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TestExecuteComponent_div_26_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Pruebas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Errores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, TestExecuteComponent_div_60_Template, 16, 9, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.selectedTestIDs.size === ctx.tests.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tests);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.terminal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tests);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".btn-outline-light[_ngcontent-%COMP%] {\r\n    color: rgb(156, 156, 156) !important;\r\n    border-color: #ced4da;\r\n}\r\n\r\n.btn-outline-light[_ngcontent-%COMP%]:hover {\r\n    color: white !important;\r\n    background-color: #ced4da !important;\r\n    border-color: #ced4da;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n    color: #dc3845;\r\n}\r\n\r\n.my-scrollbar[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    overflow: auto;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 4px 4px 4px 4px;\r\n    background-color: white;\r\n}\r\n\r\n.my-scrollbar-terminal[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    overflow: auto;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 4px 4px 4px 4px;\r\n    background-color: white;\r\n}\r\n\r\n.border-header[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #ced4da;\r\n    border-right: 1px solid #ced4da;\r\n    border-left: 1px solid #ced4da;\r\n    border-radius: 4px 4px 0 0;\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.border-content[_ngcontent-%COMP%] {\r\n    border-radius: 0 0 4px 4px;\r\n    border: 1px solid #ced4da;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtZXhlY3V0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoidGVzdC1leGVjdXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1NiwgMTU2KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2VkNGRhO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VkNGRhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNjZWQ0ZGE7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gICAgY29sb3I6ICNkYzM4NDU7XHJcbn1cclxuXHJcbi5teS1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubXktc2Nyb2xsYmFyLXRlcm1pbmFsIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJvcmRlci1oZWFkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG59XHJcblxyXG4uYm9yZGVyLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "anHD":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/profile/profile-account-edit/profile-account-edit.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfileAccountEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAccountEditComponent", function() { return ProfileAccountEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/workspaces.service */ "952Z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");











function ProfileAccountEditComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner");
} }
function ProfileAccountEditComponent_div_1_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ingrese un correo v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileAccountEditComponent_div_1_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ingrese una contrase\u00F1a v\u00E1lida. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileAccountEditComponent_div_1_small_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ingrese una contrase\u00F1a v\u00E1lida. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileAccountEditComponent_div_1_small_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ingrese una contrase\u00F1a v\u00E1lida. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileAccountEditComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Editar Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Configuraci\u00F3n de la cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Editar Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfileAccountEditComponent_div_1_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onSaveEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Correo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProfileAccountEditComponent_div_1_small_19_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Actualizar Correo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileAccountEditComponent_div_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onCancelEmailForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfileAccountEditComponent_div_1_Template_form_ngSubmit_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onSavePass(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Contrase\u00F1a Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ProfileAccountEditComponent_div_1_small_30_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Nueva Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ProfileAccountEditComponent_div_1_small_36_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Repetir Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, ProfileAccountEditComponent_div_1_small_42_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Actualizar Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileAccountEditComponent_div_1_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onCancelPassForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Eliminar cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " \u00BFEst\u00E1s seguro de que deseas eliminar tu cuenta? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileAccountEditComponent_div_1_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onDeleteAccount(ctx_r11.user.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "S\u00ED, seguro.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r1.user.id, "/edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/account/", ctx_r1.user.id, "/edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.emailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.invalidEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.pristineEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.passForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidActualPass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.invalidActualPass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidNewPass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.invalidNewPass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidRepeatPass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.invalidRepeatPass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.pristinePass);
} }
class ProfileAccountEditComponent {
    constructor(authService, usersService, route, workspacesService, router, formBuilder) {
        this.authService = authService;
        this.usersService = usersService;
        this.route = route;
        this.workspacesService = workspacesService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isLoading = false;
        this.createEmailForm();
        this.createPassForm();
    }
    ngOnInit() {
        this.isLoading = true;
        this.route.paramMap.subscribe((paramMap) => {
            const userId = paramMap.get('userId');
            this.isLoading = true;
            this.usersService.getUser(userId).subscribe(userData => {
                this.user = {
                    id: userData.user._id,
                    username: userData.user.username,
                    email: userData.user.email,
                    password: userData.user.password,
                    photo: userData.user.photo,
                    name: userData.user.name,
                    role: userData.user.role,
                    status: userData.user.status,
                    google: userData.user.google
                };
                this.emailForm.reset({
                    email: this.user.email
                });
                this.isLoading = false;
            });
        });
    }
    createEmailForm() {
        this.emailForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
        });
    }
    createPassForm() {
        this.passForm = this.formBuilder.group({
            actualPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            newPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            repeatPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]]
        });
    }
    get pristineEmail() {
        return this.emailForm.get('email').pristine;
    }
    get invalidEmail() {
        return this.emailForm.get('email').invalid && this.emailForm.get('email').touched;
    }
    get pristinePass() {
        return this.passForm.get('actualPass').pristine && this.passForm.get('actualPass').pristine && this.passForm.get('actualPass').pristine;
    }
    get invalidActualPass() {
        return this.passForm.get('actualPass').invalid && this.passForm.get('actualPass').touched;
    }
    get invalidNewPass() {
        return this.passForm.get('newPass').invalid && this.passForm.get('newPass').touched;
    }
    get invalidRepeatPass() {
        return this.passForm.get('repeatPass').invalid && this.passForm.get('repeatPass').touched;
    }
    onCancelEmailForm() {
        this.emailForm.reset({
            email: this.user.email
        });
    }
    onCancelPassForm() {
        this.passForm.reset();
    }
    onSaveEmail() {
        if (this.emailForm.invalid) {
            return Object.values(this.emailForm.controls).forEach(control => {
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                    Object.values(control.controls).forEach(control => control.markAsTouched());
                }
                else {
                    control.markAsTouched();
                }
            });
        }
        this.isLoading = true;
        const values = this.emailForm.getRawValue();
        this.usersService.updateUser(this.user.id, null, null, values.email, this.user.role, null, null, null);
        this.router.navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
            this.router.navigate([`/account/${this.user.id}/edit`]);
        }).catch(err => {
            console.log("Error on onSaveEmail method: " + err);
        });
        this.isLoading = false;
    }
    onSavePass() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.passForm.invalid) {
                return Object.values(this.passForm.controls).forEach(control => {
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                        Object.values(control.controls).forEach(control => control.markAsTouched());
                    }
                    else {
                        control.markAsTouched();
                    }
                });
            }
            this.isLoading = true;
            const values = this.passForm.getRawValue();
            yield this.usersService.updateUser(this.user.id, null, null, null, this.user.role, values.actualPass, values.newPass, values.repeatPass);
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/account/${this.user.id}/edit`]);
            }).catch(err => {
                console.log("Error on onSavePass method: " + err);
            });
            this.isLoading = false;
        });
    }
    onDeleteAccount(userId) {
        this.usersService.deleteAccount(userId)
            .then(res => {
            this.authService.logout();
            window.location.reload();
        }).catch(err => {
            console.log("Error on onDeleteAccount method: " + err);
        });
    }
}
ProfileAccountEditComponent.ɵfac = function ProfileAccountEditComponent_Factory(t) { return new (t || ProfileAccountEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_6__["WorkspacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ProfileAccountEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileAccountEditComponent, selectors: [["app-profile-account--edit"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "container mt-5", 4, "ngIf"], [1, "container", "mt-5"], [1, "row", "justify-content-center"], [1, "col-9", "col-auto"], [1, "row"], [1, "col-4"], [1, "row", "d-grid", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "routerLink"], ["type", "button", 1, "btn", "btn-outline-secondary", "active", 3, "routerLink"], [1, "col-8", "ps-4"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "FormEmail", 1, "form-label"], ["type", "email", "id", "FormEmail", "formControlName", "email", "placeholder", "Correo", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "me-1", "mt-2"], [1, "btn", "btn-secondary", "me-1", "mt-2", 3, "disabled", "click"], [1, "mb-3", "mt-4"], ["for", "FormPassword", 1, "form-label"], ["type", "password", "id", "FormPassword", "formControlName", "actualPass", "placeholder", "Contrase\u00F1a Actual", 1, "form-control"], ["for", "FormPasswordNew", 1, "form-label"], ["type", "password", "id", "FormPasswordNew", "formControlName", "newPass", "placeholder", "Nueva Contrase\u00F1a", 1, "form-control"], ["for", "FormPasswordRepeat", 1, "form-label"], ["type", "password", "id", "FormPasswordRepeat", "formControlName", "repeatPass", "placeholder", "Repetir Contrase\u00F1a", 1, "form-control"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#deleteAccountModal", 1, "btn", "btn-outline-danger", "mt-4"], ["id", "deleteAccountModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "text-danger"]], template: function ProfileAccountEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProfileAccountEditComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileAccountEditComponent_div_1_Template, 63, 18, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWFjY291bnQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "dSgO":
/*!******************************************************************************!*\
  !*** ./src/app/components/activity/activity-list/activity-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ActivityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListComponent", function() { return ActivityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_activities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/activities.service */ "Tlm4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ActivityListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, activity_r1.creationMoment));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", activity_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, activity_r1.creationMoment, "mediumTime"));
} }
class ActivityListComponent {
    constructor(authService, activitiesService) {
        this.authService = authService;
        this.activitiesService = activitiesService;
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.userId = this.authService.getUserId();
        this.activitiesService.getActivities(this.userId);
        this.activitiesSub = this.activitiesService.getActivityUpdateListener()
            .subscribe((activityData) => {
            this.activities = activityData.activities;
            for (var activity of this.activities) {
                var workspaceLink = '<a href="/workspace/' + activity.workspace['id'] + '">' + activity.workspace['title'] + '</a>';
                activity.message = activity.message.replace("{{workspace}}", workspaceLink);
                activity.message = activity.message.replace("{{author}}", activity.author['name']);
                if (activity.coleccion) {
                    var coleccionLink = '<a href="/workspace/' + activity.workspace['id'] + '">' + activity.coleccion['title'] + '</a>';
                    activity.message = activity.message.replace("{{coleccion}}", coleccionLink);
                }
                if (activity.datafile) {
                    var datafileLink = '<a href="/workspace/' + activity.workspace['id'] + '/datafile/' + activity.datafile['id'] + '">' + activity.datafile['title'] + '</a>';
                    activity.message = activity.message.replace("{{datafile}}", datafileLink);
                }
            }
        });
    }
    ngOnDestroy() {
        this.activitiesSub.unsubscribe();
    }
}
ActivityListComponent.ɵfac = function ActivityListComponent_Factory(t) { return new (t || ActivityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_activities_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"])); };
ActivityListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityListComponent, selectors: [["app-activity-list"]], decls: 6, vars: 1, consts: [[1, "row", "mt-2"], [1, "col"], [1, "my-custom-scrollbar"], ["class", "list-group", 4, "ngFor", "ngForOf"], [1, "list-group"], ["aria-current", "true", 1, "list-group-item"], [1, "d-flex", "w-100", "justify-content-end"], [1, "mb-1", 3, "innerHTML"]], template: function ActivityListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActivityListComponent_div_5_Template, 10, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activities);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".btn-outline-light[_ngcontent-%COMP%] {\r\n    color: rgb(156, 156, 156) !important;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n    color: #dc3845;\r\n}\r\n\r\n.my-custom-scrollbar[_ngcontent-%COMP%] {\r\n    height: 80%;\r\n    overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQiIsImZpbGUiOiJhY3Rpdml0eS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1NiwgMTU2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZGMzODQ1O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "dZWD":
/*!**********************************************!*\
  !*** ./src/app/services/esquemas.service.ts ***!
  \**********************************************/
/*! exports provided: EsquemaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsquemaService", function() { return EsquemaService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/esquemas/';
class EsquemaService {
    constructor(http) {
        this.http = http;
    }
    getEsquema(esquemaId) {
        // 
        return this.http.get(BACKEND_URL + esquemaId);
    }
    addEsquema(title, esquemaContent, fileName, datafileId, workspaceId) {
        let res;
        let newFileName;
        let esquemaData = {
            'id': null,
            'title': title,
            'contentPath': null,
            'creationMoment': null,
            'datafile': datafileId,
            'esquemaContent': esquemaContent
        };
        if (fileName) { //Manual creation
            const split = fileName.split('.');
            const extension = '.' + split[1].toLowerCase();
            newFileName = split[0].toLowerCase().split(' ').join('_') + "-" + Date.now() + extension;
            const localPath = 'backend/uploads/esquemas/' + newFileName;
            esquemaData.contentPath = localPath;
        }
        else { //Inferring
            esquemaData.title = "Inferred esquema - " + title;
        }
        this.http.post(BACKEND_URL, esquemaData)
            .subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Creating an esquema failed!');
                }
                else {
                    resolve('Esquema added successfully!');
                }
            }, 2000);
        });
    }
    updateEsquema(esquemaId, title, contentPath, esquemaContent, datafileId) {
        let res;
        const esquemaData = {
            'id': esquemaId,
            'title': title,
            'contentPath': contentPath,
            'creationMoment': null,
            'datafile': datafileId,
            'esquemaContent': esquemaContent
        };
        this.http.put(BACKEND_URL + esquemaId, esquemaData).subscribe(response => {
            res = response;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Updating an esquema failed!');
                }
                else {
                    resolve('Esquema updated successfully!');
                }
            }, 1000);
        });
    }
    deleteEsquema(id) {
        let res;
        this.http.delete(BACKEND_URL + id).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Deleting an esquema failed!');
                }
                else {
                    resolve('Esquema deleted successfully!');
                }
            }, 1000);
        });
    }
}
EsquemaService.ɵfac = function EsquemaService_Factory(t) { return new (t || EsquemaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EsquemaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EsquemaService, factory: EsquemaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _workspaces_workspace_list_workspace_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workspaces/workspace-list/workspace-list.component */ "WgP+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/angular-material.module */ "rhD1");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "1LmZ");
/* harmony import */ var _invitations_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invitations/invitation-list/invitation-list.component */ "krfx");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _workspaces_workspace_create_workspace_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workspaces/workspace-create/workspace-create.component */ "CV7a");
/* harmony import */ var _workspaces_workspace_details_workspace_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workspaces/workspace-details/workspace-details.component */ "tnf1");
/* harmony import */ var _datafiles_datafile_details_datafile_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datafiles/datafile-details/datafile-details.component */ "zJ7J");
/* harmony import */ var _tests_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tests/test-details/test-details.component */ "V7ju");
/* harmony import */ var _tests_test_execute_test_execute_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tests/test-execute/test-execute.component */ "aGuG");
/* harmony import */ var _profile_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile-details/profile-details.component */ "QX/8");
/* harmony import */ var _profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile-edit/profile-edit.component */ "s4SY");
/* harmony import */ var _profile_profile_account_edit_profile_account_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile-account-edit/profile-account-edit.component */ "anHD");
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./configuration/configuration.component */ "Ig03");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _workspaces_workspace_details_workspace_details_component__WEBPACK_IMPORTED_MODULE_10__["WorkspaceDetailsComponent"],
        _workspaces_workspace_list_workspace_list_component__WEBPACK_IMPORTED_MODULE_2__["WorkspaceListComponent"],
        _workspaces_workspace_create_workspace_create_component__WEBPACK_IMPORTED_MODULE_9__["WorkspaceCreateComponent"],
        _invitations_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_7__["InvitationListComponent"],
        _datafiles_datafile_details_datafile_details_component__WEBPACK_IMPORTED_MODULE_11__["DatafileDetailsComponent"],
        _tests_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_12__["TestDetailsComponent"],
        _tests_test_execute_test_execute_component__WEBPACK_IMPORTED_MODULE_13__["TestExecuteComponent"],
        _profile_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_14__["ProfileDetailsComponent"],
        _profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_15__["ProfileEditComponent"],
        _profile_profile_account_edit_profile_account_edit_component__WEBPACK_IMPORTED_MODULE_16__["ProfileAccountEditComponent"],
        _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_17__["ConfigurationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "g6qS":
/*!***********************************************!*\
  !*** ./src/app/services/datafiles.service.ts ***!
  \***********************************************/
/*! exports provided: DatafileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatafileService", function() { return DatafileService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/datafiles/';
class DatafileService {
    constructor(http) {
        this.http = http;
    }
    getDatafile(datafileId) {
        // 
        return this.http.get(BACKEND_URL + datafileId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((datafileData) => {
            return {
                datafile: datafileData.datafile,
                content: datafileData.content,
                esquemas: datafileData.esquemas.map(esquema => {
                    return {
                        id: esquema._id,
                        title: esquema.title,
                        contentPath: esquema.contentPath,
                        creationMoment: esquema.creationMoment,
                        datafile: esquema.datafile,
                    };
                }),
                configurations: datafileData.configurations.map(configuration => {
                    return {
                        id: configuration._id,
                        title: configuration.title,
                        creationMoment: configuration.creationMoment,
                        errorCode: configuration.errorCode,
                        extraParams: configuration.extraParams,
                        datafile: configuration.datafile,
                    };
                }),
                tests: datafileData.tests.map(test => {
                    return {
                        id: test._id,
                        title: test.title,
                        reportPath: test.reportPath,
                        status: test.status,
                        esquema: test.esquema,
                        configurations: test.configurations,
                        creationMoment: test.creationMoment,
                        updateMoment: test.updateMoment,
                        executionMoment: test.executionMoment,
                        totalErrors: test.totalErrors,
                        executable: test.executable,
                        datafile: test.datafile
                    };
                })
            };
        }));
    }
    addDatafile(title, description, collectionId, workspaceId) {
        let res;
        const datafileData = {
            'id': null,
            'title': title,
            'description': description,
            'contentPath': null,
            'errLimit': null,
            'delimiter': null,
            'coleccion': collectionId,
            'workspace': workspaceId
        };
        this.http.post(BACKEND_URL, datafileData)
            .subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Creating a datafile failed!');
                }
                else {
                    resolve('Datafile added successfully!');
                }
            }, 1000);
        });
    }
    updateDatafile(datafileId, title, description) {
        let res;
        const datafileData = {
            'id': datafileId,
            'title': title,
            'description': description,
            'contentPath': null,
            'errLimit': null,
            'delimiter': null,
            'coleccion': null,
            'workspace': null
        };
        this.http.put(BACKEND_URL + datafileId, datafileData).subscribe(response => {
            res = response;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Updating a datafile failed!');
                }
                else {
                    resolve('Datafile updated successfully!');
                }
            }, 1000);
        });
    }
    deleteDatafile(datafileId) {
        let res;
        this.http.delete(BACKEND_URL + datafileId).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Deleting a datafile failed!');
                }
                else {
                    resolve('Datafile deleted successfully!');
                }
            }, 1000);
        });
    }
}
DatafileService.ɵfac = function DatafileService_Factory(t) { return new (t || DatafileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DatafileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DatafileService, factory: DatafileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gpP9":
/*!****************************************************************************************!*\
  !*** ./src/app/components/collection/collection-create/collection-create.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CollectionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionCreateComponent", function() { return CollectionCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/collections.service */ "k/Ee");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function CollectionCreateComponent_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un t\u00EDtulo adecuado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CollectionCreateComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CollectionCreateComponent_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CollectionCreateComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CollectionCreateComponent {
    constructor(collectionsService, authService, formBuilder, router, activatedRoute) {
        this.collectionsService = collectionsService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isLoading = false;
        this.invalidTitle = false;
        this.editModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.collectionIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createForm();
    }
    createForm() {
        this.collectionForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
        });
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
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
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.collectionForm.invalid) {
                this.invalidTitle = true;
                return Object.values(this.collectionForm.controls).forEach(control => {
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                        Object.values(control.controls).forEach(control => control.markAsTouched());
                    }
                    else {
                        control.markAsTouched();
                    }
                });
            }
            this.isLoading = true;
            const values = this.collectionForm.getRawValue();
            if (this.editMode) {
                yield this.collectionsService.updateCollection(this.editCollection.id, values.title, this.workspaceId);
            }
            else {
                yield this.collectionsService.addCollection(values.title, this.workspaceId);
            }
            this.collectionForm.reset();
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}`]);
            }).catch(err => { });
            this.isLoading = false;
        });
    }
    onCancel() {
        this.collectionForm.reset();
        if (this.editMode) {
            this.editModeChange.emit(false);
            this.collectionIndexChange.emit(undefined);
        }
        else {
            this.closeChange.emit(true);
        }
    }
}
CollectionCreateComponent.ɵfac = function CollectionCreateComponent_Factory(t) { return new (t || CollectionCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_3__["CollectionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
CollectionCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CollectionCreateComponent, selectors: [["app-collection-create"]], inputs: { editMode: "editMode", close: "close", collectionIndex: "collectionIndex", editCollection: "editCollection" }, outputs: { editModeChange: "editModeChange", closeChange: "closeChange", collectionIndexChange: "collectionIndexChange" }, decls: 9, vars: 6, consts: [[1, "col", "mb-2", 3, "formGroup", "ngSubmit"], [1, "row"], ["class", "text-danger", 4, "ngIf"], [1, "input-group", "input-group-sm"], ["type", "text", "placeholder", "Introduce un t\u00EDtulo...", "formControlName", "title", 1, "form-control"], ["class", "btn btn-outline-secondary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-secondary btn-sm", "type", "button", "disabled", "", 4, "ngIf"], [1, "text-danger"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fas", "fa-times"], ["type", "button", "disabled", "", 1, "btn", "btn-outline-secondary", "btn-sm"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function CollectionCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CollectionCreateComponent_Template_form_ngSubmit_0_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CollectionCreateComponent_small_3_Template, 2, 0, "small", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CollectionCreateComponent_a_7_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CollectionCreateComponent_button_8_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.collectionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], encapsulation: 2 });


/***/ }),

/***/ "hKvF":
/*!********************************************************************************!*\
  !*** ./src/app/components/esquemas/esquema-create/esquema-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: EsquemaCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsquemaCreateComponent", function() { return EsquemaCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_esquemas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/esquemas.service */ "dZWD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-papaparse */ "P6Fj");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function EsquemaCreateComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un t\u00EDtulo adecuado (entre 1 y 100 caracteres). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsquemaCreateComponent_input_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EsquemaCreateComponent_input_14_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onFilePicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidEsquemaPath);
} }
function EsquemaCreateComponent_textarea_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 22);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r2.invalidEsquemaPath);
} }
function EsquemaCreateComponent_textarea_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 23);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r3.invalidEsquemaPath);
} }
function EsquemaCreateComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un esquema. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsquemaCreateComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un esquema con el formato adecuado (.json o .yaml). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsquemaCreateComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsquemaCreateComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear fichero de datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsquemaCreateComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsquemaCreateComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Guardar cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsquemaCreateComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsquemaCreateComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear fichero de datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EsquemaCreateComponent {
    constructor(esquemaService, route, papa, usersService, router) {
        this.esquemaService = esquemaService;
        this.route = route;
        this.papa = papa;
        this.usersService = usersService;
        this.router = router;
        this.userIsAuthenticated = false;
        this.invalidFile = false;
        this.invalidExtension = false;
        this.file = null;
        this.chain = '';
        this.savefileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.esquemaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
        return this.esquemaForm.get('esquemaPath').invalid && this.esquemaForm.get('esquemaPath').dirty;
    }
    // File upload function
    onFilePicked(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const files = event.target.files;
            if (files && files.length > 0) {
                const uploadedFile = event.target.files[0];
                const split = uploadedFile.name.split('.');
                const extension = split[1].toLowerCase();
                if (extension !== 'json' && extension !== 'yaml') {
                    this.invalidExtension = true;
                    return;
                }
                else {
                    this.esquemaForm.get('esquemaContent').enable();
                    this.invalidExtension = false;
                }
                this.file = uploadedFile;
                this.papa.parse(uploadedFile, {
                    complete(results) {
                        let chain = '';
                        for (const data of results.data) {
                            chain = chain + data + '\n';
                        }
                        document.getElementById('esquemaContent').value = chain;
                        // this.esquemaForm.updateValueAndValidity();
                    }
                });
            }
        });
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.esquema) {
                if (this.esquemaForm.get('title').invalid) {
                    this.esquemaForm.get('title').markAsTouched();
                    return;
                }
            }
            else {
                const content = document.getElementById('esquemaContent').value;
                this.esquemaForm.patchValue({ esquemaContent: content });
                if (this.esquemaForm.invalid) {
                    if (this.esquemaForm.get('esquemaPath').invalid) {
                        this.invalidFile = true;
                        this.esquemaForm.get('esquemaPath').markAsDirty();
                    }
                    return Object.values(this.esquemaForm.controls).forEach(control => {
                        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                            Object.values(control.controls).forEach(control => control.markAsTouched());
                        }
                        else {
                            control.markAsTouched();
                        }
                    });
                }
            }
            this.savefileChange.emit(true);
            const values = this.esquemaForm.getRawValue();
            if (this.esquema) {
                yield this.esquemaService.updateEsquema(this.esquema.id, values.title, this.esquema.contentPath, values.esquemaContent, this.datafileId);
                this.router.navigateByUrl('/', { skipLocationChange: true })
                    .then(() => {
                    this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
                }).catch(err => { });
            }
            else {
                this.esquemaService.addEsquema(values.title, values.esquemaContent, this.file.name, this.datafileId, this.workspaceId)
                    .then(response => {
                    this.router.navigateByUrl('/', { skipLocationChange: true })
                        .then(() => {
                        this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
                    })
                        .catch(err => {
                        console.log("Error on onSave method: " + err);
                    });
                })
                    .catch(error => {
                    console.log("Error on onSave method: " + error);
                });
            }
            document.getElementById('esquemaContent').value = '';
            this.esquemaForm.reset();
            this.esquemaChange.emit(null);
            this.savefileChange.emit(false);
        });
    }
    onCancel() {
        this.esquemaForm.reset();
        this.esquemaChange.emit(null);
        if (!this.esquema) {
            document.getElementById('esquemaContent').value = '';
        }
        this.esquemaForm.patchValue({ esquemaPath: null });
        this.invalidFile = false;
    }
}
EsquemaCreateComponent.ɵfac = function EsquemaCreateComponent_Factory(t) { return new (t || EsquemaCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_esquemas_service__WEBPACK_IMPORTED_MODULE_3__["EsquemaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["Papa"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EsquemaCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EsquemaCreateComponent, selectors: [["app-esquema-create"]], inputs: { esquemaForm: "esquemaForm", workspaceId: "workspaceId", datafileId: "datafileId", savefile: "savefile", esquema: "esquema" }, outputs: { savefileChange: "savefileChange", esquemaChange: "esquemaChange" }, decls: 28, vars: 12, consts: [["id", "exampleModal2", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "placeholder", "T\u00EDtulo", "formControlName", "title", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "file", "class", "form-control form-control-sm mb-2", "formControlName", "esquemaPath", 3, "is-invalid", "change", 4, "ngIf"], [1, "form-floating"], ["id", "esquemaContent", "class", "form-control pt-0", "style", "height: 400px", 3, "is-invalid", 4, "ngIf"], ["formControlName", "esquemaContent", "class", "form-control pt-0", "style", "height: 400px", 3, "is-invalid", 4, "ngIf"], ["for", "floatingTextarea2", 1, "pt-1"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "text-danger"], ["type", "file", "formControlName", "esquemaPath", 1, "form-control", "form-control-sm", "mb-2", 3, "change"], ["id", "esquemaContent", 1, "form-control", "pt-0", 2, "height", "400px"], ["formControlName", "esquemaContent", 1, "form-control", "pt-0", 2, "height", "400px"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]], template: function EsquemaCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "A\u00F1adir Esquema");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsquemaCreateComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EsquemaCreateComponent_Template_form_ngSubmit_8_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EsquemaCreateComponent_small_12_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EsquemaCreateComponent_input_14_Template, 1, 2, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EsquemaCreateComponent_textarea_16_Template, 1, 2, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EsquemaCreateComponent_textarea_17_Template, 1, 2, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, EsquemaCreateComponent_small_20_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, EsquemaCreateComponent_small_21_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsquemaCreateComponent_Template_button_click_23_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, EsquemaCreateComponent_button_25_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, EsquemaCreateComponent_button_26_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, EsquemaCreateComponent_button_27_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.esquemaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.esquema);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.esquema);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.esquema);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidExtension);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (!ctx.esquemaForm.valid || ctx.invalidExtension) && !ctx.esquema);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.esquema);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.esquemaForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3F1ZW1hLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "htME":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/configuration/configuration-list/configuration-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ConfigurationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationListComponent", function() { return ConfigurationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_datafiles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/datafiles.service */ "g6qS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/configuration.service */ "JPLv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _configuration_create_configuration_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../configuration-create/configuration-create.component */ "PSlf");









function ConfigurationListComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " A\u00F1adir configuraci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConfigurationListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " A\u00F1adir configuraci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConfigurationListComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigurationListComponent_div_24_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const configuration_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onEdit(configuration_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Editar Configuraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigurationListComponent_div_24_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const configuration_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onDelete(configuration_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Eliminar Configuraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const configuration_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](configuration_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 2, configuration_r3.creationMoment, "EEEE d MMMM y, h:mm:ss"));
} }
class ConfigurationListComponent {
    constructor(datafilesService, route, usersService, router, configurationsService) {
        this.datafilesService = datafilesService;
        this.route = route;
        this.usersService = usersService;
        this.router = router;
        this.configurationsService = configurationsService;
        this.userIsAuthenticated = false;
        this.isDeleting = false;
        this.saveconfigChange = false;
        this.configuration = null;
        this.inferring = false;
        this.extraControls = [];
        this.configurationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)] }),
            'errorCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
        });
    }
    ngOnInit() {
        this.userIsAuthenticated = this.usersService.getIsAuth();
        this.authStatusSub = this.usersService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.usersService.getUserId();
        });
    }
    ngOnDestroy() {
        // this.configurationsSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    }
    onDelete(configurationId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.configurationsService.deleteConfiguration(configurationId);
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
            }).catch(err => { });
        });
    }
    setExtraParams(newvalue) {
        this.extraControls = newvalue;
    }
    onEdit(configurationId) {
        this.configurationsService.getConfiguration(configurationId).subscribe(configurationData => {
            this.configurationId = configurationData.configuration._id;
            this.configuration = {
                id: configurationData.configuration._id,
                title: configurationData.configuration.title,
                creationMoment: configurationData.configuration.creationMoment,
                errorCode: configurationData.configuration.errorCode,
                extraParams: configurationData.configuration.extraParams,
                datafile: configurationData.configuration.datafile,
            };
            // this.configurationForm.get('esquemaContent').enable();
            this.configurationForm.patchValue({ title: configurationData.configuration.title,
                errorCode: configurationData.configuration.errorCode });
            const extraParamsObj = configurationData.configuration.extraParams;
            Object.keys(extraParamsObj).forEach(extraParam => {
                this.configurationForm.addControl(extraParam, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }));
                this.extraControls.push(extraParam);
                this.configurationForm.patchValue(extraParamsObj);
            });
        });
    }
}
ConfigurationListComponent.ɵfac = function ConfigurationListComponent_Factory(t) { return new (t || ConfigurationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_datafiles_service__WEBPACK_IMPORTED_MODULE_3__["DatafileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"])); };
ConfigurationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConfigurationListComponent, selectors: [["app-configuration-list"]], inputs: { datafileId: "datafileId", workspaceId: "workspaceId", configurations: "configurations" }, decls: 25, vars: 9, consts: [[1, "row", "mt-4"], [1, "col-5"], [1, "col-7", "d-flex", "justify-content-end"], ["type", "button", "class", "btn btn-outline-primary btn-sm", "data-bs-toggle", "modal", "data-bs-target", "#configuratioModal", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary btn-sm", "disabled", "", 4, "ngIf"], [3, "datafileId", "workspaceId", "configurationId", "configuration", "extraControls", "configurationForm", "configurationChange"], [1, "row", "mt-2", "mb-4"], [1, "col", "p-0"], [1, "container"], [1, "row", "border-header", "p-2"], [1, "col-3", "d-flex", "justify-content-start"], [1, "col-6", "d-flex", "justify-content-center"], [1, "col-3", "d-flex", "justify-content-end"], [1, "row", "mt-0", "p-2", "border-content"], [1, "col"], ["class", "row mt-1 mb-1", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#configuratioModal", 1, "btn", "btn-outline-primary", "btn-sm"], ["type", "button", "disabled", "", 1, "btn", "btn-outline-primary", "btn-sm"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "row", "mt-1", "mb-1"], [1, "col-3", "d-flex", "justify-content-start", "pt-2", "pe-0"], [1, "col-6", "d-flex", "justify-content-center", "pt-2"], [1, "col-3", "d-flex", "justify-content-end", "pe-4"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "btn-sm"], [1, "fas", "fa-ellipsis-h"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], ["data-bs-toggle", "modal", "data-bs-target", "#configuratioModal", 1, "dropdown-item", 3, "click"], [1, "dropdown-item", "danger", 3, "click"]], template: function ConfigurationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Configuraciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ConfigurationListComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ConfigurationListComponent_button_7_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-configuration-create", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("configurationChange", function ConfigurationListComponent_Template_app_configuration_create_configurationChange_8_listener($event) { return ctx.setExtraParams($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Fecha de Creaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Opciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ConfigurationListComponent_div_24_Template, 19, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.saveconfigChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.saveconfigChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datafileId", ctx.datafileId)("workspaceId", ctx.workspaceId)("configurationId", ctx.configurationId)("configuration", ctx.configuration)("extraControls", ctx.extraControls)("configurationForm", ctx.configurationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.configurations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _configuration_create_configuration_create_component__WEBPACK_IMPORTED_MODULE_8__["ConfigurationCreateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".btn-outline-light[_ngcontent-%COMP%] {\r\n    color: rgb(156, 156, 156) !important;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n    color: #dc3845;\r\n}\r\n\r\n.my-custom-scrollbar[_ngcontent-%COMP%] {\r\n    height: 60%;\r\n    overflow: auto;\r\n}\r\n\r\n.border-header[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #ced4da;\r\n    border-right: 1px solid #ced4da;\r\n    border-left: 1px solid #ced4da;\r\n    border-radius: 4px 4px 0 0;\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.border-content[_ngcontent-%COMP%] {\r\n    border-radius: 0 0 4px 4px;\r\n    border: 1px solid #ced4da;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiY29uZmlndXJhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1NiwgMTU2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZGMzODQ1O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYm9yZGVyLWhlYWRlciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbn1cclxuXHJcbi5ib3JkZXItY29udGVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/angular-material.module */ "rhD1");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "2MiI");
/* harmony import */ var _invitation_invitation_create_invitation_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invitation/invitation-create/invitation-create.component */ "OeXY");
/* harmony import */ var _workspace_workspace_edit_workspace_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workspace/workspace-edit/workspace-edit.component */ "peb4");
/* harmony import */ var _collection_collection_create_collection_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collection/collection-create/collection-create.component */ "gpP9");
/* harmony import */ var _datafile_datafile_create_datafile_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datafile/datafile-create/datafile-create.component */ "zi/v");
/* harmony import */ var _datafile_datafile_edit_datafile_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datafile/datafile-edit/datafile-edit.component */ "roY1");
/* harmony import */ var _esquemas_esquema_list_esquema_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./esquemas/esquema-list/esquema-list.component */ "o0UC");
/* harmony import */ var _esquemas_esquema_create_esquema_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./esquemas/esquema-create/esquema-create.component */ "hKvF");
/* harmony import */ var _configuration_configuration_list_configuration_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./configuration/configuration-list/configuration-list.component */ "htME");
/* harmony import */ var _test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./test/test-list/test-list.component */ "WVMI");
/* harmony import */ var _configuration_configuration_create_configuration_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./configuration/configuration-create/configuration-create.component */ "PSlf");
/* harmony import */ var _test_test_create_test_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./test/test-create/test-create.component */ "mihJ");
/* harmony import */ var _activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./activity/activity-list/activity-list.component */ "dSgO");
/* harmony import */ var _collection_collection_list_collection_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./collection/collection-list/collection-list.component */ "/L8O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _invitation_invitation_create_invitation_create_component__WEBPACK_IMPORTED_MODULE_6__["InvitationCreateComponent"],
        _workspace_workspace_edit_workspace_edit_component__WEBPACK_IMPORTED_MODULE_7__["WorkspaceEditComponent"],
        _collection_collection_create_collection_create_component__WEBPACK_IMPORTED_MODULE_8__["CollectionCreateComponent"],
        _datafile_datafile_create_datafile_create_component__WEBPACK_IMPORTED_MODULE_9__["DatafileCreateComponent"],
        _datafile_datafile_edit_datafile_edit_component__WEBPACK_IMPORTED_MODULE_10__["DatafileEditComponent"],
        _collection_collection_list_collection_list_component__WEBPACK_IMPORTED_MODULE_18__["CollectionListComponent"],
        _esquemas_esquema_list_esquema_list_component__WEBPACK_IMPORTED_MODULE_11__["EsquemaListComponent"],
        _esquemas_esquema_create_esquema_create_component__WEBPACK_IMPORTED_MODULE_12__["EsquemaCreateComponent"],
        _configuration_configuration_list_configuration_list_component__WEBPACK_IMPORTED_MODULE_13__["ConfigurationListComponent"],
        _test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_14__["TestListComponent"],
        _configuration_configuration_create_configuration_create_component__WEBPACK_IMPORTED_MODULE_15__["ConfigurationCreateComponent"],
        _test_test_create_test_create_component__WEBPACK_IMPORTED_MODULE_16__["TestCreateComponent"],
        _activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_17__["ActivityListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _invitation_invitation_create_invitation_create_component__WEBPACK_IMPORTED_MODULE_6__["InvitationCreateComponent"],
        _workspace_workspace_edit_workspace_edit_component__WEBPACK_IMPORTED_MODULE_7__["WorkspaceEditComponent"],
        _collection_collection_create_collection_create_component__WEBPACK_IMPORTED_MODULE_8__["CollectionCreateComponent"],
        _datafile_datafile_create_datafile_create_component__WEBPACK_IMPORTED_MODULE_9__["DatafileCreateComponent"],
        _datafile_datafile_edit_datafile_edit_component__WEBPACK_IMPORTED_MODULE_10__["DatafileEditComponent"],
        _collection_collection_list_collection_list_component__WEBPACK_IMPORTED_MODULE_18__["CollectionListComponent"],
        _esquemas_esquema_list_esquema_list_component__WEBPACK_IMPORTED_MODULE_11__["EsquemaListComponent"],
        _esquemas_esquema_create_esquema_create_component__WEBPACK_IMPORTED_MODULE_12__["EsquemaCreateComponent"],
        _configuration_configuration_list_configuration_list_component__WEBPACK_IMPORTED_MODULE_13__["ConfigurationListComponent"],
        _test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_14__["TestListComponent"],
        _configuration_configuration_create_configuration_create_component__WEBPACK_IMPORTED_MODULE_15__["ConfigurationCreateComponent"],
        _test_test_create_test_create_component__WEBPACK_IMPORTED_MODULE_16__["TestCreateComponent"],
        _activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_17__["ActivityListComponent"]] }); })();


/***/ }),

/***/ "k/Ee":
/*!*************************************************!*\
  !*** ./src/app/services/collections.service.ts ***!
  \*************************************************/
/*! exports provided: CollectionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsService", function() { return CollectionsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/collections/';
class CollectionsService {
    constructor(http) {
        this.http = http;
        this.collections = [];
        this.collectionsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getCollectionUpdateListener() {
        return this.collectionsUpdated.asObservable();
    }
    getCollectionsByWorkspace(workspaceId) {
        return this.http.get(BACKEND_URL + workspaceId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((collectionData) => {
            return {
                collections: collectionData.collections
                    .map(collection => {
                    return {
                        id: collection._id,
                        title: collection.title,
                        datafiles: collection.datafiles
                    };
                }),
            };
        }))
            .subscribe((transformedCollectionData) => {
            this.collections = transformedCollectionData.collections;
            this.collectionsUpdated.next({
                collections: [...this.collections]
            });
        });
    }
    addCollection(title, workspaceId) {
        let res;
        const collection = {
            'id': null,
            'title': title,
            'workspace': workspaceId
        };
        this.http.post(BACKEND_URL, collection).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Creating a collection failed!');
                }
                else {
                    resolve('Collection added successfully!');
                }
            }, 1000);
        });
    }
    updateCollection(collectionId, title, workspaceId) {
        let res;
        const collection = {
            'id': collectionId,
            'title': title,
            'workspace': workspaceId
        };
        this.http.put(BACKEND_URL + collectionId, collection).subscribe(response => {
            res = response;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Updating a collection failed!');
                }
                else {
                    resolve('Collection updated successfully!');
                }
            }, 1000);
        });
    }
    deleteCollection(collectionId) {
        let res;
        this.http.delete(BACKEND_URL + collectionId).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Deleting a collection failed!');
                }
                else {
                    resolve('Collection deleted successfully!');
                }
            }, 1000);
        });
    }
}
CollectionsService.ɵfac = function CollectionsService_Factory(t) { return new (t || CollectionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CollectionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CollectionsService, factory: CollectionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "krfx":
/*!********************************************************************************!*\
  !*** ./src/app/pages/invitations/invitation-list/invitation-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: InvitationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationListComponent", function() { return InvitationListComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_invitations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/invitations.service */ "qNvm");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");












function InvitationListComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Remitente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InvitationListComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r10.sender, " ");
} }
function InvitationListComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Espacio de Trabajo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InvitationListComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r11.workspace, " ");
} }
function InvitationListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InvitationListComponent_td_17_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvitationListComponent_td_17_div_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const element_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.onEditStatus(element_r12, "seen"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InvitationListComponent_td_17_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvitationListComponent_td_17_div_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const element_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.onEditStatus(element_r12, "pending"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InvitationListComponent_td_17_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvitationListComponent_td_17_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const element_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.onEditStatus(element_r12, "accepted"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvitationListComponent_td_17_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const element_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.onEditStatus(element_r12, "rejected"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Rechazar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, InvitationListComponent_td_17_div_1_button_5_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, InvitationListComponent_td_17_div_1_button_6_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r12.status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r12.status === "seen");
} }
function InvitationListComponent_td_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Aceptada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InvitationListComponent_td_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Rechazada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InvitationListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InvitationListComponent_td_17_div_1_Template, 7, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, InvitationListComponent_td_17_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, InvitationListComponent_td_17_div_3_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r12.status === "pending" || element_r12.status === "seen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r12.status === "accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r12.status === "rejected");
} }
function InvitationListComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 28);
} }
function InvitationListComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 29);
} }
function InvitationListComponent_div_20_mat_paginator_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-paginator", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function InvitationListComponent_div_20_mat_paginator_1_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.onChangedPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx_r31.totalInvitations)("pageSize", ctx_r31.invitationsPerPage)("pageSizeOptions", ctx_r31.pageSizeOptions);
} }
function InvitationListComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InvitationListComponent_div_20_mat_paginator_1_Template, 1, 3, "mat-paginator", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.invitations.length > 0);
} }
function InvitationListComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No se han a\u00F1adido invitaciones a\u00FAn!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class InvitationListComponent {
    constructor(invitationsService, authService, formBuilder, activatedRoute, router) {
        this.invitationsService = invitationsService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userIsAuthenticated = false;
        this.isLoading = false;
        this.invalidEmail = false;
        this.displayedColumns = ['sender', 'workspace', 'status'];
        this.invitations = [];
        this.totalInvitations = 0;
        this.invitationsPerPage = 2;
        this.currentPage = 1;
        this.dataSource = null;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.createForm();
    }
    createForm() {
        this.invitationForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.invitationsService.getInvitations(this.invitationsPerPage, this.currentPage);
        this.userId = this.authService.getUserId();
        this.invitationsSub = this.invitationsService.getInvitationUpdateListener()
            .subscribe((invitationData) => {
            this.isLoading = false;
            this.totalInvitations = invitationData.totalInvitations;
            this.invitations = invitationData.invitations;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.invitations);
            this.dataSource.sort = this.sort;
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
        this.activatedRoute.queryParams.subscribe(params => {
            this.workspaceId = params.workspaceId;
        });
    }
    onChangedPage(pageData) {
        this.currentPage = pageData.pageIndex + 1;
        this.invitationsPerPage = pageData.pageSize;
        this.invitationsService.getInvitations(this.invitationsPerPage, this.currentPage);
    }
    ngOnDestroy() {
        this.invitationsSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    }
    onInvite() {
        if (this.invitationForm.invalid) {
            this.invalidEmail = true;
            return Object.values(this.invitationForm.controls).forEach(control => {
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    Object.values(control.controls).forEach(control => control.markAsTouched());
                }
                else {
                    control.markAsTouched();
                }
            });
        }
        // this.isLoading = true;
        const values = this.invitationForm.getRawValue();
        this.invitationsService.addInvitation(values.email, this.workspaceId)
            .then(response => {
            this.router.navigate(['/']);
        })
            .catch(err => {
            console.log("Error on onInvite method: " + err);
        });
        this.invitationForm.reset();
        // this.isLoading = false;
    }
    onEditStatus(object, newStatus) {
        this.invitationsService.updateInvitation(object.id, newStatus)
            .then(response => {
            // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            // this.router.navigate(['/invitations']));
            window.location.reload();
        })
            .catch(err => {
            console.log("Error on onInvite method: " + err);
        });
    }
}
InvitationListComponent.ɵfac = function InvitationListComponent_Factory(t) { return new (t || InvitationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_invitations_service__WEBPACK_IMPORTED_MODULE_4__["InvitationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
InvitationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InvitationListComponent, selectors: [["app-invitation-list"]], viewQuery: function InvitationListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 22, vars: 5, consts: [[1, "container", "mt-5"], [1, "row", "d-flex", "justify-content-center"], [1, "col-9", "col-auto"], [1, "row"], [1, "col-8"], [1, "row", "justify-content-center"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z1", 3, "dataSource"], ["matColumnDef", "sender"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "workspace"], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "row justify-content-center mt-2", 4, "ngIf"], ["class", "row justify-content-center mt-3", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-success", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "me-1", 3, "click"], ["type", "button", "class", "btn btn-sm btn-outline-secondary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-outline-light", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-eye"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-light", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "row", "justify-content-center", "mt-2"], ["class", "col-auto", 3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "col-auto", 3, "length", "pageSize", "pageSizeOptions", "page"], [1, "row", "justify-content-center", "mt-3"], [1, "col-4"], [1, "info-text", "mat-body-1"]], template: function InvitationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Invitaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, InvitationListComponent_th_10_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, InvitationListComponent_td_11_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, InvitationListComponent_th_13_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, InvitationListComponent_td_14_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, InvitationListComponent_th_16_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, InvitationListComponent_td_17_Template, 4, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, InvitationListComponent_tr_18_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, InvitationListComponent_tr_19_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, InvitationListComponent_div_20_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, InvitationListComponent_div_21_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invitations.length > 0 && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invitations.length <= 0 && !ctx.isLoading);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid transparent;\r\n    border-top: 1px solid transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%] {\r\n    background: whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0YXRpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJpbnZpdGF0aW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1hdC1yb3cgLm1hdC1jZWxsIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIgLm1hdC1jZWxsIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/auth/';
class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.username = "";
    }
    getToken() {
        return this.token;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getUserId() {
        return this.userId;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getUserData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');
        if (!token || !expirationDate) {
            return;
        }
        return { userId, username };
    }
    login(username, password) {
        const authData = { username, password };
        this.http.post(BACKEND_URL + '/login', authData)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.user._id;
                this.username = response.user.username;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                this.saveAuthData(token, expirationDate, this.userId, this.username);
                this.router.navigate(['/']);
            }
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    googleLogin(tokenId) {
        const authData = { tokenId };
        this.http
            .post(BACKEND_URL + 'google', authData)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.user._id;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                this.saveAuthData(token, expirationDate, this.userId, this.username);
                this.router.navigate(['/']);
            }
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
        if (gapi.auth2) {
            this.auth2 = gapi.auth2.getAuthInstance();
            this.auth2.signOut().then(() => {
            });
        }
    }
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate, userId, username) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('username', username);
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
    }
    getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token,
            expirationDate: new Date(expirationDate),
            userId,
            username
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lq+I":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/profile-edit/mime-type.validator.ts ***!
  \*******************************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

const mimeType = (control) => {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    const frObs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
        fileReader.addEventListener('loadend', () => {
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = '';
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            // csv: 69642c6e
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file); // esto se llama primero y luego la línea 11
    });
    return frObs;
};


/***/ }),

/***/ "mihJ":
/*!**********************************************************************!*\
  !*** ./src/app/components/test/test-create/test-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: TestCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCreateComponent", function() { return TestCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tests.service */ "s0o0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function TestCreateComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un t\u00EDtulo adecuado (entre 1 y 100 caracteres). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestCreateComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const esquema_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", esquema_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](esquema_r5.title);
} }
function TestCreateComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TestCreateComponent_div_36_Template_input_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onConfigurationPicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const configuration_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](configuration_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](configuration_r6.errorCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](configuration_r6.extraParamsStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", configuration_r6.id);
} }
function TestCreateComponent_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestCreateComponent_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestCreateComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestCreateComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TestCreateComponent {
    constructor(testService, route, formBuilder, router, usersService) {
        this.testService = testService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.usersService = usersService;
        this.userIsAuthenticated = false;
        //@Input() testSave        : boolean;
        this.testSaveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createForm();
        this.testForm.reset({
            title: '',
            esquema: '',
            consfigurations: []
        });
        this.selectedConfigurations = [];
    }
    createForm() {
        this.testForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            esquema: [''],
            configurations: [[]]
        });
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
        return this.testForm.get('title').invalid && this.testForm.get('title').touched;
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.testForm.invalid) {
                return Object.values(this.testForm.controls).forEach(control => {
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                        Object.values(control.controls).forEach(control => control.markAsTouched());
                    }
                    else {
                        control.markAsTouched();
                    }
                });
            }
            const values = this.testForm.getRawValue();
            yield this.testService.addTest(values.title, values.esquema, values.configurations, this.datafileId);
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
            }).catch(err => {
                console.log("Error on onSave method: " + err);
            });
            this.testForm.reset({});
            this.selectedConfigurations = [];
        });
    }
    onConfigurationPicked(event) {
        const configurationId = event.target.value;
        const checked = event.target.checked;
        const index = this.selectedConfigurations.indexOf(configurationId);
        if (checked && index < 0) {
            this.selectedConfigurations.push(configurationId);
        }
        else if (!checked && index >= 0) {
            this.selectedConfigurations.pop();
        }
        this.testForm.patchValue({ configurations: this.selectedConfigurations });
    }
    onEsquemaPicked(event) {
        const esquemaId = event.target.value;
        if (esquemaId) {
            this.testForm.patchValue({ esquema: esquemaId });
        }
    }
    onCancel() {
        this.testForm.reset({});
        this.selectedConfigurations = [];
    }
}
TestCreateComponent.ɵfac = function TestCreateComponent_Factory(t) { return new (t || TestCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_3__["TestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
TestCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestCreateComponent, selectors: [["app-test-create"]], inputs: { testForm: "testForm", workspaceId: "workspaceId", datafileId: "datafileId", esquemas: "esquemas", configurations: "configurations" }, outputs: { testSaveChange: "testSaveChange" }, decls: 42, vars: 8, consts: [["id", "testCreateModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", 2, "width", "auto", "display", "inline-block"], [1, "modal-header"], ["id", "exampleModalLabel ", 1, "modal-title", "mb-0"], ["type", "button ", "data-bs-dismiss", "modal", "aria-label", "Close ", 1, "btn-close", 3, "click"], [1, "modal-body", 2, "display", "inline-block"], [2, "display", "inline-block", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text ", "placeholder", "T\u00EDtulo ", "formControlName", "title", 1, "form-control"], ["class", "text-danger ", 4, "ngIf"], [1, "col-form-label"], [1, "form-select", "form-select-sm", 3, "change"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "mb-3", 2, "display", "inline-block"], [1, "container"], [1, "row", "border-header", "p-2"], [1, "col-3", "d-flex", "justify-content-start"], [1, "col-4", "d-flex", "justify-content-center"], [1, "col-1"], [1, "row", "mt-0", "p-2", "border-content"], [1, "col"], ["class", "row mt-1 mb-1", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button ", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit ", "class", "btn btn-primary ", 3, "click", 4, "ngIf"], ["type", "submit ", "class", "btn btn-primary ", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "text-danger"], [3, "value"], [1, "row", "mt-1", "mb-1"], [1, "col-1", "d-flex", "justify-content-center"], [1, "form-check"], ["type", "checkbox", "id", "flexCheckDefault", 1, "form-check-input", 3, "value", "change"], ["type", "submit ", 1, "btn", "btn-primary", 3, "click"], ["type", "submit ", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]], template: function TestCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "A\u00F1adir Esquema");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestCreateComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TestCreateComponent_Template_form_ngSubmit_8_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TestCreateComponent_small_12_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Esquema:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TestCreateComponent_Template_select_change_16_listener($event) { return ctx.onEsquemaPicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ninguna");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TestCreateComponent_option_19_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "C\u00F3digo de Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Par\u00E1metros");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TestCreateComponent_div_36_Template, 13, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestCreateComponent_Template_button_click_38_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, TestCreateComponent_button_40_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, TestCreateComponent_button_41_Template, 2, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.esquemas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.configurations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.testForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.testForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".border-header[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #ced4da;\r\n    border-right: 1px solid #ced4da;\r\n    border-left: 1px solid #ced4da;\r\n    border-radius: 4px 4px 0 0;\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.border-content[_ngcontent-%COMP%] {\r\n    border-radius: 0 0 4px 4px;\r\n    border: 1px solid #ced4da;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJ0ZXN0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlci1oZWFkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG59XHJcblxyXG4uYm9yZGVyLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "o0UC":
/*!****************************************************************************!*\
  !*** ./src/app/components/esquemas/esquema-list/esquema-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: EsquemaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsquemaListComponent", function() { return EsquemaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_datafiles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/datafiles.service */ "g6qS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_esquemas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/esquemas.service */ "dZWD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _esquema_create_esquema_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../esquema-create/esquema-create.component */ "hKvF");









function EsquemaListComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EsquemaListComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onInfer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Inferir Esquema ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EsquemaListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Inferir Esquema ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EsquemaListComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " A\u00F1adir esquema ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EsquemaListComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " A\u00F1adir esquema ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EsquemaListComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EsquemaListComponent_div_27_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const esquema_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onEdit(esquema_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Editar Esquema");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EsquemaListComponent_div_27_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const esquema_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onDelete(esquema_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Eliminar Esquema");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const esquema_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](esquema_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 2, esquema_r7.creationMoment, "EEEE d MMMM y, h:mm:ss"));
} }
class EsquemaListComponent {
    constructor(datafilesService, route, usersService, router, esquemasService) {
        this.datafilesService = datafilesService;
        this.route = route;
        this.usersService = usersService;
        this.router = router;
        this.esquemasService = esquemasService;
        this.userIsAuthenticated = false;
        this.isDeleting = false;
        // Para editar
        this.savefileChange = false;
        this.esquema = null;
        this.inferring = false;
        this.esquemaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)] }),
            'esquemaContent': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            'esquemaPath': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    onDelete(esquemaId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.esquemasService.deleteEsquema(esquemaId);
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
            }).catch(err => { });
        });
    }
    setSaveMode(newvalue) {
        this.savefileChange = newvalue;
    }
    onEdit(esquemaId) {
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
            document.getElementById('esquemaContent').value = this.esquemaForm.get('esquemaPath').value;
        });
    }
    setEsquema(newvalue) {
        this.esquema = newvalue;
    }
    onInfer() {
        this.inferring = true;
        this.esquemasService.addEsquema(null, null, null, this.datafileId, this.workspaceId)
            .then(response => {
            this.inferring = false;
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
            })
                .catch(err => {
                console.log("Error on onInfer method: " + err);
            });
        })
            .catch(error => {
            console.log("Error on onInfer method: " + error);
        });
    }
}
EsquemaListComponent.ɵfac = function EsquemaListComponent_Factory(t) { return new (t || EsquemaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_datafiles_service__WEBPACK_IMPORTED_MODULE_3__["DatafileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_esquemas_service__WEBPACK_IMPORTED_MODULE_6__["EsquemaService"])); };
EsquemaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EsquemaListComponent, selectors: [["app-esquema-list"]], inputs: { datafileId: "datafileId", workspaceId: "workspaceId", esquemas: "esquemas", infer: "infer" }, decls: 28, vars: 9, consts: [[1, "row", "mt-4"], [1, "col-5"], [1, "col-7", "d-flex", "justify-content-end"], [1, "me-1"], ["type", "button", "class", "btn btn-outline-primary btn-sm", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary btn-sm", "type", "button", "disabled", "", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary btn-sm", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal2", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary btn-sm", "disabled", "", 4, "ngIf"], [3, "datafileId", "workspaceId", "esquema", "esquemaForm", "savefileChange", "esquemaChange"], [1, "row", "mt-2", "mb-4"], [1, "col", "p-0"], [1, "container"], [1, "row", "border-header", "p-2"], [1, "col-3", "d-flex", "justify-content-start"], [1, "col-6", "d-flex", "justify-content-center"], [1, "col-3", "d-flex", "justify-content-end"], [1, "row", "mt-0", "p-2", "border-content"], [1, "col"], ["class", "row mt-1 mb-1", 4, "ngFor", "ngForOf"], ["type", "button", "type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["type", "button", "type", "button", "disabled", "", 1, "btn", "btn-outline-primary", "btn-sm"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal2", 1, "btn", "btn-outline-primary", "btn-sm"], ["type", "button", "disabled", "", 1, "btn", "btn-outline-primary", "btn-sm"], [1, "row", "mt-1", "mb-1"], [1, "col-3", "d-flex", "justify-content-start", "pt-2", "pe-0"], [1, "col-6", "d-flex", "justify-content-center", "pt-2"], [1, "col-3", "d-flex", "justify-content-end", "pe-4"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "btn-sm"], [1, "fas", "fa-ellipsis-h"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal2", 1, "dropdown-item", 3, "click"], [1, "dropdown-item", "danger", 3, "click"]], template: function EsquemaListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Esquemas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EsquemaListComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EsquemaListComponent_button_7_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EsquemaListComponent_button_9_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EsquemaListComponent_button_10_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "app-esquema-create", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("savefileChange", function EsquemaListComponent_Template_app_esquema_create_savefileChange_11_listener($event) { return ctx.setSaveMode($event); })("esquemaChange", function EsquemaListComponent_Template_app_esquema_create_esquemaChange_11_listener($event) { return ctx.setEsquema($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Fecha de Creaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Opciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, EsquemaListComponent_div_27_Template, 19, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.inferring && ctx.infer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.inferring);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.savefileChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.savefileChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datafileId", ctx.datafileId)("workspaceId", ctx.workspaceId)("esquema", ctx.esquema)("esquemaForm", ctx.esquemaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.esquemas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _esquema_create_esquema_create_component__WEBPACK_IMPORTED_MODULE_8__["EsquemaCreateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".btn-outline-light[_ngcontent-%COMP%] {\r\n    color: rgb(156, 156, 156) !important;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n    color: #dc3845;\r\n}\r\n\r\n.my-custom-scrollbar[_ngcontent-%COMP%] {\r\n    height: 60%;\r\n    overflow: auto;\r\n}\r\n\r\n.border-header[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #ced4da;\r\n    border-right: 1px solid #ced4da;\r\n    border-left: 1px solid #ced4da;\r\n    border-radius: 4px 4px 0 0;\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.border-content[_ngcontent-%COMP%] {\r\n    border-radius: 0 0 4px 4px;\r\n    border: 1px solid #ced4da;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzcXVlbWEtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiZXNxdWVtYS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1NiwgMTU2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZGMzODQ1O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYm9yZGVyLWhlYWRlciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbn1cclxuXHJcbi5ib3JkZXItY29udGVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "peb4":
/*!*********************************************************************************!*\
  !*** ./src/app/components/workspace/workspace-edit/workspace-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WorkspaceEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceEditComponent", function() { return WorkspaceEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/workspaces.service */ "952Z");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");











function WorkspaceEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceEditComponent_form_1_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un t\u00EDtulo adecuado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceEditComponent_form_1_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese una descripci\u00F3n adecuada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceEditComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function WorkspaceEditComponent_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WorkspaceEditComponent_form_1_small_5_Template, 2, 0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, WorkspaceEditComponent_form_1_small_10_Template, 2, 0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceEditComponent_form_1_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.workspaceEditForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.invalidTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.invalidDescription);
} }
class WorkspaceEditComponent {
    constructor(workspaceService, authService, router, formBuilder) {
        this.workspaceService = workspaceService;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.userIsAuthenticated = false;
        this.loading = false;
        this.editChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createForm();
    }
    createForm() {
        this.workspaceEditForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]],
        });
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
        this.workspaceEditForm.reset({
            title: this.workspace.title,
            description: this.workspace.description,
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    get invalidTitle() {
        return this.workspaceEditForm.get('title').invalid && this.workspaceEditForm.get('title').touched;
    }
    get invalidDescription() {
        return this.workspaceEditForm.get('description').invalid && this.workspaceEditForm.get('description').touched;
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.workspaceEditForm.invalid) {
                return Object.values(this.workspaceEditForm.controls).forEach(control => {
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                        Object.values(control.controls).forEach(control => control.markAsTouched());
                    }
                    else {
                        control.markAsTouched();
                    }
                });
            }
            this.loading = true;
            const values = this.workspaceEditForm.getRawValue();
            yield this.workspaceService.updateWorkspace(this.workspaceId, values.title, values.description);
            this.workspaceEditForm.reset();
            this.editChange.emit(false);
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}`]);
            }).catch(err => { });
            this.loading = false;
        });
    }
    onCancel() {
        this.workspaceEditForm.reset();
        this.editChange.emit(false);
    }
}
WorkspaceEditComponent.ɵfac = function WorkspaceEditComponent_Factory(t) { return new (t || WorkspaceEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_3__["WorkspacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
WorkspaceEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkspaceEditComponent, selectors: [["app-workspace-edit"]], inputs: { edit: "edit", workspace: "workspace", workspaceId: "workspaceId" }, outputs: { editChange: "editChange" }, decls: 2, vars: 2, consts: [["class", "row mt-2", 4, "ngIf"], ["class", "container mt-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "row", "mt-2"], [1, "row", "m-0", "p-1"], [1, "col", "d-flex", "justify-content-center"], [1, "container", "mt-4", 3, "formGroup", "ngSubmit"], [1, "row", "ms-0", "me-0", "mb-1", "p-0"], [1, "col", "ps-0", "pe-0", "d-flex", "justify-content-start"], ["type", "text", "placeholder", "T\u00EDtulo", "formControlName", "title", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "placeholder", "Descripci\u00F3n", "formControlName", "description", 1, "form-control"], [1, "col", "ps-0", "pe-0", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "me-1"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "text-danger"]], template: function WorkspaceEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WorkspaceEditComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WorkspaceEditComponent_form_1_Template, 17, 7, "form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], encapsulation: 2 });


/***/ }),

/***/ "qNvm":
/*!*************************************************!*\
  !*** ./src/app/services/invitations.service.ts ***!
  \*************************************************/
/*! exports provided: InvitationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationService", function() { return InvitationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/invitations/';
class InvitationService {
    constructor(http) {
        this.http = http;
        this.invitations = [];
        this.invitationsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getInvitationUpdateListener() {
        return this.invitationsUpdated.asObservable();
    }
    getInvitations(invitationsPerPage, currentPage) {
        const queryParams = `?pagesize=${invitationsPerPage}&page=${currentPage}`;
        this.http.get(BACKEND_URL + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((invitationData) => {
            return {
                invitations: invitationData.invitations
                    .map(invitation => {
                    return {
                        id: invitation._id,
                        sender: invitation.sender,
                        receiver: invitation.receiver,
                        status: invitation.status,
                        workspace: invitation.workspace,
                    };
                }),
                maxInvitations: invitationData.maxInvitations,
                totalInvitations: invitationData.totalInvitations
            };
        }))
            .subscribe((transformedInvitationData) => {
            this.invitations = transformedInvitationData.invitations;
            this.invitationsUpdated.next({
                invitations: [...this.invitations],
                invitationCount: transformedInvitationData.maxInvitations,
                totalInvitations: transformedInvitationData.totalInvitations
            });
        });
    }
    getInvitationsHeader() {
        return this.http.get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((invitationData) => {
            return {
                invitations: invitationData.invitations
                    .map(invitation => {
                    return {
                        id: invitation._id,
                        sender: invitation.sender,
                        receiver: invitation.receiver,
                        status: invitation.status,
                        workspace: invitation.workspace,
                    };
                }),
            };
        }));
    }
    addInvitation(receiverEmail, workspaceId) {
        let res;
        const invitation = {
            'id': null,
            'sender': null,
            'receiver': receiverEmail,
            'status': 'pending',
            'workspace': workspaceId
        };
        this.http.post(BACKEND_URL, invitation).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Creating an invitation failed!');
                }
                else {
                    resolve('Invitation added successfully!');
                }
            }, 1000);
        });
    }
    updateInvitation(invitationId, status) {
        let res;
        const invitationData = {
            'id': invitationId,
            'sender': null,
            'receiver': null,
            'status': status,
            'workspace': null
        };
        this.http.put(BACKEND_URL + invitationId, invitationData)
            .subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Updating an invitation failed!');
                }
                else {
                    resolve('Invitation updated successfully!');
                }
            }, 1000);
        });
    }
    deleteInvitation(invitationId) {
        let res;
        this.http.delete(BACKEND_URL + invitationId).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Deleting an invitation failed!');
                }
                else {
                    resolve('Invitation deleted successfully!');
                }
            }, 1000);
        });
    }
}
InvitationService.ɵfac = function InvitationService_Factory(t) { return new (t || InvitationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
InvitationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: InvitationService, factory: InvitationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rhD1":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"]
        ], _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [// se pueden obviar los imports, si existen exports
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"]], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"]] }); })();


/***/ }),

/***/ "roY1":
/*!******************************************************************************!*\
  !*** ./src/app/components/datafile/datafile-edit/datafile-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: DatafileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatafileEditComponent", function() { return DatafileEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_datafiles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/datafiles.service */ "g6qS");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");











function DatafileEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DatafileEditComponent_form_1_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un t\u00EDtulo adecuado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DatafileEditComponent_form_1_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese una descripci\u00F3n adecuada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DatafileEditComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DatafileEditComponent_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DatafileEditComponent_form_1_small_5_Template, 2, 0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DatafileEditComponent_form_1_small_10_Template, 2, 0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatafileEditComponent_form_1_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.datafileEditForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.invalidTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.invalidDescription);
} }
class DatafileEditComponent {
    constructor(datafileService, authService, router, formBuilder) {
        this.datafileService = datafileService;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.editChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = false;
        this.userIsAuthenticated = false;
        this.createForm();
    }
    createForm() {
        this.datafileEditForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]],
        });
    }
    ngOnInit() {
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
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    get invalidTitle() {
        return this.datafileEditForm.get('title').invalid && this.datafileEditForm.get('title').touched;
    }
    get invalidDescription() {
        return this.datafileEditForm.get('description').invalid && this.datafileEditForm.get('description').touched;
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.datafileEditForm.invalid) {
                return Object.values(this.datafileEditForm.controls).forEach(control => {
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                        Object.values(control.controls).forEach(control => control.markAsTouched());
                    }
                    else {
                        control.markAsTouched();
                    }
                });
            }
            this.loading = true;
            const values = this.datafileEditForm.getRawValue();
            yield this.datafileService.updateDatafile(this.datafileId, values.title, values.description);
            this.datafileEditForm.reset();
            this.editChange.emit(false);
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
            }).catch(err => { });
            this.loading = false;
        });
    }
    onCancel() {
        this.datafileEditForm.reset();
        this.editChange.emit(false);
    }
}
DatafileEditComponent.ɵfac = function DatafileEditComponent_Factory(t) { return new (t || DatafileEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_datafiles_service__WEBPACK_IMPORTED_MODULE_3__["DatafileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
DatafileEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatafileEditComponent, selectors: [["app-datafile-edit"]], inputs: { edit: "edit", datafile: "datafile", datafileId: "datafileId", workspaceId: "workspaceId" }, outputs: { editChange: "editChange" }, decls: 2, vars: 2, consts: [["class", "row mt-2", 4, "ngIf"], ["class", "container mt-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "row", "mt-2"], [1, "row", "m-0", "p-1"], [1, "col", "d-flex", "justify-content-center"], [1, "container", "mt-4", 3, "formGroup", "ngSubmit"], [1, "row", "ms-0", "me-0", "mb-1", "p-0"], [1, "col", "ps-0", "pe-0", "d-flex", "justify-content-start"], ["type", "text", "placeholder", "T\u00EDtulo", "formControlName", "title", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "placeholder", "Descripci\u00F3n", "formControlName", "description", 1, "form-control"], [1, "col", "ps-0", "pe-0", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "me-1"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "text-danger"]], template: function DatafileEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DatafileEditComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DatafileEditComponent_form_1_Template, 17, 7, "form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], encapsulation: 2 });


/***/ }),

/***/ "s0o0":
/*!*******************************************!*\
  !*** ./src/app/services/tests.service.ts ***!
  \*******************************************/
/*! exports provided: TestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsService", function() { return TestsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tests/';
class TestsService {
    constructor(http) {
        this.http = http;
        this.tests = [];
        this.testsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getTestUpdateListener() {
        return this.testsUpdated.asObservable();
    }
    getTests(workspaceId) {
        const queryParams = `?workspaceId=${workspaceId}`;
        this.http.get(BACKEND_URL + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((testData) => {
            return { tests: testData.tests.map(test => {
                    return {
                        id: test._id,
                        title: test.title,
                        reportPath: test.reportPath,
                        status: test.status,
                        esquema: test.esquema,
                        configurations: test.configurations,
                        creationMoment: test.creationMoment,
                        updateMoment: test.updateMoment,
                        executionMoment: test.executionMoment,
                        totalErrors: test.totalErrors,
                        executable: test.executable,
                        datafileId: test.datafile,
                        datafileTitle: test.datafileTitle
                    };
                }),
            };
        }))
            .subscribe((transformedTestData) => {
            this.tests = transformedTestData.tests;
            this.testsUpdated.next({
                tests: [...this.tests],
            });
        });
    }
    getTest(testId) {
        return this.http.get(BACKEND_URL + testId);
    }
    addTest(title, esquemaId, configurations, datafileId) {
        let res;
        const test = {
            'id': null,
            'title': title,
            'reportPath': null,
            'status': null,
            'esquema': esquemaId,
            'configurations': configurations,
            'creationMoment': null,
            'updateMoment': null,
            'executionMoment': null,
            'totalErrors': null,
            'executable': null,
            'datafile': datafileId,
        };
        this.http.post(BACKEND_URL, test).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Creating a test failed!');
                }
                else {
                    resolve('Test added successfully!');
                }
            }, 1000);
        });
    }
    updateTest(test) {
        let res;
        this.http.put(BACKEND_URL + test.id, test).subscribe(responseData => {
            res = responseData;
            console.log(responseData);
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Updating a test failed!');
                }
                else {
                    resolve('Test updated successfully!');
                }
            }, 4000);
        });
    }
    deleteTest(testId) {
        let res;
        this.http.delete(BACKEND_URL + testId).subscribe(responseData => {
            res = responseData;
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (res === undefined) {
                    reject('Deleting a test failed!');
                }
                else {
                    resolve('Test deleted successfully!');
                }
            }, 1000);
        });
    }
}
TestsService.ɵfac = function TestsService_Factory(t) { return new (t || TestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
TestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TestsService, factory: TestsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "s4SY":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/profile-edit/profile-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mime-type.validator */ "lq+I");
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/header/header.component */ "2MiI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/workspaces.service */ "952Z");
/* harmony import */ var src_app_services_uploads_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/uploads.service */ "SyKm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");














function ProfileEditComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner");
} }
function ProfileEditComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.photoPreview, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ProfileEditComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r3.user.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ProfileEditComponent_div_1_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingrese un nombre v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileEditComponent_div_1_small_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingrese un nombre de usuario v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileEditComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Editar Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Configuraci\u00F3n de la cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Editar Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ProfileEditComponent_div_1_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.onSaveUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ProfileEditComponent_div_1_div_14_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ProfileEditComponent_div_1_div_15_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileEditComponent_div_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22); return _r4.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Cambiar Foto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ProfileEditComponent_div_1_Template_input_change_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.onImagePicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ProfileEditComponent_div_1_small_28_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Nombre de Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ProfileEditComponent_div_1_small_34_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Guardar Cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileEditComponent_div_1_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.onCancelUserForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r1.user.userId, "/edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/account/", ctx_r1.user.userId, "/edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.photoPreview && ctx_r1.photoPreview !== "" && ctx_r1.userForm.get("photo").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.photoPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.invalidName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r1.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.invalidUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.pristineUser);
} }
class ProfileEditComponent {
    constructor(authService, usersService, route, workspacesService, uploadsService) {
        this.authService = authService;
        this.usersService = usersService;
        this.route = route;
        this.workspacesService = workspacesService;
        this.uploadsService = uploadsService;
        this.isLoading = false;
    }
    // createUserForm() {
    //   this.userForm = this.formBuilder.group({
    //     username : ['', [Validators.required, Validators.minLength(5)]],
    //     name     : ['', [Validators.required, Validators.minLength(5)]],
    //     photo    : [null, [Validators.required, mimeType]]
    //   })
    // }
    ngOnInit() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)] }),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)] }),
            'photo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_2__["mimeType"]] })
        });
        this.route.paramMap.subscribe((paramMap) => {
            const userId = paramMap.get('userId');
            this.isLoading = true;
            this.usersService.getUser(userId).subscribe(userData => {
                this.user = {
                    id: userData.user.id,
                    username: userData.user.username,
                    email: userData.user.email,
                    password: userData.user.password,
                    photo: userData.user.photo,
                    name: userData.user.name,
                    role: userData.user.role,
                    status: userData.user.status,
                    google: userData.user.google
                };
                this.userForm.reset({
                    name: this.user.name,
                    username: this.user.username,
                    photo: this.user.photo
                });
                this.isLoading = false;
            });
        });
    }
    get pristineUser() {
        return this.userForm.get('username').pristine && this.userForm.get('name').pristine && this.userForm.get('photo').pristine;
    }
    get invalidUsername() {
        return this.userForm.get('username').invalid && this.userForm.get('username').touched;
    }
    get invalidName() {
        return this.userForm.get('name').invalid && this.userForm.get('name').touched;
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        this.userForm.patchValue({ photo: file });
        this.userForm.get('photo').markAsDirty();
        this.userForm.get('photo').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.photoPreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    onCancelUserForm() {
        this.userForm.reset({
            username: this.user.username,
            name: this.user.name,
            photo: this.user.photo
        });
        this.photoPreview = null;
    }
    onSaveUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.userForm.invalid) {
                return Object.values(this.userForm.controls).forEach(control => {
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                        Object.values(control.controls).forEach(control => control.markAsTouched());
                    }
                    else {
                        control.markAsTouched();
                    }
                });
            }
            this.isLoading = true;
            const values = this.userForm.getRawValue();
            if (values.photo) {
                yield this.uploadsService.updatePhoto(this.user.userId, values.photo);
            }
            yield this.usersService.updateUser(this.user.userId, values.name, values.username, null, this.user.role, null, null, null);
            //this.router.navigate([`/profile/${this.user.userId}/edit`]);
            window.location.reload();
            //this.isLoading = false;
        });
    }
}
ProfileEditComponent.ɵfac = function ProfileEditComponent_Factory(t) { return new (t || ProfileEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_8__["WorkspacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_uploads_service__WEBPACK_IMPORTED_MODULE_9__["UploadsService"])); };
ProfileEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProfileEditComponent, selectors: [["app-profile-edit"]], viewQuery: function ProfileEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "container mt-5", 4, "ngIf"], [1, "container", "mt-5"], [1, "row", "justify-content-center"], [1, "col-9", "col-auto"], [1, "row"], [1, "col-4"], [1, "row", "d-grid", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "active", 3, "routerLink"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "routerLink"], [1, "col-8", "ps-4"], [3, "formGroup", "ngSubmit"], [1, "mt-2", "mb-4"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [2, "color", "white"], [1, "fas", "fa-camera", "fa-lg", "ms-1"], ["type", "file", "visbility", "hidden", 3, "change"], ["filePicker", ""], [1, "mb-3"], ["for", "FormName", 1, "form-label"], ["type", "text", "id", "FormName", "formControlName", "name", "placeholder", "Name", 1, "form-control", 3, "value"], ["class", "text-danger", 4, "ngIf"], ["for", "FormUsername", 1, "form-label"], ["type", "text", "id", "FormUsername", "formControlName", "username", "placeholder", "Username", 1, "form-control", 3, "value"], ["type", "submit", 1, "btn", "btn-primary", "me-1", "mt-2"], [1, "btn", "btn-secondary", "mt-2", 3, "disabled", "click"], [1, "border", "rounded-circle", "me-2", 2, "width", "80px", 3, "src"], ["alt", "", 1, "border", "rounded-circle", "me-2", 2, "width", "80px", 3, "src"], [1, "text-danger"]], template: function ProfileEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ProfileEditComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileEditComponent_div_1_Template, 39, 14, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], styles: ["input[type=\"file\"][_ngcontent-%COMP%] { \r\n    visibility: hidden; \r\n} \r\n \r\n.photo-preview[_ngcontent-%COMP%] { \r\n    height: 5rem; \r\n    margin: 1rem 0; \r\n} \r\n \r\n.photo-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { \r\n    height: 100%; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InByb2ZpbGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0geyBcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgXHJcbn0gXHJcbiBcclxuLnBob3RvLXByZXZpZXcgeyBcclxuICAgIGhlaWdodDogNXJlbTsgXHJcbiAgICBtYXJnaW46IDFyZW0gMDsgXHJcbn0gXHJcbiBcclxuLnBob3RvLXByZXZpZXcgaW1nIHsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG59Il19 */"] });


/***/ }),

/***/ "tnf1":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/workspaces/workspace-details/workspace-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WorkspaceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceDetailsComponent", function() { return WorkspaceDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_workspaces_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/workspaces.service */ "952Z");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/roles.service */ "0ceX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/users.service */ "6Qg2");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/collections.service */ "k/Ee");
/* harmony import */ var _services_datafiles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/datafiles.service */ "g6qS");
/* harmony import */ var _components_collection_collection_list_collection_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/collection/collection-list/collection-list.component */ "/L8O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_datafile_datafile_create_datafile_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/datafile/datafile-create/datafile-create.component */ "zi/v");
/* harmony import */ var _components_invitation_invitation_create_invitation_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/invitation/invitation-create/invitation-create.component */ "OeXY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _components_workspace_workspace_edit_workspace_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/workspace/workspace-edit/workspace-edit.component */ "peb4");
/* harmony import */ var _components_activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/activity/activity-list/activity-list.component */ "dSgO");
















function WorkspaceDetailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceDetailsComponent_app_workspace_edit_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-workspace-edit", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("editChange", function WorkspaceDetailsComponent_app_workspace_edit_6_Template_app_workspace_edit_editChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.edit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("edit", ctx_r1.edit)("workspace", ctx_r1.workspace)("workspaceId", ctx_r1.workspaceId);
} }
function WorkspaceDetailsComponent_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceDetailsComponent_div_7_div_9_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.onLeave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Abandonar Espacio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceDetailsComponent_div_7_div_9_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Eliminar Espacio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceDetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceDetailsComponent_div_7_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WorkspaceDetailsComponent_div_7_div_9_Template, 10, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-activity-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.workspace.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.workspace.mandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.workspace.description);
} }
function WorkspaceDetailsComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Crear fichero de datos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceDetailsComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Crear fichero de datos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkspaceDetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", user_r14.photo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r14.username, " ");
} }
class WorkspaceDetailsComponent {
    constructor(workspacesService, rolesService, route, usersService, authService, collectionsService, datafilesService, router) {
        this.workspacesService = workspacesService;
        this.rolesService = rolesService;
        this.route = route;
        this.usersService = usersService;
        this.authService = authService;
        this.collectionsService = collectionsService;
        this.datafilesService = datafilesService;
        this.router = router;
        this.isLoading = false;
        this.userIsAuthenticated = false;
        this.edit = false;
        this.editMode = false;
        this.savefileChange = false;
        this.enteredDescription = '';
        this.enteredTitle = '';
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
        this.route.paramMap.subscribe((paramMap) => {
            const workId = paramMap.get('workspaceId');
            this.workspaceId = workId;
            this.isLoading = true;
            this.workspacesService.getWorkspace(workId).subscribe(workspaceData => {
                this.isLoading = false;
                this.workspace = {
                    id: workspaceData.workspace._id,
                    title: workspaceData.workspace.title,
                    description: workspaceData.workspace.description,
                    creationMoment: workspaceData.workspace.creationMoment,
                    mandatory: workspaceData.workspace.mandatory
                };
            });
        });
        // Users
        this.usersService.getUsersByWorkspace(this.workspaceId);
        this.usersSub = this.usersService.getUserUpdateListener().subscribe((userData) => {
            this.isLoading = false;
            this.users = userData.users;
            console.log(this.users);
        });
        // Collections
        this.collectionsService.getCollectionsByWorkspace(this.workspaceId);
        this.collectionsSub = this.collectionsService.getCollectionUpdateListener()
            .subscribe((collectionData) => {
            this.collections = collectionData.collections;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
        this.usersSub.unsubscribe();
        this.collectionsSub.unsubscribe();
    }
    onDelete() {
        this.isLoading = true;
        this.workspacesService.deleteWorkspace(this.workspaceId);
        this.router.navigate(['/workspaces']);
    }
    onLeave() {
        this.isLoading = true;
        this.rolesService.deleteRole(this.workspaceId).then(response => {
            this.router.navigate(['/workspaces']);
        }, error => {
            console.log("Error on onLeave method: " + error);
        });
    }
    onEdit() {
        this.edit = true;
    }
    onDeleteCollection(collectionId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            yield this.collectionsService.deleteCollection(collectionId);
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}`]);
            }).catch(err => {
                console.log("Error on onDeleteCollection method: " + err);
            });
            this.isLoading = false;
        });
    }
    setSaveMode(newvalue) {
        this.savefileChange = newvalue;
    }
}
WorkspaceDetailsComponent.ɵfac = function WorkspaceDetailsComponent_Factory(t) { return new (t || WorkspaceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_workspaces_service__WEBPACK_IMPORTED_MODULE_2__["WorkspacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_3__["RolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_7__["CollectionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_datafiles_service__WEBPACK_IMPORTED_MODULE_8__["DatafileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
WorkspaceDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkspaceDetailsComponent, selectors: [["app-workspace-details"]], decls: 24, vars: 9, consts: [[1, "row", "ps-2", "pe-2", "complete-height"], [1, "col-2", "collections", "p-0"], [1, "container", "p-0"], [3, "workspaceId"], [1, "col-7"], ["class", "mt-2", 4, "ngIf"], [3, "edit", "workspace", "workspaceId", "editChange", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "col-3", "members"], [1, "container"], [1, "row", "mt-4"], [1, "col"], ["type", "button", "class", "btn add-file btn-sm", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 4, "ngIf"], ["type", "button", "class", "btn add-file btn-sm", "disabled", "", 4, "ngIf"], [3, "workspaceId", "collections", "savefileChange"], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "mt-2"], [3, "edit", "workspace", "workspaceId", "editChange"], [1, "col-10"], [1, "col-2", "d-flex", "justify-content-end"], [1, "me-1"], ["type", "button", 1, "btn", "btn-outline-light", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["class", "dropdown", 4, "ngIf"], [1, "row", "mt-1"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "btn-sm"], [1, "fas", "fa-ellipsis-h"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "dropdown-item", "danger", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "add-file", "btn-sm"], ["type", "button", "disabled", "", 1, "btn", "add-file", "btn-sm"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "list-group-item", "pt-0", "pb-0", "d-flex", "justify-content-between", "align-items-center"], [1, "pt-1", "pb-1", "user-photo"], ["alt", "", 1, "border", "rounded-circle", "me-2", 3, "src"], [1, "btn-group"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-secondary", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-end"], ["type", "button", 1, "dropdown-item", "btn-sm"]], template: function WorkspaceDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-collection-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WorkspaceDetailsComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WorkspaceDetailsComponent_app_workspace_edit_6_Template, 1, 3, "app-workspace-edit", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, WorkspaceDetailsComponent_div_7_Template, 15, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Empieza!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WorkspaceDetailsComponent_button_14_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, WorkspaceDetailsComponent_button_15_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-datafile-create", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("savefileChange", function WorkspaceDetailsComponent_Template_app_datafile_create_savefileChange_16_listener($event) { return ctx.setSaveMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, WorkspaceDetailsComponent_div_22_Template, 17, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-invitation-create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("workspaceId", ctx.workspaceId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.savefileChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.savefileChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("workspaceId", ctx.workspaceId)("collections", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_components_collection_collection_list_collection_list_component__WEBPACK_IMPORTED_MODULE_9__["CollectionListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_datafile_datafile_create_datafile_create_component__WEBPACK_IMPORTED_MODULE_11__["DatafileCreateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_invitation_invitation_create_invitation_create_component__WEBPACK_IMPORTED_MODULE_12__["InvitationCreateComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _components_workspace_workspace_edit_workspace_edit_component__WEBPACK_IMPORTED_MODULE_14__["WorkspaceEditComponent"], _components_activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_15__["ActivityListComponent"]], styles: ["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 1rem;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n.add-file[_ngcontent-%COMP%] {\r\n    color: grey;\r\n}\r\n\r\n.my-custom-scrollbar[_ngcontent-%COMP%] {\r\n    height: 60%;\r\n    overflow: auto;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    \r\n    color: black;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    \r\n    color: black;\r\n}\r\n\r\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\r\n    color: black !important;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3 !important;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\r\n    background-color: #e7e7e7 !important;\r\n}\r\n\r\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed)::after {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n        padding-top: 15px;\r\n    }\r\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n.user-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.members[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3;\r\n}\r\n\r\n.collections[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3;\r\n}\r\n\r\n.btn-outline-light[_ngcontent-%COMP%] {\r\n    color: rgb(156, 156, 156) !important;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n    color: #dc3845;\r\n}\r\n\r\n.complete-height[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.accordion-header[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3;\r\n}\r\n\r\n.accordion-header[_ngcontent-%COMP%]:hover {\r\n    background-color: #dbdbdb;\r\n}\r\n\r\n.btn-outline-secondary[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\r\n    color: #6c757d;\r\n    background-color: #cccccc;\r\n}\r\n\r\n.add-file[_ngcontent-%COMP%] {\r\n    color: #6c757d;\r\n    border-color: #6c757d;\r\n}\r\n\r\n.add-file[_ngcontent-%COMP%]:hover {\r\n    color: #6c757d;\r\n    background-color: #cccccc;\r\n    border-color: #cccccc;\r\n}\r\n\r\n.linebreak[_ngcontent-%COMP%] {\r\n    border-width: 1px 0 0 0;\r\n    border-style: solid;\r\n    border-top-color: #6c757d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzcGFjZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO2tCQUNjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksOFJBQThSO0FBQ2xTOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCIiwiZmlsZSI6IndvcmtzcGFjZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hZGQtZmlsZSB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMztcclxufVxyXG5cclxuLnNpZGVuYXYgaDIge1xyXG4gICAgLyogcGFkZGluZzogMjBweCAwcHggNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNpZGVuYXYgaDQge1xyXG4gICAgLyogbWFyZ2luOiAwcHg7ICovXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKSB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVuYXYgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVuYXYgZGl2OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSclMjMwMDAnJTNlJTNjcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xLjY0NiA0LjY0NmEuNS41IDAgMCAxIC43MDggMEw4IDEwLjI5M2w1LjY0Ni01LjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4IDBsLTYtNmEuNS41IDAgMCAxIDAtLjcwOHonLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLnNpZGVuYXYge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGVuYXYgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udXNlci1waG90byBpbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5tZW1iZXJzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjM7XHJcbn1cclxuXHJcbi5jb2xsZWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYzO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1NiwgMTU2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZGMzODQ1O1xyXG59XHJcblxyXG4uY29tcGxldGUtaGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMztcclxufVxyXG5cclxuLmFjY29yZGlvbi1oZWFkZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG4uYWRkLWZpbGUge1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5hZGQtZmlsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbi5saW5lYnJlYWsge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzZjNzU3ZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_workspaces_workspace_list_workspace_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/workspaces/workspace-list/workspace-list.component */ "WgP+");
/* harmony import */ var _pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth/auth.guard */ "yFW5");
/* harmony import */ var _pages_invitations_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/invitations/invitation-list/invitation-list.component */ "krfx");
/* harmony import */ var _pages_workspaces_workspace_create_workspace_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/workspaces/workspace-create/workspace-create.component */ "CV7a");
/* harmony import */ var _pages_workspaces_workspace_details_workspace_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/workspaces/workspace-details/workspace-details.component */ "tnf1");
/* harmony import */ var _pages_datafiles_datafile_details_datafile_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/datafiles/datafile-details/datafile-details.component */ "zJ7J");
/* harmony import */ var _pages_tests_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/tests/test-details/test-details.component */ "V7ju");
/* harmony import */ var _pages_tests_test_execute_test_execute_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/tests/test-execute/test-execute.component */ "aGuG");
/* harmony import */ var _pages_profile_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/profile/profile-details/profile-details.component */ "QX/8");
/* harmony import */ var _pages_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/profile/profile-edit/profile-edit.component */ "s4SY");
/* harmony import */ var _pages_profile_profile_account_edit_profile_account_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/profile/profile-account-edit/profile-account-edit.component */ "anHD");
/* harmony import */ var _pages_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/configuration/configuration.component */ "Ig03");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const routes = [
    // Authentication (login, signup)
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-auth-module */ "pages-auth-auth-module").then(__webpack_require__.bind(null, /*! ./pages/auth/auth.module */ "lBUW")).then(m => m.AuthModule) },
    // Global Configuration
    { path: 'configuration', component: _pages_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_13__["ConfigurationComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    // Datafiles (details)
    { path: 'workspace/:workspaceId/datafile/:datafileId', component: _pages_datafiles_datafile_details_datafile_details_component__WEBPACK_IMPORTED_MODULE_7__["DatafileDetailsComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    // Home
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    // Invitations (list, create)
    //{ path: 'invite', component: InvitationCreateComponent, canActivate: [AuthGuard]},//
    { path: 'invitations', component: _pages_invitations_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_4__["InvitationListComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    // Profile (account edit, details, edit)
    { path: 'account/:userId/edit', component: _pages_profile_profile_account_edit_profile_account_edit_component__WEBPACK_IMPORTED_MODULE_12__["ProfileAccountEditComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'profile/:userId/edit', component: _pages_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_11__["ProfileEditComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'profile/:userId', component: _pages_profile_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_10__["ProfileDetailsComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    // Tests (details)
    { path: 'workspace/:workspaceId/datafile/:datafileId/test/:testId', component: _pages_tests_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_8__["TestDetailsComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'workspace/:workspaceId/runner', component: _pages_tests_test_execute_test_execute_component__WEBPACK_IMPORTED_MODULE_9__["TestExecuteComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'workspace/:workspaceId/runner/:testId', component: _pages_tests_test_execute_test_execute_component__WEBPACK_IMPORTED_MODULE_9__["TestExecuteComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    // Workspaces (create, details, list)
    { path: 'workspace/create', component: _pages_workspaces_workspace_create_workspace_create_component__WEBPACK_IMPORTED_MODULE_5__["WorkspaceCreateComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'workspace/:workspaceId', component: _pages_workspaces_workspace_details_workspace_details_component__WEBPACK_IMPORTED_MODULE_6__["WorkspaceDetailsComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'workspaces', component: _pages_workspaces_workspace_list_workspace_list_component__WEBPACK_IMPORTED_MODULE_2__["WorkspaceListComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yFW5":
/*!******************************************!*\
  !*** ./src/app/pages/auth/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/auth/login']);
        }
        return isAuth;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "zJ7J":
/*!********************************************************************************!*\
  !*** ./src/app/pages/datafiles/datafile-details/datafile-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: DatafileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatafileDetailsComponent", function() { return DatafileDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_datafiles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/datafiles.service */ "g6qS");
/* harmony import */ var src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/workspaces.service */ "952Z");
/* harmony import */ var src_app_services_uploads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/uploads.service */ "SyKm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _components_collection_collection_list_collection_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/collection/collection-list/collection-list.component */ "/L8O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_esquemas_esquema_list_esquema_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/esquemas/esquema-list/esquema-list.component */ "o0UC");
/* harmony import */ var _components_configuration_configuration_list_configuration_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/configuration/configuration-list/configuration-list.component */ "htME");
/* harmony import */ var _components_test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/test/test-list/test-list.component */ "WVMI");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _components_datafile_datafile_edit_datafile_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/datafile/datafile-edit/datafile-edit.component */ "roY1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");



















function DatafileDetailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatafileDetailsComponent_app_datafile_edit_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-datafile-edit", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("editChange", function DatafileDetailsComponent_app_datafile_edit_6_Template_app_datafile_edit_editChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.edit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("edit", ctx_r1.edit)("datafile", ctx_r1.datafile)("datafileId", ctx_r1.datafileId)("workspaceId", ctx_r1.workspaceId);
} }
function DatafileDetailsComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatafileDetailsComponent_div_7_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatafileDetailsComponent_div_7_div_1_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Eliminar Fichero");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r5.datafile.title, " (from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/workspace/", ctx_r5.workspaceId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.workspace.title, " ");
} }
function DatafileDetailsComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.datafile.description);
} }
function DatafileDetailsComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function DatafileDetailsComponent_div_7_div_7_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r15.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DatafileDetailsComponent_div_7_div_7_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.onFilePicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r7.fileForm);
} }
function DatafileDetailsComponent_div_7_div_8_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatafileDetailsComponent_div_7_div_8_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r21.onDownload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatafileDetailsComponent_div_7_div_8_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatafileDetailsComponent_div_7_div_8_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r23.onEditContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatafileDetailsComponent_div_7_div_8_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatafileDetailsComponent_div_7_div_8_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r25.onDeleteFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatafileDetailsComponent_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function DatafileDetailsComponent_div_7_div_8_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r27.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DatafileDetailsComponent_div_7_div_8_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r29.onFilePicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DatafileDetailsComponent_div_7_div_8_button_5_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DatafileDetailsComponent_div_7_div_8_button_7_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DatafileDetailsComponent_div_7_div_8_button_9_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r8.fileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.content);
} }
function DatafileDetailsComponent_div_7_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Nombre del archivo: ", ctx_r9.fileName, " ");
} }
function DatafileDetailsComponent_div_7_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatafileDetailsComponent_div_7_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r30.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Guardar cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r10.disabledContent);
} }
function DatafileDetailsComponent_div_7_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingrese un archivo con el formato adecuado (.json o .yaml). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatafileDetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DatafileDetailsComponent_div_7_div_1_Template, 18, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DatafileDetailsComponent_div_7_div_2_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Contenido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DatafileDetailsComponent_div_7_div_7_Template, 4, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DatafileDetailsComponent_div_7_div_8_Template, 10, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DatafileDetailsComponent_div_7_div_15_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DatafileDetailsComponent_div_7_button_18_Template, 2, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, DatafileDetailsComponent_div_7_small_21_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.fileContentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.invalidExtension);
} }
class DatafileDetailsComponent {
    constructor(datafilesService, workspacesService, uploadsService, route, usersService, router) {
        this.datafilesService = datafilesService;
        this.workspacesService = workspacesService;
        this.uploadsService = uploadsService;
        this.route = route;
        this.usersService = usersService;
        this.router = router;
        this.userIsAuthenticated = false;
        this.isLoading = false;
        this.isUploading = false;
        this.infer = false;
        this.edit = false;
        this.invalidExtension = false;
        this.formattedConfigs = [];
        this.content = null;
        this.file = null;
        this.fileName = '';
        this.fileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'contentPath': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
        });
        this.fileContentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'fileContent': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
        });
    }
    ngOnInit() {
        this.userIsAuthenticated = this.usersService.getIsAuth();
        this.authStatusSub = this.usersService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
        });
        this.userId = this.usersService.getUserId();
        this.isLoading = true;
        this.route.paramMap.subscribe((paramMap) => {
            this.datafileId = paramMap.get('datafileId');
            this.workspaceId = paramMap.get('workspaceId');
            this.workspacesService.getWorkspace(this.workspaceId).subscribe(workspaceData => {
                this.workspace = {
                    id: workspaceData.workspace.id,
                    title: workspaceData.workspace.title,
                    description: workspaceData.workspace.description,
                    creationMoment: workspaceData.workspace.creationMoment,
                    mandatory: workspaceData.workspace.mandatory
                };
                this.isLoading = false;
            });
        });
        this.datafilesService.getDatafile(this.datafileId).subscribe(datafileData => {
            this.datafile = {
                id: datafileData.datafile.id,
                title: datafileData.datafile.title,
                description: datafileData.datafile.description,
                contentPath: datafileData.datafile.contentPath,
                errLimit: datafileData.datafile.errLimit,
                delimiter: datafileData.datafile.delimiter,
                coleccion: datafileData.datafile.coleccion,
                workspace: datafileData.datafile.workspace,
            };
            this.content = datafileData.content;
            this.esquemas = datafileData.esquemas;
            this.configurations = datafileData.configurations;
            this.tests = datafileData.tests;
            this.configurations.forEach(config => {
                const extraParamsJSON = JSON.stringify(config.extraParams).toString();
                const extraParamsStr1 = extraParamsJSON.replace(/{/g, '');
                const extraParamsStr2 = extraParamsStr1.replace(/}/g, '');
                const extraParamsStr = extraParamsStr2.replace(/,/g, ',\n');
                this.formattedConfigs.push(Object.assign(Object.assign({}, config), { extraParamsStr }));
            });
            if (this.content !== null) {
                this.infer = true;
            }
            this.fileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'contentPath': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] })
            });
            if (this.datafile.contentPath) {
                // contentPath: {backend/files/capital-1234.csv",
                // contentPath: {backend/uploads/datafiles/capital-1234.csv",
                const nameWExtension = this.datafile.contentPath.split('/');
                const splitNameWExtension = nameWExtension[3].split('.');
                this.extension = splitNameWExtension[1]; // setted in order to use it on onDownload() method
                const nameWDate = nameWExtension[3].split('-');
                const name = nameWDate[0];
                this.fileName = name + '.' + this.extension;
            }
            if (this.extension === 'xlsx') {
                let res = this.content[0].join(',') + '\n';
                for (let arr of this.content) {
                    res = res + arr.join(',') + '\n';
                }
                this.fileContentForm.patchValue({ fileContent: res });
            }
            else if (this.extension === 'csv') {
                this.fileContentForm.patchValue({ fileContent: datafileData.content });
            }
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    onDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            yield this.datafilesService.deleteDatafile(this.datafileId);
            this.router.navigate([`/workspace/${this.datafile.workspace}`]);
        });
    }
    onEdit() {
        this.edit = true;
    }
    // File upload function
    onFilePicked(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const files = event.target.files;
            if (files && files.length > 0) {
                const uploadedFile = event.target.files[0];
                const split = uploadedFile.name.split('.');
                const extension = split[1].toLowerCase();
                if (extension !== 'xlsx' && extension !== 'csv') {
                    this.invalidExtension = true;
                    return;
                }
                else {
                    this.invalidExtension = false;
                }
                this.file = uploadedFile;
                this.isUploading = true;
                yield this.uploadsService.updateFile(this.userId, this.datafileId, 'updateFile', this.file);
                yield this.datafilesService.updateDatafile(this.datafileId, this.datafile.title, this.datafile.description);
                this.router.navigateByUrl('/', { skipLocationChange: true })
                    .then(() => {
                    this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
                }).catch(err => {
                    console.log("Error on onFilePicked method: " + err);
                });
                this.isUploading = false;
            }
        });
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let file;
            let content = this.fileContentForm.value.fileContent;
            if (this.extension === 'csv') {
                const blob = new Blob([content], { type: 'text/csv' });
                file = new File([blob], this.fileName, { type: 'text/csv' });
            }
            else if (this.extension === 'xlsx') {
                let rows = content.split('\n').map(row => {
                    return row.split(',');
                });
                const worksheetName = this.fileName;
                const wsorksheetContent = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(rows);
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
                xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(workbook, wsorksheetContent, worksheetName);
                const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
                const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
                file = new File([data], this.fileName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
            }
            else {
                return;
            }
            this.isLoading = true;
            yield this.uploadsService.updateFile(this.userId, this.datafileId, 'updateContent', file);
            yield this.datafilesService.updateDatafile(this.datafileId, this.datafile.title, this.datafile.description);
            this.fileContentForm.get('fileContent').disable();
            this.isLoading = false;
        });
    }
    onDeleteFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isUploading = true;
            yield this.uploadsService.updateFile(this.userId, this.datafileId, 'deleteFile', null);
            this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                this.router.navigate([`/workspace/${this.workspaceId}/datafile/${this.datafileId}`]);
            }).catch(err => {
                console.log("Error on onDeleteFile method: " + err);
            });
            this.isUploading = false;
        });
    }
    onDownload() {
        if (this.extension === 'xlsx') {
            const worksheetName = this.fileName;
            const wsorksheetContent = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(this.content);
            const workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(workbook, wsorksheetContent, worksheetName);
            xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](workbook, this.fileName); // downloads it
            const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
            const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
            const file = new File([data], 'out.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        }
        else if (this.extension === 'csv') {
            const blob = new Blob([this.content], { type: 'text/csv' });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, this.fileName);
        }
        else {
            return;
        }
    }
    onEditContent() {
        if (this.fileContentForm.get('fileContent').disabled) {
            this.fileContentForm.get('fileContent').enable();
        }
        else {
            this.fileContentForm.get('fileContent').disable();
        }
    }
}
DatafileDetailsComponent.ɵfac = function DatafileDetailsComponent_Factory(t) { return new (t || DatafileDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_datafiles_service__WEBPACK_IMPORTED_MODULE_5__["DatafileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_workspaces_service__WEBPACK_IMPORTED_MODULE_6__["WorkspacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_uploads_service__WEBPACK_IMPORTED_MODULE_7__["UploadsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
DatafileDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DatafileDetailsComponent, selectors: [["app-datafile-details"]], decls: 15, vars: 16, consts: [[1, "row", "ps-2", "pe-2", "complete-height"], [1, "col-2", "collections", "p-0"], [1, "container", "p-0"], [3, "workspaceId"], [1, "col-7"], ["class", "mt-2", 4, "ngIf"], [3, "edit", "datafile", "datafileId", "workspaceId", "editChange", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "col-3"], [1, "container", "ps-0"], [3, "datafileId", "workspaceId", "esquemas", "infer"], [3, "datafileId", "workspaceId", "configurations"], [3, "datafileId", "workspaceId", "tests", "esquemas", "configurations"], [1, "mt-2"], [3, "edit", "datafile", "datafileId", "workspaceId", "editChange"], [1, "container"], ["class", "row mt-4", 4, "ngIf"], ["class", "row mt-1", 4, "ngIf"], [1, "row", "mt-1"], [1, "col-2", "pe-0"], [1, "mb-0"], ["class", "col-10 ps-0", 4, "ngIf"], ["class", "col-10 d-flex justify-content-end ps-0", 4, "ngIf"], [1, "row"], [1, "form-floating"], [3, "formGroup"], ["formControlName", "fileContent", "id", "floatingTextarea2", 1, "form-control", "mt-2", "pt-1", 2, "height", "400px"], [1, "col-6"], [4, "ngIf"], [1, "col-6", "mt-2", "d-flex", "justify-content-end"], ["class", "btn btn-outline-primary btn-sm", "type", "submit", 3, "disabled", "click", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "row", "mt-4"], [1, "col-10"], [3, "routerLink"], [1, "col-2", "d-flex", "justify-content-end"], [1, "me-1"], ["type", "button", 1, "btn", "btn-outline-light", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "btn-sm"], [1, "fas", "fa-ellipsis-h"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [1, "dropdown-item", "danger", 3, "click"], [1, "col"], [1, "col-10", "ps-0"], [3, "formGroup", "ngSubmit"], ["type", "file", "formControlName", "contentPath", "name", "uploaded_file", 1, "form-control", "form-control-sm", 3, "change"], [1, "col-10", "d-flex", "justify-content-end", "ps-0"], ["class", "btn btn-outline-light btn-sm", "type", "button", 3, "click", 4, "ngIf"], [1, "fas", "fa-download"], [1, "fas", "fa-trash-alt", "danger"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [1, "text-danger"]], template: function DatafileDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-collection-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DatafileDetailsComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DatafileDetailsComponent_app_datafile_edit_6_Template, 1, 4, "app-datafile-edit", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DatafileDetailsComponent_div_7_Template, 22, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-esquema-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-configuration-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-test-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("workspaceId", ctx.workspaceId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datafileId", ctx.datafileId)("workspaceId", ctx.workspaceId)("esquemas", ctx.esquemas)("infer", ctx.infer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datafileId", ctx.datafileId)("workspaceId", ctx.workspaceId)("configurations", ctx.configurations);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datafileId", ctx.datafileId)("workspaceId", ctx.workspaceId)("tests", ctx.tests)("esquemas", ctx.esquemas)("configurations", ctx.formattedConfigs);
    } }, directives: [_components_collection_collection_list_collection_list_component__WEBPACK_IMPORTED_MODULE_10__["CollectionListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_esquemas_esquema_list_esquema_list_component__WEBPACK_IMPORTED_MODULE_12__["EsquemaListComponent"], _components_configuration_configuration_list_configuration_list_component__WEBPACK_IMPORTED_MODULE_13__["ConfigurationListComponent"], _components_test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_14__["TestListComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _components_datafile_datafile_edit_datafile_edit_component__WEBPACK_IMPORTED_MODULE_16__["DatafileEditComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatError"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], styles: [".btn-outline-light[_ngcontent-%COMP%] {\r\n    color: rgb(156, 156, 156) !important;\r\n    border-color: #ced4da;\r\n}\r\n\r\n.btn-outline-light[_ngcontent-%COMP%]:hover {\r\n    color: white !important;\r\n    background-color: #ced4da !important;\r\n    border-color: #ced4da;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n    color: #dc3845;\r\n}\r\n\r\n.my-custom-scrollbar[_ngcontent-%COMP%] {\r\n    height: 60%;\r\n    overflow: auto;\r\n}\r\n\r\n.border-header[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #ced4da;\r\n    border-right: 1px solid #ced4da;\r\n    border-left: 1px solid #ced4da;\r\n    border-radius: 4px 4px 0 0;\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.border-content[_ngcontent-%COMP%] {\r\n    border-radius: 0 0 4px 4px;\r\n    border: 1px solid #ced4da;\r\n}\r\n\r\n.collections[_ngcontent-%COMP%] {\r\n    background-color: #f2f2f3;\r\n}\r\n\r\n.complete-height[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFmaWxlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJkYXRhZmlsZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1NiwgMTU2KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2VkNGRhO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VkNGRhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNjZWQ0ZGE7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gICAgY29sb3I6ICNkYzM4NDU7XHJcbn1cclxuXHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5ib3JkZXItaGVhZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxufVxyXG5cclxuLmJvcmRlci1jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxufVxyXG5cclxuLmNvbGxlY3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjM7XHJcbn1cclxuXHJcbi5jb21wbGV0ZS1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zi/v":
/*!**********************************************************************************!*\
  !*** ./src/app/components/datafile/datafile-create/datafile-create.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DatafileCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatafileCreateComponent", function() { return DatafileCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_datafiles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/datafiles.service */ "g6qS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function DatafileCreateComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un t\u00EDtulo adecuado (entre 1 y 100 caracteres). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DatafileCreateComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese una descripci\u00F3n adecuada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DatafileCreateComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", collection_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](collection_r5.title);
} }
function DatafileCreateComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatafileCreateComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear fichero de datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DatafileCreateComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatafileCreateComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear fichero de datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class DatafileCreateComponent {
    constructor(datafileService, route, formBuilder, authService) {
        this.datafileService = datafileService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userIsAuthenticated = false;
        this.savefileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createForm();
        this.datafileForm.reset({
            title: '',
            description: '',
            collection: 'Ninguna'
        });
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    createForm() {
        this.datafileForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]],
            collection: ['',],
        });
    }
    get invalidTitle() {
        return this.datafileForm.get('title').invalid && this.datafileForm.get('title').touched;
    }
    get invalidDescription() {
        return this.datafileForm.get('description').invalid && this.datafileForm.get('description').touched;
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.datafileForm.invalid) {
                return Object.values(this.datafileForm.controls).forEach(control => {
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                        Object.values(control.controls).forEach(control => control.markAsTouched());
                    }
                    else {
                        control.markAsTouched();
                    }
                });
            }
            this.savefileChange.emit(true);
            const values = this.datafileForm.getRawValue();
            if (values.collection === 'Ninguna') {
                values.collection = null;
            }
            yield this.datafileService.addDatafile(values.title, values.description, values.collection, this.workspaceId);
            this.datafileForm.reset({
                title: '',
                description: '',
                collection: 'Ninguna'
            });
            this.savefileChange.emit(false);
        });
    }
}
DatafileCreateComponent.ɵfac = function DatafileCreateComponent_Factory(t) { return new (t || DatafileCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_datafiles_service__WEBPACK_IMPORTED_MODULE_3__["DatafileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
DatafileCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatafileCreateComponent, selectors: [["app-datafile-create"]], inputs: { savefile: "savefile", workspaceId: "workspaceId", collections: "collections" }, outputs: { savefileChange: "savefileChange" }, decls: 30, vars: 10, consts: [["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "placeholder", "T\u00EDtulo", "formControlName", "title", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["placeholder", "Descripci\u00F3n", "formControlName", "description", 1, "form-control"], [1, "col-form-label"], [1, "btn-group", "ms-2"], ["aria-label", ".form-select-sm example", "formControlName", "collection", 1, "form-select", "form-select-sm"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "text-danger"], [3, "value"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]], template: function DatafileCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Crear fichero de datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DatafileCreateComponent_Template_form_ngSubmit_8_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DatafileCreateComponent_small_12_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DatafileCreateComponent_small_16_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Colecci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Ninguna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DatafileCreateComponent_option_24_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DatafileCreateComponent_button_28_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DatafileCreateComponent_button_29_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.datafileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.datafileForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datafileForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhZmlsZS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map