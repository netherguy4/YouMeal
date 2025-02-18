<script setup>
import { inject, computed, ref } from 'vue'
import { TransitionPresets, useTransition } from '@vueuse/core'

import CartItem from './CartItem.vue'

const cart = inject('cart')
const showFullscreenBlock = inject('showFullscreenBlock')
const showFullscreenItem = inject('showFullscreenItem')

const showCart = ref(false)

const summ = computed(() => {
  return cart.value.reduce((acc, value) => acc + value.price * value.count, 0)
})
const counter = computed(() => {
  return cart.value.reduce((acc, value) => acc + value.count, 0)
})
const summAnimated = useTransition(summ, {
  duration: 300,
  transition: TransitionPresets.easeInOutCubic,
})

const clickHandler = () => {
  showFullscreenBlock.value = true
  showFullscreenItem.value = false
}
const increment = (item) => {
  item.count++
}
const decrement = (item) => {
  const index = cart.value.findIndex((n) => n.title == item.title)
  if (item.count > 1) item.count--
  else cart.value.splice(index, 1)
}
</script>

<template>
  <div :class="showCart ? 'cart _active' : 'cart'">
    <div class="cart__container">
      <div class="cart__title-wrapper">
        <button @click="showCart = !showCart" class="cart__open-button"></button>
        <h3 class="cart__title">Корзина</h3>
        <div class="cart__counter">{{ counter }}</div>
      </div>
      <div class="cart__content" v-auto-animate>
        <TransitionGroup name="list" tag="ul" class="cart__list">
          <CartItem
            v-for="item in cart"
            :key="item.title"
            @increment="increment(item)"
            @decrement="decrement(item)"
            :title="item.title"
            :weight="item.weight"
            :price="item.price"
            :imageUrl="item.imageUrl"
            :count="item.count"
          />
        </TransitionGroup>
        <div v-if="summ > 0" class="cart__summ">
          <span>Итого</span>
          <span>{{ parseInt(summAnimated) }}₽</span>
        </div>
        <button @click="clickHandler" v-if="summ > 0" class="cart__submit">Оформить заказ</button>
        <div v-if="summ > 0" class="cart__delivery-container">
          <img src="/img/delivery.png" class="cart__delivery-image" />
          <p class="cart__delivery">Бесплатная доставка</p>
        </div>
        <p class="cart__empty" v-else>Тут пока пусто :(</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  z-index: 5;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  &__container {
    border-radius: 18px;
    background: #fff;
    padding: 16px 10px 4px;
    @media (min-width: $M) {
      padding: 24px 16px;
    }
  }
  &__open-button {
    position: absolute;
    border-radius: 18px;
    top: -16px;
    left: -10px;
    right: -10px;
    bottom: -4px;
    @media (min-width: $M) {
      display: none;
    }
  }
  &__title {
    font-size: 16px;
    font-weight: 600;
    @media (min-width: $M) {
      font-size: 24px;
    }
    &-wrapper {
      display: flex;
      justify-content: space-between;
      position: relative;
      gap: 27px;
      align-items: center;
      padding: 0 0 12px;
    }
  }
  &__counter {
    border-radius: 6px;
    background: #f2f2f3;
    width: 41px;
    height: 20px;
    flex-shrink: 0;
    font-size: 10px;
    @include centered;
    @media (min-width: $M) {
      font-size: 12px;
    }
  }
  &__summ {
    margin: 16px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }
  &__submit {
    color: #fff;
    font-size: 16px;
    padding: 11px 32px;
    border-radius: 12px;
    background: #ff7020;
    width: 100%;
    margin: 24px 0 0;
    transition: 0.3s;
    @include hover {
      box-shadow: 0 0 5px #ff7020;
    }
    &:active {
      box-shadow: 0 0 2px #ff7020;
    }
  }
  &__delivery-container {
    display: flex;
    gap: 8px;
    margin: 8px 0 20px;
    align-items: center;
    @media (min-width: $M) {
      margin: 8 0 0;
    }
  }
  &__delivery-image {
    width: 24px;
    aspect-ratio: 1;
  }
  &__empty {
    font-size: 12px;
    padding: 0 0 10px;
    @media (min-width: $M) {
      display: inherit;
      font-size: 16px;
      padding: 0;
    }
  }
}
</style>
<style lang="scss" scoped>
.cart {
  border-radius: 12px;
  transition: 0.3s;
  &._active {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.16);
    @media (min-width: $M) {
      box-shadow: none;
    }
    .cart__content {
      // overflow: auto;
      max-height: 40vh;
      @media (min-width: $M) {
        max-height: none;
      }
    }
  }
  &__content {
    max-height: 0px;
    overflow: hidden;
    transition: 0.3s;
    @media (min-width: $M) {
      max-height: none;
    }
  }
  &__list {
    overflow: auto;
    max-height: 215px;
    transition: 0.3s;
    margin: 0 -5px 0 0;
    padding: 0 5px 0 0;
  }
}
</style>
<style lang="scss">
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  scale: 0.3;
}
.list-leave-active {
  position: absolute;
}
</style>
