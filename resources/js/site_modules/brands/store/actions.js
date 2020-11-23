export default {
    async getBrands({commit}){
        try {
            let res = await axios.get('/api/brands');
            commit("FETCH_BRANDS", res.data);
        } catch (error) {
            console.log(error);

        }
    },
    async getBrand({commit},slug){
        try {
            let res = await axios.get(`/api/brands/${slug}`);
            commit("FETCH_BRAND", res.data);
        } catch (error) {
            console.log(error);

        }
    }
}
