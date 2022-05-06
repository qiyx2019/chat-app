<template>
  <div class="container">
    <uni-card class="card-header" :isFull="true" :title="userInfo.name"  sub-title="ID: 9999" extra="额外信息" :thumbnail="avatar">
				<span class="uni-body">这里啥也没有</span>
			</uni-card>
  <uni-card class="card-pad" :isFull="true" :is-shadow="false">
    <uni-list>
				<uni-list-item showArrow title="服务" :showExtraIcon="true" :extraIcon="{color: '#2979ff',size: '26',type: 'mail-open-filled'}" />
			</uni-list>
  </uni-card>
  <uni-card class="card-pad" :isFull="true" :is-shadow="false">
    <uni-list>
				<uni-list-item showArrow title="收藏" :showExtraIcon="true" :extraIcon="{color: '#2979ff',size: '26',type: 'camera-filled'}" />
				<uni-list-item showArrow title="卡包" :showExtraIcon="true" :extraIcon="{color: '#2979ff',size: '26',type: 'images'}" />
        <uni-list-item showArrow title="朋友圈" :showExtraIcon="true" :extraIcon="{color: '#2979ff',size: '26',type: 'pyq'}" />
        <uni-list-item showArrow title="表情" :showExtraIcon="true" :extraIcon="{color: '#2979ff',size: '26',type: 'contact'}" />
			</uni-list>
  </uni-card>
 <uni-card class="card-pad" :isFull="true" :is-shadow="false">
    <uni-list>
				<uni-list-item showArrow title="设置" :showExtraIcon="true" :extraIcon="{color: '#2979ff',size: '26',type: 'gear-filled'}" />
			</uni-list>
  </uni-card>
  </div>
</template>
<script lang="ts" >
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
   name: 'userCenter',
   props:['userInfo'],
   setup(props:any,{emit}:any) {
     console.log(props,'props')
     return {
       avatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
       userInfo:props.userInfo
     }
   }
})
</script>
<style scoped>
.container {
  background-color: #eee;
  height: 100vh;
   
}
.card-header {
  padding-top:40px !important;
  height:200px;
}
.card-pad {
  margin-top:10px !important;
}
</style>
