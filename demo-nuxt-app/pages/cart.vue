<template>
    <h1 class="text-2xl text-center text-green-600 mb-4">Shopping Cart</h1>
    <div class="flex flex-col gap-3">
      <div class="border border-red-600" v-for="(productQuantity, productId) in cartStore.cart" :key="productId">
        <!-- Pass productId and productQuantity to CartCard component -->
        <CartCard :productId="productId" :productQuantity="productQuantity" />
      </div>
    </div>
  </template>
  
  <script setup>
  import CartCard from '~/components/cartCard.vue';
  import { useCartStore } from '~/stores/cartStore';
  
  const cartStore = useCartStore();
  </script>
  
  <style scoped>
  </style>
  