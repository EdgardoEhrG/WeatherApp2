import { createApp } from "vue";
import { createPinia } from "pinia";

import globalComponents from "./plugins/global-components";

import "./assets/styles/global.scss";
import "vue3-toastify/dist/index.css";

import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(globalComponents);
app.mount("#app");
