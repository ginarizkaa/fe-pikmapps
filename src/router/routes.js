
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
    path: '/layout',
    component: () => import('layouts/mainmenu.vue'),
    children : [
      {
        path: '/menu',
        component: () => import('pages/menu/menu.vue')
      },
    ]
  },
  {
    path: '/lmodul',
    component: () => import('layouts/lmodul.vue'),
    children : [
      {
        path: '/modul',
        component: () => import('pages/modul/modul.vue')
      },
    ]
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
