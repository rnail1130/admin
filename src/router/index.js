import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layouts'

Vue.use(Router)
// 世界上只有一种真正的英雄主义，那就是在认清生活的真相后依然热爱生活。

// 静态路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    hidden: true,
    component: Layout,
    children: [
      {
        name: 'exception404',
        path: '',
        meta: {
          title: '404'
        },
        component: () => import('@/views/exception/exception404')
      }
    ]
  }
]
// 动态鉴权路由
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
          title: '首页',
          icon: 'fill'
        }
      }
    ]
  },
  // -----------------------------------------------------------------------------------------
  {
    path: '/system',
    redirect: '/system/sysuser',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: 'setting',
      auth: ['system']
    },
    children: [
      {
        name: 'sysuser',
        path: 'sysuser',
        component: () => import('@/views/system/sysuser'),
        meta: {
          title: '角色管理',
          auth: ['sysuser']
        }
      },
      {
        name: 'douser',
        path: 'douser',
        component: () => import('@/views/system/douser'),
        meta: {
          title: '操作员管理',
          auth: ['douser']
        }
      },
      {
        name: 'log',
        path: 'log',
        component: () => import('@/views/system/log'),
        meta: {
          title: '日志管理',
          auth: ['log']
        }
      }
    ]
  },
  {
    path: '/personcard',
    redirect: '/personcard/management',
    component: Layout,
    meta: {
      title: '市民卡管理',
      icon: 'cardl',
      auth: ['personcard']
    },
    children: [
      {
        name: 'management',
        path: 'management',
        component: () => import('@/views/personcard/management'),
        meta: {
          title: '用户管理',
          auth: ['management']
        }
      },
      {
        name: 'certification',
        path: 'certification',
        component: () => import('@/views/personcard/certification'),
        meta: {
          title: '手动认证管理',
          auth: ['certification']
        }
      },
      {
        name: 'userinfo',
        path: 'userinfo',
        component: () => import('@/views/personcard/userinfo'),
        meta: {
          title: '市民信息管理',
          auth: ['userinfo']
        }
      },
      {
        name: 'vircard',
        path: 'vircard',
        component: () => import('@/views/personcard/vircard'),
        meta: {
          title: '实体卡管理',
          auth: ['userinfo']
        }
      }
    ]
  },
  {
    path: '/merchants',
    redirect: '/merchants/management',
    component: Layout,
    meta: {
      title: '商户信息管理',
      icon: 'shop',
      auth: ['merchants']
    },
    children: [
      {
        name: 'shopper',
        path: 'shopper',
        component: () => import('@/views/merchants/shopper'),
        meta: {
          title: '商户管理',
          auth: ['shopper']
        }
      },
      {
        name: 'terminal',
        path: 'terminal',
        component: () => import('@/views/merchants/terminal'),
        meta: {
          title: '终端管理',
          auth: ['terminal']
        }
      },
      {
        name: 'history',
        path: 'history',
        component: () => import('@/views/merchants/history'),
        meta: {
          title: '商户流水查询',
          auth: ['history']
        }
      }
    ]
  },
  {
    path: '/ticket',
    redirect: '/ticket/product',
    component: Layout,
    meta: {
      title: '零售票券',
      icon: 'linshou',
      auth: ['ticket']
    },
    children: [
      {
        name: 'product',
        path: 'product',
        component: () => import('@/views/ticket/product'),
        meta: {
          title: '产品管理',
          auth: ['product']
        }
      },
      {
        name: 'order',
        path: 'order',
        component: () => import('@/views/ticket/order'),
        meta: {
          title: '订单管理',
          auth: ['order']
        }
      },
      {
        name: 'settlement',
        path: 'settlement',
        component: () => import('@/views/ticket/settlement'),
        meta: {
          title: '结算单管理',
          auth: ['settlement']
        }
      }
    ]
  },
  {
    path: '/app',
    redirect: '/app/product',
    component: Layout,
    meta: {
      title: 'APP数据管理',
      icon: 'app',
      auth: ['app']
    },
    children: [
      {
        name: 'new',
        path: 'new',
        component: () => import('@/views/app/new'),
        meta: {
          title: '新闻文章管理',
          auth: ['new']
        }
      },
      {
        name: 'ad',
        path: 'ad',
        component: () => import('@/views/app/ad'),
        meta: {
          title: '广告管理',
          auth: ['ad']
        }
      },
      {
        name: 'lmessage',
        path: 'lmessage',
        component: () => import('@/views/app/lmessage'),
        meta: {
          title: '留言管理',
          auth: ['lmessage']
        }
      }
    ]
  },
  // -----------------------------------------------------------------------------------------
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

// 生成路由实例
const createRouter = () => new Router({
  mode: 'history',
  base: '/e-admin-vue/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

 // reset router
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
