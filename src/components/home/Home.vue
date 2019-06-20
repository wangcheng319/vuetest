<template>
    <div>
        this is home
        <TabBar />
    </div>
</template>

<script>
    import TabBar from '../TabBar'
    export default {
        name: "Home",
        components:{
            TabBar
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
</style>