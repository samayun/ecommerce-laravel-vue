<template>
<form role="form" @submit.prevent="updateProduct" >
    <div class="row user">
        <div class="col-md-12">
            <div class="tile"
            :style="'background: url('+editProductData.image+')'"
            >
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
                                    <Select
                                        v-model="editProductData.brand_id"
                                        prefix="brand.logo"
                                        :class="{ 'is-invalid': editProductData.errors.has('brand_id') }" >
                                        <Option v-for="item in getAllBrand" :key="item.id" :value="item.id">
                                            <Avatar :src="item.logo" :alt="item.name"  size="small" />
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
                    <!-- SUBMIT BUTTON   -->
                <!-- form -->
            </div>
        </div>
        <div class="col-md-12">
                <div class="row">
                    <div class="col-12">
                        <div class="card card-info collapsed-card">
                                    <div class="card-header">
                                        <h3 class="card-title"> Featured / Publishing </h3>

                                        <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                        </div>
                                    </div>
                            <!-- /.card-header -->
                                    <div class="card-body" style="display: block;">
                                        <Select v-model="editProductData.categories"
                                            multiple
                                            :class="{ 'is-invalid': editProductData.errors.has('categories') }">

                                            <Option v-for="(item,i) in allcategories"
                                                :key="item.id" :value="item.id"
                                                :tag=item.name
                                                :selected="editProductData.categories"
                                            >
                                                <Avatar
                                                    :src="item.icon"
                                                    :alt="item.name"
                                                    size="small" />
                                                {{ item.name }} </Option>
                                        </Select>
                                        <has-error :form="editProductData" field="categories"></has-error>
                                        <div class="form-group">
                                            <label for="status"> Publish  :  </label>
                                            <i-switch  v-model="editProductData.status" color="success">  </i-switch>
                                        </div>
                                    </div>
                            </div>
                    </div>
                    <div class="col-12">
                        <div class="card card-warning collapsed-card">
                                    <div class="card-header">
                                        <h3 class="card-title"> Image </h3>
                                        <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                        </div>
                                    </div>
                            <!-- /.card-header -->
                                    <div class="card-body" style="display: none;">
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
                                            <div style="pediting: 20px 0">
                                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                                <p  :class="{ 'is-invalid text-danger': editProductData.errors.has('image') }"> {{ $t('click_here_upload') }} </p>
                                            </div>
                                        </Upload>
                                        <has-error :form="editProductData" field="image" style="display: block;"></has-error>
                                        <div class="demo-upload-list" v-if="editProductData.image">
                                            <img :src="`${editProductData.image}`" style="width:10rem;height:6rem;"/>
                                            <div class="demo-upload-list-cover">
                                                <Icon type="ios-camera-outline" size="large" @click="HANDLE_VIEW"></Icon>
                                                <Icon type="ios-trash-outline" size="large" @click="deleteImage('edit')"></Icon>
                                            </div>
                                        </div>
                                        <div class="form-group" v-show="editProductData.image">
                                            <label for="featured"> Featured :   </label>
                                            <i-switch @on-change="editProductData.featured = !editProductData.featured" v-model="editProductData.featured" name="featured" > </i-switch>
                                        </div>

                                    <Modal title="View image" v-model="imageVisible">
                                        <img :src="editProductData.image" :alt="editProductData.name" style="width:100%;"/>
                                    </Modal>
                                    </div>
                            </div>
                    </div>
                </div>
        </div>
    </div>
    <div class="tile-footer">
        <div class="row d-print-none mt-2 ml-4">
            <div class="col-6 text-right">
                <Button
                    type="success"
                    @click="updateProduct" >
                    <i class="fa fa-fw fa-lg fa-check-circle"></i>
                {{editProductData.busy ? $t('products.editing')+'..' : $t('products.edit')}}</Button>
                <Button type="default" @click="$router.replace('/admin/products')">
                    <i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back </Button>
            </div>
        </div>
    </div>
</form>
</template>

<script>

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: 'ProductEditForm',

    computed:{
        ...mapState("productsStoreIndex", [
          'editProductMeta' ,'editProductData'
       ]),
        ...mapState("categoriesStoreIndex", [ 'allcategories' ]),
       ...mapGetters("brandsStoreIndex",['getAllBrand']),
        imageVisible: {
            get(){
                return this.editProductMeta.isImageVisible
            },
            set(value){
                this.HANDLE_VIEW(false)
            }
        }
    },
    methods:{
          ...mapActions("brandsStoreIndex", ['getBrands']),
         ...mapActions("categoriesStoreIndex", [ 'getMergedCategories' ]),
         ...mapActions("productsStoreIndex", ['getSingleProduct','updateProduct' , 'handleMaxSize' ,'handleFormatError' ,'handleSuccess','handleBeforeUpload','handleError' ,'deleteImage' ,'HANDLE_VIEW' ]),
         ...mapMutations("productsStoreIndex", ['TOGGLE_MODAL' ]),
         hanndleSelected(categories){
             let _this = this
                categories.forEach(element => {
                    let index = this.allcategories.findIndex(i => i.id == element.id);
                    return this.allcategories[index].id == element.id;
                });
         }
    },
    created(){
        let existProId = this.$store.state.productsStoreIndex.editProductData.id
        let id = this.$route.params.id
        if (existProId != id) {
            this.getSingleProduct(id)
                document.title = 'Edit Products';
        }
       if (this.allcategories.length == 0) {
            this.getMergedCategories();
       }
       this.token = window.Laravel.csrfToken;
       if (this.getAllBrand.length == 0) {
            this.getBrands();
       }
        let _this = this
        $Bus.$on('cleareditedFiles' , () => {
            _this.$refs.upload.clearFiles();
        });
         $Bus.$on('redirectToProducts', () => {
              _this.$router.push({name:"Products"});
         });

    }
}
</script>
