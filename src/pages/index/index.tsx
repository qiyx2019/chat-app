{/* <template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style> */}
import {
  defineComponent,
  ref,
  reactive,
  toRef,
  computed,
  onMounted,
  onUpdated,
  onUnmounted,
  getCurrentInstance,
} from 'vue'

  
interface Ref<T> {
  value: T
}

export default defineComponent((props): (() => JSX.Element) => {
  const internalInstance = getCurrentInstance()
  onMounted(() => {
    console.log('mounted!')
  })
  onUpdated(() => {
    console.log('updated!')
  })
  onUnmounted(() => {
    console.log('unmounted!')
  })
  const App = () => <view>{'ddd'}</view>
  return () => (
    <>
     <view>21asdsad3213</view>
     <App /> 
      {[1, 2, 3, 4, 5,6,7,8].map((item) => (
        <div>
          <div
            onClick={() =>{}}
            style={{ width: 40, height: 40, color: 'red' }}
          >
            {item}
          </div>
        </div>
      ))}
      
    </>
  )
})
