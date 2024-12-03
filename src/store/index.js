import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 1, name: 'Гитара', price: 5000 },
      { id: 2, name: 'Барабаны', price: 12000 },
      { id: 3, name: 'Клавиши', price: 8000 },
    ],
    cart: [],
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
});
