import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import router from "./router/router";

import { plugin } from 'vue3-cute-component'
import 'vue3-cute-component/dist/style.css'


createApp(App)
.use(plugin)
.use(router)
.mount("#app");