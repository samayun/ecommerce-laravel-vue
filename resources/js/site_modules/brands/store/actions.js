export default {
    async getBrands({commit}){
        try {
            let res = await axios.get('/api/brands');
            // commit("FETCH_BRANDS", res.data);
            commit('changeState', {
                brands : res.data
            })
        } catch (error) {
            console.log(error);

        }
    },
    async getBrand({state,commit},slug){
        try {
            let res = await axios.get(`/api/brands/${slug}`, {
                params: { filter : state.filter.brand }
            });
            // commit("FETCH_BRAND", res.data);
            commit('changeState', {
                brand : res.data.data
            })
        } catch (error) {
            console.log(error);

        }
    }
}
