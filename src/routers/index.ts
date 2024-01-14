import fs from 'fs';
import path from 'path';
import Router from 'koa-router';
const router = new Router();

fs.readdirSync(__dirname).forEach((file) => {
  // console.log(file)
  if (file !== 'index.js') {
    import(path.join(__dirname, file))
      .then((r) => {
        router.use(r.default.routes());
      })
      .catch((error) => {
        // 处理导入错误
        console.log('路由自动加载错误' + error);
      });
  }
});

export default router;

// //集中手动挂载路由
// import exampleRouter from './example.route';
// import testRouter from './test.route';

// function MountRoute(app: any) {
//   //app.use(exampleRouter.routes()).use(exampleRouter.allowedMethods());
//   app.use(testRouter.routes()).use(testRouter.allowedMethods());
// }
// export default MountRoute;
