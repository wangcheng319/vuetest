import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './router/router'
import VueX from 'vuex'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueX)

const router = new Router({
  routes
})

//用于做各种路由判断
router.beforeEach((to,from,next)=>{
  // if (to.name === 'me'){
  //   router.push('/login',)
  // }
  next();

})

new Vue({
  router,
    runtimeCompiler: true,
  render: h => h(App),
}).$mount('#app')
