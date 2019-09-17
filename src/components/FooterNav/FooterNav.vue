<template>
 <!-- 底部导航 -->
        <div class="tabFooter">
          <ul class="tabBar">
            <li @click="go('/home')" :class="{active:$route.path == '/home'}">
              <i class="iconfont icon-zhuye"></i>
              <span>主页</span>
            </li>
            <li @click="go('/assort')" :class="{active:$route.path == '/assort'}">
              <i class="iconfont icon-icon"></i>
              <span>分类</span>
            </li>
            <li @click="go('/scan')" :class="{active:$route.path=='/scan'||$route.path ==`/scan/find/${$route.params.id}`||$route.path =='/scan/selecthome'}">
              <i class="iconfont icon-tupian1"></i>
              <span>识物</span>
            </li>           
            <li @click="go('/shop')" :class="{active:$route.path == '/shop'}">
              <i class="iconfont icon-gouwuchekong"></i>
              <span>购物车</span>
            </li>
            <li @click="go('/login')" :class="{active:$route.path == '/login'||$route.path == '/personal'}">
              <i class="iconfont icon-tubiaozhizuomoban"></i>
              <span>个人</span>
            </li>
          </ul>
        </div>  
</template>

<script>
  export default {
    data(){
      return{
        changecolor:false
      }
    },
    mounted(){
    },
    methods:{
      go(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   // 底部导航
    .tabFooter
      width 100%
      height 50px
      position fixed
      bottom 0
      background #fff
      .tabBar
        display flex
        align-items center
        justify-content center
        padding-top 10px
        
        li
          display flex
          flex-direction column 
          justify-items center
          width 20%
          text-align center
          &.active
            color red
        
          span
            font-size 12px
            display inline-block
            margin-top 6px
 
</style>
