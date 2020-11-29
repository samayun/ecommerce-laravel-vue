<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title> Site -  {{ env('APP_NAME') }} </title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <meta name="keywords" content={{ env('APP_NAME') }}>
        <meta name="description" content={{ env('APP_NAME') }}>
        <meta name="author" content="Samayun-Chy">

       {{-- <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/icons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/icons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/icons/favicon-16x16.png">

        <link rel="mask-icon" href="/assets/images/icons/safari-pinned-tab.svg" color="#666666">
        <link rel="shortcut icon" href="/assets/images/icons/favicon.ico"> --}}

        {{-- <meta name="apple-mobile-web-app-title" content="Molla">
        <meta name="application-name" content="Molla">
        <meta name="msapplication-TileColor" content="#cc9966">
        <meta name="msapplication-config" content="assets/images/icons/browserconfig.xml"> --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">
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
    <link rel="stylesheet" href="/assets/css/style.css"> --}}
     <link rel="stylesheet" href="/assets/css/plugins/nouislider/nouislider.css"> 

    <link rel="stylesheet" href="{{ asset('css/main-app.min.css') }}">
    <link rel="stylesheet" href="/css/green.css">

</head>

<body>

    @include('site.header')

    @include('site.productsSimple')
    {{-- <script src="{{asset('js/template-cachable.js')}}"></script> --}}

    {{-- <script >
       if ('serviceWorker' in navigator) {
           navigator.serviceWorker.register('/sw.js')
       }else{
           console.log('Failed to register');
       }
    </script> --}}

    <!-- Plugins JS File -->
    {{-- <script src="/assets/js/jquery.min.js"></script>
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
    <script src="/assets/js/main.js"></script> --}}
    <script src="{{mix('js/app.js')}}" defer></script>
    <script src="{{asset('js/template-cachable.js')}}"></script>
</body>
</html>
