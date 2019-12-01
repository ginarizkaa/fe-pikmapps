
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
    component: () => import('pages/menu/preMenu/preMenu.vue')
  },
  {
    path: '/preMenu2',
    component: () => import('pages/menu/preMenu2/preMenu2.vue')
  },
  {
    path: '/preMenu3',
    component: () => import('pages/menu/preMenu3/preMenu3.vue')
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
        path: '/mj/:submenu/:title',
        component: () => import('pages/jurusan/jurusan.vue'),
        name: 'modul'
      },
      {
        path: '/pj/:submenu/:title',
        component: () => import('pages/jurusan/jurusan.vue'),
        name: 'postTest'
      },
      {
        path: '/toj/:submenu/:title',
        component: () => import('pages/jurusan/jurusan.vue'),
        name: 'tryOut'
      },
      {
        path: '/mpipa/:submenu/:title',
        component: () => import('pages/pelajaran/mpipa.vue'),
        name: 'modul'
      },
      {
        path: '/mpips/:submenu/:title',
        component: () => import('pages/pelajaran/mpips.vue'),
        name: 'modul'
      },
      {
        path: '/ppipa/:submenu/:title',
        component: () => import('pages/pelajaran/mpipa.vue'),
        name: 'postTest'
      },
      {
        path: '/ppips/:submenu/:title',
        component: () => import('pages/pelajaran/mpips.vue'),
        name: 'postTest'
      },
      {
        path: '/fisika10/:title',
        component: () => import('pages/pelajaran/kelas10/fisika/fisika10.vue'),
        name: 'modul'
      },
      {
        path: '/mf10bab1/:title',
        component: () => import('pages/materi/kelas10/fisika/bab1.vue'),
        name: 'modul'
      },
      {
        path: '/fisika9/:submenu/:title',
        component: () => import('pages/pelajaran/kelas9/fisika/fisika9.vue'),
        name: 'modul'
      },
      {
        path: '/mp/:submenu/:title',
        component: () => import('pages/pelajaran/mp.vue'),
        name: 'modul'
      },
      {
        path: '/pp/:submenu/:title',
        component: () => import('pages/pelajaran/mp.vue'),
        name: 'postTest'
      },
      {
        path: '/pt/:title',
        component: () => import('pages/postTest/postTest.vue'),
        name: 'postTest'
      },
      {
        path: '/pt/f9bab1/:title',
        component: () => import('pages/postTest/ptSoal/ptSoal.vue')
      },
      {
        path: '/bankSoal/:title',
        component: () => import('pages/bankSoal/bankSoal.vue'),
        name: 'modul'
      },
      {
        path: '/tryOut',
        component: () => import('pages/tryOut/tryOut.vue')
      },
      {
        path: '/toUTBK',
        component: () => import('pages/tryOut/toUTBK/toUTBK.vue')
      },
      {
        path: '/toUTBKSoal',
        component: () => import('pages/tryOut/toUTBK/soal/toUTBKSoal.vue')
      },
      {
        path: '/toUTBK2',
        component: () => import('pages/tryOut/toUTBK/toUTBK2.vue')
      },
      {
        path: '/toUN',
        component: () => import('pages/tryOut/toUN/toUN.vue')
      }
      
    ]
  },
  
  {
    path: '/ptPoin',
    component: () => import('pages/ptPoin/ptPoin.vue')
  },
  
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
