"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var joblevels = [
            {
                "id": 1,
                "title": "Lead Self",
                "description": "hi this is Team Leader",
                "helptext": "Team Leader"
            },
            {
                "id": 2,
                "title": "Lead Team",
                "description": "hi this is Self Leader",
                "helptext": "Team Leader"
            },
            {
                "id": 3,
                "title": "Manager",
                "description": "hi this is Manager",
                "helptext": "Team Leader"
            },
            {
                "id": 4,
                "title": "Technical Architect",
                "description": "hi this is Technical Architect",
                "helptext": "Team Leader"
            }
        ];
        var corecapabilities = [
            {
                "id": 1,
                "title": "Act commercially",
                "defination": "The extent to which activities and responsibilitiesavailable in the job requires commercial decision to be made"
            },
            {
                "id": 2,
                "title": "Think strategically",
                "defination": "The extent to which activities and responsibilitiesavailable in the job requires commercial decision to be made"
            }
        ];
        var capabilities = [
            {
                "id": 1,
                "title": "Act commercially",
                "corecapability_id": 1
            },
            {
                "id": 2,
                "title": "Think strategically",
                "corecapability_id": 1
            },
            {
                "id": 3,
                "title": "Act commercially",
                "corecapability_id": 1
            },
            {
                "id": 4,
                "title": "Think strategically",
                "corecapability_id": 2
            },
            {
                "id": 5,
                "title": "Act commercially",
                "corecapability_id": 1
            },
            {
                "id": 6,
                "title": "Think strategically",
                "corecapability_id": 2
            }
        ];
        var questions = [
            {
                "id": 1,
                "capability_id": "1",
                "question": "Explain the instance where you had decide about which iteam to purchase from a range of options ?"
            },
            {
                "id": 2,
                "capability_id": "1",
                "question": "Explain the instance where you had decide about which iteam to purchase from a range of options ?"
            },
            {
                "id": 3,
                "capability_id": "2",
                "question": "Explain the instance where you had decide about which iteam to purchase from a range of options ?"
            },
            {
                "id": 4,
                "capability_id": "4",
                "question": "Explain the instance where you had decide about which iteam to purchase from a range of options ?"
            }
        ];
        return { joblevels: joblevels, corecapabilities: corecapabilities, capabilities: capabilities, questions: questions };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map