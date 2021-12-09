export default {
    async getCarts({commit}){
        try {
            let res = await axios.get(`/api/cart`);
             commit('changeState' , { cartData : res.data });
        } catch (error) {
            console.log(error);
        }
    },
    async addToCart({commit}, product){
        try {
            let { id , name , price , image} = product;
            let res = await axios.post(`/api/cart`,{
                id,name,price,qty:1,image
            });
             commit('changeState' , { cartData : res.data });
        } catch (error) {
            console.log(error);
        }
    },
    async updateCartQuantity({commit , state} , {rowId, qty}){
        try {
            let res = await axios.put(`/api/cart/${rowId}`,{ qty });
            commit('changeState' , { cartData : res.data });
            $awn.success('Cart Updated Successfully')
        } catch (error) {
            if (error.response.status == 422) {
                $awn.warning(error.response.data.errors.qty[0]);
              }
        }
    },
    async removeCartItem({commit , state} , rowId){
        try {
            let res = await axios.delete(`/api/cart/${rowId}`);
            if (res.status == 200) {
                commit('changeState' , { cartData : res.data });
                // commit('removeCartItem',rowId);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async clearAllItem({commit , state}){
        try {
            let res = await axios.delete(`/api/cart/destroy`);
            if (res.status == 200) {
                commit('changeState' , { cartData : res.data });
            }
        } catch (error) {
            console.log(error);
        }
    },
}

