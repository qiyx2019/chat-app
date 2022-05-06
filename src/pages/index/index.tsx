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
  getCurrentInstance,
} from 'vue'
import Msg from '@/components/msg/msg.vue'
import socket from '@/utils/socket'
export default defineComponent({
   setup:(props) => {
   
    onMounted(() => {
     
      socket.on('connect', () => {
				console.log(socket.auth.id, 'id') // x8WIv7-mJelg7on_ALbx
			})
      socket.on('user connected', (res:any) => {
				console.log(res, 'user connected')
			})
      socket.on('private message',(res:any) => {
        console.log(res,'private message')
      })
      socket.on('connect_error',( e:any) => {
				console.log('connect_error', e);
			});
    })
    onLoad((e) => {
      console.log(e)
    })
    return () => (
      <>
        <Msg /> 
      </>
    )
   }
})
