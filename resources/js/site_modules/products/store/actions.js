export default {
    async getProduct({commit},slug){
        try {
            let res = await axios.get(`/api/product/${slug}`);
            commit('SET_PRODUCT',res.data.data)
        } catch (error) {
            console.log('error', error);
        }
    }
}
