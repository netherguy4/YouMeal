<script setup>
import { inject } from 'vue';

const props = defineProps({
	title: String,
	price: Number,
	weight: Number,
	imageUrl: String
})

const cart = inject('cart')

function addToCart(){
	const index = cart.value.findIndex(item => item.title == props.title)
	if (index == -1) {
		cart.value.push({
			title: props.title,
			price: props.price,
			weight: props.weight,
			imageUrl: props.imageUrl,
			count: 1
		})
		} else {
		cart.value[index].count ++
	}
}
</script>

<template>
<div class="item">
	<div class="item__container">
		<div class="item__img-wrapper">
			<img :src="props.imageUrl" alt="" class="item__img">
		</div>
		<div class="item__price">{{ price }}₽</div>
		<div class="item__title">{{ title }}</div>
		<div class="item__weight">{{ weight }}г</div>
		<button @click="addToCart" class="item__add-button">Добавить</button>
	</div>
</div>
</template>

<style lang='sass' scoped>
.item
	color: #000
	font-size: 16px
	font-weight: 400
	&__container
		border-radius: 18px
		background: #FFF
		padding: 12px
		display: flex
		flex-direction: column
		gap: 8px
	&__img-wrapper
		aspect-ratio: 276/220
		position: relative
	&__img
		@include image-fit
		object-position: 50% 55%
		border-radius: 12px
	&__price
		margin: 8px 0 0
		font-weight: 600
		font-size: 24px
	&__title
		line-height: 130%
	&__weight
		color: #B1B1B1
		font-weight: 600
		line-height: 130%
		margin: 21px 0 0
	&__add-button
		padding: 11px
		width: 100%
		border-radius: 12px
		background: #F2F2F3
</style>
