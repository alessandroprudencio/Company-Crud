import { IndexRouteName, IndexRoutePath, CompanyRouteName, CompanyRoutePath } from 'src/router/route'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: IndexRoutePath.Index,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: IndexRouteName.Index,
        component: () => import('pages/Index.vue')
      }
    ]
  },
  {
    path: CompanyRoutePath.List,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: CompanyRouteName.List,
        component: () => import('pages/company/List.vue')
      },
      {
        path: CompanyRoutePath.Create,
        name: CompanyRouteName.Create,
        component: () => import('pages/company/Form.vue'),
        meta: {
          create: true
        }
      },
      {
        path: CompanyRoutePath.Update,
        name: CompanyRouteName.Update,
        component: () => import('pages/company/Form.vue'),
        meta: {
          update: true
        }
      },
      {
        path: CompanyRoutePath.Show,
        name: CompanyRouteName.Show,
        component: () => import('pages/company/Form.vue'),
        meta: {
          show: true
        }
      }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
