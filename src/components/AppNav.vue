<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import menu from '@/data/menu.json'

</script>

<template>
	<div class="nav">
		<swiper class="nav__container"
			:space-between="24"
			:slides-per-view="'auto'"
			:slides-offset-before="75"
			>
				<swiper-slide style="flex: 0 0 120px;" v-for="item in menu" :key="item.id">
				<div class="nav__link-wrapper"><router-link active-class="_active" :to="item.route" class="nav__link"><img class="nav__icon" :src="item.url" ><span class="nav__text">{{ item.title }}</span></router-link></div>
			</swiper-slide>
			</swiper>
	</div>
</template>

<style lang='sass' scoped>
.nav
	&__container
		max-width: 1440px
	&__link
		user-select: none
		padding: 8px 14px
		color: #000
		font-size: 16px
		font-weight: 400
		flex-shrink: 0
		display: flex
		gap: 8px
		justify-content: center
		align-items: center
		background: #fff
		border-radius: 50px
		transition: $trTime
		&:hover
			box-shadow: 0 0 5px rgba(255, 173, 8, 0.5)
		&._active
			background: #FFAB08
		&-wrapper
			display: flex
			flex-direction: column
			padding: 5px 0
	&__icon
		max-height: 24px
		max-width: 24px
	&__text
		flex-shrink: 0
</style>
