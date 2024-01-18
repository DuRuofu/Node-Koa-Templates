// 错误处理中间件
import { ErrorModel } from '../config/code/errCode';

export const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    //判断是否为已知错误
    if (err.flag === 'ErrorModel') {
      format(err, ctx);
    } else {
      //对于未知的错误返回统一的消息
      format(new ErrorModel(), ctx);
    }
    await ctx.response; // 等待响应发送给客户端
    return Promise.resolve();
  }
};

// 格式化错误响应
const format = (err: any, ctx: any) => {
  ctx.status = err.statusCode;
  ctx.body = {
    code: err.code,
    msg: err.message || err.msg,
    request: ctx.method + ' >> ' + ctx.url,
  };
};
