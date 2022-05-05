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
    const onFinish = (value) => {
      console.log(value, 'onFinish')
    }
    return () => (
      <div class="container">
        <div class="form">
				<LoginForm onFinish={(v)=>onFinish(v)} />
        </div>
      </div>
    )
  },
})
