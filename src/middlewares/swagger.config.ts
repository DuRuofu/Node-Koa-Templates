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
    description:
      'token:   Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBY2NvdW50SWQiOiI0ZTFiYjNmNS04YzBiLTQ1NzMtOGU2Zi1hYmY5M2JkYzQyMjQiLCJpYXQiOjE3MTAxNTA3MDEsImV4cCI6MTcxMjc0MjcwMX0.3_o-5nKLLnISV_fJ6n_-eAXX2r_S4W_04JFk3rL5RwU', // Description (optional)
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

  // host: `${AddressIp.address()}:${PORT.http}`, // Host (optional)
  // basePath: '/v1', // Base path (optional)
  // favicon: '/favicon.png', // default favicon
  // customCSS: `h1 { color: red }`, // Add Custom CSS on the html

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
