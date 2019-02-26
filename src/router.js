import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import Login from './views/Login.vue'
import Regist from './views/regist.vue'
import Personal from './views/Personal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ './views/About.vue')
    }, {
      path: '/Test',
      name: 'test',
      component: Test

    }, {
      path: '/Regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    }, {
      path: '/Personal',
      name: 'personal',
      component: Personal
    }
  ]
})