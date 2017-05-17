# PCW
> Pathophysiology Course Website. 病理生理学课程网站。

```bash
# 项目启动和构建相关介绍
# 项目启动和构建包含3个部分，主网站、管理系统，以及服务器
# 启动主网站开发 http://localhost:8081/main/home
npm run dev-main
# 启动管理系统开发 http://localhost:8082/management/home
npm run dev-management
# 构建主网站和管理系统产品文件
npm run build-main
npm run build-management
# 运行服务器，在启动服务器需要确保先构建好前端的产品文件
# http://localhost:8080/main/home
# http://localhost:8080/management/home
npm run server
# 代码风格检测
npm run lint-main
npm run lint-management
npm run lint-server
```
# 项目结构
```txt
├─FE-main: 课程网站前端代码
│    ├─build: 存放webpack开发和构建相关配置文件
│    ├─config: 存放webpack配置文件
│    ├─data: 项目开发过程中需要用到的伪数据或其他静态资源
│    ├─src: 源代码
│    │   ├─assets: 图片等资源文件
│    │   ├─components: 页面组件
│    │   ├─router: 前端路由
│    │   ├─store: 全局状态管理
│    │   ├─App.vue: 顶层组件
│    │   └─entry.js: 应用入口文件
│    └─index.html
├─FE-management: 管理系统前端代码
│    ├─build: 存放webpack开发和构建相关配置文件
│    ├─config: 存放webpack配置文件
│    ├─data: 项目开发过程中需要用到的伪数据或其他静态资源
│    ├─src: 源代码
│    │   ├─assets: 图片等资源文件
│    │   ├─components: 页面组件
│    │   ├─router: 前端路由
│    │   ├─store: 全局状态管理
│    │   ├─App.vue: 顶层组件
│    │   └─entry.js: 应用入口文件
│    └─index.html
├─images-for-readme: 存放README用到的图片文件
├─Server: 服务端代码
│    ├─api: 服务端api，express路由
│    ├─model: 数据模型
│    ├─public: 前端静态资源以及页面文件
│    │    ├─main: 存放课程网站前端构建产品文件
│    │    └─management: 存放管理系统的前端构建产品文件
│    └─index.js: express服务器配置和启动文件
├─.babelrc: babel配置文件
├─.editorconfig: 编辑器配置文件
├─.eslintignore: eslint配置文件
├─.eslintrc.js: eslint配置文件
├─.gitignore: git配置文件
├─package.json: 项目包管理文件
└─README.md: 项目描述和部分文档
```

## 1、协作规范
本仓库有2个分支，master和dev。主要在dev分支上进行开发和测试，功能完善之后再合并到master。
```txt
|----master
|----dev
```
#### 1.1、准备工作
在github上fork本仓库到你自己的github，将你自己的远程仓库克隆到本地之后切换分支。
```bash
git clone https://github.com/{你的github}/PCW
# 上游的源仓库地址只需添加一次
git remote add upstream https://github.com/hongchh/PCW
# 切出 dev 分支
git checkout -b dev
```
#### 1.2、开发过程
可以直接在你本地仓库的dev分支上面进行开发，然后在发送PR之前先从源仓库拉取更新。
```bash
# 提交你的代码
git add *
git commit -m "add something"
# 拉取上游的源仓库 dev 分支上的更新，可能会有冲突需要自行解决
git pull upstream dev
# 推送到你自己的远程仓库，注意这里是 push 到 origin dev，不是 upstream dev
git push origin dev
```

## 2、网站需求（模块分析）
#### 2.1、Home
1. 图片展示：教研室或者课程特色的图片展览
2. 课程简介：简要介绍课程的历史和内容
3. 教学团队：简要介绍教学团队
4. 教学成就：简要列举近几年的教学成就

