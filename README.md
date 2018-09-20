# vue-suit

## 目标：打造一套后端同学也可以使用的vue管理后台

模版丰富、组件丰富、样式可配、页面可复用性高

## 开发规范

- git flow 流程拉分支开发
- 加入群组，周知大家要开发、已开发内容，减少重复性工作
- 开发完成内容合并到master分支后，在todo内修改状态
- 通用组件class以 **vs-** 开头

## todo list

- [x] 菜单
- [x] 头部
- [x] 头部下侧菜单栏
- [x] 一个主页（仍需优化）
- [ ] 换肤功能
- [ ] 组件
  - [x] widget(通用布局组件开发)
  - [x] 引入icon
  - [ ] 表格（普通表格、可合并单元格表格、编辑表格、列宽可拖动表格、行／列可拖动表格、）
  - [ ] 树（参照ztree，实现vue版）
  - [ ] markdown编辑器（fork一份，在此基础上修改：https://github.com/hinesboy/mavonEditor）
  - [ ] 分页（三种样式）
  - [ ] form（普通form，复杂form）
  - [ ] 弹框（给element重新归类）
  - [x] 按钮
  - [x] 布局
  - [x] sticky
  - [ ] ...
- [ ] 页面
  
  - [ ] 登录页面
  - [ ] 权限管理 权限管理计算做一套基于RBAC模型的权限管理. 包括数据库、接口开发、页面开发
  - [ ] 用户管理

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
