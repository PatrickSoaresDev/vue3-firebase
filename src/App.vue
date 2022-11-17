<template>
  <div v-if="loggedIn">
    <Dashboard>
      <router-view />
    </Dashboard>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Dashboard from './layouts/Dashboard.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
const store = useStore()

const loggedIn = computed<boolean>(() => store.state.auth.status.loggedIn)
</script>

<style></style>
