/**
 * Example: https://github.com/jasonsoft-net/jasonsoft-koa-server
 * FilePath: /jasonsoft-koa-server/app.js
 * * 初始化相关服务和注入相关中间件
 * Added by Jason.Song (成长的小猪) on 2021/01/31
 * ? CSDN: https://blog.csdn.net/jasonsong2008
 * ? GitHub: https://github.com/jasonsoft-net
 */
import Koa from 'koa';
import Router from '@koa/router';
/**
 * Import the ControllerProvider from @jasonsoft/koa-controller
 */
import { ControllerProvider } from '@jasonsoft/koa-controller';

/** Instantiate the Koa object  */
const app = new Koa();

/** router middleware */
const router = new Router();

/** Inject the controller directory */
ControllerProvider.initControllers({
  router,
  /** The default directory is './src/controllers' */
  dir: './app/controllers',
  /** Whether to enable the body parser, the default setting is false, not enabled */
  bodyParser: true,
});
app.use(router.routes()).use(router.allowedMethods());

/** Service port */
const port = Number(process.env.PORT || 3000);

/** Listening port */
app.listen(port, () => {
  console.log(
    `[\x1B[36mRunning\x1B[0m] Application is running on: http://localhost:${port}`,
  );
});
