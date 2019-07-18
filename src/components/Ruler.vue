<template>
    <div class="relative">
<!--        <div class="mask-top absolute"></div>-->
<!--        <div class="mask-bottom absolute"></div>-->
        <div class="wheel-wrapper" ref="wrapper">
            <ul class="wheel-scroller">
                <li class="wheel-item" v-for="index in data">{{index}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    const EVENT_CHANGE = 'change'
    import BScroll from 'better-scroll'
    export default {
        props: {
            data: {
                type:Array,
                default:function(){
                    return [1,2,3,4,5,6,7,8,9,10]
                }
            },
            selectedIndex: {
                type:Number,
                default:0
            }
        },
        data() {
            return {

            }
        },
        mounted() {
            this.$nextTick(() => {
                this._createWheel().enable()
            })
        },
        methods: {
            _createWheel() {
                if (!this.wheels) {
                    const wheel = this.wheels = new BScroll(this.$refs.wrapper, {
                        wheel: {
                            selectedIndex: this.selectedIndex,
                            wheelWrapperClass: 'wheel-scroller',
                            wheelItemClass: 'wheel-item',
                            rotate: 0
                        },
                        observeDOM: false,
                        // startX:0,
                        scrollX:true,
                        scrollY:false,
                        eventPassthrough:'vertical'
                    })
                    wheel.on('scrollEnd', () => {
                        //滚动完成之后获取当前选取的索引值
                        this.$emit(EVENT_CHANGE,wheel.getSelectedIndex())
                        window.console.log(wheel.getSelectedIndex())
                    })
                } else {
                    this.wheels.refresh()
                }
                return this.wheels
            },
        }
    }
</script>
<style >
    /*.relative{*/
    /*    position: relative;*/
    /*}*/
    /*.absolute{*/
    /*    position: absolute;*/
    /*}*/
    /*.mask-top{*/
    /*    height:24px;*/
    /*    width:100%;*/
    /*    top:0;*/
    /*    border-bottom:1px solid red;*/
    /*}*/
    /*.mask-bottom{*/
    /*    height:24px;*/
    /*    width:100%;*/
    /*    top:24px;*/
    /*    border-bottom:1px solid red;*/
    /*    background:red;*/
    /*    z-index:-1;*/
    /*}*/
    /*.wheel-wrapper{*/
    /*    width: 100px;*/
    /*    height: 50px;*/
    /*    overflow: hidden;*/
    /*    white-space: nowrap;*/
    /*    display: inline-block;*/
    /*    border: 1px solid lightblue;*/
    /*    margin: 100px;*/
    /*    line-height: 50px;*/
    /*}*/

    /*.wheel-scroller{*/
    /*    !*margin-top:24px;*!*/
    /*}*/

    /*.wheel-item{*/
    /*    display: inline-block;*/
    /*    !*white-space: nowrap;*!*/
    /*    width: 30px;*/
    /*    background-color: #2B74D4;*/
    /*    color: white;*/
    /*    height: 50px;*/
    /*    margin: 1px;*/
    /*}*/
</style>