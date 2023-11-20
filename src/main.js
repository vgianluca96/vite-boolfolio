import { createApp } from 'vue'
import './style.css'
import './assets/scss/app.scss'
import App from './App.vue'
import { router } from './router.js'
import 'bootstrap/js/index.esm.js'

createApp(App).use(router).mount('#app')
