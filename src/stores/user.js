import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const getUserInfo =async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }
  const clearuserInfo = () => {
    userInfo.value = {}
  }
  return { userInfo, getUserInfo, clearuserInfo }
},
  {
    persist:true
  }
)
