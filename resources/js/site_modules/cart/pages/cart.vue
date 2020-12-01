<template>
<div class="container  mt-5 ml-5 row">
    <div class="col-md-3"></div>
    <div class="mt-5 col-md-9">
            <div class="card">
                <span class="float-right ml-4">
                    <button @click="clearAllItem" class="btn btn-success"> Clear All </button>
                </span>
            </div>
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
                         v-for="cart in cartData.carts" :key="cart.rowId">
                            <td>
                                <p><strong>{{ cart.name }} </strong></p>
                                <p > {{ cart.options.hasOwnProperty('size')  ? cart.options.size : '' }} </p>
                            </td>
                            <td>
                                <img :src="cart.options[0].image ? `${cart.options[0].image}` : `/storage/products/default.png` " :alt="cart.name" style="width:60px;"/>
                            </td>
                            <td><input type="number" pattern="/^d+$/" :ref="`cart-${cart.rowId}`" :value="cart.qty" @keyup.enter="updateCartQuantity({rowId:cart.rowId ,qty: $refs[`cart-${cart.rowId}`][0].value})"></td>
                            <td> $ {{ cart.price }} </td>
                            <td> $ {{ cart.subtotal }} </td>
                            <td>
                                 <a href="#" @click="updateCartQuantity({rowId:cart.rowId ,qty: $refs[`cart-${cart.rowId}`][0].value})" class="btn-remove" title="Update Product"><i class="icon-edit"></i></a>

                                  <a href="#" @click="removeCartItem(cart.rowId)" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                            </td>
                        </tr>


                </tbody>

                <tfoot>
                    <tr>
                        <td colspan="4" >&nbsp;</td>
                        <td>Subtotal</td>
                        <td> {{ cartData.subtotal }} </td>
                    </tr>
                    <tr>

                        <td colspan="4">&nbsp;</td>
                        <td>Tax</td>
                        <td> {{ cartData.tax }} </td>
                    </tr>
                    <tr>
                        <td colspan="4">&nbsp;</td>
                        <td>Total</td>
                        <td> {{ cartData.total }} </td>
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
      ...mapState("cartStoreIndex",["cartData"]),
      ...mapGetters("cartStoreIndex",["cartsArray"]),
   },
   methods:{
        ...mapActions("cartStoreIndex",["getCarts","removeCartItem","updateCartQuantity","clearAllItem"])
    },
   created(){
        if (Object.keys(this.cartData.carts).length < 1) {
            this.getCarts()
        }
   }
}
</script>
