import { createSSRApp } from "vue";
import App from "./App.vue";
//@ts-ignore
import uView from "../uview";
import {$baseUrl} from './utils/index'
export function createApp() {
  const app = createSSRApp(App);
  app.config.globalProperties.$baseUrl = $baseUrl;
   app.use(uView);
  return {
    app,
  };
}
