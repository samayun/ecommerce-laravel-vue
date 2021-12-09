export default {
    async getCompares({commit}){
        try {
            let res = await axios.get(`/api/compare`);
             commit('changeState' , { compareData : res.data });
        } catch (error) {
            console.log(error);
        }
    },
    async addToCompare({commit}, product){
        try {
            let { id , name , price , image} = product;
            let res = await axios.post(`/api/compare`,{
                id,name,price,qty:1,image
            });
             commit('changeState' , { compareData : res.data });
        } catch (error) {
            console.log(error);
        }
    },
    async updateCompareQuantity({commit , state} , {rowId, qty}){
        try {
            let res = await axios.put(`/api/compare/${rowId}`,{ qty });
            commit('changeState' , { compareData : res.data });
            $awn.success('Compare Updated Successfully')
        } catch (error) {
            if (error.response.status == 422) {
                $awn.warning(error.response.data.errors.qty[0]);
              }
        }
    },
    async removeCompareItem({commit , state} , rowId){
        try {
            let res = await axios.delete(`/api/compare/${rowId}`);
            if (res.status == 200) {
                commit('changeState' , { compareData : res.data });
            }
        } catch (error) {
            console.log(error);
        }
    },
    async clearAllCompareItem({commit , state}){
        try {
            let res = await axios.delete(`/api/compare/destroy`);
            if (res.status == 200) {
                commit('changeState' , { compareData : res.data });
            }
        } catch (error) {
            console.log(error);
        }
    },
}

