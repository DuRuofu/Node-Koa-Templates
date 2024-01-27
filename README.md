# Node-Koa-Templates

开源Node-Koa后端服务框架模板
此项目是一个基于Koa和TypeScript的后端服务框架模板，旨在帮助快速搭建Node.js后端项目。

## 参考
以下是该项目参考的一些教程和项目：

【东方骏:】Koa2 + Ts 项目结构搭建 保姆级教程
【写代码的Mokel】nodejsts项目的基础工程化配置
【前端小付】fluxy-admin后台管理系统开发记录
## 依赖
以下是此项目使用的一些主要依赖：

- web框架: koa + ts
- 热更新：ts-node-dev + ts-node
- 代码格式检查：eslint
- 代码格式化：prettier + onchange
- orm：prisma
- 日志：log4js
- token生成：jsonwebtoken
- 进程守护：pm2

## 目录结构
```sh
.
├── docs             // 文档目录
├── logs             // 日志文件夹
├── public           // 资源文件夹
├── src              // 放代码
│   ├── config       // 配置文件夹
│   │   ├── assets   // 存放证书文件
│   │   ├── code     // 存放http返回状态
│   │   ├── casbin.model.conf   // casbin权限模型配置
│   │   └── constant.ts         // 服务程序全局配置文件
│   ├── controllers   // 控制器，处理路由逻辑 
│   ├── middlewares   // 中间件，请求预处理逻辑，例如权限验证 
│   ├── prisma        // 数据库访问ORM层 
│   ├── routers       // 路由定义 
│   ├── services      // 数据服务层，处理数据库业务
│   ├── tests         // 测试文件夹
│   ├── utils         // 工具函数或类 
│   └── script        // 用户脚本 
├── .env              // 环境变量文件参考
├── .gitignore        // git忽略文件
├── README.md         // 项目描述文件
```
##  使用

您可以按照以下步骤来使用该项目：

克隆此项目到本地。
安装项目依赖：在项目根目录下运行 npm install 或 yarn install。
根据需要配置环境变量：复制.env.example文件并重命名为.env，然后根据实际情况进行配置。
运行开发服务器：在项目根目录下运行 npm run dev 或 yarn dev。
访问 http://localhost:3000 查看服务是否正常启动。
您可以根据项目需要对目录结构和配置文件进行修改和扩展。详细的文档和教程可以在docs目录中找到。

祝您搭建成功！如有任何疑问，请随时提问。