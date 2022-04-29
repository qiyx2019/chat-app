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
		const formSubmit = (e) => {
			console.log(e.detail.value,'e')
		}
		const formReset = (e) => {
			
		}
		return () => (
			<div class="container">
				<view class="slideshow">
					<view class="images" >
					</view>
				</view>
				<div class='form'>
					<form onSubmit={(e)=>formSubmit(e)} onReset={(e)=>formReset(e)}>
					<view class="uni-form-item uni-column">
						<view class="title">switch</view>
						<view>
							<switch name="switch" />
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="title">radio</view>
						 <radio-group name="radio">
							<label>
								<radio value="radio1" /><text>选项一</text>
							</label>
							<label>
								<radio value="radio2" /><text>选项二</text>
							</label>
						</radio-group> 
					</view>
					<view class="uni-form-item uni-column">
						<view class="title">checkbox</view>
						 <checkbox-group name="checkbox">
							<label>
								<checkbox value="checkbox1" /><text>选项一</text>
							</label>
							<label>
								<checkbox value="checkbox2" /><text>选项二</text>
							</label>
						</checkbox-group> 
					</view>
					<view class="uni-form-item uni-column">
						<view class="title">slider</view>
						 <slider value="50" name="slider" show-value></slider> 
					</view>
					<view class="uni-form-item uni-column">
						<view class="title">input</view>
						<input class="uni-input" name="input" placeholder="这是一个输入框" />
					</view>
					<view class="uni-btn-v">
						<button form-type="submit">Submit</button>
						<button type="default" form-type="reset">Reset</button>
					</view>
				</form>
			</div>
			</div >
		)
	},
})
