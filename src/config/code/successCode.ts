import Koa from 'koa';
class SuccessModel {
  code: number;
  msg: any;
  data?: any;
  constructor(code, msg, data?) {
    this.code = code || 200;
    this.msg = msg || '操作成功';
    if (data) {
      this.data = data;
    }
  }
  success(ctx: Koa.Context) {
    // 所有的响应都是json，koa处理好的方式，直接用
    ctx.body = this;
  }
}

export default SuccessModel;
