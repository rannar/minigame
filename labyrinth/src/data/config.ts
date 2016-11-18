// 静态类
class Config {
    public static GAME_WIDTH: number = 800;
    public static GAME_HEIGHT: number = 600;
    public static GAME = new Phaser.Game(Config.GAME_WIDTH, Config.GAME_HEIGHT, Phaser.AUTO);
};

// 只能读取不能修改
Object.freeze(Config);
export default Config;
