import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BalmUI from "balm-ui"; // Official Google Material Components
import "balm-ui-css";

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const toastOptions = {
    rtl: true,
    position: "top-right"
};




createApp(App)
    .use(BalmUI)
    .use(router)
    .use(Toast, toastOptions)
    .mount("#app");