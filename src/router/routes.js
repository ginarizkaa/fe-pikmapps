
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
    path: '',
    component: () => import('layouts/layout.vue'),
    children : [
      {
        path: '/menu',
        component: () => import('pages/menu/menu.vue'),
        name: 'mainmenu'
      },
      {
        path: '/modul/:title',
        component: () => import('pages/modul/modul.vue'),
        name: 'modul'
      },
      {
        path: '/jmodul/:title',
        component: () => import('pages/jurusan/jmodul.vue'),
        name: 'modul'
      },
      {
        path: '/mjk9/:title',
        component: () => import('pages/jurusan/kelas9/mjk9.vue'),
        name: 'modul'
      },
      {
        path: '/mjk10/:title',
        component: () => import('pages/jurusan/kelas10/mjk10.vue'),
        name: 'modul'
      },
      {
        path: '/mjk11/:title',
        component: () => import('pages/jurusan/kelas11/mjk11.vue'),
        name: 'modul'
      },
      {
        path: '/mjk12/:title',
        component: () => import('pages/jurusan/kelas12/mjk12.vue'),
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
