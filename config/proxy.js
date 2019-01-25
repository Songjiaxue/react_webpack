exports.proxy = {
  "/api": {
    target: 'http://192.168.1.36:8888',
    pathRewrite: { '^/api': 'api' },
    changeOrigin: true,
    secure: false,
  }
};
