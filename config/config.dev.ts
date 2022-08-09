import { defineConfig } from 'umi';
import { getConfig, getUploadUrl } from './env';

const appConfig = getConfig('dev');
export default defineConfig({
  define: {
    API_URL: appConfig.APP_BASE_API_HOST, // API地址
    API_UPLOAD_URL: getUploadUrl('dev'), // 文件上传地址
  },
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
});
