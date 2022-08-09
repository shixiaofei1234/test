const routesConfig = [
  {
    path: '/menuOne',
    name: 'menuOne',
    component: '@/layouts',
    routes: [
      {
        // 默认主页
        path: '/menuOne',
        accessKey: '/menuOne',
        hideInMenu: true,
        component: './menuOne',
      },
      {
        path: '/menuOne/menuSubOne',
        name: 'menuSubOne',
        component: './menuOne/menuSubOne',
      },
      {
        path: '/menuOne/menuSubOne1',
        name: 'menuSubOne1',
        component: './menuOne/menuSubOne1',
      },
      {
        hideInMenu: true,
        component: './404',
      },
    ],
  },
  {
    path: '/menuTwo',
    name: 'menuTwo',
    component: '@/layouts',
    routes: [
      {
        // 默认主页
        path: '/menuTwo',
        accessKey: '/menuTwo',
        hideInMenu: true,
        component: './menuTwo',
      },
      {
        path: '/menuTwo/menuSubTwo',
        name: 'menuSubTwo',
        component: './menuTwo/menuSubTwo',
      },
      {
        path: '/menuTwo/menuSubTwo1',
        name: 'menuSubTwo1',
        component: './menuTwo/menuSubTwo1',
      },
      {
        hideInMenu: true,
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];

function routesTraverse(oriRoutesData: any[], callback: (data: any) => void) {
  oriRoutesData.forEach((item: any) => {
    callback(item);
    if (item?.routes?.length > 0) {
      routesTraverse(item.routes, callback);
    }
  });
}

routesTraverse(routesConfig, (item: any) => {
  if (item.component === './404' || item.component === './403') {
    item.access = false;
    return;
  }
  if (item.access !== false) {
    item.access = 'urlAccess';
  }
});

// console.log('routesConfig:', routesConfig);

export default routesConfig;

export function getMenusRouteConfig(data?: any[]): any[] {
  return (
    (data || routesConfig)
      //.filter((item: any) => item.accessKey || (item.path && !item.hideInMenu))
      .map((item) => {
        return {
          path: item.path,
          accessKey: item.accessKey,
          hideInMenu: item.hideInMenu,
          hideChildrenInMenu: item.hideChildrenInMenu,
          name: item.name,
          component: item.component,
          routes:
            item.routes && item.routes.length > 0 ? getMenusRouteConfig(item.routes) : undefined,
        };
      })
  );
}
