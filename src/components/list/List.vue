<template>
    <div class="content" >
        <div style="height: 200px;background-color: antiquewhite;text-align: center;line-height: 200px">
            banner
        </div>
        <header :class="isFixed == true ? 'isFixed':'unFixed'">
            <ul>
                <li v-for="(item,index) in tabs" :key="index" :class="isFixed == true ? 'mid_tab_fixed':'mid_tab_unfixed'">
                    <span>{{item.tabName}}</span>
                </li>
            </ul>
        </header>
        <div class="list-wrapper" ref="wrapper">
            <ul class="lists">
                <li v-for="(item,index) in items" :key="index" @click="itemClick(index)" class="list_item">
                    <span>this is list{{item.message}}</span>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import Bscroll from '@better-scroll/core'

    export default {
        name: "List",
        methods:{
            itemClick(index){
                // eslint-disable-next-line no-console
                console.log(this.$router)
                //路由传值，通过name
                this.$router.push({ name: 'Details', params: { itemNo: index }});
            },
            //监听页面滚动，判断是否吸顶
            onScroll(){
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                window.console.log("top:"+this.scrollTop)
                if (this.scrollTop < 200){
                    this.isFixed = false
                }else{
                    this.isFixed = true
                }
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
                ],
                tabs:[
                    {
                        tabName:'tab1'
                    },
                    {
                        tabName:'tab2'
                    },{
                        tabName:'tab3'
                    },{
                        tabName:'tab4'
                    }
                ],
                scrollTop : 0,
                isFixed :false
            }
        },
        mounted() {
            window.addEventListener("scroll",this.onScroll)

            this.$nextTick(() => {
                this.scroll = new Bscroll(this.$refs.wrapper, {})
            })
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .content{
        width: 100%;
        height: 100%;
    }

    .lists{
        padding-bottom: 56px;
    }
    .list_item{
        background-color: #42b983;
        margin: 16px;
        border: yellowgreen 1px solid;
        border-radius: 10px;
        list-style-type: none;
        padding: 16px;
        box-shadow: 10px 10px 5px #2c3e50;
        color: #ffffff;
    }
    .isFixed{
        position:fixed;
        background-color:#1296db;
        top:0;
        z-index:999;
        width: 100%;
        color: white;
        height: 40px;
        line-height: 40px;
    }
    .unFixed{
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin-top: 8px;
    }
    .mid_tab_fixed{
        display: flex;
        width: 25%;
        float: left;
        height: 40px;
        line-height: 40px;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        background-color: #1296db;
    }

    .mid_tab_unfixed{
        display: flex;
        width: 25%;
        float: left;
        height: 40px;
        line-height: 40px;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        background-color: bisque;
    }
</style>