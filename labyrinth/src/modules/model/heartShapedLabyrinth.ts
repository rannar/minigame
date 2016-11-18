import { LabyrinthImp } from './labyrinthImp';
/**
 * 
    上：1 下：2 左：4 右：8 
    上下左右都木有：0
    上：1            ＝> 下左右要画线
    下：2            ＝> 上左右要画线
    上＋下：3         ＝> 左右要画线
    左：4
    上＋左：5
    下＋左：6
    上＋下＋左：7
    右：8
    上＋右：9
    下＋右：10
    上＋下＋右：11
    左＋右：12
    上＋左＋右：13
    下＋左＋右：14
    上＋下＋左＋右：15
 */
const enum FeatureMode {
    /** 上 */
    Top = 1,
    /** 下 */
    Bottom = 2,
    /** 上＋下 */
    TopBottom = 3,
    /** 左 */
    Left = 4,
    /** 上＋左 */
    TopLeft = 5,
    /** 下＋左 */
    BottomLeft = 5,
    /** 上＋下＋左 */
    TopBottomLeft = 6,
    /** 右 */
    Right = 8,
    /** 上＋右 */
    TopRight = 9,
    /** 下＋右 */
    BottomRight = 10,
    /** 上＋下＋右 */
    TopBottomRight = 11,
    /** 左＋右 */
    LeftRight = 12,
    /** 上＋左＋右 */
    TopLeftRight = 13,
    /** 下＋左＋右 */
    BottomLeftRight = 14,
    /** 上＋下＋左＋右 */
    TopBottomLeftRight = 15,
}
export default class HeartShapedLabyrinth implements LabyrinthImp {
    private row: number;
    private col: number;
    private labyArr: Array<Array<Number>>;
    public constructor(row, col) {
        this.col = col;
        this.row = row;
        this.labyArr = this.createLabyrinthArr();
    }
    // 获取迷宫入口
    public getEntrance() {

    }
    // 获取迷宫出口
    public getExit() {

    }
    // 生成迷宫的算法
    public createLabyrinth() {

    }
    // 删除迷宫地图
    public clearLabyrinth() {

    }
    // 作弊
    public getLabyrinthLine() {

    }
    private createLabyrinthArr() {
        let arr: Array<Array<Number>> = this.initLabyrinthArr();
        return arr;
    }
    private initLabyrinthArr() {
        let row = this.row;
        let col = this.col;
        let a = new Array(row);
        // 全部置为0
        for ( let i = 0; i < a.length; i++) {
            a[i] = new Array(col);
            for ( let j = 0; j < a[i].length; j++ ) {
                a[i][j] = 0;
            }
        }
        console.log('===== aaa =====', a);
        return a;
    }

}
