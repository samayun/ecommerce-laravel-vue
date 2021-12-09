<template >
  <!-- LIST VIEW  -->
  <div class="product product-list" v-if="layout == 'list'">
    <div class="row">
      <div class="col-6 col-lg-3">
        <figure class="product-media">
          <router-link :to="'product/' + product.slug">
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
          </router-link>
        </figure>
        <!-- End .product-media -->
      </div>
      <!-- End .col-sm-6 col-lg-3 -->

      <div class="col-6 col-lg-3 order-lg-last">
        <div class="product-list-action">
          <div class="product-price">$ {{ product.price }}</div>
          <!-- End .product-price -->
          <div class="ratings-container">
            <div class="ratings">
              <div class="ratings-val" style="width: 20%"></div>
              <!-- End .ratings-val -->
            </div>
            <!-- End .ratings -->
            <span class="ratings-text">( 2 Reviews )</span>
          </div>
          <!-- End .rating-container -->

          <div class="product-action">
            <button class="btn-product btn-quickview" title="Quick view" @click="QuickView(product)">
              <span>quick view</span>
            </button>
            <a href="#" @click="addToCompare(product)"  class="btn-product btn-compare" title="Compare"
              ><span>compare</span></a
            >
          </div>
          <a href="#" @click="addToCart(product)" class="btn-product btn-cart"><span>add to cart</span></a>
        </div>
        <!-- End .product-list-action -->
      </div>
      <!-- End .col-sm-6 col-lg-3 -->

      <div class="col-lg-6">
        <div class="product-body product-action-inner">
          <a href="#"  @click="addToWishlist(product)"  class="btn-product btn-wishlist" title="Add to wishlist"
            ><span>add to wishlist</span></a
          >
          <div class="product-cat">
            <router-link
              v-for="cat in product.categories"
              :key="cat.id"
              :to="'/category/' + cat.slug"
            >
              {{ cat.name }}
            </router-link>
          </div>
          <!-- End .product-cat -->
          <h3 class="product-title">
            <router-link :to="'/product/' + product.slug">
              {{ product.name }}
            </router-link>
          </h3>
          <div class="product-content">
            <p>{{ product.description }}</p>
          </div>
          <!-- End .product-content -->
        </div>
        <!-- End .product-body -->
      </div>
      <!-- End .col-lg-6 -->
    </div>
    <!-- End .row -->
  </div>
  <!-- GRID VIEW  -->
  <div v-else :class="layout">
    <div class="product product-7 text-center">
      <figure class="product-media">
        <span class="product-label label-new">New</span>
        <router-link :to="'/product/' + product.slug">
          <img
            :src="product.image"
            :alt="product.name"
            class="product-image"
          />
        </router-link>

        <div class="product-action-vertical">
          <a href="#"  @click="addToWishlist(product)" class="btn-product-icon btn-wishlist btn-expandable"
            ><span>add to wishlist</span></a
          >
          <button
            @click="QuickView(product)"
            class="btn-product-icon btn-quickview btn-expandable"
            title="Quick view"
            ><span>Quick view</span></button>

          <a href="#" @click="addToCompare(product)" class="btn-product-icon btn-compare" title="Compare"
            ><span>Compare</span></a
          >
        </div>

        <div class="product-action">
          <a href="#" @click="addToCart(product)" class="btn-product btn-cart"><span>add to cart</span></a>
        </div>
      </figure>

      <div class="product-body">
        <div class="product-cat">
          <router-link
            v-for="cat in product.categories"
            :key="cat.id"
            :to="'/category/' + cat.slug"
          >
            {{ cat.name }}
          </router-link>
        </div>
        <h3 class="product-title">
          <router-link :to="'/product/' + product.slug">
            {{ product.name }}
          </router-link>
        </h3>
        <div class="product-price">$ {{ product.price }}</div>
        <div class="ratings-container">
          <div class="ratings">
            <div class="ratings-val" style="width: 20%"></div>
          </div>
          <span class="ratings-text">( 3 Reviews )</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["product"],
  computed: {
    ...mapGetters("settingsStoreIndex", {
      layout: "getLayout",
    }),
  },
  methods : {
      ...mapActions("productsStoreIndex" , ["QuickView"]),
      ...mapActions("cartStoreIndex" , ["addToCart"]),
      ...mapActions("wishlistsStoreIndex" , ["addToWishlist"]),
      ...mapActions("compareStoreIndex" , ["addToCompare"]),
  }
};
</script>
<style lang="css" scoped>
 .product-image{
     height: 250px;
 }
</style>
