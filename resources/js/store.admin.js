/**
 * THIS IS THE DEFAULT STORE...
 */
import Vue from 'vue';
import Vuex from 'vuex';

// load modules 
import modules from './admin/modules'
Vue.use(Vuex);

export default new Vuex.Store({
    modules,
    state: {
        app_name: 'Hanli ECommerce',  
    }, 
    
});