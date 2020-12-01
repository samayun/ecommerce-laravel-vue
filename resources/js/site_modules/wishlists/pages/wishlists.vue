<template>
<div class="container  mt-5 ml-5 row">
    <div class="col-md-3"></div>
    <div class="mt-5 col-md-9">
        <button class="btn btn-info" @click="clearAllItem"> Clear WishList</button>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                        <th>Action </th>
                    </tr>
                </thead>

                <tbody>
                        <tr
                         v-for="wishlist in wishlistData.wishlists" :key="wishlist.rowId">
                            <td>
                                <p><strong>{{ wishlist.name }} </strong></p>
                                <p > {{ wishlist.options.hasOwnProperty('size')  ? wishlist.options.size : '' }} </p>
                            </td>
                            <td>
                                <img :src="wishlist.options[0].image ? `${wishlist.options[0].image}` : `/storage/products/default.png` " :alt="wishlist.name" style="width:60px;"/>
                            </td>
                            <td><input type="number" pattern="/^d+$/" :ref="`wishlist-${wishlist.rowId}`" :value="wishlist.qty" @keyup.enter="updateWishlistQuantity({rowId:wishlist.rowId ,qty: $refs[`wishlist-${wishlist.rowId}`][0].value})"></td>
                            <td> $ {{ wishlist.price }} </td>
                            <td> $ {{ wishlist.subtotal }} </td>
                            <td>
                                 <a href="#" @click="updateWishlistQuantity({rowId:wishlist.rowId ,qty: $refs[`wishlist-${wishlist.rowId}`][0].value})" class="btn-remove" title="Update Product"><i class="icon-edit"></i></a>

                                  <a href="#" @click="removeWishlistItem(wishlist.rowId)" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                            </td>
                        </tr>


                </tbody>

                <tfoot>
                    <tr>
                        <td colspan="4" >&nbsp;</td>
                        <td>Subtotal</td>
                        <td> {{ wishlistData.subtotal }} </td>
                    </tr>
                    <tr>
                        <td colspan="4" >&nbsp;</td>
                        <td>Tax</td>
                        <td> {{ wishlistData.tax }} </td>
                    </tr>
                    <tr>
                        <td colspan="4" >&nbsp;</td>
                        <td>Total</td>
                        <td> {{ wishlistData.total }} </td>
                    </tr>
                </tfoot>
            </table>
    </div>
</div>
</template>
<script>
import { mapState,mapGetters, mapActions } from 'vuex'
export default {
   computed:{
      ...mapState("wishlistsStoreIndex",["wishlistData"]),
      ...mapGetters("wishlistsStoreIndex",["wishlistsArray"]),
   },
   methods:{
        ...mapActions("wishlistsStoreIndex",["getWishlists","removeWishlistItem","updateWishlistQuantity","clearAllItem"])
    },
   created(){
        if (Object.keys(this.wishlistData.wishlists).length < 1) {
            this.getWishlists()
        }
   }
}
</script>
