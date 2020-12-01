<template>
<div class="container  mt-5 ml-5 row">
    <div class="col-md-3"></div>
    <div class="mt-5 col-md-9">
            <button class="btn btn-primary" @click="clearAllCompareItem">Clear All </button>
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
                         v-for="compare in compareData.compares" :key="compare.rowId">
                            <td>
                                <p><strong>{{ compare.name }} </strong></p>
                                <p > {{ compare.options.hasOwnProperty('size')  ? compare.options.size : '' }} </p>
                            </td>
                            <td>
                                <img :src="compare.options[0].image ? `${compare.options[0].image}` : `/storage/products/default.png` " :alt="compare.name" style="width:60px;"/>
                            </td>
                            <td><input type="number" pattern="/^d+$/" :ref="`compare-${compare.rowId}`" :value="compare.qty" @keyup.enter="updateCompareQuantity({rowId:compare.rowId ,qty: $refs[`compare-${compare.rowId}`][0].value})"></td>
                            <td> $ {{ compare.price }} </td>
                            <td> $ {{ compare.subtotal }} </td>
                            <td>
                                 <a href="#" @click="updateCompareQuantity({rowId:compare.rowId ,qty: $refs[`compare-${compare.rowId}`][0].value})" class="btn-remove" title="Update Product"><i class="icon-edit"></i></a>

                                  <a href="#" @click="removeCompareItem(compare.rowId)" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                            </td>
                        </tr>


                </tbody>

                <tfoot>
                    <tr>
                        <td colspan="4" >&nbsp;</td>
                        <td>Subtotal</td>
                        <td> {{ compareData.subtotal }} </td>
                    </tr>
                    <tr>
                        <td colspan="4" >&nbsp;</td>
                        <td>Tax</td>
                        <td> {{ compareData.tax }} </td>
                    </tr>
                    <tr>
                        <td colspan="4" >&nbsp;</td>
                        <td>Total</td>
                        <td> {{ compareData.total }} </td>
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
      ...mapState("compareStoreIndex",["compareData"])
   },
   methods:{
        ...mapActions("compareStoreIndex",["getCompares","removeCompareItem","updateCompareQuantity","clearAllCompareItem"])
    },
   created(){
        if (Object.keys(this.compareData.compares).length < 1) {
            this.getCompares()
        }
   }
}
</script>
