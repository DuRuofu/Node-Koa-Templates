# Node-Express-Templates



## 依赖

```
web框架: express + ts
热更新：nodemon + ts-node
orm：prisma
日志：log4js
token生成：jsonwebtoken
进程守护：pm2
``

## 结构

``` sh

- config            // 配置文件夹
- controllers       // 控制器，处理路由逻辑
- docs              // 文档目录
   - API.md            // 包含项目的应用程序编程接口（API）的文档。
- logs              // 日志文件夹
- middlewares       // 中间件，请求预处理逻辑，例如权限验证
- prisma            // 数据库访问ORM层
- routers            // 路由定义
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



## 使用

``` sh
# 安装依赖
npm install
# 启动项目
npm run dev

```
