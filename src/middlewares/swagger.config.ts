// swaggerAPI配置文件  参考：https://swagger.io/specification/

import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import AddressIp from 'ip';
import { PORT } from '../config/constant';

const swaggerDefinition = {
  // 版本
  openapi: '3.0.0',
  // 信息
  info: {
    title: 'node-koa-templates API', // Title (required)
    version: '1.0.0', // Version (required)
    summary: 'test',
    description: 'node-koa-templates API接口文档', // Description (optional)
    // 开源协议
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
    contact: {
      name: 'API Support',
      url: 'https://github.com/DuRuofu',
      email: 'duruofu@qq.com',
    },
  },

  host: `${AddressIp.address()}:${PORT.http}`, // Host (optional)
  basePath: '/', // Base path (optional)
  favicon: '/favicon.png', // default favicon
  customCSS: `h1 { color: red }`, // Add Custom CSS on the html

  // 安全
  components: {
    parameters: {},
    securitySchemes: {
      token: {
        type: 'apiKey',
        name: 'authorization',
        in: 'header',
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '/../routers/*.ts')], // all api
};

const jsonSpc = swaggerJSDoc(options);
export default jsonSpc;
