<template>
    <div>
        this is me
        <img style="width: 30px;height: 30px;" src="../../assets/home.png">
        <!--父组件向子组件传值，@itemClick为父组件监听子组件发送的事件-->
        <sub-item v-bind:name-p="haha" @itemClick="click"></sub-item>

        <TabBar />
    </div>
</template>

<script>

    import SubItem from './SubItem'
    import TabBar from '../TabBar'
    export default {
        name: "Me",
        components:{
            SubItem,
            TabBar
        },
        data() {
            return {
                haha: "jack"
            };
        },
        methods: {
            click(index) {
                window.console.log(index)
            }
        }
    }
</script>

<style scoped>

</style>