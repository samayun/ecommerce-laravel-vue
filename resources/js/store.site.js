/**
 * THIS IS THE DEFAULT STORE...
 */
import Vue from 'vue';
import Vuex from 'vuex';
// import axios from "axios";


Vue.use(Vuex);
// load modules
import modules from './modules.site';

export default new Vuex.Store({
    modules
});
