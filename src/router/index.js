import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_shouye from '../views/lanhu_shouye/index.vue'
import lanhu_shouye_wuzimokuaibiaoti from '../views/lanhu_shouye_wuzimokuaibiaoti/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/lanhu_shouye"
  },
  {
    path: '/lanhu_shouye',
    name: 'lanhu_shouye',
    component: lanhu_shouye
  },
  {
    path: '/lanhu_shouye_wuzimokuaibiaoti',
    name: 'lanhu_shouye_wuzimokuaibiaoti',
    component: lanhu_shouye_wuzimokuaibiaoti
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
