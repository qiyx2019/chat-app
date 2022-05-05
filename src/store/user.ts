import {defineStore} from 'pinia'
//@ts-ignore
import {httpRequest} from '@/utils/index'
export default  defineStore('user',{
  state:()=>  ({
      userInfo:{},
      isFlag:true, //默认登录页
    }),
  getters:{
    getUserInfo(state){
      return state.userInfo
    },
    getFlag(state) {
      return state.isFlag;
    }
  },
  actions:{
    async login(payload:LoginForm) {
      console.log(payload,'actions');
      const {data} = await httpRequest('/user/login',payload,'POST');
      if(data) {
        this.userInfo = data;
      }
      uni.switchTab({
        url: '/pages/index/index'
      })
    },
    async register(payload:LoginForm){
      const {code} = await httpRequest('/user/register',payload,'POST');
      if(code == 200) {
        uni.switchTab({
          url: '/pages/login/index'
        })
      }
       
    }
  }
})