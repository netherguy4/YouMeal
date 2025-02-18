<script setup>
const props = defineProps({
	title: String,
	price: Number,
	weight: Number,
	imageUrl: String,
	count: Number
})
defineEmits(['increment', 'decrement'])
</script>

<template>
	<li class="item">
		<div class="item__container">
			<div class="item__image-wrapper">
				<img :src="props.imageUrl" class="item__image">
			</div>
			<div class="item__caption">
				<div class="item__title">{{ title }}</div>
				<div class="item__weight">{{ weight }}г</div>
				<div class="item__price">{{ price }}₽</div>
			</div>
			<div class="item__button-container">
				<button @click="$emit('decrement')" class="item__button">-</button>
				<div class="item__button-counter">{{ count }}</div>
				<button @click="$emit('increment')" class="item__button">+</button>
			</div>
		</div>
	</li>
</template>

<style lang='scss' scoped>
.item{
	&__container{
		display: flex;
		gap: 6px;
		padding: 16px 0;
		border-bottom: 1px solid #F2F2F3;}
		&:first-child{
			border-top: 1px solid #F2F2F3;}
	&__image-wrapper{
		position: relative;
		aspect-ratio: 64/52;
		width: 64px;
		flex-shrink: 0;}
	&__image{
		@include image-fit;
		object-position: 50% 55%;
		border-radius: 8px;}
	&__caption{
		display: flex;
		flex-direction: column;
		gap: 1px;
		flex-shrink: 0;}
	&__weight{
		color: #B1B1B1;
		flex: 1 1 auto;}
	&__button{
		flex: 1 1 50%;
		&-container{
			width: 74px;
			min-width: 54px;
			margin: 8px 0 8px auto;
			border-radius: 12px;
			background: #F2F2F3;
			position: relative;
			display: flex;
			// flex-shrink: 0;
			font-size: 16px;
			@media (min-width:$M) {
				width: 84px;
			}}
		&-counter{
			position: absolute;
			top: 50%;
			left: 50%;
			translate: -50% -50%;
			user-select: none;
			pointer-events: none;}}}
</style>
