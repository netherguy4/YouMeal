<script setup>
import CartItem from './CartItem.vue'
</script>

<template>
  <div class="cart">
		<div class="cart__container">
			<div class="cart__title-wrapper">
				<h3 class="cart__title">Корзина</h3>
				<div class="cart__counter">4</div>
			</div>
			<CartItem v-for="n in 3" :key="n" />
			<div class="cart__summ">
				<span>Итого</span>
				<span>1279₽</span>
			</div>
			<button class="cart__submit">Оформить заказ</button>
			<div class="cart__delivery-container">
				<img src="/img/delivery.png" class="cart__delivery-image">
				<p class="cart__delivery">Бесплатная доставка</p>
			</div>
		</div>
	</div>
</template>

<style lang='sass' scoped>
.cart
	color: #000
	font-size: 12px
	font-weight: 400
	&__container
		border-radius: 18px
		background: #FFF
		padding: 24px 16px
	&__title
		font-size: 24px
		font-weight: 600
		&-wrapper
			display: flex
			justify-content: space-between
			align-items: center
			padding: 0 0 12px
			border-bottom: 1px solid #F2F2F3
	&__counter
		border-radius: 6px
		background: #F2F2F3
		width: 41px
		height: 20px
		flex-shrink: 0
		@include centered
	&__summ
		margin: 16px 0 0
		display: flex
		justify-content: space-between
		align-items: center
		font-size: 16px
	&__submit
		color: #fff
		font-size: 16px
		padding: 11px 32px
		border-radius: 12px
		background: #FF7020
		width: 100%
		margin: 24px 0 0
	&__delivery-container
		display: flex
		gap: 8px
		margin: 8px 0 0
		align-items: center
	&__delivery-image
		width: 24px
		aspect-ratio: 1
	// &__delivery
</style>
