import domains from '@fosun-fe/config';
export type EnvKey = 'dev' | 'stage' | 'pre' | 'ptest' | 'production';
const COMMON_DOMAINS_DEV = domains.getDomains('dev');
const COMMON_DOMAINS_TEST = domains.getDomains('test');
const COMMON_DOMAINS_PTEST = domains.getDomains('ptest');
const COMMON_DOMAINS_PRE = domains.getDomains('pre');
const COMMON_DOMAINS = domains.getDomains('prod');

type EnvObjectType = {
  APP_BASE_API_HOST: string;
};

type ConfigType = {
  [k in EnvKey]: EnvObjectType;
};

// 配置
const configEnv: ConfigType = {
  dev: {
    APP_BASE_API_HOST: COMMON_DOMAINS_DEV.API_DOMAIN,
  },
  stage: {
    APP_BASE_API_HOST: COMMON_DOMAINS_TEST.API_DOMAIN,
  },
  pre: {
    APP_BASE_API_HOST: COMMON_DOMAINS_PRE.API_DOMAIN,
  },
  ptest: {
    APP_BASE_API_HOST: COMMON_DOMAINS_PTEST.API_DOMAIN,
  },
  production: {
    APP_BASE_API_HOST: COMMON_DOMAINS.API_DOMAIN,
  },
};

//获取环境变量
export function getConfig(envCode: EnvKey = 'production') {
  const { REACT_APP_ENV } = process.env;
  let config: EnvObjectType;
  if (envCode) {
    config = configEnv[envCode] || ({} as EnvObjectType);
  } else {
    config = configEnv[REACT_APP_ENV || 'production'] || ({} as EnvObjectType);
  }
  return config;
}

export function getUploadUrl(envCode: EnvKey = 'production') {
  return `${
    getConfig(envCode).APP_BASE_API_HOST
  }/api/digital-hospital-gateway/digital-hospital-admin/home/page/file/upload`;
}
