//间接更新状态数据的方法的对象
import {
  reqkeyWordInit,
  reqHomeData,
  reqAssortData,
  reqSearchKeyWord,
  reqFindThing
} from  "../api/index"
import {
  KEYWORDINIT,
  HOMEDATA,
  ASSORTDATA,
  SEARCHKEYWORD,
  GETTHING
  } from "./mutation-types"
export default{
  //获取关键字和热词
  async getKeyWordInit({commit}){
    let result = await reqkeyWordInit()
    if(result.code == 200){
      commit(KEYWORDINIT,result.data)
    }
  },
  //获取主页数据
  async getHomeData({commit}){
    let result = await reqHomeData()
    if(result.code == 0){
      let homedata = result.data
      commit(HOMEDATA,homedata)
    }
  },
  //获取分类数据
  async getAssortData({commit}){
    let result = await reqAssortData()
    if(result.code == 0){
      let assortData = result.data
      commit(ASSORTDATA,assortData)
    }
  },
  //关键字搜索
  async getKeyWord({commit},keyword){
    let result = await reqSearchKeyWord(keyword)
    if(result.code == 200){
      commit(SEARCHKEYWORD,result.data)
    }
  },
  //识物页
  async getFindThing({commit},{page,size}){
    let result = await reqFindThing({page,size})
    if(result.code == 200){
      commit(GETTHING,result.data)
    }
  }
}