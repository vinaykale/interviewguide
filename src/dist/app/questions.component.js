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
var questions_service_1 = require("./questions.service");
var capabilities_service_1 = require("./capabilities.service");
var QuestionsComponent = (function () {
    function QuestionsComponent(questionservice, capabilityservice) {
        this.questionservice = questionservice;
        this.capabilityservice = capabilityservice;
        this.settings = {
            columns: {
                /*id: {
                    title: 'ID',
                    editable: false,
                    width:'5%',
                    filter:false,
                    show:false
                },*/
                question: {
                    title: 'Question',
                    width: '90%'
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
            },
            noDataMessage: 'No questions found'
        };
    }
    QuestionsComponent.prototype.onSaveConfirm = function (event) {
        this.questionservice.update(event.newData)
            .then(function () { return event.confirm.resolve(event.newData); })
            .catch(function () { return event.confirm.reject(); });
    };
    QuestionsComponent.prototype.ngOnInit = function () {
        this.getCapabilities();
    };
    QuestionsComponent.prototype.getCapabilities = function () {
        var _this = this;
        this.capabilityservice
            .getCapabilities()
            .then(function (capabilities) { return _this.capabilities = capabilities; });
    };
    QuestionsComponent.prototype.getQuestions = function (capability_id) {
        var _this = this;
        this.questionservice
            .getQuestions()
            .then(function (questions) {
            _this.questions = questions.filter(function (q) { return q.capability_id == capability_id; });
        })
            .catch(function (error) { return console.log(error); });
    };
    QuestionsComponent.prototype.OnCapbilitySelected = function (event) {
        this.getQuestions(event.value);
        this.title = event.title;
    };
    return QuestionsComponent;
}());
QuestionsComponent = __decorate([
    core_1.Component({
        selector: 'questions',
        templateUrl: './html/questions.html',
        styles: ['*{ font-size: 1.4rem;}'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [questions_service_1.QuestionsService,
        capabilities_service_1.CapabilityService])
], QuestionsComponent);
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=questions.component.js.map