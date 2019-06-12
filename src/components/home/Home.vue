<template>
    <div>
        this is home
        <img src="../../assets/home.png">
        <p>{{api}}</p>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                api:process.env.VUE_APP_URL
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