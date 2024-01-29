import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far, fab, faUserSecret);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
