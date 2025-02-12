import { createApp } from "vue";
import VueApexCharts from "vue3-apexcharts";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Create the Vue app instance
const app = createApp(App);

// Use your plugins
app.use(store);
app.use(router);
app.use(VueApexCharts);

// Disable Vue DevTools
app.config.devtools = false;

// Mount the app
app.mount("#app");
