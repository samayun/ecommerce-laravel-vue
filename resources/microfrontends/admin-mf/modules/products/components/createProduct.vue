<template>
<div class="">
    <span class="float-right mr-3">
       <a
        class="btn btn-primary"
        @click.prevent="TOGGLE_MODAL('add')"
        :disabled="addProductData.busy"
        :loading="addProductData.busy"><Icon type="ios-add" size='large' /> {{$t('products.add')}}</a>

        <Modal v-model="addProductMeta.showModal" role="form" :title="$t('products.add')"   :headers="{'x-csrf-token' : token, 'X-Requested-With' : 'XMLHttpRequest'}" :mask-closable="true" :closable="true" class="m-auto w-100">
            <!-- <div class="tile"> -->
                <form role="form" @submit.prevent="createProduct">
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
                                        v-model="addProductData.name"
                                        value="ICT"
                                        :class="{ 'is-invalid': addProductData.errors.has('name') }"
                                    />
                                    <has-error :form="addProductData" field="name"></has-error>
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
                                        v-model="addProductData.slug"
                                        value="ICT"
                                        :class="{ 'is-invalid': addProductData.errors.has('slug') }"
                                    />
                                    <has-error :form="addProductData" field="slug"></has-error>
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
                                        v-model="addProductData.sku"
                                         :class="{ 'is-invalid': addProductData.errors.has('sku') }"
                                    />
                                    <has-error :form="addProductData" field="sku"></has-error>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label" for="brand_id">Brand</label>
                                     <Select v-model="addProductData.brand_id"
                                      :class="{ 'is-invalid': addProductData.errors.has('brand_id') }">
                                          <Option v-for="item in getAllBrand" :key="item.id" :value="item.id">
                                              <img :src="item.logo" alt="item.name" width="20rem">
                                              {{ item.name }} </Option>
                                     </Select>
                                    <has-error :form="addProductData" field="brand_id"></has-error>
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
                                        v-model="addProductData.price"
                                        :class="{ 'is-invalid': addProductData.errors.has('price') }"
                                        value="85.00"
                                    />
                                    <has-error :form="addProductData" field="price"></has-error>
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
                                        v-model="addProductData.quantity"
                                        :class="{ 'is-invalid': addProductData.errors.has('quantity') }"
                                        value="88"
                                    />
                                     <has-error :form="addProductData" field="quantity"></has-error>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i>    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="description">Description</label>
                            <textarea v-model="addProductData.description" id="description" rows="2" class="form-control" :class="{ 'is-invalid': addProductData.errors.has('description') }">It's good product </textarea>
                             <has-error :form="addProductData" field="description"></has-error>
                        </div>
                        <Upload
                            ref="upload"
                            type="drag"
                            :multiple="false"
                            :show-upload-list="false"
                            name="image"
                            :headers="{'x-csrf-token' : token, 'X-Requested-With' : 'XMLHttpRequest'}"
                            :before-upload="handleBeforeUpload"
                            :on-success="handleSuccess"
                            :format="['jpg','jpeg','png','svg']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            action="/api/admin/products"
                        >
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p  :class="{ 'is-invalid text-danger': addProductData.errors.has('image') }"> {{ $t('click_here_upload') }} </p>
                            </div>
                        </Upload>
                        <has-error :form="addProductData" field="image" style="display: block;"></has-error>
                        <div class="demo-upload-list" v-if="addProductData.image">
                            <img :src="`${addProductData.image}`" style="width:10rem;height:6rem;"/>
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-camera-outline" size="large" @click="HANDLE_VIEW"></Icon>
                                <Icon type="ios-trash-outline" size="large" @click="deleteImage('add')"></Icon>
                            </div>
                        </div>
                        <div class="form-group mt-1" v-show="addProductData.image">
                            <label for="featured"> Featured :   </label>
                            <i-switch @on-change="addProductData.featured = !addProductData.featured" name="featured" > </i-switch>
                        </div>

                        <Modal title="View image" v-model="imageVisible">
                            <img :src="addProductData.image" :alt="addProductData.name" style="width:100%;"/>
                        </Modal>
                    </div>
                    <div class="form-group" >
                        <label for="status"> Publish Now :   </label>
                        <i-switch @on-change="addProductData.status = !addProductData.status" name="status" > </i-switch>
                    </div>
                    <div class="tile-footer">
                        <div class="row d-print-none mt-2">
                            <div class="col-12 text-right">
                                <Button
                                     type="primary"
                                      @click="createProduct"
                                       class="btn btn-success" >
                                      <i class="fa fa-fw fa-lg fa-check-circle"></i>
                                {{addProductData.busy ? $t('products.adding')+'..' : $t('products.add')}}</Button>

                                <Button type="default" @click="TOGGLE_MODAL('add')">
                                    <i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back </Button>
                            </div>
                        </div>
                    </div>
                     <div class="footer"></div>
                </form>
            <!-- </div> -->

        </Modal>
    </span>

</div>
</template>


<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: "createProduct",
    computed:{
        ...mapState("productsStoreIndex", [
          'addProductMeta' ,'addProductData'
       ]),
       ...mapGetters("brandsStoreIndex",['getAllBrand']),
       imageVisible:{
           get(){
               return this.addProductMeta.isImageVisible
           },
           set(value){
               this.HANDLE_VIEW(true)
           }
       }
    },
    methods:{
          ...mapActions("brandsStoreIndex", ['getBrands']),
         ...mapActions("productsStoreIndex", ['createProduct','handleMaxSize' ,'handleFormatError' ,'handleSuccess','handleBeforeUpload','handleError' ,'deleteImage' ,'HANDLE_VIEW' ]),
         ...mapMutations("productsStoreIndex", ['TOGGLE_MODAL' ]),
    },
    created(){
       if (this.addProductMeta.showModal) {
           document.title = 'Create Products';
       }
       this.token = window.Laravel.csrfToken;
       if (this.getAllBrand.length == 0) {
            this.getBrands();
       }
    }
}
</script>

