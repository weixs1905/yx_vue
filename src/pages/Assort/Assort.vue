<template>
   <div class="assort">
        <div class="header">
          <div class="search">
            <i class="iconfont icon-sousuo"></i>
            <span @click="$router.push('/search')">搜索商品，共20303好物</span>
          </div>
        </div>
        <div class="content">
          <!-- 左边列表 -->
            <div class="list0">
                <ul class="list" ref="listNode">
                  <li :class="{active:left_index == index}" class="item" @click="getindex(index)" v-for="(item, index) in assortData.categoryL1List" :key="index"><span>{{item.name}}</span></li>
                </ul>
              </div>
              <!-- 右边列表 -->
            <div class="list1" v-if="assortData.categoryL1List">
              <div class="rightlist">
              <div class="headerImg">
                <img :src="assortData.categoryL1List[left_index].wapBannerUrl" alt="">
              </div>
              <div class="content1">
                <ul class="listitem">
                  <li class="item" v-for="(item, index) in assortData.categoryL1List[left_index].subCateList" :key="index">
                    <img v-lazy="item.wapBannerUrl" alt="">
                    <span>{{item.name}}</span>
                  </li>
                 
                </ul>
              </div>
            </div>
            </div>
        </div>
      </div>
</template>

<script>
import BScroll from "better-scroll"
import { mapState } from 'vuex';
  export default {
    data(){
      return{
        left_index:0,//左边列表的下标
      }
    },
    async mounted(){
      await this.$store.dispatch("getAssortData")
      this.$nextTick(()=>{
       for(let i = 0;i<2;i++){
          let scroll = new BScroll(`.list${i}`,{
          scrollY: true,
          click: true
      })
       }
      })
    },
    computed:{
      ...mapState(['assortData'])
    },
  
    methods:{
      //获取列表的下标
      getindex(index){
        this.left_index = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .assort
    width 100%
    height 100%
    // overflow hidden
    .header
      position fixed
      top 0
      z-index 5
      width 100%
      height 50px
      padding 0 20px
      box-sizing border-box
      padding-top 10px
      border-bottom 1px solid #eeeeee
      background #fff
      .search
        width 100%
        background #eeeeee
        text-align center
        height 30px
        border-radius 5px
        line-height 30px
    .content
      margin 50px 0
      width 100%
      height 567px
      // box-sizing border-box
      // overflow hidden
      display flex
      // padding-bottom 50px
      // overflow hidden

      //左边列表
      .list0
        // float left
        width 30%
        // height 567px
        // height 70%
        overflow hidden
        // padding 20px 0
        margin 20px 0
        .list
          width 100%
          // padding 20px 0
          display flex
          flex-direction column
          .item
            padding 15px
            &.active
              color red
              border-left 2px solid red
            span 
              font-size 14px
      //右边列表
      .list1
        width 70%
        padding 10px
        .rightlist
          width 100%
          // padding 10px
          // float right
          .headerImg
            width 100%
            img 
              width 100%
              height 130px
          .content1
            width 100%
            .listitem
              display flex
              flex-wrap wrap
              .item
                width 33.33333%
                height 100px
                margin 10px 0
                img 
                  width 72px
                  height 72px
                span 
                  font-size 12px

      </style>
