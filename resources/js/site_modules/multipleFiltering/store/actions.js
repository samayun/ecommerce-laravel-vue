export default {
    async getFilteredBrandData({ getters, commit }) {
        try {
            let { data } = await axios.get(`/api/brands/toyota`)
        } catch (error) {
            console.log(error);

        }
    }
}
