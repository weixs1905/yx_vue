<template>
   <!-- 主页home -->
    <div id="home">
       <!-- 上部搜索+标题 -->
        <div class="homeHeader">
            <div class="homeHeader-top">
                <a class="headerTitle" href="javascript:;">网易严选</a>
                <div class="toSearch" @click="$router.push('/search')">
                  <i class="iconfont icon-sousuo"></i>
                  <span class="searchProduct">搜索商品，共21625款好物</span>
                </div>
             </div>
             <div class="homeHeader-bottom">
                <div class="warpper">
                  <ul ref="ulnode" class="headerTab" >
                  <li v-for="(item, index) in listData" :key="index" 
                  class="tabItem" @click="clickcurrent(index)" :class='{active:currentindex == index}'>
                  <span>{{item}}</span>
                  </li>
                </ul>
                </div>
                <span class="icon" @click="showlist">
                  <i class="iconfont icon-jiantou8" v-show="!isshow"></i>
                  <i class="iconfont icon-ico_back" v-show="isshow"></i>
                </span>
                <!-- 全部频道的列表页 -->
                <div class="alltablist" v-show="isshow">
                  <span class="alltablist-title">
                    全部频道
                  </span>
                  <ul class="alltab">
                      <li class="tabItem" :class="{active:currentindex==index}" v-for="(item, index) in listData" :key="index"><span>{{item}}</span></li>
                    </ul>
                   
                </div>
             </div>
        </div>
        <!-- 遮罩层 -->
        <div class="mask" v-show="isshow"></div>


            <!-- home页主内容区 -->
        <div class="content" v-if="homeData&&homeData.component1">
              <!-- 轮播图 -->
            <div class=" swiper-container">
                <ul class=" swiper-wrapper">
                  <li class=" swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/82a811bf9a93fe5775fa8e702695b193.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                  </li>
                  <li class=" swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                  </li>
                  <li class=" swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?imageView&quality=75&thumbnail=750x0" alt="">
                  </li>
                  <li class=" swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                  </li>
                  <li class=" swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/b69d768f3cef93c13360a99c094cb5d0.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                  </li>
                </ul>
                <!-- 分页器 -->
                <div class="swiper-pagination"></div>
              </div>
              <div class="middleTitle">
                <span class="bgImg1" v-for="(item, index) in homeData.policyDescList" :key="index">{{item.desc}}</span>
              </div>

              <div class="categorylist">
                <ul class="listwarper">
                  <li class="listitem" v-for="(item, index) in homeData.kingKongModule.kingKongList" :key="index">
                    <img v-lazy="item.picUrl" alt="img">
                    <span>{{item.text}}</span>
                  </li>
                </ul>
              </div>

              
              <div class="options-index1">
                <header class="header">
                  -新人专享礼-
                </header>
                <div class="imgitem">
                  <div class="item1">
                    <span>新人专享礼包</span>
                    <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                  </div>
                  <div class="item2">
                    <div class="item-i" v-for="(item, index) in homeData.indexActivityModule" :key="index">
                        <img :src="item.picUrl" alt="">
                          <div class="word">
                              <span>{{item.title}}</span>
                              <span>{{item.subTitle}}</span>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
              <div class="options-index2">
                <header class="header">
                  品牌制造商直供
                  <span class="more">更多 ></span>
                </header>
                <div class="imgitem">
                  <div class="item1 item">
                   <div class="word">
                    <span>海外制造商</span>
                    <span>9.9元上新</span>
                   </div>
                  </div>
                    <div class="item2 item">
                      <div class="word">
                          <span>CK制造商</span>
                          <span>29.9元起</span>
                      </div>
                        </div>
                        <div class="item3 item">
                          <div class="word">
                              <span>新秀丽制造商</span>
                              <span>159元起</span>
                          </div>
                        </div>
                        <div class="item4 item">
                          <div class="word">
                              <span>Armani制造商</span>
                              <span>199元起</span>
                          </div>
                        </div>
                  
                </div>
              </div>
              <div class="options-index3">
                <header class="header">
                  {{homeData.categoryHotSellModule.title}}
                </header>
                <div class="imgitem">
                 <div class="item-top">
                    <div class="item1 item" v-for="(item, index) in listarr1" :key="index">
                        <div class="word">
                         <span>{{item.categoryName}}</span>
                        </div>
                       </div>
                 </div>
                  <div class="item-bottom">
                      <div class="item3 item" v-for="(item, index) in listarr2" :key="index">
                          <div class="word">
                              <span>{{item.categoryName}}</span>
                              <img :src="item.picUrl" alt="">
                          </div>
                        </div>
                  </div>                 
                </div>
              </div>  
               <!--限时购  -->
              <div class="options-index5">
                  <header class="header">
                    限时购
                    <span class="time">02：00：00</span>
                    <span class="more">更多 ></span>
                  </header>
                  <div class="imgitem">
                    <div class="item1 item" v-for="(item, index) in homeData.flashSaleModule.itemList" :key="index">
                     <div class="word">
                      <span>现价{{item.activityPrice}}</span>
                      <span>原价{{item.originPrice}}</span>
                      <img :src="item.picUrl" alt="">
                     </div>
                    </div>
                  </div>
                </div>
              <div class="options-index4">
                <div class="bjImg">
                  <!-- <img src="https://yanxuan.nosdn.127.net/874cc79fd5f7e13eac10e1dcc9fe6c92.jpg?imageView&thumbnail=750x0&quality=75" alt=""> -->
                </div>
                <div class="tablist">
                  <ul ref="listitemnode" class="listitem">
                    <li class="item">
                      <img src="https://yanxuan-item.nosdn.127.net/89ea5ccc1e8e09912b17c18005b6f704.png?imageView&quality=65&thumbnail=330x330" alt="">
                      <span>女式自然无缝bra短吊带</span>
                      <span>$39.2</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&quality=65&thumbnail=330x330" alt="">
                      <span>洗脱一体不脏手懒人拖把</span>
                      <span>$39.2</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?imageView&quality=65&thumbnail=330x330" alt="">
                      <span>男式基础平角内裤</span>
                      <span>$39.2</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan-item.nosdn.127.net/58fdbceab428754d9b8e8b3019d84c4e.png?imageView&quality=65&thumbnail=330x330" alt="">
                      <span>100%纯棉，出行必备</span>
                      <span>$39.2</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan-item.nosdn.127.net/db035abf769ba273124774e9c16929a4.png?imageView&quality=65&thumbnail=330x330" alt="">
                      <span>3头浮动式电动剃须刀</span>
                      <span>$39.2</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer">
                <span>下载APP</span>
                <span>电脑版</span>
                <p>网易公司版权所有 © 1997-2019食品经营许可证：JY13301080111719</p>
              </div>
        </div>
        <div class="goTop" v-show="isGoTop" @click="goTop">
          <i class="iconfont icon-ico_back"></i>
        </div>    
     </div>
