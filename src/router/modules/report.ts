const dashboard: AuthRoute.Route = {
  name: 'report',
  path: '/report',
  component: 'basic',
  children: [
    {
      name: 'report_statistics',
      path: '/report/statistics',
      component: 'self',
      meta: {
        title: 'Statistics',
        requiresAuth: true,
        icon: 'icon-park-outline:analysis',
        permissions: ['admin']
      }
    },
    {
      name: 'report_reports',
      path: '/report/reports',
      component: 'self',
      meta: {
        title: 'Reports',
        requiresAuth: true,
        icon: 'icon-park-outline:workbench',
        permissions: ['admin']
      }
    }
  ],
  meta: {
    title: 'Report',
    icon: 'carbon:dashboard',
    order: 1
  }
};

export default dashboard;
