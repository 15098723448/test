import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/receiptList'
import receiptDetail from '@/views/receiptDetail/receiptDetail.vue'
import deletePerson from '@/views/deletePerson/deletePerson.vue'
import delPerMes from '@/views/delPerMes/delPerMes.vue'
import changePerson from '@/views/changePerson/changePerson.vue'
import applicationRecords from '@/views/applicationRecords/applicationRecords.vue'
import addPerson from '@/views/addPerson/addPerson.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '团单列表'
    }
  },
  {
    path: '/receiptDetail',
    name: 'ReceiptDetail',
    component: receiptDetail,
    meta: {
      title: '详细信息'
    }
  },
  {
    path: '/deletePerson',
    name: 'DeletePerson',
    component: deletePerson,
    meta: {
      title: '减人'
    }
  },
  // 陈凯元加的start
  {
    path: '/addPerson',
    name: 'addPerson',
    component: addPerson,
    meta: {
      title: '加人'
    }
  },
  // end
  {
    path: '/delPerMes',
    name: 'DelPerMes',
    component: delPerMes,
    meta: {
      title: '减出人员信息'
    }
  },
  {
    path: '/changePerson',
    name: 'ChangePerson',
    component: changePerson,
    meta: {
      title: '填写换人信息'
    }
  },
  {
    path: '/applicationRecords',
    name: 'ApplicationRecords',
    component: applicationRecords,
    meta: {
      title: '申请记录'
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
