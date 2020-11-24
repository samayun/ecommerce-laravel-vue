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

       

        
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
        <meta name="theme-color" content="#ffffff">
         <link rel="manifest" href="/manifest.json">
    <link rel="stylesheet" href="/assets/vendor/line-awesome/css/line-awesome.min.css">
    <!-- Plugins CSS File -->
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/plugins/owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="/assets/css/plugins/magnific-popup/magnific-popup.css">
    <link rel="stylesheet" href="/assets/css/plugins/jquery.countdown.css">
    <!-- Main CSS File -->
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/skins/skin-demo-13.css">
    <link rel="stylesheet" href="/assets/css/typo.css">
    <link rel="stylesheet" href="/assets/css/plugins/nouislider/nouislider.css">


    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/plugins/owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="/assets/css/plugins/magnific-popup/magnific-popup.css">
    <!-- Main CSS File -->
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/plugins/nouislider/nouislider.css">
    
    <link rel="stylesheet" href="/css/green.css">
</head>

<body>
    <div id="main-app">
          <main-app></main-app>
          <mobile-menu></mobile-menu>
          <mobile-footer></mobile-footer>
    </div>


    

    <!-- Plugins JS File -->
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/js/jquery.hoverIntent.min.js"></script>
    <script src="/assets/js/jquery.waypoints.min.js"></script>
    <script src="/assets/js/superfish.min.js"></script>
    <script src="/assets/js/owl.carousel.min.js"></script>
    <script src="/assets/js/bootstrap-input-spinner.js"></script>
    <script src="/assets/js/jquery.elevateZoom.min.js"></script>
    <script src="/assets/js/bootstrap-input-spinner.js"></script>
    <script src="/assets/js/jquery.magnific-popup.min.js"></script>
    <!-- Main JS File -->
    <script src="/assets/js/main.js"></script>
    

    <script src="<?php echo e(mix('js/app.js')); ?>" defer></script>

</body>
</html>
<?php /**PATH /media/samayun/Backend/Next Modern Project/ECommerce/resources/views/site.blade.php ENDPATH**/ ?>