<template>
<main class="app-content" id="app">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-cogs"></i> {{$t('products.edit')}}</h1>
        </div>
    </div>
    <div class="page-content card p-2" >
        <div class="container">
            <div class="product-details-top">
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-gallery product-gallery-vertical">
                            <div class="row">
                                <figure class="product-main-image">
                                    <img id="product-zoom" :src="viewProductData.image" :data-zoom-image="viewProductData.brand.image" alt="product image">

                                    <a href="#" id="btn-product-gallery" class="btn-product-gallery">
                                        <i class="fa fa-arrow-left icon-arrows"></i>
                                    </a>
                                </figure><!-- End .product-main-image -->

                                <div id="product-zoom-gallery" class="product-image-gallery">

                                    <a
                                     v-for="item in viewProductData.images" :key="item.id"
                                     class="product-gallery-item active" href="#" :data-image="item.url" :data-zoom-image="item.url">
                                        <img :src="item.url" alt="product side" class="w-100 h-100">
                                    </a>

                                </div><!-- End .product-image-gallery -->
                            </div><!-- End .row -->
                        </div><!-- End .product-gallery -->
                    </div><!-- End .col-md-6 -->
                    <div class="col-md-6 p-3">
                        <div class="product-details ">
                                    <h1 class="product-title">{{ viewProductData.name }}</h1><!-- End .product-title -->

                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                        </div><!-- End .ratings -->
                                        <a class="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                                    </div><!-- End .rating-container -->

                                    <div class="product-price">
                                        Price : <strong> ${{ viewProductData.price }} </strong>
                                    </div><!-- End .product-price -->
                                    <h5> Brand: {{ viewProductData.brand && viewProductData.brand.name ? viewProductData.brand.name : "" }} </h5>

                                    <div class="product-content">
                                        <p> Description: {{ viewProductData.description }}. </p>
                                    </div><!-- End .product-content -->

                                    <div class="details-filter-row details-row-size">
                                        <label>Color:</label>
                                            <select name="size" id="size" class="form-control">
                                                <option value="#" selected="selected">Select a Color</option>
                                                <option value="s">Red</option>
                                                <option value="m">Green</option>
                                            </select>
                                        </div><!-- End .product-nav -->
                                    </div><!-- End .details-filter-row -->

                                    <div class="details-filter-row details-row-size">
                                        <label for="size">Size:</label>
                                        <div class="select-custom">
                                            <select name="size" id="size" class="form-control">
                                                <option value="#" selected="selected">Select a size</option>
                                                <option value="s">Small</option>
                                                <option value="m">Medium</option>
                                                <option value="l">Large</option>
                                                <option value="xl">Extra Large</option>
                                            </select>
                                        </div><!-- End .select-custom -->

                                        <a href="#" class="size-guide"><i class="icon-th-list"></i>size guide</a>
                                    </div><!-- End .details-filter-row -->

                                    <div class="details-filter-row details-row-size">
                                        <label for="qty">Qty:</label>
                                        <div class="product-details-quantity">
                                            <input type="number" id="qty" class="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required="" style="display: none;"><div class="input-group  input-spinner"><div class="input-group-prepend"><button style="min-width: 26px" class="btn btn-decrement btn-spinner" type="button"><i class="icon-minus"></i></button></div><input type="text" style="text-align: center" class="form-control " required="" placeholder=""><div class="input-group-append"><button style="min-width: 26px" class="btn btn-increment btn-spinner" type="button"><i class="icon-plus"></i></button></div></div>
                                        </div><!-- End .product-details-quantity -->
                                    </div><!-- End .details-filter-row -->

                                    <div class="product-details-action">
                                        <div class="details-action-wrapper d-flex">
                                             <a href="#" class="btn btn-success btn-product btn-cart"><span>Add to Cart</span></a>
                                            <a href="#" class="btn btn-warning text-white" title="Wishlist"><span>Add to Wishlist</span></a>
                                        </div><!-- End .details-action-wrapper -->
                                    </div><!-- End .product-details-action -->

                                    <div class="product-details-footer">
                                        <div class="product-cat">
                                            <span >Category:</span>
                                            <Tag
                                             v-for="item in viewProductData.categories"
                                             :key="item.id"
                                             color="success"
                                             > {{ item.name }} </Tag>,
                                        </div><!-- End .product-cat -->

                                        <div class="social-icons social-icons-sm">
                                            <span class="social-label">Share:</span>
                                            <a href="#" class="social-icon fab fa-facebook text-info" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                                            <a href="#" class="social-icon fab fa-twitter text-info" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                                        </div>
                                    </div><!-- End .product-details-footer -->
                                </div><!-- End .product-details -->
                            </div>

                </div><!-- End .row -->
            </div><!-- End .product-details-top -->

        </div><!-- End .container -->
    </div>

    <div class="tile-footer">
        <div class="row d-print-none mt-2 ml-4">
            <div class="col-6 text-right">
                <Button type="default" @click="$router.replace('/admin/products')">
                    <i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back </Button>
            </div>
        </div>
    </div>
