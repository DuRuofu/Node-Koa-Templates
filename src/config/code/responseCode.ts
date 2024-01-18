import SuccessModel from './successCode';
import { ParameterError, AuthError, NotFoundError, InternalServerError } from './errCode';
import Koa from 'koa';

// 200 请求成功
const SUCCESS = async (ctx: Koa.Context, data, msg) => new SuccessModel(200, msg, data).success(ctx);
// 权限限制
const USER_NO_PERMISSION = async (ctx: Koa.Context, msg = '没有权限') => new SuccessModel(2100, msg).success(ctx);
// 用户错误
const USER_NOT_LOGIN = async (ctx: Koa.Context) => new SuccessModel(2001, '用户未登录').success(ctx);
const USER_ACCOUNT_EXPIRED = async (ctx: Koa.Context) => new SuccessModel(2002, '账号已过期').success(ctx);
const USER_ACCOUNT_DISABLE = async (ctx: Koa.Context) => new SuccessModel(2003, '账号不可用').success(ctx);
const USER_ACCOUNT_NOT_EXIST = async (ctx: Koa.Context) => new SuccessModel(2004, '账号不存在').success(ctx);
const USER_ACCOUNT_ALREADY_EXIST = async (ctx: Koa.Context, msg = '账号已存在') => new SuccessModel(2005, msg).success(ctx);
const USER_ACCOUNT_USE_BY_OTHERS = async (ctx: Koa.Context) => new SuccessModel(2006, '账号下线').success(ctx);
const USER_PWD_ERROR = async (ctx: Koa.Context) => new SuccessModel(2007, '密码错误').success(ctx);

// 400
const PARAM_NOT_VALID = async (ctx: Koa.Context, msg = '请求参数无效') => new ParameterError(1001, msg).throwErr(ctx);
const PARAM_IS_BLANK = async (ctx: Koa.Context, msg = '请求参数为空') => new ParameterError(1002, msg).throwErr(ctx);
const PARAM_TYPE_ERROR = async (ctx: Koa.Context, msg = '请求参数类型错误') => new ParameterError(1003, msg).throwErr(ctx);
const PARAM_NOT_COMPLETE = async (ctx: Koa.Context, msg = '请求参数缺失') => new ParameterError(1004, msg).throwErr(ctx);
// 401
export const TOKEN_IS_BLANK = async (ctx: Koa.Context) => new AuthError(4004, 'token为空').throwErr(ctx);
export const TOKEN_EXPIRED = async (ctx: Koa.Context) => new AuthError(4001, 'token过期').throwErr(ctx);
export const TOKEN_INVALID = async (ctx: Koa.Context) => new AuthError(4002, 'token无效').throwErr(ctx);
export const AUTHENTICATION_FAIL = async (ctx: Koa.Context, msg = '认证失败') => new AuthError(4003, msg).throwErr(ctx);
// 404
export const NotFound = async (ctx: Koa.Context) => new NotFoundError(404, '未找到api,请检查请求路径以及请求方法是否出错').throwErr(ctx);

// 500
const FAIL = async (ctx: Koa.Context, msg) => new InternalServerError(500, msg).throwErr(ctx);
const FILE_UPLOAD_FAIL = async (ctx: Koa.Context) => new InternalServerError(5001, '文件上传失败').throwErr(ctx);

//参考链接：https://juejin.cn/post/6847902223138029581
