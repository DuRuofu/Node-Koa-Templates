//返回统一出口中间件
import Koa from 'koa';
import { CODE } from '../config/code';

// 这个middleware用于将ctx.result中的内容最终回传给客户端

export const responseHandler = (ctx: Koa.Context) => {
  if (ctx.body !== undefined) {
    ctx.type = 'json';
    ctx.body = {
      code: CODE.success.code,
      data: ctx.body,
      message: CODE.success.message,
    };
  }
};
