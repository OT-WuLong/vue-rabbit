<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <router-view />
  <LayoutFooter />
</template>

<script setup>
import router from '@/router';
import { onMounted } from 'vue';

import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue';
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue';
import LayoutNav from '@/views/Layout/components/LayoutNav.vue';
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue';

import { useCategoryStore } from '@/stores/category';
const categoryStore = useCategoryStore();
onMounted(async () => {
  await categoryStore.getCategory();
});
</script>
