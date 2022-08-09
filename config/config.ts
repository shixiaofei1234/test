import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import { getConfig, getUploadUrl } from './env';
import type { EnvKey } from './env';

const { REACT_APP_ENV } = process.env;
const appConfig = getConfig(REACT_APP_ENV as EnvKey);
export default defineConfig({
  define: {
    API_URL: appConfig.APP_BASE_API_HOST, // API地址
    API_UPLOAD_URL: getUploadUrl(REACT_APP_ENV as EnvKey), // 文件上传地址
    APP_NAME: 'app-manage',
  },
  hash: true,
  // base: process.env.UMI_ENV ? '/' : '/fosun-health-fe-admin/',
  publicPath: process.env.UMI_ENV ? '/' : '/fe-fh-hospital-config/',
  history: { type: 'hash' },
  antd: {},
  dva: {
    hmr: true,
  },
  routes,
  layout: {
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  // routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
