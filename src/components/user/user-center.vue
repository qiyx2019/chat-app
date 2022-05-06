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
  <uni-card class="card-pad" :isFull="true" :is-shadow="false">
  <uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
					file-mediatype="image" @select="success">选择</uni-file-picker>
    <button class="uni-error" type="primary" @click="logout">退出</button>
  </uni-card>
  </div>
</template>
<script lang="ts" >
import { defineComponent, toRefs, defineProps } from 'vue'
export default defineComponent({
   name: 'userCenter',
   props:['userInfo'],
   setup(props) {
     const {userInfo} = toRefs(props) 
     console.log(userInfo,'props')
     const logout = async() => {
      await uni.removeStorage({key:'userInfo'});
      uni.redirectTo({
        url:'/pages/login/index'
      })
     }
     const success = (e) => {
       console.log(e,'e');
       let a = uni.uploadFile({
							url: `http://localhost:3001/user/upload`, //接口地址	
						// url: 'http://localhost:3001/uniapp/fish/uploadFile', 
						filePath: e.tempFilePaths[0],
						name: 'file',
            formData:{
              'id':(userInfo as any).id
            }
					});
     }
     return {
       avatar: '../../static/zhanghao@2x.png',
       userInfo,
       logout,
       imageStyles: {
					width: 64,
					height: 64,
					border: {
						radius: '50%'
					}
				},
        success
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
