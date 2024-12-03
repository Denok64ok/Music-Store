<template>
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
        <p class="text-lg text-gray-500 mb-4">Цена: {{ product.price }} руб.</p>
        <div class="flex space-x-2">
            <button @click="goToProductPage"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Подробнее
            </button>
            <button @click="addToCart"
                class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                Добавить в корзину
            </button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '../store';

const router = useRouter();
const store = useProductStore();
const props = defineProps({ product: Object });

const goToProductPage = () => {
    router.push(`/product/${props.product.id}`);
};

const addToCart = () => {
    store.addToCart(props.product);
};
</script>