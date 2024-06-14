import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { BootstrapVue, ImagePlugin, IconsPlugin, CarouselPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ImagePlugin)
Vue.use(CarouselPlugin)
Vue.use(PiniaVuePlugin)
new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
