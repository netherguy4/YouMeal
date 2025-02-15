<script setup>
import { computed, provide } from 'vue';
import { useStorage } from '@vueuse/core';
import { useRoute } from 'vue-router'

import MenuItem from '@/components/MenuItem.vue';
import menu from '@/data/menu.json'

const route = useRoute()
const cart = useStorage('youMealCart', [])

provide('cart', cart)

const index = computed(()=>{
	return menu.findIndex(item => item.route == route.path)
})
</script>

<template>
	<div class="shop" v-auto-animate>
		<h2 class="shop__title">{{ menu[index].title }}</h2>
		<menu-item v-for="item in menu[index].items" :key="item.title" :title="item.title" :price="item.price" :weight="item.weight" :image-url="item.imageUrl"></menu-item>
		<h3 class="shop__sorry" v-if="!menu[index].items">
			Извините, категория "{{ menu[index].title }}" временно отсутствует в меню
			<img style="width: 40%;" src="/img/sad-cat.webp">
		</h3>
	</div>
</template>

<style scoped lang="sass">
.shop
	position: relative
	display: grid
	gap: 30px
	grid-template-columns: repeat(auto-fit,minmax(220px, 1fr))
	grid-auto-rows: 1fr
	&__title
		width: 100%
		color: #000
		font-size: 40px
		font-weight: 600
		line-height: 120%
		position: absolute
		top: -24px
		left: 0
		translate: 0 -100%
	&__sorry
		width: 100%
		height: 100%
		color: rgba(0, 0, 0, 0.3)
		font-size: 40px
		font-weight: 600
		line-height: 120%
		display: flex
		align-items: center
		justify-content: center
		flex-direction: column
</style>
