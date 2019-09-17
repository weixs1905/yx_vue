<template>
  <div id="search">
    <div class="header">
      <div class="icon">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="input">
        <input type="text" placeholder="新上爆品" v-model="keyword">
        <i class="iconfont icon-guanbi" @click="clear" v-show="keyword != ''"></i>
      </div>
      <span @click="$router.back()">取消</span>
    </div>
    <div class="content" v-show="!keyword">
      <header class="header">
        热门搜索
      </header>
      <nav class="nav">
        <ul class="list">
          <li :class="{highligth:item.highlight == 1}" class="item" v-for="(item, index) in keywordInit.hotKeywordVOList" :key="index">{{item.keyword}}</li>
        </ul>
      </nav>
    </div>
    <div class="content2" v-show="keyword">
      <ul class="list">
        <li class="item" v-for="(item, index) in searchKeyWord" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
  export default {
    data(){
      return{
        keyword:""//关键字
      }
    },
    async mounted(){
      
      await this.$store.dispatch("getKeyWordInit")

    },
    watch:{
      async keyword(value){
         await this.$store.dispatch("getKeyWord",value)
        
      }
    },
    computed:{
      ...mapState(['keywordInit','searchKeyWord'])
    },
    //清空搜索内容
    methods:{
      clear(){
        this.keyword = ""
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #search
    width 100%
    // height 100%
    // background #eee
    .header
      width 100%
      height 50px
      display flex
      align-items center
      background #fff
      padding 0 20px
      box-sizing border-box
      .icon
        background #eeeeee
        height 30px
        line-height 30px
        padding 0 10px
        i 
          font-size 20px
          
      .input
        height 30px
        position relative
        input
          background #eee
          line-height 30px
          width 250px
          // border-radius 5px
          border 0
        i
          position absolute
          right 15px
          top 7px
          color grey
      span 
        padding-left 15px
    .content
      width 100%
      .header
        width 100%
        height 40px
        line-height 40px
        font-size 20px
      .nav
        width 100%
        .list
          overflow hidden
          .item
            float left
            padding 6px 10px
            border 1px solid #eeeeee
            margin 10px
            font-size 14px
            border-radius 6px
            text-align center
            &.highligth
              color red
              border 1px solid red
    .content2
      width 100%
      .list
        width 100%
        .item
          padding 10px 0 10px 20px
          border-bottom 1px solid #eee
          font-size 14px
          color grey
  
</style>