#### 2.2、Course
1. 课程介绍：详细的课程介绍，包括历史沿革、课程内容、课程特色
2. 教学大纲：列举课程的教学大纲
3. 教学方法：列举课程教学方法
4. 课程要求：基本要求/教学要求/实验要求/考核评价
5. 课程安排：列举课程的宏观阶段安排、考核安排以及每周的课程安排
6. 教学团队：详细介绍教学团队成员的相关信息

#### 2.3、Resources
1. 教学视频：展示教学录像视频，可在线观看也可下载
2. 课件教案：提供教案课件的下载
3. 习题：提供习题的下载或者在线浏览
4. 教材信息：列举教材信息
5. 专业词汇：展示专业词汇中英文对照表

#### 2.4、Achievement
1. 教学荣誉：展示本课程获得的教学荣誉奖项
2. 科研成就：展示教研室科研成果，论文等信息
3. 课程评价：展示同行、学生等第三方对课程的评价

#### 2.5、Interaction
1. 评论：学生可以在此页面发布相关评论、提问或咨询
2. 展示：展示学生评论、提问或咨询；展示教师的回复

#### 2.6、Management
1. 登录管理：所有管理员都需要登录才能对网站进行管理操作；
2. 更新Home：对于Home的课程介绍、教学团队、教学成就这三部分简介的内容进行编辑，修改文本；对首页展示教研室或者课程特色的图片进行更新
3. 更新Course：对Course展示的信息进行修改，包括课程介绍、历史沿革、课程内容、课程特色这4部分信息；对教学大纲进行编辑修改；对教学方法进行编辑修改；对课程要求进行编辑修改；对实验安排进行编辑修改；
4. 更新Resources：添加/删除视频、课件、教案、习题；对教材信息、专业词汇进行编辑修改
5. 更新Achievement：添加/删除荣誉奖项、论文条目、评价信息
6. Interaction：查看/回复学生发布的消息，删除没有意义、无用的消息
7. 账号管理：网站具备1个超级管理员可以添加/删除/重置普通管理员；所有管理员都可以修改自己的登录密码等基本信息
8. student管理：为了防止网站互动区被恶意刷屏，网站提供1个特定的student账号供学生使用，学生需要使用该账号进行登录然后才能互动区发布消息；student的密码由管理员（教师）设定，教师可以每年在授课的时候告诉学生student账号密码供学生使用，不定期地或者在课程结束后修改密码防止student账号泄露；

## 3、用户角色
#### 3.1、普通用户
权限：查看浏览网站内容；下载视频、课件等资源

#### 3.2、学生
权限：在互动区发布消息

#### 3.3、普通管理员
权限：修改更新网站展示内容；修改自己的账号信息；管理student账号

#### 3.4、超级管理员
权限：修改更新网站展示内容；修改自己的账号信息；管理student账号；管理普通管理员账号

## 4、数据模型
#### 4.1、轮播图（rotary-images）
轮播图使用多张图片，每张图片都有个description对图片进行简要描述，url则是图片的链接。
```json
[{
  "description": "string",
  "url": "string"
}]
```

#### 4.2、首页的简介（abstract）
首页的3部分简介分别是3个不同内容的字符串。
```json
{
  "course": "string",
  "team": "string",
  "achievement": "string"
}
```

#### 4.3、课程介绍（course-introduction）
课程介绍包括4部分内容，课程介绍/历史沿革/课程内容/课程特色，都是字符串。
```json
{
  "introduction": "string",
  "history": "string",
  "content": "string",
  "feature": "string"
}
```

#### 4.4、教学要求（course-requirements）
教学要求包含3项信息：基本理论、基本技能和教学要求。
```json
{
  "theory": "string",
  "skill": "string",
  "teaching": "string"
}
```

#### 4.5、教学大纲/教学方法（course-sundry）
教学大纲/教学方法这两部分内容的数据格式都一样，所以合并到一起，加个type字段用于区分。
```json
[{
  "type": "string",
  "content": "string"
}]
```

