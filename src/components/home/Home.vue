<template>
    <div>
        <label class="checkBox shadow" v-for="(item, index) in checks" :key="index" :class="{checked:item.important == 0 ? false : true}">
            <input type="checkbox" v-model="isChecked" :value="item" @change="bindCheckBox(item)" style="margin-left:38px">
            <img src="../../assets/头像@2x.png" style="width: 50px;height: 50px;margin-left: 38px"/>
            <span style="margin-left: 9px">{{item.name}}</span>
            <input type="radio" :name="item.name" value="重要" v-model="item.important" @change="bindRadio" class="radio-box" :disabled="item.important == 0 ? true:false">
            <label style="margin-left: 20px">重要</label>
            <input type="radio" :name="item.name" value="次要" v-model="item.important" @change="bindRadio" class="radio-box" :disabled="item.important == 0 ? true:false">
            <label style="margin-left: 20px">次要</label>
        </label>

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

    .checkBox input[type=radio]:checked{
        background: url("../../assets/checked.png")no-repeat center;
    }

    .checkBox input[type=radio]{
        background: url("../../assets/unchecked.png")no-repeat center;
    }

    .checked{
        /*background-color: #42b983;*/
    }

    .radio-box{
        margin-left: 52px;
    }
</style>