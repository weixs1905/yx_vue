<template>
  <div id="shop">
       <header class="header">
         <span>购物车</span>
         <span>领劵</span>
       </header>
       <div class="contentWarp">
         <div class="title">
           <span>30天无忧退货</span>
           <span>48小时快速退款</span>
           <span>满88元免邮费</span>
         </div>
         <div class="content">
           <i class="iconfont icon-gouwuche"></i>
           <span>去添加点什么吧</span>
         </div>
       </div>
     </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shop
    width 100%
    height 100%
    background #eee
    overflow hidden

    .header
      width 100%
      height 40px
      padding-top 10px
      box-sizing border-box
      // margin-bottom 10px
      background #ffffff
      & span:first-child
        font-size 20px
        margin-left 20px
      & span:last-child
        float right
        margin-right 30px
        background #F73809
        color #ffffff
        font-size 10px
        padding 5px
    .contentWarp
      width 100%
      height 617px//这个高有问题！！！！！！

      // background #eee
      .title
        width 100%
        font-size 14px
        display flex
        text-align center
        background #D3D3D3
        line-height 35px
        span 
          width 33.33333%
      .content
        width 100%
        height 100%
        text-align center
        display flex
        flex-direction column
        
        .iconfont
          font-size 80px
          margin 100px 0 20px 0
          color #fff
  // .xxx    
    
</style>
