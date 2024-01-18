// 这个middleware处理在其它middleware中出现的异常,我们在next()后面进行异常捕获，出现异常直接进入这个中间件进行处理
// import Koa from 'koa';
// import { logger } from '../middlewares/log';

// export const errorHandler = async (ctx: Koa.Context, next: Koa.Next) => {
//   try {
//     await next();
//   } catch (err) {
//     // 捕获异常
//     console.log(err);

//     if (typeof err === 'object') {
//       ctx.body = {
//         code: err.code || err.status || 500,
//         message: err.message || '服务器内部错误',
//         data: [],
//       };
//     } else {
//       ctx.body = {
//         code: -1,
//         data: null,
//         message: '未知错误' + err,
//       };
//     }
//     logger.error(err);
//     // 保证返回状态是 200
//     ctx.status = 200;
//     return await Promise.resolve();
//   }
// };
import { ErrorModel } from '../config/code/errCode';
// 格式化错误响应
const format = (err, ctx) => {
  ctx.response.status = err.statusCode;
  ctx.response.body = {
    code: err.code,
    msg: err.message || err.msg,
    request: ctx.method + ' >> ' + ctx.url,
  };
};

export const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    //判断是否为已知错误
    if (err.flag === 'ErrorModel') {
      format(err, ctx);
    } else {
      // 对于未知的错误返回统一的消息
      console.log(err);
      format(new ErrorModel(), ctx);
    }
  }
};
