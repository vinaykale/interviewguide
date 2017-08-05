"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var capabilities_component_1 = require("./capabilities.component");
var corecapabilities_service_1 = require("./corecapabilities.service");
var CoreCapabilityComponent = (function () {
    function CoreCapabilityComponent(corecapabilityservice) {
        this.corecapabilityservice = corecapabilityservice;
        this.settings = {
            columns: {
                /*id: {
                    title: 'ID',
                    editable: false,
                    width:'5%',
                    filter:false,
                    show:false
                },*/
                title: {
                    title: 'Title',
                    editable: false,
                    width: '40%'
                },
                defination: {
                    title: 'Defination',
                    width: '50%'
                }
            },
            mode: 'inline',
            actions: {
                add: false,
                edit: true,
                delete: false
            },
            edit: {
                confirmSave: true
            }
        };
    }
    CoreCapabilityComponent.prototype.onSaveConfirm = function (event) {
        this.corecapabilityservice.update(event.newData)
            .then(function () { return event.confirm.resolve(event.newData); })
            .catch(function () { return event.confirm.reject(); });
    };
    CoreCapabilityComponent.prototype.onRowSelect = function (event) {
        this.id = event.data.id;
        this.corecapability_name = event.data.title;
        this.modal.ngOnInit();
        this.modal.open();
    };
    CoreCapabilityComponent.prototype.ngOnInit = function () {
        this.getCoreCapabilities();
    };
    CoreCapabilityComponent.prototype.getCoreCapabilities = function () {
        var _this = this;
        this.corecapabilityservice
            .getCoreCapabilities()
            .then(function (corecapabilities) { return _this.corecapabilities = corecapabilities; });
    };
    return CoreCapabilityComponent;
}());
__decorate([
    core_1.ViewChild(capabilities_component_1.CapabilityComponent),
    __metadata("design:type", capabilities_component_1.CapabilityComponent)
], CoreCapabilityComponent.prototype, "modal", void 0);
CoreCapabilityComponent = __decorate([
    core_1.Component({
        selector: 'core-capabilities',
        templateUrl: './html/corecapabilities.html',
        styles: ['*{ font-size: 1.4rem;}'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [corecapabilities_service_1.CoreCapabilityService])
], CoreCapabilityComponent);
exports.CoreCapabilityComponent = CoreCapabilityComponent;
//# sourceMappingURL=corecapabilities.component.js.map