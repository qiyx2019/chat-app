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
//@ts-ignore
import socket from '../../utils/sockt'
interface Ref<T> {
  value: T
}

export default defineComponent({
   setup:(props) => {
    const internalInstance = getCurrentInstance()
    onMounted(() => {
      socket.on('connect', () => {
				console.log(socket.auth.id, 'id') // x8WIv7-mJelg7on_ALbx
			})
      socket.on('user connected', (res) => {
				console.log(res, 'user connected')
			})
      socket.on('private message',(res) => {
        console.log(res,'private message')
      })
      socket.on('connect_error', e => {
				console.log('connect_error', e);
			});
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
       <view>21asdsad3213</view>
       <App /> 
        {[1, 2, 3].map((item) => (
          <div>
            <div
              onClick={() =>{}}
              style={{ width: 40, height: 40, color: 'red' }}
            >
              {item}
            </div>
          </div>
        ))}
        
      </>
    )
   }
})
