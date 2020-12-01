export default {
    async getWishlists({commit}){
        try {
            let res = await axios.get(`/api/wishlist`);
             commit('changeState' , { wishlistData : res.data });
        } catch (error) {
            console.log(error);
        }
    },
    async addToWishlist({commit}, product){
        try {
            let { id , name , price , image} = product;
            let res = await axios.post(`/api/wishlist`,{
                id,name,price,qty:1,image
            });
             commit('changeState' , { wishlistData : res.data });
        } catch (error) {
            console.log(error);
        }
    },
    async updateWishlistQuantity({commit , state} , {rowId, qty}){
        try {
            let res = await axios.put(`/api/wishlist/${rowId}`,{ qty });
            commit('changeState' , { wishlistData : res.data });
            $awn.success('Wishlist Updated Successfully')
        } catch (error) {
            if (error.response.status == 422) {
                $awn.warning(error.response.data.errors.qty[0]);
              }
        }
    },
    async removeWishlistItem({commit , state} , rowId){
        try {
            let res = await axios.delete(`/api/wishlist/${rowId}`);
            if (res.status == 200) {
                commit('changeState' , { wishlistData : res.data });
            }
        } catch (error) {
            console.log(error);
        }
    },
    async clearAllItem({commit , state}){
        try {
            let res = await axios.delete(`/api/wishlist/destroy`);
            if (res.status == 200) {
                commit('changeState' , { wishlistData : res.data });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

