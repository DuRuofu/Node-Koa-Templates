//集中手动挂载路由
import exampleRouter from './example.router';
import testRouter from './test.router';

function MountRoute(app: any) {
  //app.use(exampleRouter.routes()).use(exampleRouter.allowedMethods());
  app.use(testRouter.routes()).use(testRouter.allowedMethods());
}

export default MountRoute;
