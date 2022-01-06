const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://stormy-anchorage-99325.herokuapp.com',
      changeOrigin: true,
    }),
  );
};
