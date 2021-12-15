import Toast from './Toast.vue'

const obj = {}
 obj.install = function(Vue){
     
     // 在body中添加Toast.$el,拿到的就是methods中show的对象
    //  document.body.appendChild(Toast.$el)

    // 1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    // 2.new的方式，根据组件构造器，创建组件对象
    const toast = new toastConstructor()

    // 3.将组件对象 手动挂在到某个元素上
    toast.$mount(document.createElement('div'))

    // 4.toast.$el对应的就是div
    document.body.appendChild(toast.$el)
     // vue中的原型中添加
     Vue.prototype.$toast = toast
 }
export default obj