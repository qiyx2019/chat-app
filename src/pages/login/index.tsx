import { onLoad, onShow } from '@dcloudio/uni-app'
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  getCurrentInstance,
} from 'vue'
import userStore from '@/store/user'
import {storeToRefs} from 'pinia'
import LoginForm from '@/components/login-form/login-form.vue'
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
    })
    onUpdated(() => {
     
    })
    onUnmounted(() => {
    
    })
    onLoad((e) => {
     
    })
    onShow((e) => {
    })
    const USER = userStore();
    const {userInfo} = storeToRefs(USER)
    const onFinish = (value:LoginForm) => {
      USER.login(value);
    }
     
     
    return () => (
      <div style={{height: '100vh'}}>
				<LoginForm onFinish={onFinish} />
      </div>
    )
  },
})
