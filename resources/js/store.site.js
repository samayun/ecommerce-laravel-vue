/**
 * THIS IS THE DEFAULT STORE...
 */
import Vue from 'vue';
import Vuex from 'vuex';
// import axios from "axios";
import { createStore } from 'vuex-extensions'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
// load modules
import modules from './modules.site';

export default createStore(Vuex.Store, {
    modules,
    // plugins: [createPersistedState()],
    mixins: {
        mutations: {
          changeState: function (state, changed) {
            Object.entries(changed)
              .forEach(([name, value]) => {
                state[name] = value
              })
          }
        }
      }
});
