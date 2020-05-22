<template>
    <div>
        <h1>生命周期</h1>
        <p>{{`val:${val} countVal: ${countVal}`}}</p>
        <a href='javascript:;' @click="clickHandle">点击</a>
    </div>
</template>
<script>
export default {
    data(){
        return{
            val:0
        }
    },
    methods:{
        clickHandle(){
            this.val=this.val+1
        }
    },
    watch:{
        val(newVal,oldVal){
            console.log(newVal)
            console.log(oldVal)
        }
    },
    computed:{
        countVal(){
            return this.val+1
        }
    },
    beforeCreate(){

    }
}
</script>