import { createSSRApp } from "vue";
import App from "./App.vue";
import uView from "../uview";
export function createApp() {
  const app = createSSRApp(App);
   app.use(uView);
  return {
    app,
  };
}
