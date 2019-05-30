<template>
    <div>
        你选择了：{{this.itemNo}}
        <button @click="back">返回</button>
    </div>


</template>

<script>
    export default {
        name: "Details",
        methods:{
            back() {
                if (history.length>1){
                    history.back()
                }
            }
        },
        data(){
            return{
                //获取路由参数
                itemNo : this.$route.params.itemNo
            }
        },
        created() {
            console.log(this.$route)
        }

    }
</script>

<style scoped>

    button{
        width: 50px;
        height: 30px;
        background-color: aquamarine;
        color: white;
        text-align: center;
        border-radius: 8px;
        margin: 16px;
    }

</style>