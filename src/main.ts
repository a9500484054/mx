import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'remixicon/fonts/remixicon.css'

createApp(App).use(store).use(router).use(VueLazyload).mount('#app')
