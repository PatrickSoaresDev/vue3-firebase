import { createApp } from 'vue'
import './assets/css/style.css'
import './services/Firebase.config'
import App from './App.vue'
import router from './router'
import store from './store/index'

createApp(App).use(store).use(router).mount('#app')
