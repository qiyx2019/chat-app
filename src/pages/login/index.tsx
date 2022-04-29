import { onLoad, onShow } from '@dcloudio/uni-app'
import {
	defineComponent,
	onMounted,
	onUpdated,
	onUnmounted,
	getCurrentInstance,
} from 'vue'
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

		return () => (
			<div class="container">
				<view class="slideshow">
					<view class="images" >
					</view>
				</view>
				<div class='form'>
				
				</div>
			</div>
		)
	},
})
