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
var capabilities_service_1 = require("./capabilities.service");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var CapabilityComponent = (function () {
    function CapabilityComponent(capabilityservice) {
        this.capabilityservice = capabilityservice;
        this.settings = {
            columns: {
                /* id: {
                     title: 'ID',
                     editable: false,
                     width: '30%'
                 },*/
                title: {
                    title: 'Title',
                    editable: false,
                    width: '80%'
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
    CapabilityComponent.prototype.open = function () {
        this.modal.open();
    };
    CapabilityComponent.prototype.close = function () {
        this.modal.close();
    };
    CapabilityComponent.prototype.onSaveConfirm = function (event) {
        this.capabilityservice.update(event.newData)
            .then(function () { return event.confirm.resolve(event.newData); })
            .catch(function () { return event.confirm.reject(); });
    };
    CapabilityComponent.prototype.ngOnInit = function () {
        this.getCapabilities();
    };
    CapabilityComponent.prototype.getCapabilities = function () {
        var _this = this;
        this.capabilityservice
            .getCapabilities()
            .then(function (capabilities) {
            _this.capabilities = capabilities.filter(function (c) { return c.corecapability_id == _this.corecapablityid; });
        });
    };
    return CapabilityComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], CapabilityComponent.prototype, "modal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CapabilityComponent.prototype, "corecapablityid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CapabilityComponent.prototype, "corecapablityname", void 0);
CapabilityComponent = __decorate([
    core_1.Component({
        selector: 'capabilities',
        templateUrl: './html/capabilities.html'
    }),
    __metadata("design:paramtypes", [capabilities_service_1.CapabilityService])
], CapabilityComponent);
exports.CapabilityComponent = CapabilityComponent;
//# sourceMappingURL=capabilities.component.js.map