<template>
    <div>
        <h1>Корзина</h1>
        <div v-for="product in cart" :key="product.id">
            <p>{{ product.name }} - {{ product.price }} руб.</p>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '../store';

const store = useProductStore();
const cart = store.cart;
</script>