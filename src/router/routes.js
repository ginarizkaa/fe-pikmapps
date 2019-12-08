
const routes = [
  {
    path: '/wel',
    component: () => import('pages/welcomeSwipe/welcome.vue'),
  },
  {
    path: '/',
    component: () => import('pages/signin/signin.vue'),
  },
  {
    path: '/masukkanKode',
    component: () => import('pages/signin/masukkanKode.vue'),
  },
  {
    path: '/signup',
    component: () => import('pages/signin/biodata.vue'),
  },
  {
    path: '/preMenu',
    component: () => import('pages/signin/preMenu.vue')
  },
  {
    path: '/preMenu2',
    component: () => import('pages/signin/preMenu2.vue')
  },
  {
    path: '/preMenu3',
    component: () => import('pages/signin/preMenu3.vue')
  },
  {
    path: '/temanPikma',
    component: () => import('pages/temanPikma/temanPikma.vue')
  },
  {
    path: '',
    component: () => import('layouts/layout.vue'),
    children : [
      // {
      //   path: '/test',
      //   component: () => import('pages/test.vue'),
      //   name: 'modul'
      // },
      {
        path: '/belajar',
        component: () => import('pages/menu/belajar.vue'),
        name: 'belajar'
      },
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
      },
      {
        path: '/sbmptn/:title',
        component: () => import('pages/bankSoal/soal/sbmptn.vue'),
        name: 'bankSoal'
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
      },
      {
        path: '/grit',
        component: () => import('pages/menu/grit.vue'),
        name: 'mainmenu'
      },
      {
        path: '/grit/kd/:title',
        component: () => import('pages/grit/kenalDiri/kenalDiri.vue'),
        name: 'grit'
      },
      {
        path: '/grit/kd2/:title',
        component: () => import('pages/grit/kenalDiri/kenalDiri2.vue'),
        name: 'grit'
      },
      {
        path: '/grit/km/:title',
        component: () => import('pages/grit/kenalMinat/kenalMinat.vue'),
        name: 'grit'
      },
      {
        path: '/grit/m/:title',
        component: () => import('pages/grit/mimpi/mimpi.vue'),
        name: 'grit'
      },
      {
        path: '/grit/m2/:title',
        component: () => import('pages/grit/mimpi/mimpi2.vue'),
        name: 'grit'
      },
      {
        path: '/grit/saya/:title',
        component: () => import('pages/grit/saya/saya.vue'),
        name: 'grit'
      },
      {
        path: '/grit/surat/:title',
        component: () => import('pages/grit/surat/surat.vue'),
        name: 'grit'
      },
      {
        path: '/grit/ka/:title',
        component: () => import('pages/grit/kontakAlumni/kontakAlumni.vue'),
        name: 'grit'
      },
      // {
      //   path: '/grit/ar/:title',
      //   component: () => import('pages/grit/artikel/artikel.vue'),
      //   name: 'grit'
      // },
      {
        path: '/grit/kom/:title',
        component: () => import('pages/grit/komitmen/komitmen.vue'),
        name: 'grit'
      },
      {
        path: '/grit/galau/:title',
        component: () => import('pages/grit/galau/galau.vue'),
        name: 'grit'
      },
      {
        path: '/grit/tipsTrik/:title',
        component: () => import('pages/grit/tipsTrik/tipsTrik.vue'),
        name: 'grit'
      },
      {
        path: '/grit/sj/:title',
        component: () => import('pages/grit/susunJadwal/susunJadwal.vue'),
        name: 'grit'
      },
      {
        path: '/grit/ca/:title',
        component: () => import('pages/grit/ceritaAlumni/ceritaAlumni.vue'),
        name: 'grit'
      },
      {
        path: '/grit/ca2/:title',
        component: () => import('pages/grit/ceritaAlumni/ceritaAlumni2.vue'),
        name: 'grit'
      },
      
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
