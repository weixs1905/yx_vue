//直接更新状态数据的方法的对象
import {
  KEYWORDINIT,
  HOMEDATA,
  ASSORTDATA,
  SEARCHKEYWORD,
  GETTHING
} from "./mutation-types"
export default{
  //搜索关键字初始化
  [KEYWORDINIT](state,keywordInit){
    state.keywordInit = keywordInit 
  },
  //主页数据
  [HOMEDATA](state,homedata){
    state.homeData = homedata 
  },
  //分类数据
  [ASSORTDATA](state,assortData){
    state.assortData = assortData
  },
  //关键字搜索
  [SEARCHKEYWORD](state,keyword){
    state.searchKeyWord = keyword
  },
  //识物页数据
  [GETTHING](state,getFindThing){
    state.getFindThing = getFindThing
  }

}