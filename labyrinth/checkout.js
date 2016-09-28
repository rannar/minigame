
'use strict';
const fs    = require('fs');
const git   = require('simple-git');
const path  = require('path');
var exec = require('child_process').exec,child;

let projectSSH = 'git@gitlab.com:tgg-gaming/common.git';

let localRes = 'common';

let rootPath = process.cwd();
let project = path.basename('../' + localRes);
// let c = rootPath.replace(b, '');
let defaultBranch = 'develop';
let fileArr  = fs.readdirSync('../');//获取上级目录下所有文件和文件夹
let curFileArr = fs.readdirSync(rootPath);//获取当前目录下文件

//当前目录下存在 js 包文件 将其删除
if(curFileArr.indexOf('js') !== -1) {

    child = exec('rm -rf js',function(err,out) {

      console.log(out); err && console.log(err);

    });
}

let showError  = (err) => console.log(project, '@' + defaultBranch, err);


if(fileArr.indexOf(localRes) !== -1) {
    //存在common项目 pull
     git('../' + localRes)
        .then(function() {
            console.log('pull start...',  project, '@' + defaultBranch);
        })
        // 切换到目标分支
        .checkout(defaultBranch, function(err) {
            if (err) showError(err);
        })
        // 自动更新目标分支
        .pull('origin', defaultBranch, function(err) {
            if (err) showError(err);
        })
        .then(function() {
            console.log('>> ' + project + ' done !');
        });

} else {
    //不存在 checkout
    git(rootPath).then(function() {
        console.log(localRes + '...checkout start...');
    }).clone(projectSSH, '../' + localRes, [], function(a, b) {
        console.log(localRes + '...checkout completed!');
        git('../' + localRes).checkout(defaultBranch, function(err) {if (err) showError(err);});
    })
}

