import {defineStore} from 'pinia'
import {httpRequest} from '@/utils/index'
export default  defineStore('user',{
  state:()=> {
    return {
      userInfo:{}
    }
  },
  getters:{
    getUserInfo(state){
      return state.userInfo
    }
  },
  actions:{
    async login(payload) {
      console.log(payload,'actions');
      const {data} = await httpRequest(payload);
      if(data) {
        this.userInfo = data;
      }
      uni.switchTab({
        url: '/pages/index/index'
      })
    }
  }
})