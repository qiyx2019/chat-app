import { onLoad, onShow } from '@dcloudio/uni-app'
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  getCurrentInstance,
} from 'vue'
interface Ref<T> {
  value: T
}
import './login.css'
export default defineComponent({
  setup() {
    onMounted(() => {
      // uni.switchTab({
      //   url: '/pages/index/index'
      // })
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!!!')
    })
    onLoad((e) => {
      console.log(e, 'onLoad')
    })
    onShow((e) => {
      console.log(e, 'onShow')
    })

    return () => (
      <>
        <view class="slideshow">
   <view class="images">
      把图片放到这里面。
   </view>
   <view class="images-2"></view>
</view>
      </>
    )
  },
})
