
import axios from "axios"
import qs from "qs"
import { Toast } from "mint-ui";
axios.interceptors.request.use((config)=>{
let {method,data} = config;
if(method.toLowerCase() == "post" && typeof data =="object"){
    config.data = qs.stringify(data);
}
    return config;
});

axios.interceptors.response.use((response)=>{
    return response.data;
},(err)=>{
    Toast("错误消息"+err.message);
    return new Promise(()=>{});
});
export default axios;
