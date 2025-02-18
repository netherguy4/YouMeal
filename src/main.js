import './assets/nullstyle.css'
import 'animate.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { plugin, defaultConfig } from '@formkit/vue'
import Toast from 'vue-toastification'

import App from './App.vue'
import MenuView from './pages/MenuView.vue'

import menu from '@/data/menu.json'

const routes = [
	{ path: '/', redirect: menu[0].route },
	{ path: '/:name', component: MenuView },
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})
router.beforeEach((to, from) => {
	const routes = new Set(menu.map((item) => item.route))
	if (routes.has(to.path)) {
		return true
	} else if (from.path) {
		return { route: from.path }
	} else {
		return { route: '/' }
	}
})

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(plugin, defaultConfig())
app.use(router)
app.use(Toast)
app.mount('#app')
