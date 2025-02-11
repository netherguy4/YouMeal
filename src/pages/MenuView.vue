<script setup>
import MenuItem from '@/components/MenuItem.vue';
defineProps({
	title: String
})
</script>

<template>
	<div class="shop">
		<h2 class="shop__title">{{ title }}</h2>
		<menu-item v-for="n in 6" :key="n"></menu-item>
	</div>
</template>

<style scoped lang="sass">
.shop
	position: relative
	display: grid
	gap: 30px
	grid-template-columns: repeat(3,1fr)
	grid-auto-rows: 1fr
	&__title
		color: #000
		font-size: 40px
		font-weight: 600
		line-height: 120%
		position: absolute
		top: -24px
		left: 0
		translate: 0 -100%
</style>
