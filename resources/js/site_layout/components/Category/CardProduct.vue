<template>
   <div class="product">
        <figure class="product-media">
            <!-- <span class="product-label label-sale">Sale</span> -->
             <router-link :to="'/product/'+product.slug">
                <img :src="'/storage/products/'+product.image" :alt="product.name" class="product-image" style="height: 160px;">
            </router-link>

            <div class="product-action-vertical">
                <a href="#" @click="addToWishlist(product)" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>

                 <button @click="QuickView(product)" class="btn-product-icon btn-quickview btn-expandable" title="Quick view"><span>Quick view</span></button>

                <a href="#" @click="addToCompare(product)" class="btn-product-icon btn-compare btn-expandable" title="Compare"><span>Compare</span></a>

            </div><!-- End .product-action-vertical -->

            <div class="product-action">
                <a href="#" @click="addToCart(product)" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
            </div><!-- End .product-action -->
        </figure>

        <div class="product-body">
            <div class="product-cat">
                <p v-for="cat in product.categories"
                    :key="cat.id">
                    <router-link
                    :to="'/category/'+cat.slug"> {{cat.name }} </router-link>
                </p>

            </div><!-- End .product-cat -->
            <h3 class="product-title">
                  <router-link :to="'/product/'+product.slug">
                    {{ product.name }}
                  </router-link>
                  </h3><!-- End .product-title -->
            <div class="product-price">
                <span class="new-price">$ {{ product.price }} </span>
                <span class="old-price">Was ${{ product.price }} </span>
            </div><!-- End .product-price -->
            <div class="ratings-container">
                <div class="ratings">
                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                </div><!-- End .ratings -->
                <span class="ratings-text">( 2 Reviews )</span>
            </div><!-- End .rating-container -->

            <!-- <div class="product-nav product-nav-dots">
                <a href="#" class="active" style="background: #dddad5;"><span class="sr-only">Color name</span></a>
                <a href="#" style="background: #825a45;"><span class="sr-only">Color name</span></a>
            </div> -->
        </div><!-- End .product-body -->
  </div><!-- End .product -->
</template>
<script>
import { mapGetters , mapActions} from 'vuex'
export default {
    props:["product"] ,
    methods : {
      ...mapActions("productsStoreIndex" , ["QuickView"]),
      ...mapActions("cartStoreIndex" , ["addToCart"]),
      ...mapActions("wishlistsStoreIndex" , ["addToWishlist"]),
      ...mapActions("compareStoreIndex" , ["addToCompare"]),
    }
}
</script>
