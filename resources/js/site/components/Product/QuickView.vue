<template >
<div class="container quickView-container" v-if="!$route.path.includes('/product/') && quickView.id" style="
	position: absolute;
	top: 0;
	left: 0;
    z-index:9999;">
	<div class="quickView-content">
		<div class="row">
			<div class="col-lg-7 col-md-6">
				<div class="row">
					<div class="product-left">
						<a :href="`#${img.id}`" class="carousel-dot" v-for="img in quickView.images"
                            :key="img.id">
							<img :src="img.url" :alt="img.url">
						</a>
					</div>
					<div class="product-right">
<!--                             :lazyLoad="true"
                            :lazyLoadEager="3" -->
						<carousel
                            :items="1"
	                        :dots = "false"
	                        :nav = "false"
	                        :URLhashListener = "true"
                            :responsive="{
                                900: { dots:true, nav: true }
                            }"
                            >
							<div class="intro-slide" :data-hash="quickView.id">
                                <vueMagnifier :small-img="quickView.image" :big-img="quickView.image" class="owl-lazy img-quickview"></vueMagnifier>
                                <i class="icon-arrows"></i>
		                    </div>
		                    <div class="intro-slide"
                                v-for="img in quickView.images"
                                :key="img.id"
                                :data-hash="`#${img.id}`">
	                             <!-- <img :src="img.url" :alt="img.url" class="owl-lazy img-quickview"> -->
                                 <vueMagnifier
                                    :small-img="img.url"
                                    :big-img="img.url"
                                    class="owl-lazy img-quickview"></vueMagnifier>

	                            <a :href="`#${img.id}`" class="btn-fullscreen">
                                    <i class="icon-arrows"></i>
                                </a>
		                    </div>
						</carousel>
					</div>
                </div>
            </div>

			<div class="col-lg-5 col-md-6">
                <div class="float-right">
                    <button @click="changeState({ quickView: {} })"> X </button>
                </div>
				<h2 class="product-title"> {{ quickView.name }} </h2>
				<h3 class="product-price">$ {{ quickView.price }} </h3>

                <div class="ratings-container">
                    <div class="ratings">
                        <div class="ratings-val" style="width: 20%;"></div><!-- End .ratings-val -->
                    </div><!-- End .ratings -->
                    <span class="ratings-text">( 2 Reviews )</span>
                </div><!-- End .rating-container -->

                <p class="product-txt">  {{ quickView.description }} </p>


                <div class="details-filter-row product-nav product-nav-thumbs">
	                <label for="size">color:</label>
                    <a href="#" class="active">
                        <img :src="quickView.image" alt="product desc">
                    </a>
                </div><!-- End .product-nav -->

                <div class="details-filter-row details-row-size">
	                <label for="size">Size:</label>
	                <div class="select-custom">
	                    <select name="size" id="size" class="form-control">
	                        <option value="#" selected="selected">Select a size</option>
	                        <option
                            v-for="attr in quickView.attributes"
                            :key="attr.id"
                            v-show="attr.type.slug == 'size'"
                            :value="attr.slug"> {{ attr.name }} </option>
	                    </select>
	                </div><!-- End .select-custom -->
	            </div>


                <div class="details-filter-row details-row-size">
                    <label for="qty">Qty:</label>
                    <div class="product-details-quantity">
                        <input type="number" id="qty" class="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required>
                    </div><!-- End .product-details-quantity -->
                </div><!-- End .details-filter-row -->

                <div class="product-details-action">
                    <div class="details-action-wrapper">
                        <a href="#" class="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                        <a href="#" class="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a>
                    </div><!-- End .details-action-wrapper -->
                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                </div>

                <div class="product-details-footer">
                    <div class="product-cat">
                        <span>Category:</span>
                        <router-link
                            v-for="cat in quickView.categories"
                            :key="cat.id"
                            :to="'/category/'+cat.slug"> {{cat.name }} </router-link>
                    </div><!-- End .product-cat -->

                    <div class="social-icons social-icons-sm">
                        <span class="social-label">Share:</span>
                        <a href="#" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                        <a href="#" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                        <a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                        <a href="#" class="social-icon" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
                    </div>
                </div>
			</div>
		</div>
    </div>
</div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    // props: ["product"] ,
   computed:{
       ...mapState("productsStoreIndex" , ["quickView"])
   },
    methods : {
        ...mapMutations("productsStoreIndex" , ["changeState"]),
        // ...mapActions("productsStoreIndex" , ["QuickView"])
    }
}
</script>
<style lang="css" scoped>
 .owl-carousel {
     display: block;
 }
 .img-quickview{
     height: 350px;
 }
</style>
