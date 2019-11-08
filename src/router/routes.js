
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/firstPage',
    component: () => import('pages/firstPage/firstPage.vue')
  },
  {
    path: '/register',
    component: () => import('pages/register/register.vue')
  },
  {
    path: '/citaCita',
    component: () => import('pages/citaCita/citaCita.vue')
  },
  {
    path: '/salam',
    component: () => import('pages/salam/salam.vue')
  },
  {
    path: '/mulai',
    component: () => import('pages/mulai/mulai.vue')
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
