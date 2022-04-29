import { onLoad, onShow } from '@dcloudio/uni-app'
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  getCurrentInstance
} from 'vue'
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
      const findData = chatStore.findMsg({name:123})
      console.log(findData,'chatStore.findMsg({name:123})')
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!!!')
    })
    onLoad((e)=>{
      console.log(e,'onLoad');
      
    })
    onShow((e)=>{
      const findData = chatStore.findMsg({name:123})
      console.log(findData,'chatStore.findMsg({name:123})') 
      console.log(e,'onShow')
    })
    
    return () => (
      <>
       <view onClick={
         ()=> {chatStore.saveMsg(i++,{name:123})
        }
       }>user</view>
       
      </>
    )
  }
   
})
