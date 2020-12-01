<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <title> Site -  <?php echo e(env('APP_NAME')); ?> </title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <meta name="keywords" content=<?php echo e(env('APP_NAME')); ?>>
        <meta name="description" content=<?php echo e(env('APP_NAME')); ?>>
        <meta name="author" content="Samayun-Chy">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
        <meta name="theme-color" content="#ffffff">
         <link rel="manifest" href="/manifest.json">

        <link rel="stylesheet" href="<?php echo e(asset('css/main-app.min.css')); ?>">
        <link rel="stylesheet" href="<?php echo e(asset('css/blue.css')); ?>">
        <script>
            (function () {
                window.Laravel = {
                    csrfToken: '<?php echo e(csrf_token()); ?>'
                };
            })();
        </script>
</head>

<body>
    <div id="main-app">
        <?php if(Auth::check()): ?>
        <main-app :user="<?php echo e(Auth::user()); ?>"></main-app>
        <?php else: ?>
        <main-app :user="false"></main-app>
        <?php endif; ?>
           <mobile-menu></mobile-menu>
           <mobile-footer></mobile-footer>
           <quick-view></quick-view>
    </div>


    

    <!-- Plugins JS File -->
<!--     
    

     -->
     <script src="<?php echo e(asset('js/template-cachable.js')); ?>"></script>

    <script src="<?php echo e(mix('js/app.js')); ?>" defer></script>
    <script>
        // $('#product-zoom').elevateZoom();
    </script>
</body>
</html>
<?php /**PATH /media/samayun/Backend/Next Modern Project/ECommerce/resources/views/site.blade.php ENDPATH**/ ?>