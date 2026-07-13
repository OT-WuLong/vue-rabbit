import httpInstance from '@/utils/http'

export function getBannerAPI(prams = {}) {
  const {distributionSite = '1'} = prams
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @returns {*}
 */
export function getNewAPI() {
  return httpInstance({
    url:'/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @returns {*}
 */
export function getHotAPI() {
  return httpInstance({
    url:'/home/hot'
  })
}

/**
 * @description: 获取商品列表
 * @param {*}
 * @returns {*}
 */
export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}
