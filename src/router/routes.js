
const routes = [
  {
    path: '/signin',
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
    path: '',
    component: () => import('layouts/layout.vue'),
    children : [
      {
        path: '/test',
        component: () => import('pages/test.vue'),
        name: 'modul'
      },
      {
        path: '/',
        component: () => import('pages/menu/menu.vue'),
        name: 'mainmenu'
      },
      {
        path: '/modul/:title',
        component: () => import('pages/modul/modul.vue'),
        name: 'modul'
      },
      {
        path: '/mjk/:title',
        component: () => import('pages/jurusan/mjk.vue'),
        name: 'modul'
      },
      {
        path: '/mpkipa/:title',
        component: () => import('pages/pelajaran/mpkipa.vue'),
        name: 'modul'
      },
      {
        path: '/mpkips/:title',
        component: () => import('pages/pelajaran/mpkips.vue'),
        name: 'modul'
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
