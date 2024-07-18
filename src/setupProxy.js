const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.openai.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );

  app.use(
    '/geminiapi',
    createProxyMiddleware({
      target: 'https://geminiapi.com',
      changeOrigin: true,
      pathRewrite: {
        '^/geminiapi': ''
      }
    })
  );

  app.use(
    '/claudeapi',
    createProxyMiddleware({
      target: 'https://claudeapi.com',
      changeOrigin: true,
      pathRewrite: {
        '^/claudeapi': ''
      }
    })
  );
};
