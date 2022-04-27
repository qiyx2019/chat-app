import { onLoad, onShow } from '@dcloudio/uni-app'
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  getCurrentInstance
} from 'vue'
import {Subject} from 'rxjs'
import {map} from 'rxjs/operators'
 import UIcon from '../../../uview/components/u-icon/u-icon.vue'
 //@ts-ignore
 import {userChater} from '@/utils/index'
interface Ref<T> {
  value: T
}

export default defineComponent({
  setup(){
    const chatStore = new userChater();
    let i = 0;
    const {$baseUrl} = getCurrentInstance()?.appContext.config.globalProperties as any;
    onMounted(() => {
      chatStore.saveMsg(1,{name:123});
      console.log('mounted!',$baseUrl)
    })
    onUpdated(() => {
      
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!!!')
    })
    onLoad((e)=>{
      console.log(e,'onLoad');
      
    })
    onShow((e)=>{
       
      console.log(e,'onShow')
    })
    const findData = chatStore.findMsg({name:123})
    console.log(findData,'chatStore.findMsg({name:123})')
    return () => (
      <>
       <view onClick={
         ()=> {chatStore.saveMsg(i++,{name:123})
         console.log(findData,'chatStore.findMsg({name:123})')
        }
       }>user</view>
       <UIcon name="photo" color="#2979ff" size="28" />
      </>
    )
  }
   
})
