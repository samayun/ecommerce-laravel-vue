
<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html >
<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta http-equiv="x-ua-compatible" content="ie=edge">
   <title><?php echo e(env('APP_NAME' ,'Admin Panel')); ?></title>
    <!-- CSRF Token -->
   <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <!-- Font Awesome Icons -->
   <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
   <!-- Theme style -->
   <link rel="stylesheet" href="<?php echo e(asset('css/app.css')); ?>">
   <link rel="manifest" href="<?php echo e(asset('manifest.json')); ?>" />
   <meta name="theme-color" content="#FFFFFF" />
   
   <script>
    (function () {
        window.Laravel = {
            csrfToken: '<?php echo e(csrf_token()); ?>'
        };
    })();
</script>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini">
    <div id="admin">
        <?php if(Auth::guard('admin')->check()): ?>
          <admin-app :user="<?php echo e(Auth::guard('admin')->user()); ?>"></admin-app>
        <?php else: ?>
          <admin-app :user="false"></admin-app>
        <?php endif; ?>
   </div>

  <script>
      window.adminUser = <?php echo json_encode(auth()->guard('admin')->user(), 15, 512) ?>;
  </script>
<!-- REQUIRED SCRIPTS -->

<script src="<?php echo e(asset('js/admin.js')); ?>" defer></script>
</body>
</html>
<?php /**PATH /media/samayun/Backend/Next Modern Project/ECommerce/resources/views/admin_layout.blade.php ENDPATH**/ ?>