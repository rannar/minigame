"use strict";
var rectLabyrinth_1 = require('./rectLabyrinth');
var heartShapedLabyrinth_1 = require('./heartShapedLabyrinth');
var LabyrinthFactory = (function () {
    function LabyrinthFactory() {
    }
    LabyrinthFactory.createLabyrinth = function (type) {
        var labyrinth = null;
        if (type === 'rect') {
            labyrinth = new rectLabyrinth_1.default(15, 10);
        }
        else if (type === 'heartShaped') {
            labyrinth = new heartShapedLabyrinth_1.default(10, 10);
        }
        return labyrinth;
    };
    return LabyrinthFactory;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LabyrinthFactory;
//# sourceMappingURL=labyrinthFactory.js.map