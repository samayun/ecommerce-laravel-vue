export default {
    async getAttributes({commit}){
        try {
            let { data } = await axios.get(`/api/attributes`);
            commit('changeState', { attributes: data})

        } catch (error) {

        }

    }
}
