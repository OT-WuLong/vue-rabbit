import httpInstance from "@/utils/http.js";

export function getUserOrder(params) {
  return httpInstance({
    url: '/member/order',
    method: 'GET',
    params
  })
}
