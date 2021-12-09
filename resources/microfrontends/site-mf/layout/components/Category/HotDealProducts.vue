<template>
<div class="bg-light pt-3 pb-5">
  <div class="container">
    <div class="heading heading-flex heading-border mb-3">
        <div class="heading-left">
            <h2 class="title">Hot Deals Products</h2><!-- End .title -->
        </div><!-- End .heading-left -->

        <div class="heading-right">
            <ul class="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="hot-all-link" data-toggle="tab" href="#hot-all-tab" role="tab" aria-controls="hot-all-tab" aria-selected="true">All</a>
                </li>
            </ul>
        </div><!-- End .heading-right -->
    </div><!-- End .heading -->

    <div class="tab-content tab-content-carousel"
         >

        <div class="tab-pane p-0 fade active" id="hot-all-tab" role="tabpanel" aria-labelledby="hot-acc-link"
            v-for="category in categories"
            :key="category.id"
        >
            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"
                data-owl-options='{
                    "nav": false,
                    "dots": true,
                    "margin": 20,
                    "loop": false,
                    "responsive": {
                        "0": {
                            "items":2
                        },
                        "480": {
                            "items":2
                        },
                        "768": {
                            "items":3
                        },
                        "992": {
                            "items":4
                        },
                        "1280": {
                            "items":5,
                            "nav": true
                        }
                    }
                }'>
                <div class="product">
                    <figure class="product-media">
                        <span class="product-label label-new">New</span>
                        <a href="product.html">
                            <img src="/storage//products/product-6.jpg" alt="Product image" class="product-image">
                        </a>

                        <div class="product-action-vertical">
                            <a href="/product/2" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                            <a href="/product/2" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            <a href="/assets/popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div><!-- End .product-action-vertical -->

                        <div class="product-action">
                            <a href="/product/2" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div><!-- End .product-action -->
                    </figure><!-- End .product-media -->

                    <div class="product-body">
                        <div class="product-cat">
                            <a href="/product/2">Appliances</a>
                        </div><!-- End .product-cat -->
                        <h3 class="product-title"><a href="product.html">Neato Robotics</a></h3><!-- End .product-title -->
                        <div class="product-price">
                            $399.00
                        </div><!-- End .product-price -->
                        <div class="ratings-container">
                            <div class="ratings">
                                <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                            </div><!-- End .ratings -->
                            <span class="ratings-text">( 12 Reviews )</span>
                        </div><!-- End .rating-container -->
                    </div><!-- End .product-body -->
                </div><!-- End .product -->

                <div class="product">
                    <figure class="product-media">
                        <span class="product-label label-sale">Sale</span>
                        <a href="product.html">
                            <img src="/storage//products/default.png" alt="Product image" class="product-image">
                        </a>

                        <div class="product-action-vertical">
                            <a href="/product/2" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                            <a href="/product/2" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            <a href="/assets/popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div><!-- End .product-action-vertical -->

                        <div class="product-action">
                            <a href="/product/2" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div><!-- End .product-action -->
                    </figure><!-- End .product-media -->

                    <div class="product-body">
                        <div class="product-cat">
                            <a href="/product/2">Furniture</a>
                        </div><!-- End .product-cat -->
                        <h3 class="product-title"><a href="product.html">Butler Stool Ladder</a></h3><!-- End .product-title -->
                        <div class="product-price">
                            <span class="new-price">$251.99</span>
                            <span class="old-price">Was $290.00</span>
                        </div><!-- End .product-price -->
                        <div class="ratings-container">
                            <div class="ratings">
                                <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                            </div><!-- End .ratings -->
                            <span class="ratings-text">( 2 Reviews )</span>
                        </div><!-- End .rating-container -->
                    </div><!-- End .product-body -->
                </div><!-- End .product -->

                <div class="product">
                    <figure class="product-media">
                        <span class="product-label label-top">Top</span>
                        <span class="product-label label-sale">Sale</span>
                        <a href="product.html">
                            <img src="/storage//products/product-5.jpg" alt="Product image" class="product-image">
                        </a>

                        <div class="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true"></div><!-- End .product-countdown -->

                        <div class="product-action-vertical">
                            <a href="/product/2" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                            <a href="/product/2" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            <a href="/assets/popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div><!-- End .product-action-vertical -->

                        <div class="product-action">
                            <a href="/product/2" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div><!-- End .product-action -->
                    </figure><!-- End .product-media -->

                    <div class="product-body">
                        <div class="product-cat">
                            <a href="/product/2">Electronics</a>
                        </div><!-- End .product-cat -->
                        <h3 class="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</a></h3><!-- End .product-title -->
                        <div class="product-price">
                            <span class="new-price">$1699.99</span>
                            <span class="old-price">Was $1999.99</span>
                        </div><!-- End .product-price -->
                        <div class="ratings-container">
                            <div class="ratings">
                                <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                            </div><!-- End .ratings -->
                            <span class="ratings-text">( 10 Reviews )</span>
                        </div><!-- End .rating-container -->
                    </div><!-- End .product-body -->
                </div><!-- End .product -->

                <div class="product">
                    <figure class="product-media">
                        <span class="product-label label-sale">Sale</span>
                        <a href="product.html">
                            <img src="/storage//products/product-3.jpg" alt="Product image" class="product-image">
                        </a>

                        <div class="product-action-vertical">
                            <a href="/product/2" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                            <a href="/product/2" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            <a href="/assets/popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div><!-- End .product-action-vertical -->

                        <div class="product-action">
                            <a href="/product/2" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div><!-- End .product-action -->
                    </figure><!-- End .product-media -->

                    <div class="product-body">
                        <div class="product-cat">
                            <a href="/product/2">Furniture</a>
                        </div><!-- End .product-cat -->
                        <h3 class="product-title"><a href="product.html">Can 2-Seater Sofa <br>frame charcoal</a></h3><!-- End .product-title -->
                        <div class="product-price">
                            <span class="new-price">$3.050.00</span>
                            <span class="old-price">Was $3.200.00</span>
                        </div><!-- End .product-price -->
                        <div class="ratings-container">
                            <div class="ratings">
                                <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                            </div><!-- End .ratings -->
                            <span class="ratings-text">( 6 Reviews )</span>
                        </div><!-- End .rating-container -->

                        <div class="product-nav product-nav-dots">
                            <a href="/product/2" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                            <a href="/product/2" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                        </div><!-- End .product-nav -->
                    </div><!-- End .product-body -->
                </div><!-- End .product -->

                <div class="product">
                    <figure class="product-media">
                        <span class="product-label label-sale">Sale</span>
                        <a href="product.html">
                            <img src="/storage//products/product-4.jpg" alt="Product image" class="product-image">
                        </a>

                        <div class="product-action-vertical">
                            <a href="/product/2" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                            <a href="/product/2" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                            <a href="/assets/popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div><!-- End .product-action-vertical -->

                        <div class="product-action">
                            <a href="/product/2" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div><!-- End .product-action -->
                    </figure><!-- End .product-media -->

                    <div class="product-body">
                        <div class="product-cat">
                            <a href="/product/2">Clothes</a>
                        </div><!-- End .product-cat -->
                        <h3 class="product-title"><a href="product.html">Tan suede biker jacket</a></h3><!-- End .product-title -->
                        <div class="product-price">
                            <span class="new-price">$240.00</span>
                            <span class="old-price">Was $310.00</span>
                        </div><!-- End .product-price -->
                        <div class="ratings-container">
                            <div class="ratings">
                                <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                            </div><!-- End .ratings -->
                            <span class="ratings-text">( 4 Reviews )</span>
                        </div><!-- End .rating-container -->

                        <div class="product-nav product-nav-dots">
                            <a href="/product/2" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                            <a href="/product/2" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                        </div><!-- End .product-nav -->
                    </div><!-- End .product-body -->
                </div><!-- End .product -->
            </div><!-- End .owl-carousel -->
        </div><!-- .End .tab-pane -->
    </div><!-- End .tab-content -->
  </div><!-- End .container -->
</div><!-- End .bg-light pt-5 pb-5 -->

</template>
<script>
import { mapState } from 'vuex'
export default {
    computed:{
      ...mapState("categoriesStoreIndex",["categories"])
    }
}
</script>
