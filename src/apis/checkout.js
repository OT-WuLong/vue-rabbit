import httpInstance from "@/utils/http";

export function getCheckInfoAPI() {
  return httpInstance({
    url: "/member/order/pre"
  })
}

export function creatOrderAPI(data) {
  return httpInstance({
    url: "/member/order",
    method: 'POST',
    data
  })
}
