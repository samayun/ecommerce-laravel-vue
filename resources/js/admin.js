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

window.$Notice = Notice // Toast Notification . alternative sweetalert2 . I`ll use IViewUI  
window.$Bus = new Vue() // EventBus Service for communicating component via component
Vue.use(ViewUI, { locale });


import Gate from './Gate.admin';
Vue.prototype.$gate = new Gate(window.adminUser);
// v-form
import { Form , HasError , AlertError} from 'vform';
window.Form = Form;
// Vue.prototype.Form = Form
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.component('admin-app', require('./admin/components/AdminApp.vue').default);
Vue.component('Loading', require('./admin/components/Loading.vue').default);

import common from "./common";
Vue.mixin(common);
// ROUTER 
import router from './router.admin'

router.beforeEach((to, from, next) => {
    // let authUserDT = localStorage.getItem('adminAuthUser' ) ? JSON.parse(localStorage.getItem('adminAuthUser' )) : false;
    // let isAuthenticated = authUserDT && authUserDT.id && authUserDT.email ? true : false;

    ViewUI.LoadingBar.start();
    let isAuthenticated = window.adminUser;
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
import moment from "moment";
Vue.filter('timeFormat' , arg => {
    return moment(arg).format('MMMM dddd YYYY ,h:mm:ss a')
    // return moment(arg).endOf('day').fromNow()
})
// IMPORT THE STORE 
import store from './store.admin';


const app = new Vue({
    el: '#admin', 
    router,
    store,
});