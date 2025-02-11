import './assets/nullstyle.css'
import 'animate.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import MenuView from './pages/MenuView.vue'
// import SnacksView from './pages/SnacksView.vue'

const routes = [
	{ path: '/', redirect: '/burgers' },
	{ path: '/:name', component: MenuView, props: true },
	{ path: '/:pathMatch(.*)*', redirect: '/burgers' },
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
