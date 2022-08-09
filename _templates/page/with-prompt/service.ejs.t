---
to: src/pages/<%= pageName %>/service.ts
---
import { request } from 'umi';
import type { TableQueryParams } from './data.d';

export async function getList(params?: TableQueryParams) {
  return request('/api/example', {
    params,
  });
}

