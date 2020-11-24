export default {
    async getAttributes({commit}){
        try {
            let { data } = await axios.get(`/api/attributes`);
            commit('FETCH_ATTRIBUTES', data)
        } catch (error) {

        }

    }
}
