<template>
    <div class="">
      <div v-if="res" class="flex gap-x-3">
       <div>
        <img :src="res.image" alt="product-thumb" class="size-24 cursor-pointer">
       </div>
       <p>{{ res.title }}</p>
       <p>{{ res.price }}</p>
       <p>{{ productQuantity }}</p>
      </div>
      <p v-else>Loading product details...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';

  // Define props
  const { productId, productQuantity } = defineProps({
    productId: [String, Number],  
    productQuantity: Number
  });
  
  // Create a reactive variable to hold API response
  const res = ref(null);
  
  onMounted(async () => {
      const productApi = `https://fakestoreapi.com/products/${productId}`;
      try {
          // Fetch product details from the API
          res.value = await $fetch(productApi);
      } catch (error) {
          console.error('Error fetching product:', error);
      }
  });
  </script>
  
  <style scoped>


  </style>
  