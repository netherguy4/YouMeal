<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import menu from '@/data/menu.json'

</script>

<template>
	<div class="nav">
		<swiper class="nav__container"
			:space-between="8"
			:slides-per-view="'auto'"
			:slides-offset-before="10"
			:slides-offset-after="10"
			:breakpoints="{
    		320: {
					spaceBetween: 12,
					slidesOffsetBefore: 0,
					slidesOffsetAfter: 64
    		},
				768: {
					spaceBetween: 14,
					slidesOffsetBefore: 32,
					slidesOffsetAfter: 32
				},
				1024: {
					spaceBetween: 24,
					slidesOffsetBefore: 75,
					slidesOffsetAfter: 75
				}
    }"
			>
				<swiper-slide style="flex: 0 0 120px;" v-for="item in menu" :key="item.id">
				<div class="nav__link-wrapper"><router-link active-class="_active" :to="item.route" class="nav__link"><img class="nav__icon" :src="item.imageUrl" ><span class="nav__text">{{ item.title }}</span></router-link></div>
			</swiper-slide>
			</swiper>
	</div>
</template>

<style lang='scss' scoped>
.nav{
	&__container{
		max-width: 1440px;}
	&__link{
		user-select: none;
		padding: 8px 14px;
		color: #000;
		font-size: 12px;
		font-weight: 400;
		flex-shrink: 0;
		display: flex;
		gap: 8px;
		justify-content: center;
		align-items: center;
		background: #fff;
		border-radius: 50px;
		transition: $trTime;
		@media (min-width: $M){
			font-size: 16px;}
		&:hover{
			box-shadow: 0 0 5px rgba(255, 173, 8, 0.5);}
		&._active{
			background: #FFAB08;}
		&-wrapper{
			display: flex;
			flex-direction: column;
			padding: 5px 0;}}
	&__icon{
		max-height: 24px;
		max-width: 24px;}
	&__text{
		flex-shrink: 0;}}
</style>
<style lang='scss'>
.nav .swiper-wrapper{
	@media (min-width:$S) {
		@media (max-width:$M) {
			padding: 0 0 0 tovw(64,768);
		}
	}
}
</style>