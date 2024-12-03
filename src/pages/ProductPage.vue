<template>
    <div>
        <h1>{{ product.name }}</h1>
        <p>Цена: {{ product.price }} руб.</p>
        <button @click="addToCart">Добавить в корзину</button>
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