import { onLoad, onShow } from '@dcloudio/uni-app'
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  getCurrentInstance,
} from 'vue'
import LoginFrom from '../../components/login-form/login-form.vue'
interface Ref<T> {
  value: T
}

export default defineComponent({
  setup() {
    onMounted(() => {
      // uni.switchTab({
      //   url: '/pages/index/index'
      // })
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!!!')
    })
    onLoad((e) => {
      console.log(e, 'onLoad')
    })
    onShow((e) => {
      console.log(e, 'onShow')
    })
    const formSubmit = (e) => {
      console.log(e.detail.value, 'e')
    }
    const formReset = (e) => {}
		let formData = {
			name:'',
			hobby:''
		}
    return () => (
      <div class="container">
        {/* <view class="slideshow">
          <view class="images"></view>
        </view> */}
				<uni-nav-bar dark title="导航栏组件"></uni-nav-bar>
        <div class="form">
				<LoginFrom />
        </div>
      </div>
    )
  },
})
