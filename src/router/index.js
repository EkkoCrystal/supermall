import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/home/Home.vue'),
    meta: { showTab: true }
  },
  {
    path:'/cart',
    name:'Cart',
    component:() => import('views/cart/Cart.vue'),
    meta:{ showTab:true }
  },
  {
    path:'/category',
    name:'Category',
    component:() => import('views/category/Category.vue'),
    meta:{ showTab:true }
  },
  {
    path:'/profile',
    name:'Profile',
    component:() => import('views/profile/Profile.vue'),
    meta:{ showTab:true }
  },
  {
    path:'/detail/',
    name:'Detail',
    component:() => import('views/detail/Detail.vue'),
    meta:{ showTab:false }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router