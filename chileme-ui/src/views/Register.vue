<template lang="pug">
    div.register
        h1 我是注册页面
</template>
<script>
export default {
    data(){
        return{
            form:{
                username:'',
                psssword:'',
                cfm:'',
                moblie:''
            }
        }
    },
    methods:{
        //注册
        registerHandle(){

        },
        //重置
        resetHandle(){
            
        }
    }
}
</script>