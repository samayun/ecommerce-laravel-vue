export default {
    async getProduct({ commit }, slug) {
        try {
            let res = await axios.get(`/api/product/${slug}`);
            commit('changeState', {
                product: res.data.data
            })
        } catch (error) {
            console.log('error', error);
        }
    },
    async getProducts({ state, commit }) {
        try {
            let params = state.filter.product ?  {
                filter: state.filter.product
            }: null;
            let res = await axios.get(`/api/products`, {params});
            commit('changeState', { products: res.data.data, meta: res.data.meta });
        } catch (error) {
            console.log('error', error);
        }
    },
    QuickView({commit} , product){
        commit('changeState', {quickView: product});
    }
}
