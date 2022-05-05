import {defineStore} from 'pinia'
//@ts-ignore
import {httpRequest} from '@/utils/index'
export default  defineStore('user',{
  state:()=>  ({
      userInfo:{
        userId:null
      },
      isFlag:true, //默认登录页
    }),
  getters:{
    getUserInfo:(state) => {
      //先从state取,没有的话去本地缓存去取
      if(state.userInfo.userId) {
        return state.userInfo.userId;
      }
      const userInfo = uni.getStorageSync('userInfo').userId;
      return userInfo;
    },
    
  },
  actions:{
    async login(payload:LoginForm) {
      const {data} = await httpRequest('/user/login',payload,'POST');
      if(data) {
        this.userInfo = data;
        uni.setStorageSync(
          'userInfo',
          data
        )
      }
      uni.switchTab({
        url: '/pages/index/index'
      })
    },
    async register(payload:LoginForm,flag:boolean){
      //通过flag来判断是注册还是忘记密码 false注册
      if(flag) {
        return ;
      }
      const {code} = await httpRequest('/user/register',payload,'POST');
      if(code == 200) {
        uni.switchTab({
          url: '/pages/login/index'
        })
      }
       
    }
  }
})