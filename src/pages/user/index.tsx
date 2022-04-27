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
  getCurrentInstance
} from 'vue'
 import UIcon from '../../../uview/components/u-icon/u-icon.vue'
interface Ref<T> {
  value: T
}

export default defineComponent({
  setup(){
    const {$baseUrl} = getCurrentInstance()?.appContext.config.globalProperties as any;
    onMounted(() => {
      
      console.log('mounted!',$baseUrl)
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!!!')
    })
    onLoad((e)=>{
      console.log(e,'onLoad')
    })
    return () => (
      <>
       <view>user</view>
       <UIcon name="photo" color="#2979ff" size="28" />
      </>
    )
  }
   
})
