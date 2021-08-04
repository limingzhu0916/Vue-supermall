import Toast from './Toast'

const obj = {}
// 在main.js中安装Toast插件后，会执行install方法
obj.install = function (Vue) {
  // 创建组件构造器对象
  const toastconstructor = Vue.extend(Toast)
  // 创建组件对象
  const toast = new toastconstructor()
  // 将组件对象挂载到某个元素上
  toast.$mount(document.createElement('div'))
  // 将toast元素添加到body内
  document.body.appendChild(toast.$el)
  // 将toast组件添加到Vue原型上,方便在别处直接使用
  Vue.prototype.$toast = toast
}

export default obj