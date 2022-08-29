import { request } from '../request';
import { routeModel } from '../'

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return request.post<boolean>('/getSmsCode', { phone });
}

/**
 * 登录
 * @param email - 用户名
 * @param password - 密码
 */
export function fetchLogin(email: string, password: string) {
  return request.post<ApiAuth.Token>('/login', { email, password });
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get<ApiAuth.UserInfo>('/user');
}

export function signOut() {
  return request.post<boolean>('/signOut');
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes(userId: string) {
       return {
    code: 200,
    message: "ok",
    data: {
      routes: [
        {
          name: 'report',
          path: '/report',
          component: 'basic',
          children: [
            {
              name: 'report_reports',
              path: '/report/reports',
              component: 'self',
              meta: {
                title: 'Report',
                requiresAuth: true,
                icon: 'icon-park-outline:analysis'
              }
            },
            {
              name: 'report_statistics',
              path: '/report/statistics',
              component: 'self',
              meta: {
                title: 'Statistics',
                requiresAuth: true,
                icon: 'icon-park-outline:workbench'
              }
            }
          ],
          meta: {
            title: 'Report',
            icon: 'carbon:dashboard',
            order: 1
          }
        },
        {
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
        }
      ],
      home: "report_reports",
    },
  };
}

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
  return request.post<ApiAuth.Token>('/updateToken', { refreshToken });
}
