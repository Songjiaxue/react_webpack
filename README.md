##### 项目介绍
    react + react-router + mobx

##### 文件结构  
    |——config
        |——proxy.js               // 后台接口代理配置文件
        |——webpack.base.js
        |——webpack.dev.js
        |——webpack.prod.js
    |——src                     
        |——app                    // 业务模块
        |——api                    // 接口方式
        |——assets                 // 静态文件
        |——components             // 公共组件
        |——index.html             // 开发环境html模板
        |——index.js               // 入口文件
        |——store                  // 全局共享数据
        |——util                   // 帮助工具
            |——load.js            // 页面加载缓慢loading函数
            |——regular.js         // 正则文件
        |——temp.html              // 生产环境所需html模板
    |——routes                     // 路由配置
        |——app.js                 // 路由配置文件
        |——index.js               // 路由--组件渲染
        |——index.less             // 公共样式
    |——.babelrc                   // babel-loader配置文件
    |——.eslintgnore               // 
    |——.eslintrc.js               // eslint配置文件
    |——.postcssrc.js              // postcss配置文件
    |——package.json   
    |——theme.json                 // antd主题色配置
##### usage
    1. npm install
    2. npm start // 开发
    3. npm run build // 构建
