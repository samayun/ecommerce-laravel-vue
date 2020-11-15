<template>
<div class="">
    <span class="float-right mr-3">
        <Modal v-model="editProductMeta.showModal" role="form" :title="$t('products.edit')"   :headers="{'x-csrf-token' : token, 'X-Requested-With' : 'XMLHttpRequest'}" :mask-closable="true" :closable="true" class="m-auto w-100">
            <!-- <div class="tile"> -->
                <form role="form" @submit.prevent="updateProduct">
                    <hr>
                    <div class="tile-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label" for="name">Name</label>
                                    <input
                                        class="form-control "
                                        type="text"
                                        placeholder="Enter product name"
                                        id="name"
                                        v-model="editProductData.name"
                                        value="ICT"
                                        :class="{ 'is-invalid': editProductData.errors.has('name') }"
                                    />
                                    <has-error :form="editProductData" field="name"></has-error>
                                    <div class="invalid-feedback active"><i class="fa fa-exclamation-circle fa-fw"></i></div>
                                </div>
                            </div>
                           <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label" for="slug"> Custom URL (Slug) - Optional </label>
                                    <input
                                        class="form-control "
                                        type="text"
                                        placeholder="Enter product slug"
                                        id="slug"
                                        v-model="editProductData.slug"
                                        value="ICT"
                                        :class="{ 'is-invalid': editProductData.errors.has('slug') }"
                                    />
                                    <has-error :form="editProductData" field="slug"></has-error>
                                    <div class="invalid-feedback active"><i class="fa fa-exclamation-circle fa-fw"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label" for="sku">SKU</label>
                                    <input
                                        class="form-control "
                                        type="number"
                                        placeholder="Enter product sku"
                                        id="sku"
                                        v-model="editProductData.sku"
                                         :class="{ 'is-invalid': editProductData.errors.has('sku') }"
                                    />
                                    <has-error :form="editProductData" field="sku"></has-error>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label" for="brand_id">Brand</label>
                                     <Select v-model="editProductData.brand_id"
                                      :class="{ 'is-invalid': editProductData.errors.has('brand_id') }">
                                          <Option v-for="item in getAllBrand" :key="item.id" :value="item.id"
                                           :selected="item.id == editProductData.brand_id"
                                           >
                                              <img :src="item.logo" alt="item.name" width="20rem">
                                              {{ item.name }} </Option>
                                     </Select>
                                    <has-error :form="editProductData" field="brand_id"></has-error>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label" for="price">Price</label>
                                    <input
                                        class="form-control "
                                        type="text"
                                        placeholder="Enter product price"
                                        id="price"
                                        v-model="editProductData.price"
                                        :class="{ 'is-invalid': editProductData.errors.has('price') }"
                                        value="85.00"
                                    />
                                    <has-error :form="editProductData" field="price"></has-error>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i>  </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label" for="quantity">Quantity</label>
                                    <input
                                        class="form-control "
                                        type="number"
                                        placeholder="Enter product quantity"
                                        id="quantity"
                                        v-model="editProductData.quantity"
                                        :class="{ 'is-invalid': editProductData.errors.has('quantity') }"
                                        value="88"
                                    />
                                     <has-error :form="editProductData" field="quantity"></has-error>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i>    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="description">Description</label>
                            <textarea v-model="editProductData.description" id="description" rows="2" class="form-control" :class="{ 'is-invalid': editProductData.errors.has('description') }">It's good product </textarea>
                             <has-error :form="editProductData" field="description"></has-error>
                        </div>

                    </div>
                    <div class="tile-footer">
                        <div class="row d-print-none mt-2">
                            <div class="col-12 text-right">
                                <Button
                                     type="primary"
                                      @click="updateProduct"
                                       class="btn btn-success" >
                                      <i class="fa fa-fw fa-lg fa-check-circle"></i>
                                {{editProductData.busy ? $t('products.editing')+'..' : $t('products.edit')}}</Button>

                                <Button type="default" @click="TOGGLE_MODAL('edit')">
                                    <i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back </Button>
                            </div>
                        </div>
                    </div>
                </form>
            <!-- </div> -->
                <div slot="footer"> </div>

        </Modal>
    </span>

</div>
</template>


<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: "updateProductModal",
    computed:{
        ...mapState("productsStoreIndex", [
          'editProductMeta' ,'editProductData'
       ]),
       ...mapGetters("brandsStoreIndex",['getAllBrand']),
    },
    methods:{
         ...mapActions("brandsStoreIndex", ['getBrands']),
         ...mapActions("productsStoreIndex", ['updateProduct' ]),
         ...mapMutations("productsStoreIndex", ['TOGGLE_MODAL' ]),
    },
    created(){
       document.title = 'Update Products';
       this.token = window.Laravel.csrfToken;
       if (this.getAllBrand.length == 0) {
            this.getBrands();
       }
    }
}
</script>
