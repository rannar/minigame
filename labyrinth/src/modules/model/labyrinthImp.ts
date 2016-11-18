interface LabyrinthImp {
    // 获取迷宫入口
    getEntrance();
    // 获取迷宫出口
    getExit();
    // 生成迷宫的算法
    createLabyrinth();
    // 删除迷宫地图
    clearLabyrinth();
    // 作弊
    getLabyrinthLine();
}

export { LabyrinthImp };
