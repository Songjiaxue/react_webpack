exports.proxy = {
  "/api": {
    target: 'http://192.168.1.246:10555',
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
    secure: false,
  }
};
