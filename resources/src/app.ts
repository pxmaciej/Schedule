import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetifty = createVuetify({
    components,
    directives,
});

createApp(App).use(vuetifty).mount("#app");
