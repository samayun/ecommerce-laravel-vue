<template>
<div class="header-bottom sticky-header">
    <div class="container">
        <div class="header-left">
            <div class="dropdown category-dropdown show is-on" data-visible="true">
                <router-link to="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                    Browse Categories
                </router-link>

                <div class="dropdown-menu show">
                    <nav class="side-nav">
                        <ul class="menu-vertical sf-arrows">

                            <li class="megamenu-container" v-for="cat in nested_categories" :key="cat.id">
                                <router-link class="sf-with-ul"  :to="'/category/'+cat.slug"> {{ cat.name }}</router-link>

                                <div class="megamenu">
                                    <div class="row no-gutters">
                                        <div class="col-md-8">
                                            <div class="menu-col">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <ul>
                                                            <li
                                                                v-for="sub in cat.subcategories" :key="sub.id">
                                                                <router-link :to="'/category/'+sub.slug"> {{sub.name}} </router-link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="banner banner-overlay">
                                                <router-link :to="'/category/'+cat.slug" class="banner banner-menu">
                                                    <img :src="cat.icon" :alt="cat.name">
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul><!-- End .menu-vertical -->
                    </nav><!-- End .side-nav -->
                </div><!-- End .dropdown-menu -->
            </div><!-- End .category-dropdown -->
        </div><!-- End .col-lg-3 -->
        <div class="header-center">
            <nav class="main-nav">
                <ul class="menu sf-arrows">
                    <li class="megamenu-container active">
                        <router-link to="/" class="sf-with-ul">Home</router-link>
                    </li>
                    <!--
                    <li>
                        <router-link to="category.html" class="sf-with-ul">Shop</router-link>

                        <div class="megamenu megamenu-md">
                        <div class="row no-gutters">
                            <div class="col-md-8">
                                <div class="menu-col">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="menu-title">Shop with sidebar</div>
                                            <ul>
                                                <li><router-link to="category-list.html">Shop List</router-link></li>
                                            </ul>

                                            <div class="menu-title">Shop no sidebar</div>
                                            <ul>
                                                <li>
                                                    <router-link to="category-boxed">
                                                        <span>Shop Boxed No Sidebar<span class="tip tip-hot">Hot</span></span>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="menu-title">Product Category</div>
                                            <ul>
                                                <li><router-link to="product-category-boxed.html">Product Category Boxed</router-link></li>
                                                <li><router-link to="product-category-fullwidth.html"><span>Product Category Fullwidth<span class="tip tip-new">New</span></span></router-link></li>
                                            </ul>
                                            <div class="menu-title">Shop Pages</div>
                                            <ul>
                                                <li><router-link to="cart.html">Cart</router-link></li>
                                                <li><router-link to="checkout.html">Checkout</router-link></li>
                                                <li><router-link to="wishlist.html">Wishlist</router-link></li>
                                                <li><router-link to="dashboard.html">My Account</router-link></li>
                                                <li><router-link to="#">Lookbook</router-link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="banner banner-overlay">
                                    <router-link to="category.html" class="banner banner-menu">
                                        <img src="/storage/products/default.png" alt="Banner">

                                        <div class="banner-content banner-content-top">
                                            <div class="banner-title text-white">Last <br>Chance<br><span><strong>Sale</strong></span></div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </li>
                    -->
                    <li>
                        <router-link to="/products"> Products </router-link>
                    </li>
                    <li>
                        <router-link to="#" class="sf-with-ul">Pages</router-link>

                        <ul>
                            <li>
                                <router-link to="/about">About</router-link>
                            </li>
                            <li>
                                <router-link to="/contact">Contact</router-link>
                            </li>
                            <li><router-link to="login.html">Login</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="blog.html" class="sf-with-ul">Blog</router-link>

                        <ul>
                            <li><router-link to="blog.html">Classic</router-link></li>
                            <li><router-link to="blog-listing.html">Listing</router-link></li>
                            <li>
                                <router-link to="#">Grid</router-link>
                                <ul>
                                    <li><router-link to="blog-grid-2cols.html">Grid 2 columns</router-link></li>
                                    <li><router-link to="blog-grid-3cols.html">Grid 3 columns</router-link></li>
                                    <li><router-link to="blog-grid-4cols.html">Grid 4 columns</router-link></li>
                                    <li><router-link to="blog-grid-sidebar.html">Grid sidebar</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="#">Masonry</router-link>
                                <ul>
                                    <li><router-link to="blog-masonry-2cols.html">Masonry 2 columns</router-link></li>
                                    <li><router-link to="blog-masonry-3cols.html">Masonry 3 columns</router-link></li>
                                    <li><router-link to="blog-masonry-4cols.html">Masonry 4 columns</router-link></li>
                                    <li><router-link to="blog-masonry-sidebar.html">Masonry sidebar</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="#">Mask</router-link>
                                <ul>
                                    <li><router-link to="blog-mask-grid.html">Blog mask grid</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="#">Single Post</router-link>
                                <ul>
                                    <li><router-link to="single.html">Default with sidebar</router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="elements-list.html" class="sf-with-ul">Elements</router-link>

                        <ul>
                            <li><router-link to="elements-products">Products</router-link></li>
                            <li><router-link to="elements-typography">Typography</router-link></li>
                        </ul>
                    </li>
                </ul><!-- End .menu -->
            </nav><!-- End .main-nav -->
        </div><!-- End .col-lg-9 -->
        <div class="header-right">
            <i class="la la-lightbulb-o"></i><p>Clearance Up to 30% Off</span></p>
        </div>
    </div>
</div>

</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    name : "StickyHeader",
    computed:{
        ...mapState("categoriesStoreIndex",["nested_categories"])
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
