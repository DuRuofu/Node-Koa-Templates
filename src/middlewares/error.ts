// 这个middleware处理在其它middleware中出现的异常,我们在next()后面进行异常捕获，出现异常直接进入这个中间件进行处理
import Koa from 'koa';
import { logger } from '../middlewares/log';

export const errorHandler = async (ctx: Koa.Context, next: Koa.Next) => {
  try {
    return await next();
  } catch (err) {
    console.log(err);

    if (typeof err === 'object') {
      ctx.body = {
        code: err.code || err.status || 500,
        message: err.message || '服务器内部错误',
        data: [],
      };
    } else {
      ctx.body = {
        code: -1,
        data: null,
        message: err,
      };
    }
    logger.error(err);
    // 保证返回状态是 200
    ctx.status = 200;
    return await Promise.resolve();
  }
};
