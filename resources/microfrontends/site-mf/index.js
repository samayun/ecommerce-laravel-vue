require("./bootstrap");

window.Vue = require("vue");
window.$Bus = new Vue(); // EventBus Service for communicating component via component

// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
// import locale from 'view-design/dist/locale/en-US';
// import { Notice } from "view-design";
Vue.config.productionTips = false;
Vue.config.performance = process.env.NODE_ENV !== "production";

// window.$Notice = Notice // Toast Notification . alternative sweetalert2 . I`ll use IViewUI
// Vue.use(ViewUI, { locale });
import VueAWN from "vue-awesome-notifications";
import "vue-awesome-notifications/dist/styles/style.css";
// import 'vue-owl-carousel/dist/vue-owl-carousel';
import vueMagnifier from "vue-magnifier";

let options = {
    durations: {
        global: 3000,
        success: 1000
    }
};

Vue.use(VueAWN);
window.$awn = Vue.prototype.$awn;
Vue.use(vueMagnifier);

import router from "./router";
import i18n, { selectedLocale } from "./i18n";
// IMPORT THE STORE
import store from "./store";

Vue.component("main-app", () =>
    import(
        /* webpackChunkName: "Chunks/Site/Components/MainApp" */ "./layout/components/MainApp.vue"
    )
);
Vue.component("MultipleFilter", () =>
    import(
        /* webpackChunkName: "Chunks/Site/Components/MultipleFilter" */ "./layout/components/Filter/MultipleFilter.vue"
    )
);
Vue.component("SortingToolBox", () =>
    import(
        /* webpackChunkName: "Chunks/Site/Components/SortingToolBox" */ "./layout/components/Filter/SortingToolBox.vue"
    )
);
Vue.component("QuickView", () =>
    import(
        /* webpackChunkName: "Chunks/Site/Components/QuickView" */ "./layout/components/Product/QuickView.vue"
    )
);
Vue.component("Product", () =>
    import(
        /* webpackChunkName: "Chunks/Site/Components/Product" */ "./layout/components/Product/Product.vue"
    )
);
Vue.component("carousel", require("vue-owl-carousel"));
Vue.component("mobile-menu", () =>
    import(
        /* webpackChunkName: "Chunks/Site/Components/MobileMenu" */ "./layout/components/MobileMenu.vue"
    )
);
Vue.component("mobile-footer", () =>
    import(
        /* webpackChunkName: "Chunks/Site/Components/MobileFooter" */ "./layout/components/MobileFooter.vue"
    )
);

new Vue({
    el: "#main-app",
    i18n,
    router,
    store
});
