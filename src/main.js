import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import store from "./store/index"
import FooterNav from "./components/FooterNav/FooterNav.vue"
import "./mock/mock-server"//引入mock模拟接口
Vue.component("FooterNav",FooterNav)//注册全局组件
import "lib-flexible/flexible"

import "./pages/Login/valiidate"
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading: require('../public/img/01.gif')
  // attempt: 1
})
Vue.config.productionTip = false// 关闭开发提示

//全局定义事件总线
Vue.prototype.eventBus = new Vue()
new Vue({
  render:h => h(App),//渲染函数，生成app组件标签
  router,//全局注册路由器
  store //全局注册vuex
}).$mount("#app")
