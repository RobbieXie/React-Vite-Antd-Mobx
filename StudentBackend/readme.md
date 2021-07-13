# React+Vite+Antd 学生成绩管理系统

## 一、实践项目介绍 & 整体技术栈
这是我的React课程学习作业项目,通过一个学生成绩管理系统的实践对React及前端技术进行学习.
  
+ 前端采用 React+Antd+Vite 的技术栈
+ 后端采用 SpringBoot+MongoDB 实现REST后台接口(采用SpringData Pageable实现真分页)
  

## 二、后端实践

后端提供学生成绩数据REST CRUD APIs, 基于SpringData分页实现,后端比较简单,不详细介绍了,接口报文如下(集成了swagger-api-ui 可启动后看详细api文档):
```js
1. 分页查询
   GET /page/studentScore
   params: {
       page: default 1,
       size: default 10,
       name: default ''
   }
2. 插入数据
   POST /studentScore
   {
     "name": "xietiandi",
     "course": "React",
     "score": 90,
   }

3. Update数据
   PUT /studentScore/{id}
   {
     "name": "xietiandi2",
     "course": "React",
     "score": 90,
   }

4. 删除数据
   DELETE /studentScore/{id}
```

## 三、前端实践

### 1. Vite脚手架初始化项目
```js
// 安装yarn工具
npm install -g yarn

// 选择react-ts脚手架模版
yarn create @vitejs/app  

// 根据命令行提示, 输入工程名, 选择ts模板, .etc
```

### 2. 安装相关前端依赖
本次前端技术栈按要求使用 react+antd+mobx, install完成之后的 package.json 依赖如下所示:
```js
"dependencies": {
    "@ant-design/icons": "^4.6.2",
    "antd": "^4.16.7",
    "axios": "^0.21.1",
    "mobx": "^6.3.2",
    "mobx-react": "^7.2.0",
    "react": "^17.0.0",
    "react-dom": "^17.0.0",
    "react-router-dom": "^5.2.0"
    "react-highlight-words": "^0.17.0",
    "react-markdown": "^6.0.2",
  }
```
项目启动:
```js
    1. git clone git_path
    2. npm install
    3. npm run dev
```

### 3. 目录结构
```js
    + api  //管理与后台交互的所有api,可脚本自动生成
        + StudentController.ts
    + component  //通用组件,比如可筛选的DataTable, Notification组件
        + DataTable.tsx
        + notification.ts
    + page  //页面渲染逻辑
        + MyHeader
        + MyBreadcrumb
        + IndexPage
        + Student
            + Student.tsx
            + StudentInsertModal.tsx
            + StudentEditModal.tsx
    + router  //页面Router Path管理
    + store  //page使用的model对象管理
        + RootStore.ts
        + Student
            + StudentStore.ts
            + StudentModalStore.ts
            + InsertModalStore.ts //extends StudentModalStore
            + EditModalStore.ts //extends StudentModalStore
    + index.html
    + main.tsx
```