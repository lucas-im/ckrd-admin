const management: AuthRoute.Route = {
  name: 'management',
  path: '/management',
  component: 'basic',
  children: [
    {
      name: 'management_buy_sell',
      path: '/management/buy/sell',
      component: 'self',
      meta: {
        title: 'Buy & Sell',
        requiresAuth: true,
        icon: 'ic:baseline-security'
      }
    },
    {
      name: 'management_prem_content',
      path: '/management/prem/content',
      component: 'self',
      meta: {
        title: 'Premium Contents',
        requiresAuth: true,
        icon: 'carbon:user-role',
        permissions: ['admin']
      }
    },
    {
      name: 'management_user',
      path: '/management/user',
      component: 'self',
      meta: {
        title: 'Users',
        requiresAuth: true,
        icon: 'ic:round-manage-accounts'
      }
    },
    {
      name: 'management_prem_req',
      path: '/management/prem/req',
      component: 'self',
      meta: {
        title: 'Premium Requests',
        requiresAuth: true,
        icon: 'material-symbols:route'
      }
    }
  ],
  meta: {
    title: 'Management',
    icon: 'carbon:cloud-service-management',
    order: 9
  }
};

export default management;
