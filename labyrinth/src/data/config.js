"use strict";
var Config = (function () {
    function Config() {
    }
    Config.GAME_WIDTH = 800;
    Config.GAME_HEIGHT = 600;
    Config.GAME = new Phaser.Game(Config.GAME_WIDTH, Config.GAME_HEIGHT, Phaser.AUTO);
    return Config;
}());
;
Object.freeze(Config);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Config;
//# sourceMappingURL=config.js.map