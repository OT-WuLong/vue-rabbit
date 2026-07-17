import httpInstance from "@/utils/http";

export function getDetail(id) {
  return httpInstance({
    url: "/goods",
    params: {
      id,
    },
  })
}

/**
 * @description 获取热销商品
 * @param {number} id
 * @param {number} type
 * @param {number} limit
 * @returns
 */
export function getHotGoodsAPI({ id, type, limit = 3 }) {
  return httpInstance({
    url: "/goods/hot",
    params: {
      id,
      type,
      limit
    }
  })
}
