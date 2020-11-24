import axios from 'axios';

export default {
    state: {
        categories: [],
        nested_categories: [],
        category: {},
        filter:{ category : "" }
    },
    actions: {
        async getCategories({ commit }) {
            try {
                let res = await axios.get('/api/categories');
                commit('FETCH_CATEGORIES', res.data.data);
            } catch (error) {

            }
        },
        async getCategoryBySlug({state, commit }, slug) {
            try {

                let res = await axios.get(`/api/category/${slug}`, {
                    params: { filter : state.filter.category }
                });
                commit('FETCH_CATEGORY', res.data);
            } catch (error) {
                if (error.response.status == 404) {
                    $Bus.$emit('404')
                }
            }
        },
        async getCategoriesSubcategories({ commit }) {
            try {
                let res = await axios.get(`/api/categoriesSubcategories`);
                commit('FETCH_CATEGORIES_SUBCATEGORIES', res.data.data);
            } catch (error) {

            }
        },
    },
    mutations: {
        FETCH_CATEGORIES(state, payload) {
            state.categories = payload;
        },
        FETCH_CATEGORIES_SUBCATEGORIES(state, payload) {
            state.nested_categories = payload;
        },
        FETCH_CATEGORY(state, payload) {
            state.category = payload;
        }
    }

};
