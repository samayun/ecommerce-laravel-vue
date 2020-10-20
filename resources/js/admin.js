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
import { Notice } from "view-design";


Vue.use(ViewUI, { locale });

window.$Notice = Notice
window.$Bus = new Vue



import common from "./common";
Vue.mixin(common)
Vue.component('admin-app', require('./admin/components/AdminApp.vue').default);

import router from './router.admin'

router.beforeEach((to, from, next) => {
    let authUserDT = localStorage.getItem('adminAuthUser' ) ? JSON.parse(localStorage.getItem('adminAuthUser' )) : false;
    let isAuthenticated = authUserDT && authUserDT.id && authUserDT.email ? true : false;

    ViewUI.LoadingBar.start();

    if (to.name != 'AdminLogin' && !isAuthenticated) next({name : 'AdminLogin'})
    else if(to.name === 'AdminLogin' && isAuthenticated) next({name:'AdminHome'})
    else next(); 
});

router.afterEach(route => {
    ViewUI.LoadingBar.finish();
});

// $Bus.on('redirectToAdminLogin' , function(){
//     router.push({name: 'AdminLogin'})
// })

// IMPORT THE STORE 
import store from './store.admin';


const app = new Vue({
    el: '#admin', 
    router,
    store,
});