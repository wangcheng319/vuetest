<template>
  <div>
    <router-view></router-view>
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
  methods:{
    
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