#### 4.6、教学团队/管理员账号信息（team-memebers）
教学团队成员默认也是网站的管理员，所以两者用到是同一份数据。每个成员包括姓名、性别、职称、角色、头像、学历、研究方向这几部分信息，然后还有用于登录的账号密码。职称：教授/副教授/讲师/教员。角色：课程负责人/主讲教师/助理。另外管理员分为超级管理员和普通管理员，用auth字段区分。
```json
[{
  "name": "string",
  "sex": "string",
  "title": "string",
  "role": "string",
  "url": "string",
  "education": "string",
  "major": "string",
  "direction": "string",
  "username": "string",
  "password": "string",
  "auth": "string"
}]
```

#### 4.7、课程安排（course-arrangement）
课程安排包括阶段安排、考核安排、教学安排3项信息，其中前两项都是文本描述，最后一项教学安排为表格描述，表格的每一项表示每一周的上课内容。
```json
{
  "stage": "string",
  "exam": "string",
  "course": [{
    "week": "number",
    "content": "string"
  }]
}
```

#### 4.8、视频、课件、习题等资源（course-resource）
视频、课件资源则是提供1个url用于下载即可，另外需要用type字段区分类型，name字段对响应的资源进行简要描述。
```json
[{
  "type": "string",
  "name": "string",
  "url": "string"
}]
```

#### 4.9、教材信息（teaching-material）
教材分为现用教材/主编教材/主审教材/参考教材这几种类型，用type字段区分，description则描述教材名称、作者、出版社、年份等信息。
```json
[{
  "type": "string",
  "description": "string"
}]
```

#### 4.10、荣誉和评价（honor-evaluation）
荣誉和评价基本都是图片，所以只需要提供url下载到浏览器展示即可。description对图片进行简要描述，type则是区分类型（荣誉/评价）。
```json
[{
  "type": "string",
  "description": "string",
  "url": "string"
}]
```

#### 4.11、论文（papers）
论文分为教学论文/科研论文两部分，用type字段区分。name为论文名称，time为发布时间，author为论文作者，publication为收录论文的刊物。
```json
[{
  "type": "string",
  "name": "string",
  "time": "string",
  "author": "string",
  "publication": "string"
}]
```

#### 4.12、互动（interactive-messages）
互动区发布的消息内容存在content字段，time描述发布的时间，例如：2017-02-01 21:58。comment则是一个数组，里面收集其他用户对评论的回复，包括回复者、回复时间、回复内容3部分信息。
```json
[{
  "content": "string",
  "time": "string",
  "comment": [{
    "content": "string",
    "user": "string",
    "time": "string"
  }]
}]
```

#### 4.13、学生账号（student）
student账号比较简单，只有用于登录的账号密码以及头像的url。
```json
{
  "username": "string",
  "password": "string",
  "url": "string"
}
```

## 5、开发规范
1. Vue组件文件名使用首字母大写驼峰形式命名，例如"CourseIntroduction.vue"；name属性采取小写形式，例如"course-introduction"
2. 文件夹采用小写短线形式命名，例如"images-for-readme"
3. 代码缩进为2个空格；语句末尾全部不写分号；其他代码风格细节参考eslint的提示进行修改
4. 使用pug+sass+es6进行开发
5. 各个界面在路由中已经引入并写好跳转关系，如果界面中需要用到自定义组件请将组件放置在该界面所在的文件夹里面。例如首页如果把轮播图单独写成1个组件，那么就要将轮播图组件放在/home文件夹里面。向/course文件夹这种里面组件较多的，如果涉及到比较多自定义子组件可以在/course下面继续建立子文件夹。main模块基本已经解耦可以单独进行各个子模块的开发，所以全程需要保持顶层的关系不变避免冲突。
6. 伪数据程程器和伪数据json文件都放置在data文件夹下面。生成器和json文件的命名格式为"xxx-genertor.js"和"xxx.json"，其实"xxx"为上述各个数据模型的英文名称。
