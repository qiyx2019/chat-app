<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import userStore from '@/store/user'
onLaunch(() => {
  const USER = userStore();
  if(USER.getUserInfo.id){
    console.log("User: " + USER.getUserInfo)
    uni.switchTab({
      url: '/pages/index/index'
    })
  } else {
     console.log("User: ",USER.getUserInfo)
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
