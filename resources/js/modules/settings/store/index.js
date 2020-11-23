import createPersistedState from 'vuex-persistedstate'
import i18n, { selectedLocale } from '../../../i18n'

export default {
    state: {
        locale: selectedLocale,
        theme:{
            type: 'dark'
        },
        layout: "four",
        layout_type: "four"
    },
    getters:{
        getTheme : state => {
            if (localStorage.getItem('theme')) {
                return localStorage.getItem('theme');
            }
            return state.theme.type;
        },
        getIsDark : state => state.theme.type == 'dark',
        getLayout : state => {
            if (localStorage.getItem('layout')) {
                let type = localStorage.getItem('layout');
                if (type == 'four') {
                    state.layout =  "col-6 col-md-4 col-lg-4 col-xl-3";
                    state.layout_type = "four"
                 }
                 else if(type == "three"){
                    state.layout =  "col-6 col-md-4 col-lg-4";
                    state.layout_type = "three";
                 }
                 else if(type == "two"){
                        state.layout =  "col-6";
                        state.layout_type = "two"
                 }
                 else {
                    state.layout =  "list";
                    state.layout_type = "list"
                 }
                 return state.layout
            }
            state.layout_type = "four"
            return state.layout = "four";
        }
    },
    actions: {
        changeLocale({ commit }, newLocale) {
            i18n.locale = newLocale // important!
            commit('UPDATE_LOCALE', newLocale)
          }
    },
    mutations: {
        UPDATE_LOCALE(state, newLocale) {
            state.locale = newLocale
            localStorage.setItem('locale',newLocale)
        },
        TOGGLE_THEME(state){
            if (state.theme.type == 'dark') {
                state.theme.type = 'light'
            } else {
                state.theme.type = 'dark'
            }
            localStorage.setItem('theme',state.theme.type);
            return localStorage.getItem('theme')
        },
        SET_LAYOUT(state, type){
            state.layout = type
            localStorage.setItem('layout', type);
        }
    },
    plugins: [createPersistedState()]

};
