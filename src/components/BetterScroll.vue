<template>
    <div class="wheel-scroller" ref="wrapper">
        <ul class="content" ref="content">
            <li class="wheel-item">1</li>
            <li class="wheel-item">2</li>
            <li class="wheel-item">3</li>
            <li class="wheel-item">4</li>
            <li class="wheel-item">5</li>
            <li class="wheel-item">6</li>
            <li class="wheel-item">7</li>
            <li class="wheel-item">8</li>
            <li class="wheel-item">9</li>
            <li class="wheel-item">0</li>
        </ul>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "BetterScroll",
        mounted() {
            this.$nextTick(() => {
                this._createWheel()
            })
        },
        data(){
            return{
                selectedIndex:0
            }
        },
        methods:{
            _createWheel(){
                this.$nextTick(()=>{
                    if (!this.scroll) {
                        this.$refs.content.style.width = 100 + "px";
                        this.scroll=new BScroll(this.$refs.wrapper, {
                            // wheel: {
                            //     selectedIndex: this.selectedIndex,
                            //     wheelWrapperClass: 'wheel-scroller',
                            //     wheelItemClass: 'wheel-item',
                            //     rotate: 0
                            // },
                            observeDOM: false,
                            startX:0,
                            click:true,
                            scrollX:true,
                            eventPassthrough:'vertical'
                        })
                        this.scroll.on('scrollEnd', (b) => {
                            //滚动完成之后获取当前选取的索引值
                            // this.$emit(EVENT_CHANGE,wheel.getSelectedIndex())
                            window.console.log("==="+b.x+"   "+b.y)
                        })
                    }else{
                        this.scroll.refresh()
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .wheel-scroller{
        width: 30px;
        height: 50px;
        border: 1px solid rebeccapurple;
        margin: 50px 0 50px 100px;
    }
    .content{
        white-space: nowrap;
    }
    .wheel-item{
        display: inline-block;
        width: 30px;
        line-height: 50px;
        height: 50px;
        border: 1px solid lightblue;
        /*float: left;*/
        white-space: nowrap;
    }
</style>