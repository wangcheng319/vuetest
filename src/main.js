import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './router/router'

Vue.config.productionTip = false
Vue.use(Router)
const router = new Router({
  routes
})

//用于做各种路由判断
router.beforeEach((to,from,next)=>{
  if (to.name === 'me'){
    router.push('/login',)
  }
  next();

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
