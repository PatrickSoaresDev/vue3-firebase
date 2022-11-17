<template>
  <div class="bg-gray-800 flex text-white max-h-screen h-screen">
    <div class="w-64">
      <span class="font-semibold p-6 block opacity-90">Study Calendar</span>
      <nav class="p-6">
        <h3
          class="opacity-50 uppercase font-semibold text-xs tracking-widest mb-6"
        >
          Menu
        </h3>
        <div class="space-y-3">
          <MenuItem :icon="HomeIcon">Home</MenuItem>
          <MenuItem :icon="TrendingIcon">Trending</MenuItem>
          <MenuItem :icon="TrendingIcon">Trending</MenuItem>
          <MenuItem :icon="TrendingIcon">Trending</MenuItem>
          <MenuItem :icon="TrendingIcon">Trending</MenuItem>
        </div>
      </nav>
    </div>
    <div class="flex-1 h-screen relative overflow-y-auto">
      <header
        class="flex p-5 bg-gray-800 z-20 sticky top-0 items-center justify-between"
      >
        <InputSearch class="w-96" />
        <div class="flex items-center">
          <div class="flex items-center space-x-3">
            <Avatar class="rounded-3xl overflow-hidden w-10 h-10" />

            <span>Patrick</span>
            <ChevronDownIcon class="w-4 h-4" @click="logout" />
          </div>
          <BellIcon
            class="w-5 h-5 ml-8 opacity-50 hover:opacity-100 cursor-pointer transition duration-100"
          />
        </div>
      </header>
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import MenuItem from '../layouts/navs/MenuItem.vue'
import InputSearch from '../components/inputs/InputSearch.vue'
import Avatar from '../layouts/navs/Avatar.vue'
import HomeIcon from '../components/icons/HomeIcon.vue'
import TrendingIcon from '../components/icons/TrendingIcon.vue'
import ChevronDownIcon from '../components/icons/ChevronDownIcon.vue'
import BellIcon from '../components/icons/BellIcon.vue'
import { getAuth, signOut } from 'firebase/auth'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

function logout() {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      console.log('SignOut')
      store.dispatch('auth/logout')
      router.push('/login')
    })
    .catch((error) => {
      // An error happened.
    })
}
</script>
