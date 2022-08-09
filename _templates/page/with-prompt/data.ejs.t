---
to: src/pages/<%= pageName %>/data.d.ts
---

// 定义table的字段类型
export type TableListItem = {
  key: number;
  index: number;
  id: string;
  name?: string;
};

export type TableQueryParams = Record<any, unknown>;
