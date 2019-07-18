import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import Router from 'vue-router'
import routes from './router/router'
import VueX from 'vuex'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueX)
import Cube from 'cube-ui'

Vue.use(Cube)

const router = new Router({
  routes,
  scrollBehavior (to,from,next){
    window.console.log(to,from,next)
  }
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
