<script setup>

</script>

<template>
<div class="item">
	<div class="item__container">
		<div class="item__img-wrapper">
			<img src="/img/burger-M.jpg" alt="" class="item__img">
		</div>
		<div class="item__price">550₽</div>
		<div class="item__title">Супер сырный</div>
		<div class="item__weight">512г</div>
		<button class="item__add-button">Добавить</button>
	</div>
</div>
</template>

<style lang='sass' scoped>
.item
	border-radius: 18px
	background: #FFF
	color: #000
	font-size: 16px
	font-weight: 400
	&__container
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
