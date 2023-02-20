import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'

import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './views/home.vue'

//componentes
const About = { template: '<div>About</div>' }

// definición objetos de rutas (configuracion)
const routes = [{
    path: '/', component: Home
},{
    path: '/about', component: About
}
    
]



const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.mount('#app')