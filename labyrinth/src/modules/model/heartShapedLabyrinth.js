"use strict";
var HeartShapedLabyrinth = (function () {
    function HeartShapedLabyrinth(row, col) {
        this.col = col;
        this.row = row;
        this.labyArr = this.createLabyrinthArr();
    }
    HeartShapedLabyrinth.prototype.getEntrance = function () {
    };
    HeartShapedLabyrinth.prototype.getExit = function () {
    };
    HeartShapedLabyrinth.prototype.createLabyrinth = function () {
    };
    HeartShapedLabyrinth.prototype.clearLabyrinth = function () {
    };
    HeartShapedLabyrinth.prototype.getLabyrinthLine = function () {
    };
    HeartShapedLabyrinth.prototype.createLabyrinthArr = function () {
        var arr = this.initLabyrinthArr();
        return arr;
    };
    HeartShapedLabyrinth.prototype.initLabyrinthArr = function () {
        var row = this.row;
        var col = this.col;
        var a = new Array(row);
        for (var i = 0; i < a.length; i++) {
            a[i] = new Array(col);
            for (var j = 0; j < a[i].length; j++) {
                a[i][j] = 0;
            }
        }
        console.log('===== aaa =====', a);
        return a;
    };
    return HeartShapedLabyrinth;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeartShapedLabyrinth;
//# sourceMappingURL=heartShapedLabyrinth.js.map