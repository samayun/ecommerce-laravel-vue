const mix = require('laravel-mix')

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

mix.js('resources/js/admin.js', 'public/js').version();


// mix.styles([
//     'resources/sellshop/css/bootstrap.min.css',
//     'resources/sellshop/css/animate.css',
//     'resources/sellshop/css/materialdesignicons.min.css',
//     'resources/sellshop/css/jquery.simpleLens.css',
//     'resources/sellshop/css/jquery-ui.min.css',
//     'resources/sellshop/css/meanmenu.min.css',
//     'resources/sellshop/css/nivo-slider.css',
//     'resources/sellshop/css/owl.carousel.css',
//     'resources/sellshop/style.css',
//     'resources/sellshop/css/responsive.css'
// ], 'public/css/sellshop.css').version();

// mix.js('resources/sellshop/js/vendor/modernizr-2.8.3.min.js', 'public/js/modernizr-2.8.3.min.js')

// mix.scripts([
//     'resources/sellshop/js/vendor/jquery-1.12.3.min.js',
//     'resources/sellshop/js/bootstrap.min.js',
//     'resources/sellshop/js/owl.carousel.min.js',
//     'resources/sellshop/js/jquery.meanmenu.js',
//     'resources/sellshop/js/countdown.js',
//     'resources/sellshop/js/jquery.nivo.slider.pack.js',
//     'resources/sellshop/js/jquery.simpleLens.min.js',
//     'resources/sellshop/js/jquery-ui.min.js',
//     'resources/sellshop/js/load-more.js',
//     'resources/sellshop/js/plugins.js',
//     'resources/sellshop/js/main.js',
// ], 'public/js/sellshop.js');