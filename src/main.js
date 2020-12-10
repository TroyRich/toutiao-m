import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'

import Vant from 'vant'

import './styles/index.less'

createApp(App).use(store).use(router).use(Vant).mount('#app')
