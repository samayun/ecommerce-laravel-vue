export default {
    async getProduct({commit},slug){
        try {
            let res = await axios.get(`/api/product/${slug}`);
            // commit('SET_PRODUCT',res.data.data)
            commit('changeState', {
                product : res.data.data
            })
        } catch (error) {
            console.log('error', error);
        }
    },
    async getProducts({commit},slug){
        try {
            let res = await axios.get(`/api/products`);
            commit('changeState', {
                products : res.data.data
            })
        } catch (error) {
            console.log('error', error);
        }
    },
}
