require('./bootstrap.site');

window.Vue = require('vue');
window.$Bus = new Vue() // EventBus Service for communicating component via component

// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
// import locale from 'view-design/dist/locale/en-US';
// import { Notice } from "view-design";
// Vue.config.productionTips = false

// window.$Notice = Notice // Toast Notification . alternative sweetalert2 . I`ll use IViewUI
// Vue.use(ViewUI, { locale });
import VueAWN from "vue-awesome-notifications";
import 'vue-awesome-notifications/dist/styles/style.css';
// import 'vue-owl-carousel/dist/vue-owl-carousel';
import vueMagnifier from 'vue-magnifier';

let options = {
    durations : {
        global: 3000,
        success: 1000,
    }
}

Vue.use(VueAWN);
Vue.use(vueMagnifier)



import router from './router.site'
import i18n, { selectedLocale } from './i18n'
// IMPORT THE STORE
import store from './store.site';

Vue.component('main-app', require('./site/comonents/MainApp.vue').default);
Vue.component('MultipleFilter', require('./site/comonents/Filter/MultipleFilter.vue').default);
Vue.component('SortingToolBox', require('./site/comonents/Filter/SortingToolBox.vue').default);
// require('owl.carousel');
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.green.min.css';


// Vue.component('carousel', require('vue-owl-carousel/src/Carousel.vue').default);
Vue.component('carousel', require('vue-owl-carousel'));
Vue.component('mobile-menu', require('./site/comonents/MobileMenu.vue').default);
Vue.component('mobile-footer', require('./site/comonents/MobileFooter.vue').default);


const app = new Vue({
    el: '#main-app',
    i18n,
    router,
    store
});

