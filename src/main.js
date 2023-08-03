// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/iconfont/iconfont.css'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'
import Vuex from 'vuex'
import lodash from 'lodash'
import VueAMap from 'vue-amap';
import global from './global/global.js'
import report from './components/admin/statistics/reportOption.js'
import * as echarts from 'echarts/lib/echarts'
import 'echarts-wordcloud';
import dtime from 'time-formater'
import validator from 'validator'
import md5 from 'blueimp-md5'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import {ApolloLink} from 'apollo-link'
import UUID from 'vue-uuid'
import {onError} from 'apollo-link-error'

import preventReClick from './global/tools/preventReClick' //防多次点击，重复提交

// HTTP connection to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: global.baseUrl+'graphql',
})

// Cache implementation
// const cache = new InMemoryCache()

// Create the apollo client

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: global.getToken() ? {
      'authorization': ('Bearer '+global.getToken())
    } : null
  })

  return forward(operation).map(response => {
    return response
  })
})
const authLink = middlewareLink.concat(httpLink)

const errorLink = onError(({networkError, response}) => {
  let errorMsg = ''
  if (!!response && response.errors !== undefined && response.errors.length) {
    errorMsg = !response.errors[0].message ? '服务器错误' : response.errors[0].message
  }
  if (!!networkError) {
    errorMsg = networkError.message
    if (networkError.result !== undefined) {
      errorMsg = networkError.result.success === false ? networkError.result.message : networkError.result.error
    }
  }
  // if (!!errorMsg) {
  //   vue.prototype.$alert(errorMsg)
  // }
})
const apolloClient = new ApolloClient({
  link: errorLink.concat(authLink),
  cache: new InMemoryCache({
    addTypename: false
  }),
  defaultOptions:{
    query: {fetchPolicy: 'no-cache'},
    mutate: {fetchPolicy: 'no-cache'},
    watchQuery: {fetchPolicy: 'no-cache'}
  }
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
Vue.use(UUID);
Vue.use(VueApollo)  
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(axios)
Vue.use(Vuex)
Vue.use(VueAMap);
Vue.prototype.$validator = validator
Vue.prototype.$global = global
Vue.prototype.$report = report
Vue.prototype.$lodash = lodash
Vue.prototype.$echarts = echarts
Vue.prototype.$dtime = dtime
Vue.prototype.$md5 = md5
// 防止多次点击

Vue.use(preventReClick)

VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'de558c7311560a40dc382b06d00fb9eb',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4  
  v: '1.4.4'
});
new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
}).$mount('#app')

