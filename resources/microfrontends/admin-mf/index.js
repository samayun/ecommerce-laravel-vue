require("./bootstrap");

window.Vue = require("vue");
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import locale from "view-design/dist/locale/en-US";
import { Notice } from "view-design";
Vue.config.productionTips = false;

window.$Notice = Notice; // Toast Notification . alternative sweetalert2 . I`ll use IViewUI
window.$Bus = new Vue(); // EventBus Service for communicating component via component
Vue.use(ViewUI, { locale });

import Gate from "./gate";
// Vue.prototype.$gate = new Gate(window.adminUser);
window.$gate = new Gate(window.adminUser);
// v-form
import { Form, HasError } from "vform";
window.Form = Form;
Vue.component(HasError.name, HasError);

Vue.component("admin-app", require("./layout/components/AdminApp.vue").default);
Vue.component("Loading", require("./layout/components/Loading.vue").default);
Vue.component(
    "filter-data",
    require("./layout/components/FilterData.vue").default
);
Vue.component(
    "Pagination",
    require("./layout/components/Pagination.vue").default
);

import common from "./common";
Vue.mixin(common);
// ROUTER
import router from "./router";
import i18n, { selectedLocale } from "./i18n";
// IMPORT THE STORE
import store from "./store";

router.beforeEach((to, from, next) => {
    let locale = store.state.settingsStoreIndex.locale;
    if (locale !== selectedLocale) {
        store.dispatch("settingsStoreIndex/changeLocale", locale);
    }

    ViewUI.LoadingBar.start();
    let isAuthenticated = window.adminUser;
    if (to.name != "AdminLogin" && !isAuthenticated)
        next({ name: "AdminLogin" });
    else if (to.name == "AdminLogin" && isAuthenticated)
        next({ name: "AdminHome" });
    else next();
});

router.afterEach(route => {
    ViewUI.LoadingBar.finish();
});

import moment from "moment";
Vue.filter("timeFormat", arg => {
    return moment(arg).format("MMMM dddd YYYY ,h:mm:ss a");
    // return moment(arg).endOf('day').fromNow()
});

new Vue({
    el: "#admin",
    i18n,
    router,
    store
});
