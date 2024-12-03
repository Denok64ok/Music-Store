<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '../store';
import ProductCard from './ProductCard.vue';

const store = useProductStore();
const products = store.products;
</script>