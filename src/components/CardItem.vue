<template>
  <div class="bg-black bg-opacity-20 rounded-3xl overflow-hidden">
    <div>
      <div class="h-32 w-full flex">
        <img
          src="http://via.placeholder.com/800x600"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div class="relative p-5">
      <Avatar
        class="h-12 w-12 absolute right-2 -top-5 rounded-full overflow-hidden"
      />
      <h5 class="text-xs opacity-50 mb-2">
        Andy William
        <div class="w-2 h-2 inline-block ml-2 rounded-full bg-green-400"></div>
      </h5>
      <p>Basic how to ride your skateboard confortly</p>
      <div class="text-xs flex items-center space-x-2 opacity-50 mt-3">
        <span>53k views</span>
        <div class="h-1 w-1 rounded-full bg-gray-300"></div>
        <span>2 weeks ago</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Avatar from '../layouts/navs/Avatar.vue'
</script>
