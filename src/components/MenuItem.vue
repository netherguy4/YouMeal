<script setup>
const props = defineProps({
	title: String,
	price: Number,
	weight: Number,
	imageUrl: String,
})
defineEmits(['clickHandler','addToCart'])
</script>

<template>
<div class="item">
	<button @click="$emit('clickHandler')" class="item__link"></button>
	<div class="item__container">
		<div class="item__img-wrapper">
			<img :src="props.imageUrl" alt="" class="item__img">
		</div>
		<div class="item__price">{{ price }}₽</div>
		<div class="item__title">{{ title }}</div>
		<div class="item__weight">{{ weight }}г</div>
		<button @click="$emit('addToCart')" class="item__add-button">Добавить</button>
	</div>
</div>
</template>

<style lang='scss' scoped>
.item{
	color: #000;
	font-size: 12px;
	font-weight: 400;
	position: relative;
	@media (min-width:$M) {
		font-size: 16px;
	}
	&__link{
		border-radius: 18px;
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;}
	&__container{
		display: flex;
		height: 100%;
		flex-direction: column;
		border-radius: 18px;
		background: #FFF;
		padding: 12px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		@media (min-width:$M) {
			gap: 8px;
		}}
	&__img-wrapper{
		aspect-ratio: 276/220;
		position: relative;}
	&__img{
		@include image-fit;
		object-position: 50% 55%;
		border-radius: 12px;}
	&__price{
		margin: 6px 0 0;
		font-weight: 600;
		font-size: 16px;
		@media (min-width:$M) {
			margin: 8px 0 0;
			font-size: 24px;}}
	&__title{
		flex: 1 1 auto;
		line-height: 130%;}
	&__weight{
		color: #B1B1B1;
		font-weight: 600;
		line-height: 130%;
		margin: 12px 0 0;
		@media (min-width:$M) {
			margin: 21px 0 0;
		}}
	&__add-button{
		position: relative;
		z-index: 4;
		padding: 11px;
		width: 100%;
		border-radius: 12px;
		background: #F2F2F3;
		transition: $hoverTime;
		margin: 3px 0 0;
		@media (min-width:$M) {
			margin: 0;
		}
		@include hover{
			background: #FFAB08;
			box-shadow: 0 0 5px #FFAB08;}
		&:active{
			box-shadow: 0 0 2px #FFAB08;}}}
</style>
