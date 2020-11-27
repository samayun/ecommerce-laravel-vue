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

    
    
    <link rel="stylesheet" href="<?php echo e(asset('css/main-app.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('css/green.css')); ?>">
</head>

<body>
    <div id="main-app">
          <main-app></main-app>
          <mobile-menu></mobile-menu>
          <mobile-footer></mobile-footer>
    </div>


    

    <!-- Plugins JS File -->
    
    
    <!-- Main JS File -->
    
    

    <script src="<?php echo e(mix('js/app.js')); ?>" defer></script>
    <script>
        // $('#product-zoom').elevateZoom();
    </script>
</body>
</html>
<?php /**PATH /media/samayun/Backend/Next Modern Project/ECommerce/resources/views/site.blade.php ENDPATH**/ ?>