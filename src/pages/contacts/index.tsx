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
 import ContactList from '@/components/contact-list/index.vue'
interface Ref<T> {
  value: T
}

export default defineComponent({
  setup(){
    const chatStore = new userChater();
    let i = 0;
    const {$baseUrl} = getCurrentInstance()?.appContext.config.globalProperties as any;
    onMounted(() => {
    
    })
    onUpdated(() => {
      
    })
    onUnmounted(() => {
     
    })
    onLoad((e)=>{
     
      
    })
    onShow((e)=>{
     
    })
    
    return () => (
      <>
       <ContactList />
      </>
    )
  }
   
})
