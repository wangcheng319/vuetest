<template>
    <div @click="itemClick">我是来自子组件{{this.nameP}}</div>
</template>

<!--父子组件之间的通信-->
<script>
    export default {
        name: "SubItem",
        /*props 获取父组件传递过来的参数*/
        props:['nameP'],
        methods:{
            itemClick(){
                //子组件发送事件，前面为事件名，后面为参数
                this.$emit('itemClick',9)
            }
        }
    }
</script>

<style scoped>

</style>