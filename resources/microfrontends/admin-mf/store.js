/**
 * THIS IS THE DEFAULT STORE...
 */
import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);
// load modules
import modules from "./modules";

export default new Vuex.Store({
    modules,
    state: {
        authUser: null,
        error: false
    },
    getters: {
        getAuthUserData(state) {
            return state.authUser;
        },
        getErrorData(state) {
            return state.error;
        }
    },
    actions: {
        async doLogOut({ commit }) {
            try {
                let res = await axios.post("/api/logout/admin");

                if (res.status == 200) {
                    location.reload();
                    commit("UPDATE_AUTH_USER", false);
                    $Notice.info({ title: res.data.message });
                }
            } catch (error) {
                console.log("logout error ", error.response.data);

                $Notice.info({
                    title: error.response.data
                        ? error.response.data.message
                        : "Something went wrong"
                });
                commit("ERROR_OCCURED", error.response.data);
            }
        },
        updateUser({ commit }, userData) {
            commit("UPDATE_AUTH_USER", userData);
        }
    },
    mutations: {
        UPDATE_AUTH_USER(state, userData) {
            // localStorage.setItem()
            state.authUser = userData;
        },
        ERROR_OCCURED(state, error) {
            state.error = error;
        }
    }
});
