import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.scss';
import './assets/css/project/style.scss';
// 项目使用样式
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')