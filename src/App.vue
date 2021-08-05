<template>
  <div class="space-x-7 p-3 bg-gray-200 shadow-md">
    <router-link class="py-1 border-b-2 hover:border-gray-400" active-class="border-b-2 border-gray-500" to="/">Investment Frequency</router-link>
    <router-link class="py-1 border-b-2 hover:border-gray-400" active-class="border-b-2 border-gray-500" to="/loan">Loan Cost</router-link>
    <router-link class="py-1 border-b-2 hover:border-gray-400" active-class="border-b-2 border-gray-500" to="/mortgage">Mortgage</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
import Loan from './components/Loan.vue'
import Mortgage from './components/Mortgage.vue'
import Frequency from './components/Frequency.vue'
</script>
