<template>
  <div class="flex items-center space-x-4">
    <div class="bg-orange-500 p-2 rounded-lg">
      <component :is="icon" class="w-4 h-4" />
    </div>
    <span><slot /></span>
  </div>
</template>
<script setup lang="ts">
defineProps({
  icon: { default: null },
})
</script>
