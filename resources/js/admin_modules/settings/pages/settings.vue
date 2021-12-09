<template>
<main class="app-content" id="app">
            <div class="app-title">
        <div>
            <h1><i class="fa fa-cogs"></i> Settings</h1>
        </div>
    </div>
    <div class="row user">
        <div class="col-md-3">
            <div class="tile p-0">
                <ul class="nav flex-column nav-tabs user-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#general" data-toggle="tab">General</a></li>
                    <li class="nav-item"><a class="nav-link" href="#site-logo" data-toggle="tab">Site Logo</a></li>
                    <li class="nav-item"><a class="nav-link" href="#footer-seo" data-toggle="tab">Footer &amp; SEO</a></li>
                    <li class="nav-item"><a class="nav-link" href="#social-links" data-toggle="tab">Social Links</a></li>
                    <li class="nav-item"><a class="nav-link" href="#analytics" data-toggle="tab">Analytics</a></li>
                    <li class="nav-item"><a class="nav-link" href="#payments" data-toggle="tab">Payments</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9">
            <div class="tab-content">
                <div class="tab-pane active" id="general">
                    <div class="tile">
                        <form action="http://127.0.0.1:8000/admin/settings" method="POST" role="form">
                            <input type="hidden" name="_token" value="0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ">        <h3 class="tile-title">General Settings</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="form-group">
                                    <label class="control-label" for="site_name">Site Name</label>
                                    <input class="form-control" type="text" placeholder="Enter site name" id="site_name" name="site_name" value="EShop BD">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="site_title">Site Title</label>
                                    <input class="form-control" type="text" placeholder="Enter site title" id="site_title" name="site_title" value="E-Commerce">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="default_email_address">Default Email Address</label>
                                    <input class="form-control" type="email" placeholder="Enter store default email address" id="default_email_address" name="default_email_address" value="admin@admin.com">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="currency_code">Currency Code</label>
                                    <input class="form-control" type="text" placeholder="Enter store currency code" id="currency_code" name="currency_code" value="GBP">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="currency_symbol">Currency Symbol</label>
                                    <input class="form-control" type="text" placeholder="Enter store currency symbol" id="currency_symbol" name="currency_symbol" value="৳">
                                </div>
                            </div>
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update Settings</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="site-logo">
                    <div class="tile">
                        <form action="http://127.0.0.1:8000/admin/settings" method="POST" role="form" enctype="multipart/form-data">
                            <input type="hidden" name="_token" value="0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ">        <h3 class="tile-title">Site Logo</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="row">
                                    <div class="col-3">
                                                                <img src="http://127.0.0.1:8000/storage/img/TtsSyuyDeemGKfTNJPPXfa3ju.png" id="logoImg" style="width: 80px; height: auto;">
                                                        </div>
                                    <div class="col-9">
                                        <div class="form-group">
                                            <label class="control-label">Site Logo</label>
                                            <input class="form-control" type="file" name="site_logo" onchange="loadFile(event,'logoImg')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-3">
                                                                <img src="http://127.0.0.1:8000/storage/img/m16MzwiOpigkNKVj1Unxodyv4.ico" id="faviconImg" style="width: 80px; height: auto;">
                                                        </div>
                                    <div class="col-9">
                                        <div class="form-group">
                                            <label class="control-label">Site Favicon</label>
                                            <input class="form-control" type="file" name="site_favicon" onchange="loadFile(event,'faviconImg')">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update Settings</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="footer-seo">
                    <div class="tile">
                        <form action="http://127.0.0.1:8000/admin/settings" method="POST" role="form">
                            <input type="hidden" name="_token" value="0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ">        <h3 class="tile-title">Footer &amp; SEO</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="form-group">
                                    <label class="control-label" for="footer_copyright_text">Footer Copyright Text</label>
                                    <textarea class="form-control" rows="4" placeholder="Enter footer copyright text" id="footer_copyright_text" name="footer_copyright_text">SMC 2021</textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="seo_meta_title">SEO Meta Title</label>
                                    <input class="form-control" type="text" placeholder="Enter seo meta title for store" id="seo_meta_title" name="seo_meta_title" value="fotetr dummy">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="seo_meta_description">SEO Meta Description</label>
                                    <textarea class="form-control" rows="4" placeholder="Enter seo meta description for store" id="seo_meta_description" name="seo_meta_description">sdfd</textarea>
                                </div>
                            </div>
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update Settings</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                  </div>
                <div class="tab-pane fade" id="social-links">
                    <div class="tile">
                        <form action="http://127.0.0.1:8000/admin/settings" method="POST" role="form">
                            <input type="hidden" name="_token" value="0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ">        <h3 class="tile-title">Social Links</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="form-group">
                                    <label class="control-label" for="social_facebook">Facebook Profile</label>
                                    <input class="form-control" type="text" placeholder="Enter facebook profile link" id="social_facebook" name="social_facebook" value="facebook.com/samayunmc">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="social_twitter">Twitter Profile</label>
                                    <input class="form-control" type="text" placeholder="Enter twitter profile link" id="social_twitter" name="social_twitter" value="">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="social_instagram">Instagram Profile</label>
                                    <input class="form-control" type="text" placeholder="Enter instagram profile link" id="social_instagram" name="social_instagram" value="">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="social_linkedin">LinkedIn Profile</label>
                                    <input class="form-control" type="text" placeholder="Enter linkedin profile link" id="social_linkedin" name="social_linkedin" value="">
                                </div>
                            </div>
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update Settings</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="analytics">
                    <div class="tile">
                        <form action="http://127.0.0.1:8000/admin/settings" method="POST" role="form">
                            <input type="hidden" name="_token" value="0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ">        <h3 class="tile-title">Analytics</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="form-group">
                                    <label class="control-label" for="google_analytics">Google Analytics Code</label>
                                    <textarea class="form-control" rows="4" placeholder="Enter google analytics code" id="google_analytics" name="google_analytics"></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="facebook_pixels">Facebook Pixel Code</label>
                                    <textarea class="form-control" rows="4" placeholder="Enter facebook pixel code" id="facebook_pixels" name="facebook_pixels"></textarea>
                                </div>
                            </div>
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update Settings</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                <div class="tab-pane fade" id="payments">
                    <div class="tile">
                        <form action="http://127.0.0.1:8000/admin/settings" method="POST" role="form">
                            <input type="hidden" name="_token" value="0kWShnjOaoFgsuDUYH4ku43LrP4EBbjylcJacyfQ">        <h3 class="tile-title">Payment Settings</h3>
                            <hr>
                            <div class="tile-body">
                                <div class="form-group">
                                    <label class="control-label" for="stripe_payment_method">Stripe Payment Method</label>
                                    <select name="stripe_payment_method" id="stripe_payment_method" class="form-control">
                                        <option value="1" selected="">Enabled</option>
                                        <option value="0">Disabled</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="stripe_key">Key</label>
                                    <input class="form-control" type="text" placeholder="Enter stripe key" id="stripe_key" name="stripe_key" value="">
                                </div>
                                <div class="form-group pb-2">
                                    <label class="control-label" for="stripe_secret_key">Secret Key</label>
                                    <input class="form-control" type="text" placeholder="Enter stripe secret key" id="stripe_secret_key" name="stripe_secret_key" value="">
                                </div>
                                <hr>
                                <div class="form-group pt-2">
                                    <label class="control-label" for="paypal_payment_method">PayPal Payment Method</label>
                                    <select name="paypal_payment_method" id="paypal_payment_method" class="form-control">
                                        <option value="1" selected="">Enabled</option>
                                        <option value="0">Disabled</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="paypal_client_id">Client ID</label>
                                    <input class="form-control" type="text" placeholder="Enter paypal client Id" id="paypal_client_id" name="paypal_client_id" value="">
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="paypal_secret_id">Secret ID</label>
                                    <input class="form-control" type="text" placeholder="Enter paypal secret id" id="paypal_secret_id" name="paypal_secret_id" value="">
                                </div>
                            </div>
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update Settings</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
</template>


<script>
export default {
    created(){
        document.title = 'Settings'
    }
}
</script>

