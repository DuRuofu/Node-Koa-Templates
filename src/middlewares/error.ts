// 这个middleware处理在其它middleware中出现的异常,我们在next()后面进行异常捕获，出现异常直接进入这个中间件进行处理
//返回统一出口中间件
import Koa from 'koa';
import { logger } from '../middlewares/log';

export const errorHandler = (ctx: Koa.Context, next: Koa.Next) => {
  return next().catch((err) => {
    if (typeof err === 'object') {
      ctx.body = {
        code: err.code,
        data: null,
        message: err.message,
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
    return Promise.resolve();
  });
};
