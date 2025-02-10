<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const buttons = [
    {
        "id": 1,
				"name": "burgers",
				"title": "Бургеры",
				"url": "/img/nav/image-1.png"
    },
    {
        "id": 2,
				"name": "snacks",
				"title": "Закуски",
				"url": "/img/nav/image-2.png"
    },
    {
        "id": 3,
				"name": "hot-dogs",
				"title": "Хот-доги",
				"url": "/img/nav/image-3.png"
    },
    {
        "id": 4,
				"name": "combo",
				"title": "Комбо",
				"url": "/img/nav/image-4.png"
    },
    {
        "id": 5,
				"name": "shawerma",
				"title": "Шаурма",
				"url": "/img/nav/image-5.png"
    },
    {
        "id": 6,
				"name": "pizza",
				"title": "Пицца",
				"url": "/img/nav/image-6.png"
    },
    {
        "id": 7,
				"name": "wok",
				"title": "Вок",
				"url": "/img/nav/image-7.png"
    },
    {
        "id": 8,
				"name": "deserts",
				"title": "Десерты",
				"url": "/img/nav/image-8.png"
    },
    {
        "id": 9,
				"name": "sauses",
				"title": "Соусы",
				"url": "/img/nav/image-9.png"
    }
]
</script>

<template>
	<swiper class="nav"
		:space-between="24"
		:slides-per-view="'auto'"
		:slides-offset-before="75"
  >
    <swiper-slide style="flex: 0 0 120px;" v-for="button in buttons" :key="button.id">
			<div class="nav__link-wrapper"><router-link active-class="_active" :to="button.name" class="nav__link"><img class="nav__icon" :src="button.url" ><span class="nav__text">{{ button.title }}</span></router-link></div>
		</swiper-slide>
  </swiper>
</template>

<style lang='sass' scoped>
.nav
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
	&__icon
		max-height: 24px
		max-width: 24px
	&__text
		flex-shrink: 0
</style>
