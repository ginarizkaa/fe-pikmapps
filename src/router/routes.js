
const routes = [
  {
    path: '/',
    component: () => import('pages/signin/signin.vue'),
  },
  {
    path: '/signup',
    component: () => import('pages/signup/signup.vue'),
  },
  {
    path: '/preMenu',
    component: () => import('pages/preMenu/preMenu.vue')
  },
  {
    path: '/preMenu2',
    component: () => import('pages/preMenu2/preMenu2.vue')
  },
  {
    path: '/preMenu3',
    component: () => import('pages/preMenu3/preMenu3.vue')
  },
  {
    path: '/menu',
    component: () => import('pages/menu/menu.vue')
  },
  {
    path: '/layout',
    component: () => import('layouts/MyLayout.vue'),
  },
  {
    path: '/ptSoal',
    component: () => import('pages/ptSoal/ptSoal.vue')
  },
  {
    path: '/ptPoin',
    component: () => import('pages/ptPoin/ptPoin.vue')
  },
  {
    path: '/tryOut',
    component: () => import('pages/tryOut/tryOut.vue')
  },
  {
    path: '/toUTBK',
    component: () => import('pages/toUTBK/toUTBK.vue')
  },
  {
    path: '/bankSoal',
    component: () => import('pages/bankSoal/bankSoal.vue')
  },
  {
    path: '/suratMasaDepan',
    component: () => import('pages/suratMasaDepan/suratMasaDepan.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
