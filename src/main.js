import Vue from 'vue'
import App from './App.vue'
import rr from '@/router/router.ts'

Vue.config.productionTip = false

// 注册全局事件
Vue.directive('focus', {
  inserted(e, binding) {
    console.log(binding)
    e.focus()
  }
})




new Vue({
  render: h => h(App),
  router: rr
}).$mount('#app')
