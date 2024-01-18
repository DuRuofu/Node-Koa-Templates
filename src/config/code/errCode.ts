import Koa from 'koa';
export class ErrorModel {
  code: number;
  msg: string;
  statusCode: number;
  constructor(code = 500, msg = '未知服务器错误', statusCode = 500) {
    this.code = code; //data携带的内部异常状态码
    this.msg = msg; // 消息
    this.statusCode = statusCode; //外层的状态码
  }
  throwErr(ctx: Koa.Context) {
    //抛出错误
    ctx.throw(this.statusCode, this.msg, {
      code: this.code,
      flag: 'ErrorModel',
    });
  }
}
// 400参数错误
export class ParameterError extends ErrorModel {
  constructor(code, msg = '请求错误') {
    super(code, msg, 400);
  }
}
// 401错误
export class AuthError extends ErrorModel {
  constructor(code, msg = 'token认证失败') {
    super(code, msg, 401);
  }
}
// 404
export class NotFoundError extends ErrorModel {
  constructor(code, msg = '未找到该api') {
    super(code, msg, 404);
  }
}
// 500
export class InternalServerError extends ErrorModel {
  constructor(code, msg = '服务器内部错误') {
    super(code, msg, 500);
  }
}
