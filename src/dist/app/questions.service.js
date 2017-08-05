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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var configuration_service_1 = require("./configuration.service");
var QuestionsService = (function () {
    function QuestionsService(http, configurationservice) {
        this.http = http;
        this.configurationservice = configurationservice;
        this.url = configurationservice.baseUrl + "/Questions";
    }
    QuestionsService.prototype.getQuestions = function () {
        var url = this.url + "/get";
        return this.http.get(url, { headers: this.configurationservice.header })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    QuestionsService.prototype.add = function (question) {
        var url = "" + this.url;
        return this.http
            .post(url, JSON.stringify(question), { headers: this.configurationservice.header })
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    /*update(question: Question): Promise<Question> {
      const url = `${this.url}/${question.id}`;
      return this.http
        .put(url, JSON.stringify(question),{headers:this.configurationservice.header})
        .toPromise()
        .then((response) => response)
        .catch(this.handleError);
    }*/
    QuestionsService.prototype.update = function (question) {
        var url = this.url + "/update";
        return this.http
            .post(url, JSON.stringify(question), { headers: this.configurationservice.header })
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    QuestionsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return QuestionsService;
}());
QuestionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, configuration_service_1.ConfigurationService])
], QuestionsService);
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=questions.service.js.map