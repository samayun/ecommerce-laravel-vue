<template>
<header class="header header-10 header-intro-clearance">
    <div class="header-top">
        <div class="container">
            <div class="header-left">
                <router-link to="tel:+8801798037068"><i class="icon-phone"></i>Call: +8801798037068 </router-link>
            </div><!-- End .header-left -->

            <div class="header-right">

                <ul class="top-menu">
                    <li>
                        <router-link to="#">Links</router-link>
                        <ul>
                            <li>
                                <div class="header-dropdown">
                                    <router-link to="#">USD</router-link>
                                    <div class="header-menu">
                                        <ul>
                                            <li><router-link to="#">Tk</router-link></li>
                                            <li><router-link to="#">Usd</router-link></li>
                                        </ul>
                                    </div><!-- End .header-menu -->
                                </div><!-- End .header-dropdown -->
                            </li>
                            <LanguegeSwitcher />
                            <li class="login"  v-if="!user.id">
                                <a href="#signin-modal" data-toggle="modal">
                                    {{ $t('auth.signin') }} / {{ $t('auth.signup') }} </a>
                            </li>
                            <li class="sf-ul" v-else>
                                    <div class="header-dropdown">
                                        <a href="#" > {{user.name}} </a>
                                        <div class="header-menu">
                                            <ul>
                                                <li><router-link to="/profile"> Profile </router-link></li>
                                                <li><router-link to="/orders"> Orders </router-link></li>
                                                <li><router-link to="/logout" > Log Out </router-link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                        </ul>
                    </li>
                </ul><!-- End .top-menu -->
            </div><!-- End .header-right -->
        </div><!-- End .container -->
    </div><!-- End .header-top -->

    <div class="header-middle">
        <div class="container">
            <div class="header-left">
                <button class="mobile-menu-toggler">
                    <span class="sr-only">Toggle mobile menu</span>
                    <i class="icon-bars"></i>
                </button>

                <router-link to="/" class="" >
                    <img src="/storage/site/logo.png" alt="Site Logo" style="max-width: 150px;">
                </router-link>
            </div><!-- End .header-left -->

            <div class="header-center">
                <div class="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                    <router-link to="#" class="search-toggle" role="button"><i class="icon-search"></i></router-link>
                    <form action="#" method="get">
                        <div class="header-search-wrapper search-wrapper-wide">
                            <div class="select-custom">
                                <select id="cat" name="cat">

                                    <option value="">All Departments</option>
                                    <option value="1">Fashion</option>
                                    <option value="2" disabled>- Women</option>
                                </select>
                            </div><!-- End .select-custom -->
                            <label for="q" class="sr-only">Search</label>
                            <input type="search" class="form-control" name="q" id="q" placeholder="Search product ..." required>
                            <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
                        </div><!-- End .header-search-wrapper -->
                    </form>
                </div><!-- End .header-search -->
            </div>

            <div class="header-right">
                <div class="header-dropdown-link">
                    <div class="dropdown compare-dropdown">
                        <router-link to="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                            <i class="icon-random"></i>
                            <span class="compare-txt">Compare</span>
                        </router-link>

                        <div class="dropdown-menu dropdown-menu-right">
                            <ul class="compare-products">
                                <li class="compare-product">
                                    <router-link to="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></router-link>
                                    <h4 class="compare-product-title"><router-link to="product.html">Blue Night Dress</router-link></h4>
                                </li>
                                <li class="compare-product">
                                    <router-link to="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></router-link>
                                    <h4 class="compare-product-title"><router-link to="product.html">White Long Skirt</router-link></h4>
                                </li>
                            </ul>

                            <div class="compare-actions">
                                <router-link to="#" class="action-link">Clear All</router-link>
                                <router-link to="#" class="btn btn-outline-primary-2"><span>{{ $t('compare') }}</span><i class="icon-long-arrow-right"></i></router-link>
                            </div>
                        </div><!-- End .dropdown-menu -->
                    </div><!-- End .compare-dropdown -->

                    <router-link to="wishlist.html" class="wishlist-link">
                        <i class="icon-heart-o"></i>
                        <span class="wishlist-count">3</span>
                        <span class="wishlist-txt">{{ $t('wishlist') }}</span>
                    </router-link>

                    <div class="dropdown cart-dropdown">
                        <router-link to="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                            <i class="icon-shopping-cart"></i>
                            <span class="cart-count">2</span>
                            <span class="cart-txt"> {{ $t('cart') }}  </span>
                        </router-link>

                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="dropdown-cart-products">
                                <div class="product">
                                    <div class="product-cart-details">
                                        <h4 class="product-title">
                                            <router-link to="product.html">Beige knitted elastic runner shoes</router-link>
                                        </h4>

                                        <span class="cart-product-info">
                                            <span class="cart-product-qty">1</span>
                                            x $84.00
                                        </span>
                                    </div><!-- End .product-cart-details -->

                                    <figure class="product-image-container">
                                        <router-link to="product.html" class="product-image">
                                            <img src="/assets/images/products/cart/product-1.jpg" alt="product">
                                        </router-link>
                                    </figure>
                                    <router-link to="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></router-link>
                                </div><!-- End .product -->

                                <div class="product">
                                    <div class="product-cart-details">
                                        <h4 class="product-title">
                                            <router-link to="product.html">Blue utility pinafore denim dress</router-link>
                                        </h4>

                                        <span class="cart-product-info">
                                            <span class="cart-product-qty">1</span>
                                            x $76.00
                                        </span>
                                    </div><!-- End .product-cart-details -->

                                    <figure class="product-image-container">
                                        <router-link to="product" class="product-image">
                                            <img src="/assets/images/products/cart/product-2.jpg" alt="product">
                                        </router-link>
                                    </figure>
                                    <router-link to="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></router-link>
                                </div><!-- End .product -->
                            </div><!-- End .cart-product -->

                            <div class="dropdown-cart-total">
                                <span>Total</span>

                                <span class="cart-total-price">$160.00</span>
                            </div><!-- End .dropdown-cart-total -->

                            <div class="dropdown-cart-action">
                                <router-link to="cart" class="btn btn-primary">View Cart</router-link>
                                <router-link to="checkout" class="btn btn-outline-primary-2"><span>Checkout</span><i class="icon-long-arrow-right"></i></router-link>
                            </div><!-- End .dropdown-cart-total -->
                        </div><!-- End .dropdown-menu -->
                    </div><!-- End .cart-dropdown -->
                </div>
            </div><!-- End .header-right -->
        </div><!-- End .container -->
    </div><!-- End .header-middle -->

    <AuthModal />

    <StickyHeader />
</header><!-- End .header -->
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    components: {
        LanguegeSwitcher : () => import(/* webpackChunkName: "Chunks/Site/Components/LanguegeSwitcher" */ './LanguegeSwitcher'),
        StickyHeader  : () => import(/* webpackChunkName: "Chunks/Site/Components/StickyHeader" */ './StickyHeader'),
        AuthModal  : () => import(/* webpackChunkName: "Chunks/Site/Components/AuthModal" */ './Login'),
        //  CategoriesSubcategories: () => import(/* webpackChunkName: "Chunks/Site/Components/CategoriesSubcategories" */ '../comonents/Category/CategoriesSubcategories')
    },
    computed:{
        ...mapState("authStoreIndex",["user"]),
        ...mapState("categoriesStoreIndex",["nested_categories"]),
    },
    methods:{
        ...mapActions("categoriesStoreIndex",["getCategoriesSubcategories"])
    },
    created(){
        if (this.nested_categories.length < 1) {
            this.getCategoriesSubcategories()
        }
    }

}
</script>
