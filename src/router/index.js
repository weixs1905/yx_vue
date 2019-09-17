import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
//使用路由
Vue.use(VueRouter)

//暴露路由器对象
let router =  new VueRouter({
  mode:"history",
  routes
})

// router.beforeEach((to,from,next)=>{
//   console.log(to.path)
//   console.log(from.path)
//   let phone = localStorage.getItem('phone_key')
//   let email = localStorage.getItem('email_key')
//   console.log(typeof email)
//   if(phone !='null' || email !='null'){
//     next('/personal')
//   }else{
//     next('/login')
//   }
  
//   next()
// })

export default router