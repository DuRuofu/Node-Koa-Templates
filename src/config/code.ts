//常用接口状态code
export const CODE = {
  success: { code: 0, message: 'success', data: 'success' },
  tokenFailed: { code: 1, message: 'token校验失败', data: 'tokenFailed' },
  missingParameters: { code: 2, message: '缺少参数', data: 'missingParameters' },
  adminUserIsExist: { code: 3, message: '账号名已存在', data: 'adminUserIsExist' },
};
