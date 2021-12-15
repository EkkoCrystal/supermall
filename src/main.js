import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import axios from 'axios'
import '@/icons'

Vue.config.productionTip = false

// 安装toast插件
Vue.use(toast)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


// axios({
//   url: 'http://liulongbin.top:3005/api/getnewslist',
//   method: 'GET',
//   params: {
//     type: '',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// 并发请求,参数数组
// axios.all([axios({
//   url: "http://liulongbin.top:3005/api/getnewslist"
// }), axios({
//   url: "http://liulongbin.top:3005/api/getnewslist"
// })]).then(res => {
//   // 返回的结果res是一个数组
//   console.log(res)
// })

// axios.all([axios({
//   url: "http://liulongbin.top:3005/api/getnewslist"
// }), axios({
//   url: "http://liulongbin.top:3005/api/getnewslist"
// })]).then(axios.spread((res1, res2) => {
//   // 返回的结果res是一个数组
//   console.log(res1)
//   console.log(res2)
// }))
// // 对象解构
// const obj = {
//   name: 'joke',
//   age: 30
// }
// const { name, age } = obj;
// //数组解构
// const names = ['ss', 'ee', 'qq']
// const [name1, name2, name3] = names;

// axios.defaults.baseURL = 'http://liulongbin.top:3005/api'
// axios.defaults.timeout = 3000
// axios.all([axios({
//   url: "/getnewslist",
// }), axios({
//   url: "/getnewslist"
// })]).then(axios.spread((res1, res2) => {
//   // 返回的结果res是一个数组
//   console.log(res1)
//   console.log(res2)
// }))