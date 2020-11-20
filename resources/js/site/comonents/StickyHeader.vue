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
                        <router-link to="index.html" class="sf-with-ul">Home</router-link>

                        <div class="megamenu demo">
                        <div class="menu-col">
                            <div class="menu-title">Choose your demo</div><!-- End .menu-title -->

                            <div class="demo-list">
                                <div class="demo-item">
                                    <router-link to="index-1.html">
                                        <span class="demo-bg" style="background-image: url(assets/images/menu/demos/1.jpg);"></span>
                                        <span class="demo-title">01 - furniture store</span>
                                    </router-link>
                                </div><!-- End .demo-item -->


                                <div class="demo-item hidden">
                                    <router-link to="index-24.html">
                                        <span class="demo-bg" style="background-image: url(assets/images/menu/demos/24.jpg);"></span>
                                        <span class="demo-title">24 - extreme sport store</span>
                                    </router-link>
                                </div><!-- End .demo-item -->

                            </div><!-- End .demo-list -->

                            <div class="megamenu-action text-center">
                                <router-link to="#" class="btn btn-outline-primary-2 view-all-demos"><span>View All Demos</span><i class="icon-long-arrow-right"></i></router-link>
                            </div><!-- End .text-center -->
                        </div><!-- End .menu-col -->
                    </div><!-- End .megamenu -->
                    </li>
                    <li>
                        <router-link to="category.html" class="sf-with-ul">Shop</router-link>

                        <div class="megamenu megamenu-md">
                        <div class="row no-gutters">
                            <div class="col-md-8">
                                <div class="menu-col">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="menu-title">Shop with sidebar</div><!-- End .menu-title -->
                                            <ul>
                                                <li><router-link to="category-list.html">Shop List</router-link></li>
                                            </ul>

                                            <div class="menu-title">Shop no sidebar</div><!-- End .menu-title -->
                                            <ul>
                                                <li>
                                                    <router-link to="category-boxed">
                                                        <span>Shop Boxed No Sidebar<span class="tip tip-hot">Hot</span></span>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="menu-title">Product Category</div><!-- End .menu-title -->
                                            <ul>
                                                <li><router-link to="product-category-boxed.html">Product Category Boxed</router-link></li>
                                                <li><router-link to="product-category-fullwidth.html"><span>Product Category Fullwidth<span class="tip tip-new">New</span></span></router-link></li>
                                            </ul>
                                            <div class="menu-title">Shop Pages</div><!-- End .menu-title -->
                                            <ul>
                                                <li><router-link to="cart.html">Cart</router-link></li>
                                                <li><router-link to="checkout.html">Checkout</router-link></li>
                                                <li><router-link to="wishlist.html">Wishlist</router-link></li>
                                                <li><router-link to="dashboard.html">My Account</router-link></li>
                                                <li><router-link to="#">Lookbook</router-link></li>
                                            </ul>
                                        </div><!-- End .col-md-6 -->
                                    </div><!-- End .row -->
                                </div><!-- End .menu-col -->
                            </div><!-- End .col-md-8 -->

                            <div class="col-md-4">
                                <div class="banner banner-overlay">
                                    <router-link to="category.html" class="banner banner-menu">
                                        <img src="assets/images/menu/banner-1.jpg" alt="Banner">

                                        <div class="banner-content banner-content-top">
                                            <div class="banner-title text-white">Last <br>Chance<br><span><strong>Sale</strong></span></div><!-- End .banner-title -->
                                        </div><!-- End .banner-content -->
                                    </router-link>
                                </div><!-- End .banner banner-overlay -->
                            </div><!-- End .col-md-4 -->
                        </div><!-- End .row -->
                    </div><!-- End .megamenu megamenu-md -->
                    </li>
                    <li>
                        <router-link to="product.html" class="sf-with-ul">Product</router-link>

                        <div class="megamenu megamenu-sm">
                            <div class="row no-gutters">
                                <div class="col-md-6">
                                    <div class="menu-col">
                                        <div class="menu-title">Product Details</div><!-- End .menu-title -->
                                        <ul>
                                            <li><router-link to="product.html">Default</router-link></li>
                                        </ul>
                                    </div><!-- End .menu-col -->
                                </div><!-- End .col-md-6 -->

                                <div class="col-md-6">
                                    <div class="banner banner-overlay">
                                        <router-link to="category.html">
                                            <img src="assets/images/menu/banner-2.jpg" alt="Banner">

                                            <div class="banner-content banner-content-bottom">
                                                <div class="banner-title text-white">New Trends<br><span><strong>spring 2019</strong></span></div><!-- End .banner-title -->
                                            </div><!-- End .banner-content -->
                                        </router-link>
                                    </div><!-- End .banner -->
                                </div><!-- End .col-md-6 -->
                            </div><!-- End .row -->
                        </div><!-- End .megamenu megamenu-sm -->
                    </li>
                    <li>
                        <router-link to="#" class="sf-with-ul">Pages</router-link>

                        <ul>
                            <li>
                                <router-link to="about.html" class="sf-with-ul">About</router-link>
                                <ul>
                                    <li><router-link to="about.html">About 01</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="contact.html" class="sf-with-ul">Contact</router-link>

                                <ul>
                                    <li><router-link to="contact.html">Contact 01</router-link></li>
                                </ul>
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
    </div><!-- End .container -->
</div><!-- End .header-bottom -->

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
