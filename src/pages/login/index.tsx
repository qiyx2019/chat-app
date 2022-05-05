import { onLoad, onShow } from '@dcloudio/uni-app'
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  getCurrentInstance,
} from 'vue'
import LoginForm from '../../components/login-form/login-form.vue'
interface Ref<T> {
  value: T
}
interface LoginForm {
  name: string;
  pwd: string;
}
export default defineComponent({
  setup() {
    onMounted(() => {
      // uni.switchTab({
      //   url: '/pages/index/index'
      // })
    })
    onUpdated(() => {
     
    })
    onUnmounted(() => {
    
    })
    onLoad((e) => {
     
    })
    onShow((e) => {
    })
    const onFinish = (value:LoginForm) => {
      console.log(value, 'onFinish')
    }
    return () => (
      <div style={{height: '100vh'}}>
				<LoginForm onFinish={onFinish} />
      </div>
    )
  },
})
