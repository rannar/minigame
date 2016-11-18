#ts如何使用类库
1、typings -v (看typings全局安装没，如果没，就全局安装(npm install typings -g))
2、typings init(生成typings.json文件)
3、npm install phaser --save-dev 
4、新建文件夹 typings
5、typings install react (或者typings install jquery)
6、在node_modules中找到phaser.d.ts文件 ＝> node_modules/phaser/typescript/phaser.d.ts
7、在typings/index.d.ts文件中加入
   /// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />
   可以将phaser.d.ts拷贝到typings文件夹下，然后index.d.ts的路径改为相应路径
   /// <reference path="modules/phaser/phaser.d.ts" />

#ts类中如何声明不变的常量并用this.来引用？？
上：true/false 下：true/false 左：true／false 右：true／false
=>
上：1 下：2 左：4 右：8 
上：1
下：2
上＋下：3
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