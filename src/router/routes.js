
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
        path: '/mj/:title',
        component: () => import('pages/jurusan/mj.vue'),
        name: 'modul'
      },
      {
        path: '/mpipa/:title',
        component: () => import('pages/pelajaran/mpipa.vue'),
        name: 'modul'
      },
      {
        path: '/mpips/:title',
        component: () => import('pages/pelajaran/mpips.vue'),
        name: 'modul'
      },
      {
        path: '/fisika10/:title',
        component: () => import('pages/pelajaran/fisika/kelas10/fisika10.vue'),
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
