<template lang='pug'>
  div.home
    el-row
          el-col(:span='1')
              div.gridlt
                div.menuBtn(@click="jumpTo('/goods')")
                   span.iconfont &#xe689;
                   i 收银
                div.menuBtn
                   span.iconfont &#xe653;
                   i 会员  
                div.menuBtn(@click="jumpTo('/stockManagement')")
                   span.iconfont &#xe50e;
                   i 库存
                div.menuBtn
                   span.iconfont &#xe6f6;
                   i 换班
                div.menuBtn
                   span.iconfont &#xe683;
                   i 报表
                div.menuBtn
                   span.iconfont &#xe6da;
                   i 辅助
                div.menuBtn
                   span.iconfont &#xe60d;
                   i 退出                
          el-col(:span='23')
              div.gridrt
                  router-view
</template>

<script>
export default {
  data(){
    return{
      ltBtn:[
        {id:1,icon:'&#xe689;',name:'收银',link:''},
        {id:2,icon:'&#xe653;',name:'会员',link:''},
        {id:3,icon:'&#xe50e;',name:'库存',link:''},
        {id:4,icon:'&#xe6f6;',name:'换班',link:''},
        {id:5,icon:'&#xe683;',name:'报表',link:''},
        {id:6,icon:'&#xe6da;',name:'辅助',link:''},
        {id:7,icon:'&#xe60d;',name:'退出',link:''},
      ]
    }
  },
  methods:{
    jumpTo(path){
      this.$router.push(path)
    }
  }
  
}
</script>
<style lang="scss" scoped>
@mixin flx($dec:column){
  display: flex;
  flex-direction:$dec;
}
.home{
  height: 100%;
}
.el-row{
  height: 100%;
}
.el-col{
  height: 100%;
}
.gridlt,.gridrt{
  height: 100%;
  overflow-y: auto;
}
.gridlt{
  @include flx;
  .menuBtn{
    @include flx;
    flex:1;
    &:hover{
      background: rgb(246, 36, 36);
    }
  }
  background: rgb(0, 162, 255);
  color:#fff;
}
</style>s
