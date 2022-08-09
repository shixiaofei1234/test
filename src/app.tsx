import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { errorHandler, requestInterceptors, responseInterceptors } from '@/services/requestHandler';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
// import { config as AmapReactConfig } from '@amap/amap-react';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
// import { AMAP_KEY } from '@/config';
import { setOriginRoutes } from '@/auth';
import defaultSettings from '../config/defaultSettings';
import { getMenusRouteConfig } from '../config/routes';

import './global.less';

// 设置
setOriginRoutes(getMenusRouteConfig());

/**
 * 获取用户信息比较慢的时候会展示一个 loading
 */
export const initialStateConfig = {
  loading: <PageLoading />,
};

export async function getInitialState(): Promise<{
  settings?: LayoutSettings;
  currentUser?: API.CurrentUser;
}> {
  return {
    settings: defaultSettings,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  const initialSettings: any = {
    ...(initialState?.settings || {}),
  };
  const config: any = {
    rightContentRender: () => <RightContent />,
    logo:
      'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    title: 'react',
    disableContentMargin: false,
    footerRender: () => <Footer />,
    initialSettings,
  };
  return config;
};

// 请求配置及拦截器
export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [requestInterceptors],
  responseInterceptors: [responseInterceptors],
};

// 高德地图key
// AmapReactConfig.key = AMAP_KEY;

// 注册qiankun微应用
// export const qiankun = {
//   // apps: microAppConfig,
//   lifeCycles: {
//     beforeMount: () => {
//       // console.log('beforeMount:', props);
//     },
//     afterMount: () => {
//       // console.log(props);
//     },
//   },
// };
