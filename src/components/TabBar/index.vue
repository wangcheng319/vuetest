<template>
    <footer id="footer">
        <ul>
            <router-link tag = 'li' to = '/home'>

                <span>首页</span>
            </router-link>

            <router-link tag = 'li' to = '/list'>
                <span >列表</span>
            </router-link >
            <router-link tag = 'li' to = '/find'>

                <span >发现</span>
            </router-link>
            <router-link tag = 'li' to = '/me'>

                <span>我的</span>
            </router-link>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    *{
        padding: 0;
    }
#footer{
    width: 100%;
    height: 50px;
    background: white;
    border-top: 2px #1296db solid;
    position: fixed;
    left: 0;
    bottom: 0;
}

#footer ul{display: flex;text-align: center;height: 50px;align-items: center;list-style: none}
#footer ul li{ flex: 1;height: 40px}
#footer ul li.active{color: red}
#footer ul li.router-link-active{color: red}
</style>