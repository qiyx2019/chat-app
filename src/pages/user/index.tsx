import { onLoad } from '@dcloudio/uni-app'
import {
  defineComponent,
  ref,
  reactive,
  toRef,
  computed,
  onMounted,
  onUpdated,
  onUnmounted,
} from 'vue'
interface Ref<T> {
  value: T
}

export default defineComponent((props): (() => JSX.Element) => {
  onMounted(() => {
    console.log('mounted!')
  })
  onUpdated(() => {
    console.log('updated!')
  })
  onUnmounted(() => {
    console.log('unmounted!!!')
  })
  onLoad((e) => {
    console.log(e)
  })
  return () => (
    <>
     <view>user</view>
     
      
    </>
  )
})
