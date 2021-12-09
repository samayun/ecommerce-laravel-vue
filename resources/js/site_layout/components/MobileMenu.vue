<template>
<div>
<button id="scroll-top" title="Back to Top"><i class="icon-arrow-up"></i></button>

<!-- Mobile Menu -->
<div class="mobile-menu-overlay"></div><!-- End .mobil-menu-overlay -->

<div class="mobile-menu-container mobile-menu-light">
    <div class="mobile-menu-wrapper">
        <span class="mobile-menu-close"><i class="icon-close"></i></span>

        <form action="#" method="get" class="mobile-search">
            <label for="mobile-search" class="sr-only">Search</label>
            <input type="search" class="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required>
            <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
        </form>

        <ul class="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Categories</a>
            </li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
                <nav class="mobile-nav">
                    <ul class="mobile-menu">
                        <li class="active">
                            <router-link to="index">Home</router-link>

                            <ul>
                                <li><router-link to="/products"> All Products </router-link></li>
                                <li><router-link to="/contact"> Contact </router-link></li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="category">Shop</router-link>
                            <ul>
                                <li><router-link to="product-category-fullwidth"><span>Product Category Fullwidth<span class="tip tip-new">New</span></span></router-link></li>
                                <li><router-link to="cart">Cart</router-link></li>
                                <li><router-link to="checkout">Checkout</router-link></li>
                                <li><router-link to="wishlist">Wishlist</router-link></li>
                                <li><router-link to="/">Lookbook</router-link></li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="product" class="sf-with-ul">Product</router-link>
                            <ul>
                                <li><router-link to="product">Default</router-link></li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="#">Pages</router-link>
                            <ul>
                                <li>
                                    <router-link to="about">About</router-link>

                                    <ul>
                                        <li><router-link to="about">About 01</router-link></li>
                                        <li><router-link to="about-2">About 02</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="contact">Contact</router-link>

                                    <ul>
                                        <li><router-link to="contact">Contact 01</router-link></li>
                                        <li><router-link to="contact-2">Contact 02</router-link></li>
                                    </ul>
                                </li>
                                <li><router-link to="login">Login</router-link></li>
                                <li><router-link to="faq">FAQs</router-link></li>
                                <li><router-link to="404">Error 404</router-link></li>
                                <li><router-link to="coming-soon">Coming Soon</router-link></li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="blog">Blog</router-link>

                            <ul>
                                <li><router-link to="blog">Classic</router-link></li>
                                <li><router-link to="blog-listing">Listing</router-link></li>
                                <li>
                                    <router-link to="#">Grid</router-link>
                                    <ul>
                                        <li><router-link to="blog-grid-2cols">Grid 2 columns</router-link></li>
                                        <li><router-link to="blog-grid-3cols">Grid 3 columns</router-link></li>
                                        <li><router-link to="blog-grid-4cols">Grid 4 columns</router-link></li>
                                        <li><router-link to="blog-grid-sidebar">Grid sidebar</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="#">Masonry</router-link>
                                    <ul>
                                        <li><router-link to="blog-masonry-2cols">Masonry 2 columns</router-link></li>
                                        <li><router-link to="blog-masonry-3cols">Masonry 3 columns</router-link></li>
                                        <li><router-link to="blog-masonry-4cols">Masonry 4 columns</router-link></li>
                                        <li><router-link to="blog-masonry-sidebar">Masonry sidebar</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="#">Mask</router-link>
                                    <ul>
                                        <li><router-link to="blog-mask-grid">Blog mask grid</router-link></li>
                                        <li><router-link to="blog-mask-masonry">Blog mask masonry</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="#">Single Post</router-link>
                                    <ul>
                                        <li><router-link to="single">Default with sidebar</router-link></li>
                                        <li><router-link to="single-fullwidth">Fullwidth no sidebar</router-link></li>
                                        <li><router-link to="single-fullwidth-sidebar">Fullwidth with sidebar</router-link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="elements-list">Elements</router-link>
                            <ul>
                                <li><router-link to="elements-products">Products</router-link></li>
                                <li><router-link to="elements-typography">Typography</router-link></li>
                                <li><router-link to="elements-titles">Titles</router-link></li>
                                <li><router-link to="elements-banners">Banners</router-link></li>
                                <li><router-link to="elements-product-category">Product Category</router-link></li>
                                <li><router-link to="elements-video-banners">Video Banners</router-link></li>
                                <li><router-link to="elements-buttons">Buttons</router-link></li>
                                <li><router-link to="elements-accordions">Accordions</router-link></li>
                                <li><router-link to="elements-tabs">Tabs</router-link></li>
                                <li><router-link to="elements-testimonials">Testimonials</router-link></li>
                                <li><router-link to="elements-blog-posts">Blog Posts</router-link></li>
                                <li><router-link to="elements-portfolio">Portfolio</router-link></li>
                                <li><router-link to="elements-cta">Call to Action</router-link></li>
                                <li><router-link to="elements-icon-boxes">Icon Boxes</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </nav><!-- End .mobile-nav -->
            </div><!-- .End .tab-pane -->


            <div class="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                <nav class="mobile-cats-nav">
                    <ul class="mobile-cats-menu">
                        <li
                        v-for="cat in categories"
                        :key="cat.id">
                        <router-link
                        :to="'/categorry/'+cat.slug">
                            {{ cat.name}}
                        </router-link>
                        </li>
                    </ul><!-- End .mobile-cats-menu -->
                </nav><!-- End .mobile-cats-nav -->
            </div><!-- .End .tab-pane -->
        </div><!-- End .tab-content -->

        <div class="social-icons">
            <router-link to="#" class="social-icon" target="_blank" title="Facebook"><i class="icon-facebook-f"></i></router-link>
            <router-link to="#" class="social-icon" target="_blank" title="Twitter"><i class="icon-twitter"></i></router-link>
            <router-link to="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></router-link>
            <router-link to="#" class="social-icon" target="_blank" title="Youtube"><i class="icon-youtube"></i></router-link>
        </div><!-- End .social-icons -->
    </div><!-- End .mobile-menu-wrapper -->
</div><!-- End .mobile-menu-container -->

</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name : "MobileMenu",
    computed:{
        ...mapState("categoriesStoreIndex",["categories"])
    },
    methods:{
        ...mapActions("categoriesStoreIndex",["getCategories"])
    },
    created(){
        if (this.categories.length < 1) {
            this.getCategories()
        }
    }
}
</script>
