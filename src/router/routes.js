let Home = ()=>import('../pages/Home/Home.vue')//主页
let Assort = ()=>import('../pages/Assort/Assort.vue')//分类
let Scan = ()=>import('../pages/Scan/Scan.vue')//发现
let Shop = ()=>import('../pages/Shop/Shop.vue')//购物
let Personal = ()=>import('../pages/Personal/Personal.vue')//个人中心
let Login = ()=>import('../pages/Login/Login.vue')//登录
let Search = ()=>import('../pages/Search/Search.vue')//搜索
let Find = ()=>import('../pages/Scan/Find/Find.vue')//发现
let SelectHome = ()=>import('../pages/Scan/SelectHome/SelectHome.vue')//甄选家
export default[
  {
    path:"/home",
    component:Home,
    
  },
  {
    path:"/assort",
    component:Assort,
    
  },
  
  {
    path:"/scan",
    component:Scan,
    children:[
      {
        path:"/scan/find/:id",
        component:Find
      },
      {
        path:"/scan/selecthome",
        component:SelectHome
      },
      {
        path:"",
        redirect:"/scan/find/0"
      }
    ]
    
  },
  {
    path:"/shop",
    component:Shop,
    
  },
  {
    path:"/personal",
    component:Personal,
    
  },
  {
    path:"/login",
    component:Login,
    meta:{
      isshow:true//改变导航颜色
    }
  },
  {
    path:"/search",
    component:Search
  },
  {
    path:"/",
    redirect:"/home"
  }
]