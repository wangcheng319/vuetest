<template>
    <div>
        this is home
        <div>
            {{this.value | Up}}
        </div>
        <TabBar />
    </div>
</template>

<script>
    import TabBar from '../TabBar'
    export default {
        name: "Home",
        data(){
            return{
                value:3
            }
        },
        components:{
            TabBar
        },
        filters:{
            //过滤器,使用方式{{value|Up}} 或者<div v-bind:id="value | Up"></div>
            //可以用多个过滤器{{value | Up | Down}}
            Up:function (value) {
                return value+1
            },
            Down(value){
                return value-1
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
</style>