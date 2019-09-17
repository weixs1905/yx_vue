import ajax from "./ajax"
// import axios from "axios"


let base = "/api"
//请求接口
//主页的数据接口
export let reqHomeData =()=>ajax.get("/home")

//分类列表的接口
export let reqAssortData = ()=>ajax.get('/categorylist')

//关键字初始化接口
export let reqkeyWordInit = ()=>ajax.get(`${base}/xhr/search/init.json`)

//关键字实时搜索结果接口
export let reqSearchKeyWord = (keywordPrefix)=>ajax.get(`${base}xhr/search/searchAutoComplete.json`,{
  params:{
    keywordPrefix
  }
})

//识物页数据接口
export let reqFindThing = ({page,size})=>ajax.get(`${base}topic/v1/find/recAuto.json`,{
  params:{
    page,//页数
    size//请求的数据个数
  }
})