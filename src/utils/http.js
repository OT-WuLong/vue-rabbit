import axios from 'axios'
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css'
import router from '@/router';

import { useUserStore } from '@/stores/user';

const httpInstance = axios.create({
  baseURL: '/api',
  timeout: 5000
})

//拦截器
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, e => Promise.reject(e))

httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  ElMessage({
    type: 'warning',
    message:e.response.data.message
  })

  if (e.response.status === '401') {
    userStore.clearuserInfo()
    router.replace('/login')
  }
  return Promise.reject(e)
})

export default httpInstance
