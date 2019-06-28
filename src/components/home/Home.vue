<template>
    <div>
        <label class="checkBox shadow" v-for="(item, index) in checks" :key="index">
            <input type="checkbox" v-model="isChecked" :value="item" @change="bindCheckBox">
            <img src="../../assets/logo.png" style="width: 30px;height: 30px;"/>
            <span>{{item.name}}</span>
            <input type="radio" :name="item.name" value="重要" v-model="item.important" >重要
            <input type="radio" :name="item.name" value="次要" v-model="item.important" >次要
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
                radio:"",
                isChecked: [],
                checks: [
                    {
                        name:"病有所医",
                        important:"重要"
                    },
                    {
                        name:"赡养父母",
                        important:"重要"
                    },
                    // {
                    //     name:"退休生活",
                    //     important:""
                    // },
                    // {
                    //     name:"子女教育",
                    //     important:""
                    // },
                    // {
                    //     name:"买车换车",
                    //     important:""
                    // },
                    // {
                    //     name:"还清贷款",
                    //     important:""
                    // },
                    // {
                    //     name:"买房换房",
                    //     important:""
                    // },
                    // {
                    //     name:"旅游玩乐",
                    //     important:""
                    // },
                ],
            }
        },
        computed:{

        },
        methods:{
            bindCheckBox(value){
                window.console.log(this.isChecked)
                for (let lengthKey in this.isChecked.length) {
                    if (value.target.value !== this.isChecked[lengthKey]){
                        this.isChecked[lengthKey] = {
                            important:""
                        }
                    }
                }
            }
        },
        watch: {

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
        justify-content: center;
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
        background: url("../../assets/check-box.png")no-repeat center;
    }
</style>