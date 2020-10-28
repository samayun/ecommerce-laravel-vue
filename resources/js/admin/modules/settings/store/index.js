import createPersistedState from 'vuex-persistedstate'
import i18n, { selectedLocale } from '../../../../i18n'

export default {
    state: {
        locale: selectedLocale
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
        }
    },
    plugins: [createPersistedState()]

};
