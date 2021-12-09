import createPersistedState from "vuex-persistedstate";
import i18n, { selectedLocale } from "../../../i18n";

export default {
    state: {
        locale: selectedLocale,
        theme: {
            type: "dark"
        },
        layout: "four",
        layout_type: "four"
    },
    getters: {
        getTheme: state => {
            if (localStorage.getItem("theme_site")) {
                return localStorage.getItem("theme_site");
            }
            return state.theme.type;
        },
        getIsDark: state => state.theme.type == "dark",
        getLayout: state => {
            if (localStorage.getItem("layout")) {
                let type = localStorage.getItem("layout");
                switch (type) {
                    case "two":
                        state.layout_type = "two";
                        state.layout = "col-6";
                        break;
                    case "three":
                        state.layout_type = "three";
                        state.layout = "col-6 col-md-4 col-lg-4";
                        break;
                    case "list":
                        state.layout_type = "list";
                        state.layout = "list";
                        break;
                    default:
                        state.layout_type = "four";
                        state.layout = "col-6 col-md-4 col-lg-4 col-xl-3";
                        break;
                }
            }
            return state.layout;
        }
    },
    actions: {
        changeLocale({ commit }, newLocale) {
            i18n.locale = newLocale; // important!
            commit("UPDATE_LOCALE", newLocale);
        }
    },
    mutations: {
        UPDATE_LOCALE(state, newLocale) {
            state.locale = newLocale;
            localStorage.setItem("locale_site", newLocale);
        },
        TOGGLE_THEME(state) {
            if (state.theme.type == "dark") {
                state.theme.type = "light";
            } else {
                state.theme.type = "dark";
            }
            localStorage.setItem("theme", state.theme.type);
            return localStorage.getItem("theme");
        },
        SET_LAYOUT(state, type) {
            state.layout = type;
            localStorage.setItem("layout", type);
        }
    },
    plugins: [createPersistedState()]
};
