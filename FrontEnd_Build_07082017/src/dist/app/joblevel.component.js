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
    }
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
        selector: 'joblevel',
        templateUrl: './html/joblevel.html',
        styles: [".btn-default { border-color: #e09823;}\n          .col-sm-4.text-center.well { background-color: #ffffff; border: 1px solid #e09823; border-radius:45px;}\n          #body { margin-left:20px;}\n          .h4 {font: arial, sans-serif;}"],
        encapsulation: core_2.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [joblevel_service_1.JobLevelService])
], JobLevelComponent);
exports.JobLevelComponent = JobLevelComponent;
//# sourceMappingURL=joblevel.component.js.map