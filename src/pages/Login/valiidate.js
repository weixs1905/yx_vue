import Validate from "vee-validate"
import zh_CN from "vee-validate/dist/locale/zh_CN"
import Vue from "vue"
Vue.use(Validate)
Validate.Validator.localize("zh_CN",{
  messages:zh_CN.messages,
  attributes:{
    email:"邮箱",
    password:"密码"
  }
})
Validate.Validator.extend('regemail',{
  validate:value =>{
    return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
  },
  getMessage:field =>field+"格式不正确"
})