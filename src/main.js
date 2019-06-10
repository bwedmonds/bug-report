import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
  mounted() {
    // make http requests for data here that your application is dependent upon on initial load
    store.dispatch('getBugs')
  }
}).$mount('#app')
