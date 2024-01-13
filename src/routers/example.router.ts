//实例路由模块，该文件负责定义路由规则

import Router from 'koa-router';
const router = new Router({ prefix: '/example' });
import Controllers from '../controllers/example.controllers';

// 增
router.post('/post', Controllers.post);

// 删
router.delete('/delete', Controllers.delete);

// 查
router.get('/get', Controllers.get);

// 改
router.put('/update', Controllers.put);

export default router;
