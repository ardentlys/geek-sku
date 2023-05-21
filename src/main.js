import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/theme-chalk/display.css'
import { createPinia } from 'pinia';

const pinia = createPinia()
const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(pinia);
app.mount('#app');
