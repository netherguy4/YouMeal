import './assets/nullstyle.css'
import 'animate.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import Home from './pages/HomeView.vue'

const routes = [{ path: '/', name: 'Home', component: Home }]
const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
app.use(Toast)
app.mount('#app')
