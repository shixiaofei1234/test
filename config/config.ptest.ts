import { defineConfig } from 'umi';
import { getConfig, getUploadUrl } from './env';

/**
 * 导出的多环境变量命名约定：一律大写且采用下划线分割单词
 * 注意：在添加变量后，需要在src/typing.d.ts内添加该变量的声明，否则在使用变量时IDE会报错。
 */
const appConfig = getConfig('ptest');
export default defineConfig({
  define: {
    API_URL: appConfig.APP_BASE_API_HOST, // API地址
    API_UPLOAD_URL: getUploadUrl('ptest'), // 文件上传地址
  },
});
