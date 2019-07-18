<template>
    <div style="display: flex;align-items: center" class="input-box" >
        <img src="../assets/faxian_.png" style="width: 20px">
        <input placeholder="请输入文字" v-if="show" class="text-input"  @focus="focusChange" @blur="focusChange" @autofocus="focusChange" >

        <input placeholder="请输入密码" style="line-height: 100px;height: 100px;background: lightblue;color: white;margin-top: 300px">

        <button @click="change">click</button>
    </div>
</template>

<script>
    export default {
        name: "inputdemo",
        data(){
            return{
                focused:false,
                show:true
            }
        },
        methods:{
            focusChange(target){
               if (target.type == 'focus'){
                   this.focused = true
               }else{
                   this.focused = false
               }
            },
            change(){
                this.show = !this.show
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .input-box{
        width:318px;
        height:45px;
        background:rgba(234,239,244,1);
        border:2px solid rgba(43,116,212,0);
        border-radius:5px;
        box-sizing: content-box;
    }

    .isfocus{
        width:320px;
        height:45px;
        background:rgba(255,255,255,1);
        border:2px solid rgba(43,116,212,1);
        border-radius:5px;
        box-sizing: content-box;
    }

    .text-input{
        outline: none;
        border: none;
        font-size: 18px;
        background: cornflowerblue;
        color: white;
        height: 45px;
        line-height: 45px;
    }

    img{
        margin: 14px 19px;
    }
</style>