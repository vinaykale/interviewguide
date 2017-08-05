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
var joblevel_service_1 = require("./joblevel.service");
var core_2 = require("@angular/core");
var JobLevelComponent = (function () {
    function JobLevelComponent(joblevelService) {
        this.joblevelService = joblevelService;
        this.settings = {
            columns: {
                /* id: {
                     title: 'ID',
                     editable: false,
                     width: '10%'
                 },*/
                title: {
                    title: 'Title',
                    editable: false,
                    width: '20%'
                },
                description: {
                    title: 'Description',
                    width: '40%'
                },
                helptext: {
                    title: 'HelpText',
                    width: '30%'
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
    JobLevelComponent.prototype.onSaveConfirm = function (event) {
        this.joblevelService.update(event.newData)
            .then(function () { return event.confirm.resolve(event.newData); })
            .catch(function () { return event.confirm.reject(); });
    };
    JobLevelComponent.prototype.ngOnInit = function () {
        this.getJobLevels();
    };
    JobLevelComponent.prototype.getJobLevels = function () {
        var _this = this;
        this.joblevelService
            .getJobLevels()
            .then(function (joblevels) { return _this.joblevels = joblevels; });
    };
    return JobLevelComponent;
}());
JobLevelComponent = __decorate([
    core_1.Component({
        selector: 'job-level',
        templateUrl: './html/joblevel.html',
        styles: ['*{ font-size: 1.4rem;}'],
        encapsulation: core_2.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [joblevel_service_1.JobLevelService])
], JobLevelComponent);
exports.JobLevelComponent = JobLevelComponent;
//# sourceMappingURL=joblevel.component.js.map