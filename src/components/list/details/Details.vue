<template>
    <div>
        this is detail
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
        }
    }
</script>

<style scoped>

</style>