<template>
    <div class="content">
        <h3>登录</h3>
        <div :class="{loginform:loginform}">
            <span>用户名：</span>
            <input placeholder="请输入用户名" v-model="userName" class="inputLayout">
        </div>
        <div :class="{loginform:loginform}">
            <span>密码：</span>
            <input placeholder="请输入密码" v-model="passWd" class="inputLayout" type="password">
        </div>
        <button @click="login" class="loginBtn">登录</button>
    </div>
</template>

<script>
    import api from '../api'
    export default {
        name: "Login",

        data(){
            return{
                userName:"",
                passWd:"",
                loginform:true
            }
        },
        methods:{
            login(){
                if (this.userName.length == 0 || this.userName !== "jack"){
                    window.console.log('用户名不正确')
                    return;
                }

                if (this.passWd.length == 0 || this.passWd !== "123"){
                    window.console.log('密码不正确')
                    return;
                }

                window.console.log(api.LOGIN)

                this.$router.push("/home")
            }
        }
    }
</script>

<style scoped>
    .content{
        text-align: center;
    }

    h3{
        text-align: center;
    }

    .loginform{
        margin-top: 16px;
        padding: 16px;
        border-radius: 5px;
        border: aqua 1px solid;
    }

    .inputLayout{
        outline: 0 none;
    }

    .loginBtn{
        background-color: #1296db;
        text-align: center;
        color: white;
        width: 50%;
        height: 46px;
        margin: 16px;
        outline: 0 none;
        font-size: 18px;
    }

</style>