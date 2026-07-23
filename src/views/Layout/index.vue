<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView></RouterView>
  <LayoutFooter />
</template>

<script setup>
import router from '@/router';
import { onMounted } from 'vue';

import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue';
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue';
import LayoutNav from '@/views/Layout/components/LayoutNav.vue';
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue';

import { useCategoryStore } from '@/stores/categoryStore';
const categoryStore = useCategoryStore();
onMounted(async () => {
  await categoryStore.getCategory();
});
</script>
