<script setup>
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router'

import MenuItem from '@/components/MenuItem.vue';
import menu from '@/data/menu.json'

const fullscreenItem = inject('fullscreenItem')
const showFullscreenItem = inject('showFullscreenItem')
const showFullscreenBlock = inject('showFullscreenBlock')
const cart = inject('cart')

const route = useRoute()

const index = computed(()=>{
	return menu.findIndex(item => item.route == route.path)
})

const clickHandler = (item)=>{
	fullscreenItem.value = item
	showFullscreenItem.value = true
	showFullscreenBlock.value = true
}

function addToCart(item){
	const index = cart.value.findIndex(c => c.title == item.title)
	if (index == -1) {
		let cartItem = item
		cartItem.count = 1
		cart.value.push(cartItem)
		} else {
		cart.value[index].count ++
	}
}
</script>

<template>
	<div class="shop" v-auto-animate>
		<h2 class="shop__title">{{ menu[index].title }}</h2>
		<menu-item v-for="item in menu[index].items" @addToCart="addToCart(item)" @clickHandler="clickHandler(item)" :key="item.title" :title="item.title" :price="item.price" :weight="item.weight" :image-url="item.imageUrl"></menu-item>
		<h3 class="shop__sorry" v-if="!menu[index].items">
			Извините, категория "{{ menu[index].title }}" временно отсутствует в меню
			<img style="width: 40%;" src="/img/sad-cat.webp">
		</h3>
	</div>
</template>

<style scoped lang="scss">
.shop{
	position: relative;
	display: grid;
	align-items: start;
	gap: 20px;
	grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
	grid-auto-rows: 1fr;
	@media (min-width: $M) {
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
	}
	@media (min-width: $L) {
		grid-template-columns: repeat(3, 1fr);
	}
	&__title{
		width: 100%;
		color: #000;
		font-size: 28px;
		font-weight: 600;
		line-height: 120%;
		position: absolute;
		top: -16px;
		left: 0;
		translate: 0 -48px;
		@media (min-width:$M) {
			font-size: 40px;
			top: -24px;
		}}
	&__sorry{
		width: 100%;
		height: 100%;
		grid-column: span 3;
		color: rgba(0, 0, 0, 0.3);
		font-size: 24px;
		font-weight: 600;
		line-height: 120%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		@media (min-width:$M) {
			font-size: 40px;
		}}}
</style>
