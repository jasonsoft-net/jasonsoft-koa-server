/**
 * FilePath: /jasonsoft-koa-server/app.js
 * TODO: 初始化相关服务和注入相关中间件
 * Added by Jason.Song (成长的小猪) on 2021/01/31
 * ? CSDN: https://blog.csdn.net/jasonsong2008
 * ? GitHub: https://github.com/JasonSoft-Net
 */

/** 引入Koa框架 */
import Koa from 'koa';

/** 初始化Koa */
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World!';
});

/** 监听指定端口，启动服务 */
app.listen(3000, () => {
  console.log('[\x1B[36mRunning\x1B[0m] 服务已启动：http://localhost:3000');
});
