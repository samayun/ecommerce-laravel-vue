import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'

export default {
    state: {
       categories:[],
       nested_categories:[],
       category: {}
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
        }
    },
    plugins: [createPersistedState()]

};
