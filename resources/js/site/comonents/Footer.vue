<template>
<footer class="footer footer-2">
    <div class="icon-boxes-container">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="icon-box icon-box-side">
                        <span class="icon-box-icon">
                            <i class="icon-rocket"></i>
                        </span>

                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Free Shipping</h3><!-- End .icon-box-title -->
                            <p>Orders $50 or more</p>
                        </div><!-- End .icon-box-content -->
                    </div><!-- End .icon-box -->
                </div><!-- End .col-sm-6 col-lg-3 -->

                <div class="col-sm-6 col-lg-3">
                    <div class="icon-box icon-box-side">
                        <span class="icon-box-icon">
                            <i class="icon-rotate-left"></i>
                        </span>

                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Free Returns</h3><!-- End .icon-box-title -->
                            <p>Within 30 days</p>
                        </div><!-- End .icon-box-content -->
                    </div><!-- End .icon-box -->
                </div><!-- End .col-sm-6 col-lg-3 -->

                <div class="col-sm-6 col-lg-3">
                    <div class="icon-box icon-box-side">
                        <span class="icon-box-icon">
                            <i class="icon-info-circle"></i>
                        </span>

                        <div class="icon-box-content">
                            <h3 class="icon-box-title">Get 20% Off 1 Item</h3><!-- End .icon-box-title -->
                            <p>When you sign up</p>
                        </div><!-- End .icon-box-content -->
                    </div><!-- End .icon-box -->
                </div><!-- End .col-sm-6 col-lg-3 -->

                <div class="col-sm-6 col-lg-3">
                    <div class="icon-box icon-box-side">
                        <span class="icon-box-icon">
                            <i class="icon-life-ring"></i>
                        </span>

                        <div class="icon-box-content">
                            <h3 class="icon-box-title">We Support</h3><!-- End .icon-box-title -->
                            <p>24/7 amazing services</p>
                        </div><!-- End .icon-box-content -->
                    </div><!-- End .icon-box -->
                </div><!-- End .col-sm-6 col-lg-3 -->
            </div><!-- End .row -->
        </div><!-- End .container -->
    </div><!-- End .icon-boxes-container -->

    <div class="footer-middle border-0">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-6">
                    <div class="widget widget-about">
                        <img src="/storage/site/logo.png" class="footer-logo" alt="Footer Logo" style="widdth:26rem;" >
                        <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>

                        <div class="widget-about-info">
                            <div class="row">
                                <div class="col-sm-6 col-md-4">
                                    <span class="widget-about-title">Got Question? Call us 24/7</span>
                                    <router-link to="tel:01798037068">+01798037068</router-link>
                                </div><!-- End .col-sm-6 -->
                                <!-- <div class="col-sm-6 col-md-8">
                                    <span class="widget-about-title">Payment Method</span>
                                    <figure class="footer-payments">
                                        <img src="" alt="Payment methods" width="272" height="20">
                                    </figure>
                                </div> -->

                            </div><!-- End .row -->
                        </div><!-- End .widget-about-info -->
                    </div><!-- End .widget about-widget -->
                </div><!-- End .col-sm-12 col-lg-3 -->

                <div class="col-sm-4 col-lg-2">
                    <div class="widget">
                        <h4 class="widget-title">Information</h4><!-- End .widget-title -->

                        <ul class="widget-list">
                            <li><router-link to="/about">About Penguin Shop</router-link></li>
                            <li><router-link to="/blog">How to shop on Pengiuin Shop</router-link></li>
                            <li><router-link to="/faq">FAQ</router-link></li>
                            <li><router-link to="/contact">Contact us</router-link></li>
                            <li><router-link to="/login">Log in</router-link></li>
                        </ul><!-- End .widget-list -->
                    </div><!-- End .widget -->
                </div><!-- End .col-sm-4 col-lg-3 -->

                <div class="col-sm-4 col-lg-2">
                    <div class="widget">
                        <h4 class="widget-title">Customer Service</h4><!-- End .widget-title -->

                        <ul class="widget-list">
                            <li><router-link to="#">Payment Methods</router-link></li>
                            <li><router-link to="#">Money-back guarantee!</router-link></li>
                            <li><router-link to="#">Returns</router-link></li>
                            <li><router-link to="#">Shipping</router-link></li>
                            <li><router-link to="#">Terms and conditions</router-link></li>
                            <li><router-link to="#">Privacy Policy</router-link></li>
                        </ul><!-- End .widget-list -->
                    </div><!-- End .widget -->
                </div><!-- End .col-sm-4 col-lg-3 -->

                <div class="col-sm-4 col-lg-2">
                    <div class="widget">
                        <h4 class="widget-title">My Account</h4><!-- End .widget-title -->

                        <ul class="widget-list">
                            <li><router-link to="/login">Sign In</router-link></li>
                            <li><router-link to="/cart">View Cart</router-link></li>
                            <li><router-link to="#">My Wishlist</router-link></li>
                            <li><router-link to="#">Track My Order</router-link></li>
                            <li><router-link to="#">Help</router-link></li>
                        </ul><!-- End .widget-list -->
                    </div><!-- End .widget -->
                </div><!-- End .col-sm-64 col-lg-3 -->
            </div><!-- End .row -->
        </div><!-- End .container -->
    </div><!-- End .footer-middle -->

    <div class="footer-bottom">
        <div class="container">
            <p class="footer-copyright">Copyright © 2020 Penguin Store. All Rights Reserved.</p><!-- End .footer-copyright -->
            <ul class="footer-menu">
                <li><router-link to="#">Terms Of Use</router-link></li>
                <li><router-link to="#">Privacy Policy</router-link></li>
            </ul><!-- End .footer-menu -->

            <div class="social-icons social-icons-color">
                <span class="social-label">Social Media</span>
                <router-link to="http://facebook.com/samayunmc" class="social-icon social-facebook" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></router-link>
                <router-link to="#" class="social-icon social-twitter" title="Twitter" target="_blank"><i class="icon-twitter"></i></router-link>
                <router-link to="#" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></router-link>
                <router-link to="#" class="social-icon social-youtube" title="Youtube" target="_blank"><i class="icon-youtube"></i></router-link>
                <router-link to="#" class="social-icon social-pinterest" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></router-link>
            </div><!-- End .soial-icons -->
        </div><!-- End .container -->
    </div><!-- End .footer-bottom -->
</footer><!-- End .footer -->

</template>
