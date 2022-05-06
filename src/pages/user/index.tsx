import { onLoad, onShow ,onTabItemTap,onPullDownRefresh} from '@dcloudio/uni-app'
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  getCurrentInstance,
  reactive,
  ref
} from 'vue'
//@ts-ignore
import { userChater } from '@/utils/index'
import UserCenter from '@/components/user/user-center.vue'
import userStore from '@/store/user'
import { storeToRefs } from 'pinia'
export default defineComponent({
   setup() {
    const USER = userStore()
    const userInfo =  ref({})
    const getData = async () => {
      const res = await USER.getUserInfo;
      if (res) {
        console.log('res',res)
        userInfo.value =  {...res}
      }
    };
    onLoad(()=>getData())
    return () => (
        <UserCenter userInfo={userInfo.value} />
    )
  },
})
