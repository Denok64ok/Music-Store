<template>
    <div class="max-w-2xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-4">Корзина</h1>
        <div v-if="cart.length === 0" class="text-center text-lg text-gray-500">
            Ваша корзина пуста.
        </div>
        <div v-else>
            <div v-for="product in cart" :key="product.id" class="border-b py-4">
                <p class="text-xl">{{ product.name }} - {{ product.price }} руб.</p>
            </div>
            <div class="mt-6 text-xl font-semibold">
                Общая сумма: {{ totalPrice }} руб.
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '../store';

const store = useProductStore();
const cart = store.cart;
</script>