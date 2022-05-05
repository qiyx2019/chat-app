import {defineStore} from 'pinia'
//@ts-ignore
import {httpRequest} from '@/utils/index'
export default  defineStore('user',{
  state:()=>  ({
      userInfo:{}
    }),
  getters:{
    getUserInfo(state){
      return state.userInfo
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
    }
  }
})