</main>
</template>


<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: "viewProduct",
    computed:{
        ...mapState("productsStoreIndex", ['viewProductData'
       ]),
       ...mapGetters("brandsStoreIndex",['getAllBrand'])
    },
    methods:{
          ...mapActions("brandsStoreIndex", ['getBrands']),

         ...mapActions("productsStoreIndex", ['getToViewSingleProduct','HANDLE_VIEW' ]),
         ...mapMutations("productsStoreIndex", ['TOGGLE_MODAL' ]),
    },
    created(){
        let existProId = this.$store.state.productsStoreIndex.viewProductData.id
        let id = this.$route.params.id
        if (existProId != id) {
            this.getToViewSingleProduct(id)
            document.title = 'View Products';
        }

       this.token = window.Laravel.csrfToken;
       if (this.getAllBrand.length == 0) {
            this.getBrands();
       }
        let _this = this
        $Bus.$on('cleareditedFiles' , () => {
            _this.$refs.upload.clearFiles();
        });

    }
}


</script>

<style scoped>
.product-gallery-vertical .product-image-gallery, .product-gallery-vertical .product-main-image {
    width: 100%;
}
.product-main-image {
    position: relative;
    margin-bottom: 1rem;
}
figure {
    margin: 0 0 1rem;
        margin-bottom: 1rem;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}
.product-main-image img {
    max-width: none;
    width: 100%;
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}
img {
    vertical-align: middle;
    border-style: none;
}
.btn-product-gallery {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    z-index: 49;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 4rem;
    height: 4rem;
    color: #777;
    font-weight: normal;
    font-size: 2rem;
    line-height: 1;
    background-color: #fff;
    box-shadow: 2px 6px 16px rgba(51,51,51,0.05);
    transition: all .35s ease;
}
a {
    font-family: 'Poppins';
}
.product-gallery-vertical .product-image-gallery {
    width: calc( 100% + 10px );
}
.product-gallery-vertical .product-image-gallery, .product-gallery-vertical .product-main-image {
    width: 100%;
}
.product-image-gallery {
    display: flex;
    flex-flow: row wrap;
    margin-left: -.5rem;
    margin-right: -.5rem;
}
.product-gallery-item {
    position: relative;
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
    padding-left: .5rem;
    padding-right: .5rem;
    margin-bottom: 1rem;
}
a {
    font-family: 'Poppins';
}
a {
    color: #c96;
    text-decoration: none;
    transition: color 0.3s ease;
}
.product-gallery-item img {
    max-width: none;
    width: 100%;
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}
img {
    vertical-align: middle;
    border-style: none;
}
.btn-product-gallery[data-v-d614fb76] {
    text-align: center;
    color: #777;
    font-weight: normal;
    font-size: 2rem;
    line-height: 1;
}
</style>
