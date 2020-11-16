import createPersistedState from 'vuex-persistedstate'
import i18n, { selectedLocale } from '../../../i18n'

export default {
    state: {
        locale: selectedLocale,
        theme:{
            type: 'dark'
        }
    },
    getters:{
        getTheme : state => {
            if (localStorage.getItem('theme')) {
                return localStorage.getItem('theme');
            }
            return state.theme.type;
        },
        getIsDark : state => state.theme.type == 'dark'
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
        }
    },
    plugins: [createPersistedState()]

};