</template>

<script>
import BScroll from "better-scroll"
import Swiper from "swiper"
import'swiper/dist/css/swiper.css'
import {reqHomeData} from "../../api/index"
import{mapState} from "vuex"
import { clearInterval } from 'timers';
  export default {
    data(){
      return{
        isshow:false,// 标识变量，切换全部频道列表的显示隐藏，默认为false
        isactive:true ,//标识变量，点击当前项显示下划线，
        listData:[],// 头部导航数据数组
        listarr1:[],//用于保存切割的数组
        listarr2:[],//用于保存切割的数组
        currentindex:0,//当前的下标值
        isGoTop:false

      }
    },
   
    async mounted(){
      // console.log(this.$store)
      // console.log(this.mapState())
      window.addEventListener('scroll',this.showBtn)
      await this.$store.dispatch("getHomeData")
      //模拟导航列表数据
      this.listData = ['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色']
      this.$nextTick(()=>{
        this.getwidth()
        let scroll = new BScroll(".warpper",{
        scrollX: true,
        click:true
        })
        let scroll2 = new BScroll(".tablist",{
        scrollX: true,
        click:true
        })
      let {homeData} = this
      this.listarr1 = homeData.categoryHotSellModule.categoryList.slice(0,2)
      this.listarr2 = homeData.categoryHotSellModule.categoryList.slice(2)

      })
      
       var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项  
        effect:"coverflow",
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
  })
      
    },
    computed:{
      ...mapState(['homeData'])
    },
    methods:{
      //切换遮罩层和全部频道的方法
      showlist(){
        this.isshow = !this.isshow
      },
      
      //动态获取滑动列表的宽度的方法
      getwidth(){
        //头部滑动列表的宽度
        let ulNode = this.$refs.ulnode
        this. liNode = ulNode.children
        let ulNodeWidth = 0
        Array.prototype.forEach.call(this.liNode,(item)=>{
          ulNodeWidth+=item.clientWidth
        })
        ulNode.style.width =ulNodeWidth + 'px'
        return ulNodeWidth
      },
      //点击当前列表项更换样式
      clickcurrent(index){
      this.currentindex = index
      },
      showBtn(){
        this.scrollTop = document.documentElement.scrollTop
        if(this.scrollTop>200){
          this.isGoTop = true
        // console.log(this.scrollTop)

        }else if(this.scrollTop<=200){
          this.isGoTop = false
        }
      },
      goTop(){
        // if(document.documentElement.scrollTop <= 0){
        //   return 
        // }
        // console.log(111)
        // clearInterval(this.goToptimer)
        console.log(document.documentElement.scrollTop)
        // document.documentElement.scrollTop = 0
        // if(this.isGoTop){
          let timer = setInterval(() => {
          console.log(111)
          
          if(document.documentElement.scrollTop>=0){
            document.documentElement.scrollTop-=10
          }else if(document.documentElement.scrollTop<=0){

            clearInterval(timer)
            // return
            console.log(11111)
          }
         
          
        }, 100);


        //   }
        
        // if(document.documentElement.scrollTop <= 0){
        //   console.log(111111)
        //   // clearInterval(this.timer)
        // }else{
        //   console.log(22222222)
        //   clearInterval(timer)
          
        // }
        // this.goToptimer = null
        // this.scrollTop = 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #home
    width 100%
    height 100%    
    position relative
    .homeHeader
      position fixed
      top 0px
      z-index 10
      width 100%
      .homeHeader-top
        width 100%
        height 45px
        background #fff
        display flex
        align-items: center
        padding 5px 20px
        .headerTitle
          color #000
          margin-right 10px
          font-size 18px
        .toSearch
          width 250px
          height 30px         
          text-align center
          line-height 30px
          background #eee
          border-radius 5px
          .icon-sousuo
            font-size 20px
            vertical-align middle
          .searchProduct
            font-size 14px
      .homeHeader-bottom
        position relative
        width 100%
        height 40px
        display flex
        background #fff
        .warpper
          width 80%
          overflow hidden
          // white-space nowrap

          .headerTab
            display flex
            align-items center
            height 40px
            // width 780px
            white-space nowrap
            // overflow hidden
            .tabItem
              float left
              height 40px
              padding 0 20px
              white-space nowrap

              box-sizing border-box
              // margin 0 15px
              font-size 15px
              line-height 40px
              &.active
                color red
                border-bottom 2px solid red
        .icon         
          color #333
          .iconfont
            position absolute
            right 20px
            top 13px
            z-index 7
            &showlist 
              display none
            
          // 全部频道页面
        .alltablist  
          width 100%
          position absolute
          z-index 6
          background #fff
          padding 15px
          .alltablist-title
            font-size 15px            
          .alltab
            display flex
            flex-wrap wrap
            margin-top 15px          
            .tabItem
              border 1px solid #333
              border-radius 5px
              width 70px
              height 25px
              text-align center
              line-height 25px
              margin 0 0 20px 10px
              font-size 12px
              &.active
                color red
                border 1px solid red
    .mask
      position absolute
      width 100%
      height 100%
      background rgba(0,0,0,.5)
      z-index 5

    .content
      margin-top 95px
      padding-bottom 50px
      top 0
      .swiper-container
        .swiper-wrapper
          .swiper-slide
            img
              display block
              width 100%
              height 200px
      .middleTitle
        width 100%
        height 40px
        font-size 12px
        
        span 
          display inline-block
          padding-left 25px
          margin 0 10px
          height 40px
          line-height 40px
          background-position 0 10px
          background-size 20px 20px
          background-repeat no-repeat
        .bgImg1
          background-image: url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);
        .bgImg2
          background-image: url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);
        .bgImg3
          background-image: url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);
      .categorylist
        border-bottom 10px solid #eee
        width 100%
        .listwarper
          display flex
          flex-wrap wrap
          align-items center
          padding 10px
          width 100%
          box-sizing border-box
          .listitem
            display flex
            flex-direction column
            width 20%
            margin-bottom 10px
            img 
              width 55px
              height 55px
              margin-bottom 10px
            span 
              font-size 14px
      .options-index1
        padding 10px    
        border-bottom 10px solid #eee   
        .header
          width 100%
          height 40px
          // background skyblue 
          font-size 20px
          text-align center
          line-height 40px
        .imgitem
          width 100%
          height 250px
          box-sizing border-box
          
          display flex
          .item1
            width 50%
            height 250px
            background #eee
            float left
            position relative
            margin-right 5px
            

            img 
              width 130px
              height 130px
              position absolute
              left 50%
              top 50%
              margin-left -65px
              margin-top -65px
              
            span
              display inline-block
              margin 20px 0 0 10px
          .item2
            // background #E1FFFF
            width 50%
            height 250px
            display flex
            flex-direction column
            box-sizing border-box
            img 
              width 100px
              height 100px
            .item-top
              background	#FFEFD5
              height 120px
              img 
                float left
              .word
                float right
                display flex
                flex-direction column
                margin 10px 10px 0 0 
              
             
            .item-i
              background #E1FFFF
              margin-top  5px
              height 120px
              .word
                float left
                margin-top 20px
                display flex
                flex-direction column

              img 
                float right

      .options-index2
        width 100%
        padding 10px
        box-sizing border-box
        border-bottom 10px solid #eee
        .header
          width 100%
          height 40px
          font-size 16px
          position relative
          line-height 40px
          .more
            position absolute
            right 30px
            font-size 14px
        .imgitem
          display flex
          flex-wrap wrap
          .item 
            width 170px
            height 140px
            background-size 100% 100%
            margin 0 5px 5px 0
            
            .word
              display flex
              flex-direction column
              align-items center
              margin-top 10px
              font-size 14px    
          .item1
            margin 0 5px 5px 0
            background-image url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
          .item2
            background-image url(https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1)
          .item3
            background-image url(https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1)
          .item4
            margin 5px 0 0 5px
            background-image url(https://yanxuan.nosdn.127.net/c9e14b08576b6a5e2bc3ef46e0e05d08.png?imageView&thumbnail=343y260&enlarge=1)



      .options-index3
        width 100%
        padding 10px
        box-sizing border-box
        border-bottom 10px solid #eeeeee
        .header
          width 100%
          height 40px
          line-height 40px
        .imgitem
          width 100%
          .item-top
            width 100%
            display flex
            .item
              width 50%
              height 100px
              background-size 70%
              background-repeat no-repeat
              background-position 50px 0
              .word
                margin 20px 0 0 6px
            .item1
              background-color 	#AFEEEE
              margin-right 5px
              background-image url(https://yanxuan-item.nosdn.127.net/4f43f69ece3312fcd0b032c949c7c71b.png?imageView&quality=65&thumbnail=200x200)
            .item2
              background-image url(https://yanxuan.nosdn.127.net/6fd807743e8e25472aca8b6b0b8f3039.png?imageView&quality=65&thumbnail=200x200)
              background-color #F0E68C	
          .item-bottom
            display flex
            width 100%
            flex-wrap wrap
            box-sizing border-box           
            .item 
              width 24%
              height 90px
              background #eeeeee
              margin 5px 3px 0 0 
              text-align center
              font-size 14px
              padding-top 10px
              background-size 100%
              background-position 0 25px
              background-repeat no-repeat
              img
                width 100%
                height 70px
            

      .options-index4
        width 100%
        border-bottom 10px solid #eeeeee
        overflow hidden
        box-sizing border-box
        .bjImg
          width 100%
          height 160px
          background-image url(https://yanxuan.nosdn.127.net/874cc79fd5f7e13eac10e1dcc9fe6c92.jpg?imageView&thumbnail=750x0&quality=75)
          background-size 100%
          margin-bottom 10px
        .tablist
          margin 10px
          box-sizing border-box
          display:flex
          .listitem
            display flex
            .item
              display flex
              flex-direction column
              width 100px
              padding-right 20px
              font-size 14px

              img 
                width 100px
                height 100px
                background #eeeeee
              span
                margin-bottom 5px
      .options-index5
        width 100%
        padding 10px
        box-sizing border-box
        border-bottom 10px solid #eee
        .header
          width 100%
          height 40px
          font-size 16px
          position relative
          line-height 40px
          .more
            position absolute
            right 30px
            font-size 14px
        .imgitem
          display flex
          flex-wrap wrap
          .item 
            width 170px
            height 140px
            background-size 100% 100%
            margin 0 5px 5px 0
            background #eee

            img
              width 170px
              height 110px
            .word
              display flex
              flex-direction column
              align-items center
              margin-top 10px
              font-size 14px    

      .footer
        width 100%
        height 120px
        color #ffffff
        background 	#4D4D4D
        text-align center
        span 
          display inline-block
          width 80px
          height 30px
          border 1px solid 	#F5F5F5
          text-align center
          line-height 30px
          margin-top 20px
          font-size 14px
          margin-right 10px
        p
          font-size 12px
          margin-top 20px
          

    .goTop
      width 35px
      height 35px
      background #fff
      position fixed
      bottom 100px
      right 20px
      border-radius 50%
      text-align center 
      line-height 35px      
      i
        font-size 25px





</style>
