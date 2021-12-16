import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(ElementUI).use(router).mount("#app");
