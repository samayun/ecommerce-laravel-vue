<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <title> Offline -  <?php echo e(env('APP_NAME')); ?> </title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <meta name="keywords" content=<?php echo e(env('APP_NAME')); ?>>
        <meta name="description" content=<?php echo e(env('APP_NAME')); ?>>
        <meta name="author" content="Samayun-Chy">

        <link rel="stylesheet" href="<?php echo e(asset('css/main-app.min.css')); ?>">
        
        <link rel="stylesheet" href="<?php echo e(asset('css/yellow.css')); ?>">
        

</head>

<body>
    <div class="card">
        <div class="card-titile">
            <h2> Sorry You are offline </h2>
        </div>
    </div>
    <script src="<?php echo e(asset('js/template-cachable.js')); ?>"></script>
</body>
</html>
<?php /**PATH /media/samayun/Backend/Next Modern Project/ECommerce/resources/views/offline.blade.php ENDPATH**/ ?>