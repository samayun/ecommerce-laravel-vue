<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ env('APP_NAME') }} </title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <!-- google fonts -->
        <link href='https://fonts.googleapis.com/css?family=Lato:400,900,700,300' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Bree+Serif' rel='stylesheet' type='text/css'>
        <!-- Styles -->
        <link rel="stylesheet" href='{{ asset("css/sellshop.css") }}'>
        <!-- Scripts -->
        <script src="{{ asset('js/modernizr-2.8.3.min.js') }}"></script>

        <script src="{{ asset('js/app.js') }}" defer></script>

    </head>
    <body>
        <div id="app">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        @include('partial.header')

        <!-- header section end -->
        @yield('content')

        
		<!-- all js here -->
        <script src="{{ asset('js/sellshop.js') }}"></script>
		
        
        <a id="scrollUp" href="#top" style="position: fixed; z-index: 2147483647;"><i class="mdi mdi-chevron-up"></i></a>
    
        </div>
    </body>
    </html>