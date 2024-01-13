# Node-Koa-Templates

自用Node-Koa后端服务框架模板
参考：

1. [[东方骏]Koa2 + Ts 项目结构搭建 保姆级教程](https://juejin.cn/post/7198116097320976442)。
2. [[写代码的Mokel]nodejsts项目的基础工程化配置](https://github.com/dmokel/startup-monorepo-fastify-phaser-colyseus-threejs/blob/master/docs/02nodejsts%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%9F%BA%E7%A1%80%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%85%8D%E7%BD%AE.md).

## 依赖

```
web框架: koa + ts
热更新：nodemon + ts-node
代码格式检查：eslint
代码格式化：prettier
orm：prisma
日志：log4js
token生成：jsonwebtoken
进程守护：pm2
```

## 目录结构

```sh

- config            // 配置文件夹
- controllers       // 控制器，处理路由逻辑
- docs              // 文档目录
   - API.md         // 包含项目的应用程序编程接口（API）的文档。
- logs              // 日志文件夹
- middlewares       // 中间件，请求预处理逻辑，例如权限验证
- prisma            // 数据库访问ORM层
- routers           // 路由定义
- public            // 静态资源文件夹
- services          // 数据服务层，处理数据库业务
- tests             // 测试文件夹
- utils             // 工具函数或类
- .env              // 环境变量文件参考
- .gitignore        // git忽略文件
- app.ts            // 项目入口文件
- package.json      // 项目配置文件
- README.md         // 项目的入口文件，通常提供项目的概述、背景信息、安装指南、使用说明和贡献指南等信息。

```

## 搭建过程

### 1、初始化工程

```sh
npm init -y
```

### 2、安装依赖

安装生产环境依赖:

```sh
npm i koa koa-body koa-router log4js pm2  axios jsonwebtoken
```

安装生产环境依赖:

```sh
npm i @types/koa @types/koa-router @types/log4js  @types/jsonwebtoken prettier eslint nodemon typescript ts-node  @types/node -D
```

### 3、创建ts管理文件：tsconfig.json

```json
{
  "compilerOptions": {
    // 目标语言版本
    "target": "esnext",
    // 指定生成代码的模板标准
    "module": "commonjs",
    // 指定编译目录（要编译哪个目录）
    "rootDir": "./src",
    // 严格模式
    "strict": true,
    //  tsc编译后存放目录
    "outDir": "./build",
    // 没有默认导出时, 编译器会创建一个默认导出
    "allowSyntheticDefaultImports": true,
    // 允许export= 导出, 由import from导入
    "esModuleInterop": true,
    // 禁止对同一个文件的不一致的引用
    "forceConsistentCasingInFileNames": true
  },
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  }
}
```

### 4、配置ESLINT代码检测

ESLint 是一个用于识别和报告在 ECMAScript/JavaScript 代码中发现的模式的工具，其目标是使代码更加一致并避免错误。

补充安装开发依赖:

```sh
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

安装完成后在根目录下分别创建 .eslintrc 和 .eslintignore 文件，在 .eslintrc文件中填充一些配置项：

```json
{
  //该配置项主要用于指示此.eslintrc文件是Eslint在项目内使用的根级别文件
  "root": true,
  //默认情况下，Eslint使用其内置的 Espree 解析器，该解析器与标准 JavaScript 运行时和版本兼容.而我们需要将ts代码解析为eslint兼容的AST，所以此处我们使用 @typescript-eslint/parser
  "parser": "@typescript-eslint/parser",
  //该配置项告诉eslint我们拓展了哪些指定的配置集
  "extends": [
    //该配置集是 ESLint 内置的“推荐”，它打开一组小的、合理的规则，用于检查众所周知的最佳实践
    "eslint:recommended",
    //该配置集是typescript-eslint的推荐，它与eslint:recommended相似，但它启用了特定于ts的规则
    "plugin:@typescript-eslint/recommended",
    //该配置集禁用 eslint:recommended 配置集中已经由 typeScript 处理的规则，防止eslint和typescript之间的冲突。
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  //该配置项指示要加载的插件
  // @typescript-eslint 插件使得我们能够在我们的存储库中使用typescript-eslint包定义的规则集
  "plugins": ["@typescript-eslint"]
}
```

在.eslintignore中填入当前需要忽略的文件，包括编译输出目录build， 所有node_modules文件夹 和package-lock.json文件

```js
build / node_modules / package - lock.json
```

在package.json中新增执行eslint工具的脚本,关于所使用的eslint命令行工具的可用options，可以在eslint的[官方文档](https://eslint.org/docs/latest/use/command-line-interface#)中获取详细信息。

```json
 "scripts": {
      "lint": "eslint . --ext .js,.ts"
  }
```

测速：

工程目录下新建`test.ts`

```ts
function test() {
  console.log('test')
}
```

运行脚本`npm run lint`
抛出错误： `error  'test' is defined but never used  ` 说明配置OK

![image-20240113135256662](attachments/image-20240113135256662.png)

### 5、配置Prettier代码格式化

Prettier 是一个 Opinionated 的代码格式化工具。

安装:

```sh
npm i  prettier -D
```

在项目根目录下创建 .prettierrc 和 .prettierignore 文件
`.prettierrc `配置如下

```json
{
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 140
}
```

> semi: 设置为 false，表示不使用分号作为语句结束符。
> tabWidth: 设置为 2，表示使用两个空格作为一个制表符的宽度。
> singleQuote: 设置为 true，表示使用单引号而不是双引号来定义字符串。
> trailingComma: 设置为 "es5"，表示在对象或数组的最后一个元素之后> 允许添加逗号。
> printWidth: 设置为 140，表示每行代码的最大宽度为 140 个字符。

`.prettierignore `配置如下

```
build/
node_modules/
package-lock.json
```

关于prettier的详细的配置项，可以查阅[官网文档](https://prettier.io/docs/en/options)了解详细信息。

在package.json中新增执行prettier工具的脚本

```json
 "scripts": {
      "format": "prettier --config .prettierrc . --write"
  }
```

测试：`console.log('test');`带有`;`号，不符合`"semi": false`配置项的规范

![image-20240113141545484](attachments/image-20240113141545484.png)

运行脚本`npm run format` 分号被格式化删除，说明配置OK

![image-20240113141823140](attachments/image-20240113141823140.png)

### 6、创建项目主文件夹：src



### 7、src下创建入口文件：app.ts

### 8、src下创建工具库文件夹：utils

### 9、src下新增配置文件夹：config

### 10、src下新增日志文件夹：logs

### 11、src下新增中间件文件夹：middlewares

### 12、src下新增路由文件夹：routers

### 13、src下新增控制器文件夹：controllers

### 14、src下新增服务文件夹：services

### 15、src下新增数据库访问ORM层文件夹：prisma

### 16、src下新增测试文件夹：tests

## 使用

```sh
# 安装依赖
npm install
# 启动项目
npm run dev

```
