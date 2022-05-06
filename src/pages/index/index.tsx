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

export default defineComponent({
   setup:(props) => {
   
    onMounted(() => {
   //    uni.request({
   //      url: $baseUrl+'/user/update', //仅为示例，并非真实接口地址。
   //      method:'POST',
   //      data: {
   //          payload:{
   //            nickname:'214',
   //          },
   //          options: {
   //            email:'18@qq.com'
   //          }
   //      },
   //      header: {
   //          'content-type':'application/json',
   //          'custom-header': 'hello' //自定义请求头信息
   //      },
   //      success: (res) => {
   //          console.log(res.data);
   //      }
   //  });
   //    socket.on('connect', () => {
			// 	console.log(socket.auth.id, 'id') // x8WIv7-mJelg7on_ALbx
			// })
   //    socket.on('user connected', (res:any) => {
			// 	console.log(res, 'user connected')
			// })
   //    socket.on('private message',(res:any) => {
   //      console.log(res,'private message')
   //    })
   //    socket.on('connect_error',( e:any) => {
			// 	console.log('connect_error', e);
			// });
      console.log('mounted!',props)
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
    const App = () => <view>{'ddd'}</view>
    
    return () => (
      <>
        <Msg /> 
      </>
    )
   }
})
