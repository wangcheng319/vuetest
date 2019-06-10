<template>
  <div id="app">
    <router-view></router-view>
      <footer v-show="$route.meta.navShow==undefined||$route.meta.navShow">
          <div class="tab-item" @click="goto(1)">
              <img :src = "'/home' == $route.path ? this.tabBarImages[0].selected:this.tabBarImages[0].normal">
              <span :class="{selected:'/home'==$route.path}">首页</span>
          </div>
          <div class="tab-item" @click="goto(2)">
              <img :src = "'/list' == $route.path ? this.tabBarImages[1].selected:this.tabBarImages[1].normal">
              <span :class="{selected: '/list'==$route.path}">列表</span>
          </div>
          <div class="tab-item" @click="goto(3)">
              <img :src = "'/find' == $route.path ? this.tabBarImages[2].selected:this.tabBarImages[2].normal">
              <span :class="{selected:'/find'==$route.path}">发现</span>
          </div>
          <div class="tab-item" @click="goto(4)">
              <img :src = "'/me' == $route.path ? this.tabBarImages[3].selected:this.tabBarImages[3].normal">
              <span :class="{selected:'/me'==$route.path}">我的1</span>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
    data(){
      return{
        tabBarImages:[
            {normal:require('./assets/home.png'),selected:require('./assets/home_.png')},
            {normal:require('./assets/list.png'),selected:require('./assets/list_.png')},
            {normal:require('./assets/faxian.png'),selected:require('./assets/faxian_.png')},
            {normal:require('./assets/wode.png'),selected:require('./assets/wode_.png')}
        ],
      }
    },
  components: {

  },
  methods:{
    goto(index){
      // eslint-disable-next-line no-console
        console.log(index)
      switch (index) {
        case 1:
          this.$router.replace('/home')
          break
        case 2:
          this.$router.replace("/list")
          break
        case 3:
          this.$router.replace("/find")
          break
        case 4:
          this.$router.replace("/me")
          break
      }
    }
  }
}
</script>

<style  scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}
    html,body {
        width: 100%;
        height: 100%;
    }
  footer{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 48px;
      background-color: white;
      border-top: #f5f5f5 1px solid;
      padding-bottom: 6px;
  }

.tab-item{
    float: left;
    width: 25%;
    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
    span{
        margin-top: 3px;
        color: #333333;
    }
    img{
        width: 20px;
        height: 20px;
    }

    .selected{
        color: #1296db;
    }
</style>
