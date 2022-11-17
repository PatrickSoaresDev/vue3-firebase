<template>
  <div class="px-5 pb-5 content">
    <h1 class="font-bold text-3xl mt-6 mb-4">Calendar</h1>
    <div class="grid gap-4 grid-cols-12">
      <div class="col-span-8 h-96 rounded-3xl overflow-hidden relative">
        <div class="flex w-full h-full">
          <img
            src="https://via.placeholder.com/2000x1400"
            alt=""
            class="w-full object-cover"
          />
        </div>
        <div class="z-10 absolute top-0 p-6 w-full bottom-0">
          <h3 class="text-2xl max-w-xs">
            How to do Basic Jumping and how to landing safely
          </h3>
          <div
            class="absolute right-6 bottom-6 px-2 py-1 rounded-lg bg-gray-800 bg-opacity-50 text-white"
          >
            7 minutes
          </div>
        </div>
      </div>
      <div class="col-span-4 h-96 rounded-3xl overflow-hidden relative">
        <div class="flex w-full h-full">
          <img
            src="https://via.placeholder.com/2000x1400"
            alt=""
            class="w-full object-cover"
          />
        </div>
        <div class="z-10 absolute top-0 p-6 w-full bottom-0">
          <h3 class="text-2xl max-w-xs">
            How to do Basic Jumping and how to landing safely
          </h3>
          <div
            class="absolute right-6 bottom-6 px-2 py-1 rounded-lg bg-gray-800 bg-opacity-50 text-white"
          >
            7 minutes
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-2xl mt-6 mb-4">Most Watched</h1>
    <div class="grid grid-cols-4 gap-4">
      <CardItem v-for="n of 10" />
    </div>
  </div>
</template>
<script setup lang="ts">
import CardItem from '../components/CardItem.vue'
</script>
