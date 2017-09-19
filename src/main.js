import Vue from 'vue'
import App from './App'
import router from './router'

// 使用element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element);

// 使用axios
import axios from 'axios'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

// vue 的实例化
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})