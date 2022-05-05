import { createSSRApp } from "vue";
import App from "./App.vue";
import {createPinia} from 'pinia'
import {$baseUrl} from './utils/index'
export function createApp() {
  const app = createSSRApp(App);
  app.use(createPinia())
  app.config.globalProperties.$baseUrl = $baseUrl;
  return {
    app,
  };
}
