import { request } from "@/network/request";

export function getHomeLoopData() {
  return request({
    url:'/getlunbo'
  })
}
export function getHomeData() {
  return request({
    url:'/getlunbo'
  })
}
export function getHomeGoods(type,page){
  return request ({
      url:'/home/data',
      params:{
          type,
          page
      }
  })
}
// 函数调用 -> 压入函数栈（保存函数调用过程中的变量
// 函数调用结果 -> 弹出函数栈（释放函数所有的变量  然后销毁
