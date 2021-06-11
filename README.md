# template-frontend-vue-pc

基于 vue 的 web pc 项目启动模板

## 特点

- ⚡️ [Vue3](https://v3.vuejs.org/), [Vite2](https://vitejs.dev/), [pnpm](https://pnpm.io/) 组合，无惧项目剧增
- 🔥 支持 [`<script setup>`](https://github.com/vuejs/rfcs/pull/227) 语法糖
- 🚨 使用 ESLint 检查代码
- 💪 [Typescript](https://www.typescriptlang.org/) 保证代码健壮性
- 🚀 支持环境变量配置，多环境切换开发与部署

## 依赖

### 插件

- [VueRouter](https://next.router.vuejs.org/) - 新版本路由支持 composition-api
- [VueUse](https://github.com/vueuse/vueuse) - 有用的 composition-api 工具集
- [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint) - 检查代码

### 格式化

- 使用 Prettier 和 eslint-plugin-vue 组合来检查并格式化代码

### 工具

- [Typescript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/) 更好的包管理工具，集合了 yarn 与 npm 的优点，支持工作空间
- [VSCode 插件](https://marketplace.visualstudio.com/VSCode)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 或 [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)，推荐 [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)，支持 [`<script setup>`](https://github.com/vuejs/rfcs/pull/227) 语法糖
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 使用

```bash
# 通过模板创建项目
npx degit gxmari007/template-frontend-vue-pc my-project-name

# 进入项目目录
cd my-project-name

# 安装依赖，没有 pnpm 的话通过 npm i -g pnpm
# 安装太慢的话可以 npm i -g yrm 安装源管理工具切换到国内代理
# 如果不想使用 pnpm 可以删除 pnpm-lock.yaml 文件，再用 npm 或者 yarn 安装依赖
pnpm install
```

## 待办列表

开始配置模板为你自己的项目

- [ ] 修改 package.json 中 name 属性
- [ ] 修改 package.json 中 author 属性
- [ ] 修改 index.html 中 `<title>` 标签内容
- [ ] 替换 public 文件夹中 favicon.ico 文件
- [ ] 修改 README.md 文件为你自己的项目写描述

## 命令

```bash
# 运行 dev 环境开发模式
# 需要其他环境自行添加相应环境变量文件 .env.[mode]
# package.json scripts 属性里添加相应命令
npm run dev

# 打包 dev 环境生产代码
npm run build:dev

# 打包 prod 环境生产代码
npm run build:prod

# 本地预览打包代码
npm run serve

# 代码检查
npm run lint

# 代码检查并修复
npm run lint:fix
```
