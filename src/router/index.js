import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import fa from "element-ui/src/locale/lang/fa";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: {requireAuth: false}
      },
      {
        //修改密码
        path: '/pwdsetting',
        component: () => import( '../views/PwdSetting.vue'),
        meta: {requireAuth: false}
      },
      {
        //银证转账
        path: '/transfer',
        component: () => import( '../views/Transfer.vue'),
        meta: {requireAuth: false}
      },
      {
        //当日委托
        path: '/orderquery',
        component: () => import( '../views/OrderQuery.vue'),
        meta: {requireAuth: false}
      },
      {
        //当日成交
        path: '/tradequery',
        component: () => import( '../views/TradeQuery.vue'),
        meta: {requireAuth: false}
      },
      {
        //历史委托
        path: '/hisorderquery',
        component: () => import( '../views/HisOrderQuery.vue'),
        meta: {requireAuth: false}
      },
      {
        //历史成交
        path: '/histradequery',
        component: () => import( '../views/HisTradeQuery.vue'),
        meta: {requireAuth: false}
      },
    ]
  },
  {
    path: '/403',
    name: '403',
    component: () => import('../views/403.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if (to.meta.requireAuth){
    if (Boolean(sessionStorage.getItem('uid'))){
      next()
    }else {
      next({
        path:'/',
      })
    }
  }else {
    next()
  }
})

export default router
