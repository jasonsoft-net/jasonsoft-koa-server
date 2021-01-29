jasonsoft-koa-server
=================
基于 Node.js 构建完整服务端应用（ Node.js Web API ）

### 项目结构
```javascript
jasonsoft-koa-server
├── package.json
├── bin
|   ├── start.js (启动入口文件)
├── app.js (初始化相关服务)
├── app
│   ├── config
|   |   ├── index.js (初始化配置信息)
|   |   ├── config.dev.js (开发环境配置)
|   │   └── config.prd.js (生产环境配置)
│   ├── controllers (控制器)
│   ├── services (服务层-业务逻辑层)
│   ├── models (数据库实体)
│   ├── utils (公共方法)
│   ├── middlewares (中间件)
│   └── schedules (定时任务)
├── public (静态资源文件)
└── test (单元测试)
```