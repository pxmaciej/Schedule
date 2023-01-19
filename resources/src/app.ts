import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";

const vuetifty = createVuetify({
    theme: {
        themes: {
            light: {
                dark: true,
            },
        },
    },
});

createApp(App).use(vuetifty).mount("#app");
