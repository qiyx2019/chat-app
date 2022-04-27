import { onLoad } from '@dcloudio/uni-app'
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
import {Subject} from 'rxjs';
import {concatMap} from 'rxjs/operators';  
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
    console.log('unmounted!!!')
  })
  onLoad((e) => {
    console.log(e)
  })
  const App = () => <view>{'ddd'}</view>
  let sub = new Subject<any>();
  sub.pipe(concatMap(x => x)).subscribe(x => console.log(x,'sub'));
  sub.next([123,456])
  return () => (
    <>
     <view>21asdsad3213</view>
     <App /> 
      {[1, 2, 3].map((item) => (
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
