<template>
  <div id="content">
      <div class="item-index1">
        <img src="https://yanxuan.nosdn.127.net/4d3325dca3fd3955cb3f71049bcb06cf.jpg?imageView&quality=65&thumbnail=690y376" alt="">
      </div>
      <div class="itemWarper" v-if="list.length" v-for="(item, index) in list" :key="index">
        <!-- 卡片结构是上下，大图 -->
        <div class="item-index-odd" v-if="item.type == 0">
          <div class="inner">
            <div class="avatar">
            <img src="https://yanxuan.nosdn.127.net/345ad0e4fdfdd16e1ad9baee2dd26c5f.png?imageView&quality=65&thumbnail=56y56" alt="">
            <span>选妹</span>
          </div>
          <div class="title">
              {{item.title}}
          </div>
          <img class="bigImg" v-lazy="item.picUrl" alt="">
          <div class="viewcount">
            <i class="iconfont icon-hj"></i>
            <span>{{item.readCount}}人看过</span>
          </div>
          </div>
        </div>
        <!-- 卡片结构是左右，小图 -->
        <div class="item-index-even" v-if="item.type == 2">
          <div class="inner2" >
            <div class="left">
            <div class="avatar">
              <img v-lazy="item.avatar" alt="">
              <span>{{item.nickname}}</span>
            </div>
            <div class="title">
              {{item.title}}
            </div>
            <div class="dec">
              {{item.subTitle}}
            </div>
            <div class="viewcount">
              <i class="iconfont icon-hj"></i>
              <span>{{item.readCount}}人看过</span>
            </div>
          </div>
          <div class="right">
            <img v-lazy="item.picUrl" alt="">
          </div>
          </div>
        </div>
      </div>
      <!-- 上拉加载 -->
      <infinite-loading spinner = "waveDots" @infinite="infiniteHandler">
        <template slot="no-more">我也是有底线的！</template>
        <template slot="no-results">啊欧，没有内容了</template>
      </infinite-loading>
      <infinite-loading>
        <div slot="spinner" style="font-size:18px;color:deepskyblue">精彩内容马上呈现..</div>
      </infinite-loading>
  </div>
  
</template>

<script>
import {mapState} from "vuex"
import Vue from "vue"
//引入上拉加载库
import InfiniteLoading from 'vue-infinite-loading'
  export default {
    //注册上拉加载库的组件
    components:{
      InfiniteLoading
    },
    data(){
      return{
        page:1,//每次请求的页数
        size:7,//每页中的数据对象的个数
        list:[],//保存过滤之后的数据
        index:0//保存父组件传入的下标值
      }
    },
   async mounted(){
     //初始化时候发请求获得首页数据
      await this.$store.dispatch("getFindThing",{page:this.page,size:this.size})
      //将初始化的过滤之后的数据存入list数组中
      this.list = this.list.concat(this.filterData(this.getFindThing))
      //绑定全局事件监听，获得父组件传递的下标值
      this.eventBus.$on("getIndex",index=>{
        this.index = index
      })
      
    },
    computed:{
      ...mapState(['getFindThing'])
    },
    watch:{
      //监视下标值的变化，重新发送请求
      async index(index_value){
        await this.$store.dispatch("getFindThing",{page:this.page,size:this.size})
        //新数据存入list中，覆盖原数据
        this.list =[...this.getFindThing.result[index_value].topics]
      }
    },
    methods:{
      //滑动到底部自动触发此方法调用
      async infiniteHandler($state){
        if(this.getFindThing){
          //每次请求下一页数据
          await this.$store.dispatch("getFindThing",{page:this.page,size:this.size})
          //将返回的新数据过滤后合并到list数组中
          this.list = this.list.concat(this.filterData(this.getFindThing))
          //加载下一页
          $state.loaded()
          this.page++
        }else if(!this.getFindThing.hasMore){
          //当下一页没有数据时停止上拉加载
          $state.complete()
        }
      },
      //封装方法过滤请求来的数据
      filterData(listObj){
        let newList = []
        listObj.result.forEach((result_item,index)=>{
          result_item.topics.forEach((topics_item,index)=>{
            newList.push(topics_item)
          })
        })
        return newList
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #content
    width 100%
    padding-bottom 50px
    padding-top 90px //这里和静态不一样
    overflow hidden
    .item-index1
      padding 10px
      border-bottom 10px solid #eee
      img 
        width 100%
    .item-index-odd
      box-sizing border-box
      .inner
        border-bottom 10px solid #eee
        padding 10px

        .avatar
          margin-bottom 20px
          img 
            width 27px
            height 27px
            border-radius 50%
            vertical-align middle
          span 
            vertical-align middle
            margin-left 10px//这里和静态不一样
        .title
          font-size 20px
          margin-bottom 10px
        .bigImg
          width 100%
        .viewcount
          padding 10px 0
          font-size 12px
          color grey
    .item-index-even
      // overflow hidden
      width 100%
      box-sizing border-box
      .inner2
        border-bottom 10px solid #eee
        width 100%
        padding 10px
        // height 100%
        overflow hidden
        .left
          float left
          width 60%
          .avatar
            margin-bottom 20px
            img 
              width 27px
              height 27px
              border-radius 50%
              vertical-align middle
            span 
              vertical-align middle
              margin-left 10px//这里和静态不一样
          .title
            font-size 20px          
          .dec
            font-size 14px
            color grey 
            margin 10px 0
          .viewcount
            font-size 14px
            color grey
        .right
          float right
          width 40%
          img 
            width 136px
            height 136px




</style>
