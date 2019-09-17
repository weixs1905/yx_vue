<template>
   <div id="personal">
        <div class="header">
          <img class="avatar" src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
          <span>{{phonekey?phonekey:emailkey}}</span>
        </div>
        <div class="msg">
            <p>我的资产</p>
            <ul class="counter">
              <li class="item">回馈金</li>
              <li class="item">红包</li>
              <li class="item">优惠劵</li>
              <li class="item">津贴</li>
              <li class="item">礼品卡</li>
            </ul>
          </div>
          <div class="list">
            <ul class="listcontent">
              <li class="item"><i class="iconfont icon-dingdan2"></i><span>我的订单</span></li>
              <li class="item"><i class="iconfont icon-rili"></i><span>一起拼</span></li>
              <li class="item"><i class="iconfont icon-shouhou"></i><span>售后</span></li>
              <li class="item"><i class="iconfont icon-lipinka"></i><span>返利</span></li>
              <li class="item"><i class="iconfont icon-tubiaolunkuo-"></i><span>会员中心</span></li>
            </ul>
          </div>
          <div class="loginout" @click="loginout">
            退出登录
          </div>
      </div>
</template>

<script>
import {MessageBox} from "mint-ui"
  export default {
    name:'personal',
    data(){
      return{
        phonekey:'',
        emailkey:''
      }
    },
    mounted(){
      this.phonekey = localStorage.getItem("phone_key")
      this.emailkey = localStorage.getItem("email_key")
    },
    methods:{
      //退出登录的方法
      loginout(){
        MessageBox.confirm("确定退出吗？").then(()=>{
          localStorage.clear()
          this.$router.replace('/login')

          //清空local中的用户信息

        }
        ,()=>{})

      }
    },
    // beforeRouteLeave (to, from, next) {
    //   console.log(localStorage)
    //   if(localStorage.length == 0){
    //     next()
    //   }
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #personal
    width 100%
    height 100%
    overflow hidden
    .header
      width 100%
      display flex
      background #DAA520
      padding 20px
      line-height 70px   
      box-sizing border-box
      .avatar
        width 70px
        height 70px
        border-radius 50%
        margin-right 20px
      span 
        font-size 20px
    .msg
      width 100%
      border-bottom 10px solid #eeeeee
      box-sizing border-box
      p
        width 100%
        height 40px
        border-bottom 2px solid #eeeeee
        line-height 40px
        padding-left 10px
      .counter
        width 100%
        display flex
        .item
          width 20%
          height 70px
          text-align center
          line-height 70px
    .list
      width 100%
      border-bottom 10px solid #eeeeee
      .listcontent
        width 100%
        overflow hidden
        text-align center
        
        .item
          width 33.33333%
          // height 90px
          padding 30px 0
          float left
          display flex
          flex-direction column
          border-bottom 1px solid #eeeeee
          span 
            margin-top 15px
    .loginout
      width 100%
      height 40px
      border-bottom 6px solid #eeeeee
      text-align center
      line-height 40px
</style>
