<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
//@ts-ignore
import socket from '../src/utils/sockt'
onLaunch(() => {
  console.log("App Launch");
  console.log(socket)
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
  socket.disconnect();
});
</script>
<style lang="scss">
  @import "../uview/index.scss";
</style>
