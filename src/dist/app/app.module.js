"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_smart_table_1 = require("ng2-smart-table");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var ng2_material_dropdown_1 = require("ng2-material-dropdown");
var animations_1 = require("@angular/platform-browser/animations");
//import { AppRoutingModule } from './app-routing.module';
var router_1 = require("@angular/router");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var joblevel_service_1 = require("./joblevel.service");
var corecapabilities_service_1 = require("./corecapabilities.service");
var capabilities_service_1 = require("./capabilities.service");
var questions_service_1 = require("./questions.service");
var configuration_service_1 = require("./configuration.service");
var app_component_1 = require("./app.component");
var joblevel_component_1 = require("./joblevel.component");
var corecapabilities_component_1 = require("./corecapabilities.component");
var capabilities_component_1 = require("./capabilities.component");
var questions_component_1 = require("./questions.component");
var appRoutes = [
    { path: '', redirectTo: '/joblevel', pathMatch: 'full' },
    { path: 'joblevel', component: joblevel_component_1.JobLevelComponent },
    { path: 'corecapabilities', component: corecapabilities_component_1.CoreCapabilityComponent },
    { path: 'capabilities', component: capabilities_component_1.CapabilityComponent },
    { path: 'questions', component: questions_component_1.QuestionsComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { passThruUnknownUrl: true }),
            router_1.RouterModule.forRoot(appRoutes),
            ng2_smart_table_1.Ng2SmartTableModule,
            ng2_bs3_modal_1.Ng2Bs3ModalModule,
            animations_1.BrowserAnimationsModule,
            ng2_material_dropdown_1.Ng2DropdownModule
        ],
        declarations: [
            app_component_1.AppComponent,
            joblevel_component_1.JobLevelComponent,
            corecapabilities_component_1.CoreCapabilityComponent,
            capabilities_component_1.CapabilityComponent,
            questions_component_1.QuestionsComponent
        ],
        providers: [joblevel_service_1.JobLevelService, corecapabilities_service_1.CoreCapabilityService, capabilities_service_1.CapabilityService, questions_service_1.QuestionsService, configuration_service_1.ConfigurationService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map