// swaggerAPI配置文件

import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import AddressIp from 'ip';
import { PORT } from '../config/constant';

const swaggerDefinition = {
  //openapi: '3.0.0',
  info: {
    // API informations (required)
    title: 'Swagger接口文档', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'Swagger接口文档', // Description (optional)
  },
  contact: {
    name: 'name',
    url: 'url',
  },
  host: `${AddressIp.address()}:${PORT.http}`, // Host (optional)
  basePath: '/', // Base path (optional)
  securityDefinitions: {
    token: {
      type: 'apiKey',
      name: 'authorization',
      in: 'header',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '/../routers/*.ts')], // all api
};

const jsonSpc = swaggerJSDoc(options);
export default jsonSpc;
