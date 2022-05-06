<template>
  <uni-list :border="true">
    <uni-swipe-action>
      <!-- 右侧带角标 -->
      <uni-swipe-action-item
        :right-options="options2"
        :threshold="0"
        @click="bindClick"
      >
        <uni-list-chat
          title="qqqq"
          avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          note="您收到一条新的消息"
          time="2020-02-02 20:20"
          badge-text="12"
        ></uni-list-chat>
      </uni-swipe-action-item>
      <uni-swipe-action-item
        :right-options="options2"
        :threshold="0"
        @click="bindClick"
      >
        <!-- 显示多头像 -->
        <uni-list-chat
          title="pdd"
          :avatar-list="avatarList"
          note="您收到一条新的消息"
          time="2020-02-02 20:20"
          badge-positon="right"
          badge-text="22"
        ></uni-list-chat>
      </uni-swipe-action-item>
    </uni-swipe-action>
  </uni-list>
</template>
<script lang="ts" setup>
const avatarList = [
  {
    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
  },
  {
    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
  },
  {
    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
  },
]
const options2 = [
  {
    text: '取消',
    style: {
      backgroundColor: '#007aff',
    },
  },
  {
    text: '删除',
    style: {
      backgroundColor: '#F56C6C',
    },
  },
]
const bindClick = (e) => {
  console.log(e)
  uni.showToast({
    title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${
      e.content.text
    }按钮`,
    icon: 'none',
  })
}
</script>
<style scoped>
.chat-custom-right {
  flex: 1;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.chat-custom-text {
  font-size: 12px;
  color: #999;
}
</style>
