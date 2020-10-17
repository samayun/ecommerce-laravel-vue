/**
 * THIS IS THE DEFAULT STORE...
 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

// load modules 
import modules from './modules.admin'
Vue.use(Vuex);

export default new Vuex.Store({
    modules,
    state: {
        app_name: 'Hanli ECommerce',
        authUser: false,
        error : false
    }, 
    getters: {
        getAuthUserData (state) {
          return state.authUser
        },
        getErrorData(state){
            return state.error
        }
      },
    actions: {
        async doLogOut({ commit }){
            try {
                let res =  await axios.get('/logout/admin');
                if (res.status == 200) {
                    commit('UPDATE_AUTH_USER' , false)
                }
            } catch (error) {
                commit('ERROR_OCCURED' , error.response)
            }
            //
            
        },
        updateUser( { commit }, userData){
            commit('UPDATE_AUTH_USER' , userData)
        }
    },
    mutations: {
        UPDATE_AUTH_USER (state , userData ) {
            state.authUser = userData
        },
        ERROR_OCCURED(state , error){
            state.error = error
        }
    }
    
});