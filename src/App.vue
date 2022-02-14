<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ToDo from './components/ToDo.vue'
</script>

<template>
  <div class="w-full">
    <main role="main" class="w-full flex flex-col h-screen content-center justify-center">
      <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
        <ToDo />
      </div>
    </main>
  </div>
</template>