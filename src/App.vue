<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import userStore from '@/store/user'
import socket from '@/utils/socket'
onLaunch(async() => {
  const USER = userStore();
  const userInfo = await USER.getUserInfo;
  if(userInfo.id){
    socket.auth = {
      userId:userInfo.id,
      userName:userInfo.name
    }
    socket.connect();
  } else {
     console.log("User0: ",userInfo)
    uni.reLaunch({
      url: '/pages/login/index'
    })
  }
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
  
</style>
