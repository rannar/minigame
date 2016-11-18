import Config from 'src/data/config';
import { LabyrinthImp } from './labyrinthImp';
const WIDTH = 15;
const HEIGHT = 15;
export default class RectLabyrinth implements LabyrinthImp {

    private row: number;
    private col: number;
    private labyArr: Array<Array<Number>>;
    public constructor(row, col) {
        this.col = col;
        this.row = row;
        this.labyArr = this.createLabyrinthArr();
        this.createLabyrinth();
    }
    public getEntrance() {
    };
    public getExit() {
    };
    public createLabyrinth() {
        let game = Config.GAME;
        let graphics = game.add.graphics(0, 0);
        graphics.beginFill(0xffff00);
        for (let i = 0; i < this.labyArr.length; i++) {
            for ( let j = 0; j < this.labyArr[i].length; j++) {
                if ( this.labyArr[i][j] === 1) {
                        graphics.drawRect(i * WIDTH, j * HEIGHT, WIDTH, HEIGHT);
                }
            }
        }
    };
    public clearLabyrinth() {

    }
    // 获取迷宫线路(作弊用)
    public getLabyrinthLine() {
    }
    private initLabyrinthArr() {
        let row = this.row;
        let col = this.col;
        let a = new Array(2 * row + 1);
        // 全部置为1
        for ( let i = 0; i < a.length; i++) {
            let cols = 2 * col + 1;
            a[i] = new Array(cols);
            for ( let j = 0; j < a[i].length; j++ ) {
                a[i][j] = 1;
            }
        }
        // 中间格子为0
        for ( let i = 0; i < row; i++ ) {
            for ( let j = 0;  j < col; j++ ) {
                a[ 2 * i + 1 ][ 2 * j + 1] = 0;
            }
        }
        return a;
    }

    private createLabyrinthArr() {
        let arr: Array<Array<Number>> = this.initLabyrinthArr();
        // acc 存放已访问的队列， noacc 存放没有访问的队列
        let acc = [];
        let noacc = [];
        let r = arr.length >> 1;
        let c = arr[0].length >> 1;
        let count = r * c;
        for ( let i = 0; i < count; i++ ) {
            noacc[i] = 0;
        }
        // 定义空单元上下左右偏移
        let offs = [-c, c, -1, 1];
        let offR = [-1, 1, 0, 0];
        let offC = [0, 0, -1, 1];
        // 随机从noacc取出一个位置
        let pos = Math.floor(Math.random() * count);
        noacc[pos] = 1;
        acc.push(pos);
        console.log('===== pos =====', pos);

        while ( acc.length < count) {
            let ls = -1;
            let offPos = -1;
            // 找出pos位置而为数组中的坐标
            let pr = pos / c | 0;
            let pc = pos % c;
            let co = 0;
            let o = 0;
            // 找出取上下左右四个单元
            while ( ++co < 5 ) {
                o = Math.floor(Math.random() * 5);
                ls = offs[o] + pos;
                let tpr = pr + offR[o];
                let tpc = pc + offC[o];
                if ( tpr >= 0 && tpc >= 0 && tpr <= r - 1 && tpc <= c - 1 && noacc[ls] === 0 ) {
                    offPos = o;
                    break;
                }
            }

            if ( offPos < 0 ) {
                pos = acc[ Math.floor(Math.random() * acc.length) ];
            }else {
                pr = 2 * pr + 1;
                pc = 2 * pc + 1;
                // 相邻空单元中间的位置置0
                arr[ pr + offR[ offPos ] ][ pc + offC[ offPos ]] = 0;
                pos = ls;
                noacc[pos] = 1;
                acc.push(pos);
            }
        }
        console.log('===== acc =====', acc);
        console.log('===== arr =====', arr);
        return arr;
    }

}
