import { defineStore } from 'pinia'
//@ts-ignore
import { httpRequest } from '@/utils/index'
export default defineStore('user', {
  state: () => ({
    userInfo: {},
    isFlag: true, //默认登录页
  }),
  getters: {
    getUserInfo: async(state) => {
      //先从state取,没有的话去本地缓存去取
      const {data} = await uni.getStorage({
        key: 'userInfo',
      }) as any;
      if (state.userInfo.id) {
        return state.userInfo
      }
      return data
    }
  },
  actions: {
    async login(payload: LoginForm) {
      const res = await httpRequest('/user/login', payload, 'POST') as any; 
      console.log(res);
      if (res.status == 201) {
        this.userInfo = res.data.data
        console.log(this.userInfo,'this.userInfo')
        uni.setStorage({ key: 'userInfo', data: res.data.data })
        console.log('updated')
        uni.switchTab({
          url: '/pages/index/index',
        })
        console.log('updated','dddddd')
      }
       
    },
    async register(payload: LoginForm, flag: boolean) {
      //通过flag来判断是注册还是忘记密码 false注册
      if (flag) {
        return
      }
      const { status } = await httpRequest('/user/register', payload, 'POST')
      if (status == 201) {
        uni.switchTab({
          url: '/pages/login/index',
        })
      }
    },
  },
})
