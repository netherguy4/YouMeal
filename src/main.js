import './assets/nullstyle.css'
import 'animate.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import BurgersView from './pages/BurgersView.vue'
import SnacksView from './pages/SnacksView.vue'

const routes = [
	{ path: '/', redirect: { name: 'Burgers' } },
	{ path: '/burgers', name: 'Burgers', component: BurgersView },
	{ path: '/snacks', name: 'Snacks', component: SnacksView },
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
app.use(Toast)
app.mount('#app')
