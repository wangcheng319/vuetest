<template>
    <div>
        <div class="wrap">

            <label class="radio-item" style="display: flex;align-items: center;flex-direction: column">
                <span :class="{blue:isChecked1}">选择用户</span>
                <input  type="radio" name = 'gender' @change="onChange1" checked>
                <span class="radio"></span>
            </label>

            <label class="radio-item" style="display: flex;align-items: center;flex-direction: column">
                <span :class="{blue:isChecked2}">添加用户</span>
                <input  type="radio" name = 'gender' @change="onChange2">
                <span class="radio"></span>
            </label>

        </div>
        <div class="content">
            <p v-if="isChecked1">选择用户</p>
            <p v-if="isChecked2">添加用户</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        data(){
            return{
                isChecked1:true,
                isChecked2:false
            }
        },
        components:{
        },
        methods:{
            onChange1(value){
                window.console.log(value)
                if (value.target.checked){
                    this.isChecked1 = true;
                    this.isChecked2 = false;
                }
            },

            onChange2(value){
                window.console.log(value)
                if (value.target.checked){
                    this.isChecked2 = true;
                    this.isChecked1 = false;
                }
            }
        }
    }
</script>

<style scoped>

    *{margin: 0;padding: 0;}
    .wrap{
        display: flex;
        margin: 50px;
    }

    /*加号表示选择下一个兄弟元素*/
    /*.radio-item input:checked+.radio{*/
    /*    border-color: dodgerblue;*/
    /*}*/
    .radio-item input:checked+.radio::after{
        content: "";
        width: 30px;
        height: 2px;
        background-color: dodgerblue;
        display: block;
        margin-top: 4px;
    }
    /*波浪号表示选择所有剩下的兄弟元素*/
    .radio-item input:checked~span{
        color: dodgerblue;
    }
    .radio-item input[type='radio']{
        display: none;
    }
    .blue{
        color: dodgerblue;
    }
</style>