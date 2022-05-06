import { defineComponent, reactive } from 'vue'
//@ts-ignore
import userStore from '@/store/user'
import { storeToRefs } from 'pinia'
import RegisterForm from '@/components/login-form/register-form.vue'
import LoginForm from '@/components/login-form/login-form.vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
export default defineComponent({
  setup() {
    const USER = userStore()
    const isFlag = reactive({ 
      status: true,
      isReg: false
     })
    onLoad(async()=>{
      const data = await USER.getUserInfo;
      if(data.id){
        uni.switchTab({ 
          url: '/pages/index/index'
        })
      }
    })
    const onFinish = (value: LoginForm) => USER.login(value)
    
    const onRegister = (value: LoginForm) => USER.register(value)
    
    const onChange = (flag: boolean) => {
      isFlag.status = !isFlag.status;
      isFlag.isReg = flag;
    }
    return () => (
      <div style={{ height: '100vh' }}>
        {isFlag.status ? (
          <LoginForm 
            onFinish={onFinish} 
            onChange={onChange} 
          />
        ) : (
          <RegisterForm
            isRegister={isFlag.isReg}
            onRegister={onRegister}
            onChange={onChange}
          />
        )}
      </div>
    )
  },
})
