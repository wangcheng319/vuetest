<template>
    <div>
        <div @click="itemClick">父组件传递过来的：{{this.nameP}}</div>

        <button @click="toggle">动画-向左移动</button>
        <!--动画都包裹在transition里面，name相当于重新命名-->
        <transition name="right" >
            <div class="to-right" v-show="isshow"></div>
        </transition>
    </div>

</template>

<!--父子组件之间的通信-->
<script>
    export default {
        name: "SubItem",
        /*props 获取父组件传递过来的参数*/
        props:['nameP'],
        data(){
            return{
                isshow : false
            }
        },
        methods:{
            itemClick(){
                //子组件发送事件，前面为事件名，后面为参数
                this.$emit('itemClick','我是子组件传递过来的参数')
            },
            toggle() {
                this.isshow = !this.isshow;
            }
        }
    }
</script>

<style scoped>
    .to-right{
        width: 100px;
        height: 100px;
        background-color: aqua;
    }

    .right-enter,right-leave-to{
        margin-left: 100px;
        transition: 3s;
    }

    .right-enter-to,right-leave{
        margin-left: 30px;
        transition: 3s;
    }



</style>