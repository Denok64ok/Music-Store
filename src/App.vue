<template>
  <div id="app" class="font-sans bg-gray-100 min-h-screen">
    <nav class="bg-blue-500 text-white p-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <router-link 
          to="/" 
          class="text-xl font-semibold hover:text-blue-300 transition-colors"
        >
          Главная
        </router-link>
        <router-link 
          to="/cart" 
          class="text-xl font-semibold hover:text-blue-300 transition-colors"
        >
          Корзина
        </router-link>
      </div>
    </nav>
    <main class="max-w-7xl mx-auto p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>
