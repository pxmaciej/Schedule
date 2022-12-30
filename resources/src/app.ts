import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/dark/css-vars.css";

const vuetifty = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "dark",
    },
});

createApp(App).use(vuetifty).use(ElementPlus).mount("#app");
