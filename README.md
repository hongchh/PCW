# PCW-dev
Pathophysiology Course Website. 病理生理学课程网站

# 一、协作开发
本仓库有2个分支，master和dev。主要在dev分支上进行开发和测试，功能完善之后再合并到master。
```txt
|----master
|----dev
```
### 1、准备工作
在github上fork本仓库到你自己的github，将你自己的远程仓库克隆到本地之后切换分支。
```txt
git clone https://github.com/{你的github}/PCW -b dev
```
### 2、开发过程
要开发某个模块的时候，在你的本地仓库创建一个分支，例如mydev。
```txt
git checkout -b mydev
```
切换之后你的本地仓库上就有3个分支了，如下所示。checkout之后会自动切换到mydev分支。
```txt
|----master
|----dev
|----mydev
```
在mydev分支上进行开发和测试，完成相应的功能或者模块，完成之后再切回到dev分支将mydev的内容合并到dev。
```txt
git checkout dev
```
由于在你开发过程中，我也可能在开发并且更新了仓库，为了避免冲突，在合并分支之前你还需要更新你本地仓库的dev分支。先在本地仓库上添加上游仓库upstream，上游仓库即我的仓库，然后使用pull命令从上游仓库拉取更新。
```txt
git add remote upstream https://github.com/hongchh/PCW dev
git pull upstream
```
更新完dev之后，将mydev分支合并到dev分支并提交到你自己的远程仓库。完成之后，mydev分支就可以删除了，你也可以继续留着。
```txt
git merge mydev
git push origin dev
git branch -d mydev
```
推送到自己的远程仓库后，就可以到github上面给我发起合并请求了，然后等待我合并你的代码。
