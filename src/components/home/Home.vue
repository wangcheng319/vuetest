<template>
    <div>
        <div class="checkBox shadow" v-for="(item, index) in checks" :key="index" :class="{checked:item.important == 0 ? true : false}">
            <input type="checkbox" v-model="isChecked" :value="item" @change="bindCheckBox(item)" style="margin-left:38px">
            <img src="../../assets/头像@2x.png" style="width: 50px;height: 50px;margin-left: 38px"/>
            <span style="margin-left: 9px">{{item.name}}</span>

            <label  class="radio-item" style="display: flex;align-items: center">
                <input type="radio" :name="item.name" value="重要" v-model="item.important" @change="bindRadio" class="radio-box" :disabled="item.important == 0 ? true:false">
                <span class="radio"></span>
                <span style="margin-left: 20px">重要</span>
            </label>

            <label class="radio-item" style="display: flex;align-items: center">
                <input type="radio" :name="item.name" value="次要" v-model="item.important" @change="bindRadio" class="radio-box" :disabled="item.important == 0 ? true:false">
                <span class="radio"></span>
                <span style="margin-left: 20px">次要</span>
            </label>

        </div>

        <TabBar />
    </div>
</template>

<script>
    import TabBar from '../TabBar'
    export default {
        name: "Home",
        components:{
            TabBar
        },
        data(){
            return{
                imgurl:"",
                isChecked: [],
                checks: [
                    {
                        name:"病有所医",
                        important:""
                    },
                    {
                        name:"赡养父母",
                        important:""
                    },
                    {
                        name:"退休生活",
                        important:""
                    },
                    {
                        name:"子女教育",
                        important:""
                    },
                    {
                        name:"买车换车",
                        important:""
                    },
                    {
                        name:"还清贷款",
                        important:""
                    },
                    {
                        name:"买房换房",
                        important:""
                    },
                    {
                        name:"旅游玩乐",
                        important:""
                    },
                ],
            }
        },
        computed:{

        },
        methods:{
            bindCheckBox(value){
                if (!value.important){
                    value.important = "重要"
                } else{
                    value.important = ""
                }
                window.console.log(JSON.stringify(this.isChecked))
            },

            bindRadio(){
                window.console.log(JSON.stringify(this.isChecked))
            },

            imgurl1() {
                // let value1 = value;
                // if (value1 === "病有所医"){
                //     this.imgurl = "../../assets/头像@2x.png"
                // }else{
                //     this.imgurl = "../../assets/.png"
                // }

                return "../../assets/头像@2x.png";
            }
        },
        watch: {

        },

        filters:{
            //过滤器,使用方式{{value|Up}} 或者<div v-bind:id="value | Up"></div>
            //可以用多个过滤器{{value | Up | Down}}
            Up:function (value) {
                return value+1
            },
            Down(value){
                return value-1
            }

        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    input[type='checkbox']{
        width: 20px;
        height: 20px;
        background-color: #fff;
        -webkit-appearance:none;
        border: 1px solid #c9c9c9;
        border-radius: 2px;
        outline: none;
    }

    .checkBox{
        display: flex;
        align-items: center;
        width:521px;
        height:70px;
        margin-top:35px;
    }
    .shadow{
        background:rgba(255,255,255,1);
        box-shadow:0px 4px 11px 2px rgba(206,213,221,0.89);
        border-radius:5px;
    }
    .checkBox input[type=checkbox]:checked{
        width: 24px;
        height: 24px;
        background: url("../../assets/checked.png")no-repeat center;
    }

    .checkBox input[type=checkbox]{
        width: 24px;
        height: 24px;
        background: url("../../assets/unchecked.png")no-repeat center;
    }



    .checked{
        /*background-color: #42b983;*/
        opacity: 0.5;
    }

    .radio-box{
        margin-left: 52px;
        padding: 0 20px;
    }

    .radio-item .radio{
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border:  3px solid gainsboro;
        cursor: pointer;
    }
    /*加号表示选择下一个兄弟元素*/
    .radio-item input:checked+.radio{
        border-color: dodgerblue;
    }

    .radio-item input:checked+.radio::after{
        content: "";
        width: 12px;
        height: 12px;
        background-color: dodgerblue;
        border-radius: 50%;
        display: block;
        margin-left: 4px;
        margin-top: 4px;
    }
    /*波浪号表示选择所有剩下的兄弟元素*/
    .radio-item input:checked~span{
        color: black;
        margin-left: 16px;
    }

    .radio-item input~span{
        color: gray;
        margin-left: 16px;
    }

    .radio-item input[type='radio']{
        display: none;
    }


</style>