import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout.js'

export const useCategoryStore = defineStore('category', () => {
  const catagoryList = ref([])
  const getCategory = async () => {
    const res = await getCategoryAPI()
    catagoryList.value = res.result
    }

  return { catagoryList, getCategory }
})
