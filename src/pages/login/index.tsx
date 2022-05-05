import { defineComponent } from 'vue'
//@ts-ignore
import userStore from '@/store/user'
import { storeToRefs } from 'pinia'
import LoginForm from '@/components/login-form/login-form.vue'
export default defineComponent({
  setup() {
    const USER = userStore()
    const { userInfo } = storeToRefs(USER)
    const onFinish = (value: LoginForm) => {
      USER.login(value)
    }
    return () => (
      <div style={{ height: '100vh' }}>
        <LoginForm onFinish={onFinish} />
      </div>
    )
  },
})
