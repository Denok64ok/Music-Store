<template>
    <div class="max-w-2xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
        <p class="text-lg text-gray-500 mb-6">Цена: {{ product.price }} руб.</p>
        <p class="text-base text-gray-700 mb-6">Описание товара: Товар высокого качества...</p>
        <button @click="addToCart"
            class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
            Добавить в корзину
        </button>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../store';

const route = useRoute();
const store = useProductStore();
const product = store.products.find(p => p.id === parseInt(route.params.id));

const addToCart = () => {
    store.addToCart(product);
};
</script>