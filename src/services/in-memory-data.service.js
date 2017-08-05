"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var joblevels = [
            {
                "id": 1,
                "title": "Lead Team",
                "description": "hi this is Team Leader",
                "helptext": "Team Leader"
            },
            {
                "id": 2,
                "title": "Lead Self",
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
        return { joblevels: joblevels };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map