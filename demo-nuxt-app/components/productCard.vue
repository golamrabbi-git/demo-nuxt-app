<template >
    <NuxtLink :key="product.id" :to="`/products/${ product.id }`"class="product-card">
        <!-- Product Title and Image -->
        <img :src="product.image" alt="product-thumb" class="thumb self-center">
        <p class="text-bold text-lg text-green-600"> {{ product.title.length >27 ? product.title.slice(0, 27) + '...' : product.title }}</p>
         <!-- Rating Section -->
         <div class="flex items-center my-2">
                <div class="flex">
                    <!-- Display stars based on the rating value -->
                    <span v-for="n in 5" :key="n" class="text-yellow-500">
                        <svg v-if="n <= Math.floor(product.rating.rate)" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    </span>
                    <p class="ml-1">{{ product.rating.rate }}</p>
                </div>
                <p class="ml-2 text-gray-600 text-sm">({{ product.rating.count }} reviews)</p>
            </div>
            <!-- Product Price and Details Button -->
        <div class="flex justify-between items-center">
            <p class=""><span class="font-bold">Price:</span> {{ product.price }} $</p>
            <NuxtLink to="/cart" class="cart-btn flex items-center space-x-1"  @click = "handleAddToCart(product.id)">
                    <Icon name="carbon:shopping-cart" class="w-5 h-5"/>
                    <span>Add to cart</span>
            </NuxtLink>
        </div>
    </NuxtLink>
</template>

<script setup>
import {addToDb} from '../composable/addToCart';

const {product} = defineProps(['product']);
const handleAddToCart = (id)=>{
    addToDb(id);

//     try {
//         const res = await $fetch('/api/test', {
//     method: 'POST',
//     body: {
//         id,
//     }
//   })
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
}

</script>

<style scoped>

</style>