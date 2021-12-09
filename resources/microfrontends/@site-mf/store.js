/**
 * THIS IS THE DEFAULT STORE...
 */
import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import { createStore } from "vuex-extensions";
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
// load modules
import modules from "./modules";

export default createStore(Vuex.Store, {
    modules,
    // plugins: [createPersistedState()],
    mixins: {
        actions: {
            async ajax({ state, commit }, url, cbObj, method = "get") {
                try {
                    let res = await axios[method](url);
                    commit("changeState", {
                        cbObj: res.data
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        },
        mutations: {
            changeState: function(state, changed) {
                Object.entries(changed).forEach(([name, value]) => {
                    state[name] = value;
                });
            }
        }
    }
});
