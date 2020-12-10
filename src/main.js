import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载Vant组件库样式
import 'vant/lib/index.css'

import Vant from 'vant'
// 自动设置REM基准值（html标签字体大小）
import 'amfe-flexible'
// 加载全局样式
import './styles/index.less'

createApp(App).use(store).use(router).use(Vant).mount('#app')
