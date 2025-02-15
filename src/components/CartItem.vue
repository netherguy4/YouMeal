<script setup>

</script>

<template>
	<div class="item">
		<div class="item__container">
			<div class="item__image-wrapper">
				<img src="/img/burgers/burger-1.jpg" class="item__image">
			</div>
			<div class="item__caption">
				<div class="item__title">Супер сырный</div>
				<div class="item__weight">512г</div>
				<div class="item__price">550₽</div>
			</div>
			<div class="item__button-container">
				<button class="item__button">-</button>
				<div class="item__button-counter">1</div>
				<button class="item__button">+</button>
			</div>
		</div>
	</div>
</template>

<style lang='sass' scoped>
.item
	&__container
		display: flex
		gap: 6px
		padding: 16px 0
		border-bottom: 1px solid #F2F2F3
	&__image-wrapper
		position: relative
		// padding: 0 0 percent(52, 64)
		aspect-ratio: 64/52
		width: 64px
	&__image
		@include image-fit
		object-position: 50% 55%
		border-radius: 8px
	&__caption
		display: flex
		flex-direction: column
		gap: 1px
		flex-shrink: 0
	// &__title
	&__weight
		color: #B1B1B1
		flex: 1 1 auto
	// &__price
	&__button
		flex: 1 1 50%
		&-container
			width: 84px
			margin: 8px 0 8px auto
			border-radius: 12px
			background: #F2F2F3
			position: relative
			display: flex
			font-size: 16px
		&-counter
			position: absolute
			top: 50%
			left: 50%
			translate: -50% -50%
			user-select: none
			pointer-events: none
</style>
