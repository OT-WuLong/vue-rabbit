import ImgView from '@/components/ImgView/index.vue'
import Sku from '@/components/XtxSku/index.vue'

export const componentPlugin = {
  install(app) {
    app.component('XtxImgView', ImgView)
    app.component('XtxSku', Sku)
  }
}
