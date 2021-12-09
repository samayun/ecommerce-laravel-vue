const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js').version();
// mix.sass('resources/sass/app.scss', 'public/css')

mix.js(
    "resources/microfrontends/@admin-mf/index.js",
    "public/js/admin.js"
).version();

mix.js(
    "resources/microfrontends/@site-mf/index.js",
    "public/js/app.js"
).version();

// mix.styles([
//     'public/assets/css/style.css',
//     'public/assets/css/bootstrap.min.css',
//     'public/assets/css/plugins/owl-carousel/owl.carousel.css',
//     'public/assets/css/plugins/magnific-popup/magnific-popup.css',
//     'public/assets/css/typo.css',
// ], 'public/css/main-app.min.css');

// mix.scripts([
//     'public/assets/js/jquery.min.js',
//     'public/assets/js/bootstrap.bundle.min.js',
//     'public/assets/js/jquery.hoverIntent.min.js',
//     'public/assets/js/jquery.waypoints.min.js',
//     'public/assets/js/superfish.min.js',
//     'public/assets/js/owl.carousel.min.js',
//     'public/assets/js/bootstrap-input-spinner.js',
//     'public/assets/js/jquery.elevateZoom.min.js',
//     'public/assets/js/jquery.magnific-popup.min.js',
//     // 'public/assets/js/jquery.plugin.min.js',
//     'public/assets/js/main.js'
// ], 'public/js/template-cachable.js').version();
