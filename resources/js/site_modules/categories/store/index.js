import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'

export default {
    state: {
       categories:[],
       nested_categories:[],
       category: {},
       layout: "four",
       layout_type: "four"
    },
    getters:{
        getLayout(state){
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
        async getCategories({commit}) {
            try {
                let res = await axios.get('/api/categories');
                commit('FETCH_CATEGORIES', res.data.data);
            } catch (error) {

            }
        },
        async getCategoryBySlug({commit},slug) {
            try {
                let res = await axios.get(`/api/category/${slug}`);
                commit('FETCH_CATEGORY', res.data);
            } catch (error) {
                if (error.response.status == 404) {
                    $Bus.$emit('404')
                }
            }
        },
        async getCategoriesSubcategories({commit}) {
            try {

                let res = await axios.get(`/api/categoriesSubcategories`);
                commit('FETCH_CATEGORIES_SUBCATEGORIES', res.data.data);
            } catch (error) {

            }
        },
    },
    mutations: {
        FETCH_CATEGORIES(state,payload) {
            state.categories = payload;
        },
        FETCH_CATEGORIES_SUBCATEGORIES(state,payload) {
            state.nested_categories = payload;
        },
        FETCH_CATEGORY(state , payload){
            state.category = payload;
        },
        SET_LAYOUT(state, type){
            state.layout = type
            localStorage.setItem('layout', type);
        }
    },
    plugins: [createPersistedState()]

};
