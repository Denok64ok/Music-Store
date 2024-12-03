<template>
    <div>
        <h2>{{ product.name }}</h2>
        <p>Цена: {{ product.price }} руб.</p>
        <button @click="goToProductPage">Подробнее</button>
        <button @click="addToCart">Добавить в корзину</button>
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