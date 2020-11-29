export default {
    async getFilteredData({ state, commit }) {
        try {

            let categories = state.selected.categories.length > 0 ?  state.selected.categories : null;
            let brands = state.selected.brands.length != 0 ?  state.selected.brands : null;
            let sizes = state.selected.sizes.length != 0 ?  state.selected.sizes : null;
            let prices = state.selected.prices && state.selected.prices.length != 0 ?  `0-${state.selected.prices}` : null;

            let res = await Object.freeze(axios.get(`/api/products`, {params: {
                categories: state.selected.categories,
                brands , sizes,prices
            } }));
            $Bus.$emit('fetchProducts',{
                products: res.data.data, meta: res.data.meta
            })
            // commit('changeState', { products: res.data.data, meta: res.data.meta });
        } catch (error) {
            console.log('error', error);
        }
    }
}
