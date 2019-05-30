<template>
  <div id="app">
    <!-- 中间内容区域，     -->
    <router-view></router-view>
      <!--底部tab栏 ,v-show用于控制跳转到二级页面隐藏底部tab栏-->
      <footer v-show="$route.meta.navShow==undefined||$route.meta.navShow">
          <div class="tab-item" @click="goto(1)">
              <img src="./assets/tab_home.png">
              <span>首页</span>
          </div>
          <div class="tab-item" @click="goto(2)">
              <img src="./assets/tab_home.png">
              <span>列表</span>
          </div>
          <div class="tab-item" @click="goto(3)">
              <img src="./assets/tab_home.png">
              <span>发现</span>
          </div>
          <div class="tab-item" @click="goto(4)">
              <img src="./assets/tab_home.png">
              <span>我的</span>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
    data(){
      return{

      }
    },
  components: {

  },
    created(){
      this.goto(0)
    },
  methods:{
    goto(index){
      // eslint-disable-next-line no-console
        console.log(index)
      switch (index) {
        case 1:
          this.$router.push('/home')
          break
        case 2:
          this.$router.push("/list")
          break
        case 3:
          this.$router.push("/find")
          break
        case 4:
          this.$router.push("/me")
          break
      }
    }
  }
}
</script>

<style  scoped>
    *{
        padding: 0;
        margin: 0;
    }
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
</style>
