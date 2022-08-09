/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
import { getConfig } from './env';

export default {
  dev: {
    '/api/': {
      target: getConfig('dev').APP_BASE_API_HOST,
      changeOrigin: true,
      pathRewrite: { '^/api/': '' },
    },
  },
  stage: {
    '/api/': {
      target: getConfig('stage').APP_BASE_API_HOST,
      changeOrigin: true,
      pathRewrite: { '^/api/': '' },
    },
  },
  pre: {
    '/api/': {
      target: getConfig('pre').APP_BASE_API_HOST,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  ptest: {
    '/api/': {
      target: getConfig('ptest').APP_BASE_API_HOST,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
