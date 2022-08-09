---
to: src/pages/<%= pageName %>/index.tsx
---
import { Button } from 'antd';
import type { ReactNode } from 'react';
import React, { useRef } from 'react';
import { FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { TableListItem ,TableQueryParams} from './data.d';
import { getList } from './service';
import { history } from 'umi';
import style from './index.less';

const <%= h.changeCase.headerCase(pageName) %>: React.FC<any> = () => {
  const actionRef = useRef<ActionType>();

  // 处理新添加按钮点击
  const handleAdd = () => {
    console.log('新增')
  }

  // 点击列表事件
  const handleEdit = (text: ReactNode, node: TableListItem) => {
     console.log(text, node)
     history.push('')
  }

  // 删除
  const handleDelete = (text: ReactNode, node: TableListItem) => {
    console.log(text, node)
  }

  // 处理列表请求
  const handleRequest = async (params: any) => {
    const offset = (params.current - 1) * params.pageSize;
    const queryParams:TableQueryParams = {
      // TODO 查询参数
      ...params
    };
    const res = await getList(queryParams);
    const { list = [], totalCount = 0 } = res;
    const dataList: = list.map((item: any, index: number) => ({
      key: offset + index,
      index: offset + index + 1,
      ...item,
    }));
    return {
      data: dataList,
      total: totalCount
    };
  }

  // 列表数据
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      hideInSearch: true,
      valueType: 'text'
    },
    {
      title: '操作',
      hideInSearch: true,
      dataIndex: 'operate',
      valueType: 'text',
      render: (text, record) => (
        <template>
          <a
            className={style.operate}
            onClick={() => {
              handleEdit(text, record)
            }}>编辑</a>
          <a
            className={style.operate}
            onClick={() => {
              handleDelete(text, record)
            }}>删除</a>
        </template>
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable<TableListItem>
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 100
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={handleAdd}
          >
            <FormattedMessage id="pages.searchTable.<%= pageName %>" defaultMessage="新增" />
          </Button>
        ]}
        request={handleRequest}
        columns={columns}
      />
    </PageContainer>
  );
};

export default <%= h.changeCase.headerCase(pageName) %>;




