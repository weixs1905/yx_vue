<template>
  <div class="scan">
    <div class="header">
        <div class="header-top">
          <i class="iconfont icon-zhuye icon" @click="$router.replace('/home')"></i>
        <span @click="current(1)" :class="{active:isactive}">发现</span>
        <span @click="current(2)" :class="{active:!isactive}">甄选家</span>
        <div class="iconright">
            <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
            <i class="iconfont icon-gouwuchekong-copy" @click="$router.replace('/shop')"></i>
        </div>
        </div>
        <div class="header-bottom" v-show="$route.path!='/scan/selecthome'">
          <ul class="listitem">
            <li class="item" @click="getCurrentIndex(index)" :class="{active:current_index == index}" v-for="(item, index) in listData" :key="index">{{item}}</li>
          </ul>
        </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import BScroll from "better-scroll"
  export default {
    data(){
      return {
        isactive:true, // true是发现，false是甄选家
        listData:[],// 头部导航数组
        current_index:0//当前点击的下标
      }
    },
    mounted(){
      this.$nextTick(()=>{
        let scroll = new BScroll('.header-bottom',{
          click:true,
          scrollX:true
        })
      })
      //模拟数据
        this.listData = ['推荐','盛夏特别版','好物内部价','回购榜','晒单','开发者日记','达人']
    },
    methods:{
      //判断当前点击的是发现还是甄选家
      current(type){  
        if(type == 1&&this.$route.path == "/scan/selecthome"){
          this.$router.replace('/scan/find/0')
          this.isactive = !this.isactive

        }else if(type == 2&&this.$route.path == `/scan/find/${this.$route.params.id}`){
          this.$router.replace('/scan/selecthome')
          this.isactive = !this.isactive

        }
      },
      //获取当前点击的下标
      getCurrentIndex(index){
        this.current_index = index
        this.$router.replace(`/scan/find/${index}`)

        //利用全局事件总线传递当前点击的导航列表的下标
        this.eventBus.$emit("getIndex",index)
      }

    }
  }
</script>
  <style lang="stylus">
    html,body,ul
      margin 0
      padding 0
      list-style none
  </style>
  <style lang="stylus" rel="stylesheet/stylus">
  .scan
    .header
      width 100%
      position fixed
      top 0
      .header-top
        width 100%
        height 50px
        background #F5F5F5
        font-size 20px
        line-height 50px
        padding 0 10px
        display flex
        box-sizing border-box
        border-bottom 1px solid#A9A9A9	
        span 
          font-size 14px
          &.active
            color #A52A2A
            font-weight bold
            font-size 22px
        & span:first-of-type
          margin 0 10px 0 85px
        .iconfont
          font-size 25px     
        .iconright  
          width 20%
          position absolute
          right 20px
      .header-bottom
        width 100%
        overflow hidden
        background #fff
        .listitem
          display flex
          height 40px
          white-space nowrap
          background #fff
          float left
          .item
            margin 0 20px
            font-size 15px
            height 40px
            line-height 40px
            &.active
              color red
  </style>
