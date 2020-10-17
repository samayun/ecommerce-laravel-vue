/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import locale from 'view-design/dist/locale/en-US';


Vue.use(ViewUI, { locale });



router.beforeEach((to, from, next) => {
    
    
    ViewUI.LoadingBar.start();
    next();
});

router.afterEach(route => {
    ViewUI.LoadingBar.finish();
});

import common from "./common";
Vue.mixin(common)
Vue.component('admin-app', require('./admin/components/AdminApp.vue').default);

import router from './router.admin'

// IMPORT THE STORE 
import store from './store.admin';


const app = new Vue({
    el: '#admin', 
    router,
    store,
});