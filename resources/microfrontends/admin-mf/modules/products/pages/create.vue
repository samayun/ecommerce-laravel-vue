<template>
<main class="app-content" id="app">
    <div class="app-title"
       :class="getIsDark ? 'app-title-dark': ''"
     >
        <div>
            <h1><i class="fa fa-cogs"></i> {{$t('products.add')}}</h1>
        </div>
    </div>
     <form role="form" @submit.prevent="createProduct">
        <div class="row user">
            <div class="col-md-9">
                <div class="tile"
                  :style="'background: url('+addProductData.image+')'"
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
                                        <InputNumber
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
                                        <InputNumber
                                            min=1
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
                        </div>
                        <!-- SUBMIT BUTTON   -->
                    <!-- form -->
                </div>
            </div>
            <div class="col-md-3">
                    <div class="row">
                        <div class="col-12">
                            <div class="card card-info collapsed-card">
                                        <div class="card-header">
                                            <h3 class="card-title"> Categories / Publishing </h3>
                                            <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                            </div>
                                        </div>
                                <!-- /.card-header -->
                                        <div class="card-body" style="display: block;">
                                            <Select v-model="addProductData.categories" multiple
                                            :class="{ 'is-invalid': addProductData.errors.has('categories') }">
                                                <Option v-for="item in allcategories" :key="item.id" :value="item.id">
                                                    <img :src="item.icon" alt="item.name" width="20rem">
                                                    {{ item.name }} </Option>
                                            </Select>
                                             <has-error :form="addProductData" field="categories"></has-error>
                                            <div class="form-group mt-3 mb-0">
                                                <label for="status"> Publish  :  </label>
                                                <i-switch  v-model="addProductData.status" color="success">  </i-switch>
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
                                        <div class="card-body" style="display: block;">
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
                                            <div class="form-group" v-show="addProductData.image">
                                                <label for="featured"> Featured :   </label>
                                                <i-switch @on-change="addProductData.featured = !addProductData.featured" name="featured" > </i-switch>
                                            </div>

                                        <Modal title="View image" v-model="imageVisible">
                                            <img :src="addProductData.image" :alt="addProductData.name" style="width:100%;"/>
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
                        @click="createProduct" >
                        <i class="fa fa-fw fa-lg fa-check-circle"></i>
                    {{addProductData.busy ? $t('products.adding')+'..' : $t('products.add')}}</Button>
                    <Button type="default" @click="$router.back()">
                        <i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back </Button>
                </div>
            </div>
        </div>
     </form>
    </main>
</template>


<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: "createProduct",
    computed:{
        ...mapState("productsStoreIndex", [ 'addProductMeta' ,'addProductData' ]),
        ...mapState("categoriesStoreIndex", [ 'allcategories' ]),
        ...mapGetters('settingsStoreIndex',['getIsDark']),
        ...mapGetters("brandsStoreIndex",['getAllBrand']),
        imageVisible: {
            get(){
                return this.addProductMeta.isImageVisible
            },
            set(value){
                this.HANDLE_VIEW(true)
            }
        }
    },
    methods:{
          ...mapActions("categoriesStoreIndex", [ 'getMergedCategories' ]),
          ...mapActions("brandsStoreIndex", ['getBrands']),
          ...mapActions("productsStoreIndex", ['createProduct','handleMaxSize','handleFormatError','handleSuccess','handleBeforeUpload','handleError','deleteImage','HANDLE_VIEW']),
          ...mapMutations("productsStoreIndex", ['TOGGLE_MODAL' ]),
    },
    created(){
       document.title = 'Create Products';
       this.token = window.Laravel.csrfToken;

       if (this.getAllBrand.length == 0) {
            this.getBrands();
       }
       if (this.allcategories.length == 0) {
            this.getMergedCategories();
       }
        let _this = this
        $Bus.$on('clearAddedFiles' , () => {
            _this.$refs.upload.clearFiles();
        });
    }
}
</script>

<style>
    .demo-upload-list{
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
    /* .ivu-icon {
        line-height: 58px;
    } */
</style>
