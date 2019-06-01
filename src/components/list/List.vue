<template>
    <ul>
        <li v-for="(item,index) in items" :key="index" @click="itemClick(index)">
            <span>this is list{{item.message}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "List",
        methods:{
            itemClick(index){
                // eslint-disable-next-line no-console
                console.log(this.$router)
                //路由传值，通过name
                this.$router.push({ name: 'Details', params: { itemNo: index }});
            }
        },
        data() {
            return {
                items: [
                    {message: 'Foo'},
                    {message: 'Bar'},
                    {message: 'Foo'},
                    {message: 'Bar'},
                    {message: 'Foo'},
                    {message: 'Bar'},
                    {message: 'Foo'},
                    {message: 'Bar'},
                    {message: 'Foo'},
                    {message: 'Bar'},
                    {message: 'Foo'},
                    {message: 'Bar'},
                    {message: 'Foo'},
                    {message: 'Bar'},
                    {message: 'Foo'},
                    {message: 'Bar'},
                    {message: 'Foo'},
                    {message: 'Bar'},
                    {message: 'Foo'},
                    {message: 'Bar'},
                ]
            }
        }
    }
</script>

<style scoped>
    ul{
        padding-bottom: 56px;
    }
    li{
        background-color: #42b983;
        margin: 16px;
        border: yellowgreen 1px solid;
        border-radius: 10px;
        list-style-type: none;
        padding: 16px;
        box-shadow: 10px 10px 5px #2c3e50;
        color: #ffffff;
    }
</style>