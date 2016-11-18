"use strict";
var config_1 = require('src/data/config');
var WIDTH = 15;
var HEIGHT = 15;
var RectLabyrinth = (function () {
    function RectLabyrinth(row, col) {
        this.col = col;
        this.row = row;
        this.labyArr = this.createLabyrinthArr();
        this.createLabyrinth();
    }
    RectLabyrinth.prototype.getEntrance = function () {
    };
    ;
    RectLabyrinth.prototype.getExit = function () {
    };
    ;
    RectLabyrinth.prototype.createLabyrinth = function () {
        var game = config_1.default.GAME;
        var graphics = game.add.graphics(0, 0);
        graphics.beginFill(0xffff00);
        for (var i = 0; i < this.labyArr.length; i++) {
            for (var j = 0; j < this.labyArr[i].length; j++) {
                if (this.labyArr[i][j] === 1) {
                    graphics.drawRect(i * WIDTH, j * HEIGHT, WIDTH, HEIGHT);
                }
            }
        }
    };
    ;
    RectLabyrinth.prototype.clearLabyrinth = function () {
    };
    RectLabyrinth.prototype.getLabyrinthLine = function () {
    };
    RectLabyrinth.prototype.initLabyrinthArr = function () {
        var row = this.row;
        var col = this.col;
        var a = new Array(2 * row + 1);
        for (var i = 0; i < a.length; i++) {
            var cols = 2 * col + 1;
            a[i] = new Array(cols);
            for (var j = 0; j < a[i].length; j++) {
                a[i][j] = 1;
            }
        }
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++) {
                a[2 * i + 1][2 * j + 1] = 0;
            }
        }
        return a;
    };
    RectLabyrinth.prototype.createLabyrinthArr = function () {
        var arr = this.initLabyrinthArr();
        var acc = [];
        var noacc = [];
        var r = arr.length >> 1;
        var c = arr[0].length >> 1;
        var count = r * c;
        for (var i = 0; i < count; i++) {
            noacc[i] = 0;
        }
        var offs = [-c, c, -1, 1];
        var offR = [-1, 1, 0, 0];
        var offC = [0, 0, -1, 1];
        var pos = Math.floor(Math.random() * count);
        noacc[pos] = 1;
        acc.push(pos);
        console.log('===== pos =====', pos);
        while (acc.length < count) {
            var ls = -1;
            var offPos = -1;
            var pr = pos / c | 0;
            var pc = pos % c;
            var co = 0;
            var o = 0;
            while (++co < 5) {
                o = Math.floor(Math.random() * 5);
                ls = offs[o] + pos;
                var tpr = pr + offR[o];
                var tpc = pc + offC[o];
                if (tpr >= 0 && tpc >= 0 && tpr <= r - 1 && tpc <= c - 1 && noacc[ls] === 0) {
                    offPos = o;
                    break;
                }
            }
            if (offPos < 0) {
                pos = acc[Math.floor(Math.random() * acc.length)];
            }
            else {
                pr = 2 * pr + 1;
                pc = 2 * pc + 1;
                arr[pr + offR[offPos]][pc + offC[offPos]] = 0;
                pos = ls;
                noacc[pos] = 1;
                acc.push(pos);
            }
        }
        console.log('===== acc =====', acc);
        console.log('===== arr =====', arr);
        return arr;
    };
    return RectLabyrinth;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RectLabyrinth;
//# sourceMappingURL=rectLabyrinth.js.map