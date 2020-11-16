<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title> Offline -  {{ env('APP_NAME') }} </title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <meta name="keywords" content={{ env('APP_NAME') }}>
        <meta name="description" content={{ env('APP_NAME') }}>
        <meta name="author" content="Samayun-Chy">

        <link rel="stylesheet" href="{{ mix('css/main-app.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/blue.css') }}">
        <link rel="stylesheet" href="{{ asset('css/yellow.css') }}">
        {{-- <link rel="stylesheet" href="{{ asset('css/green.css') }}"> --}}

</head>

<body>
    <div class="card">
        <div class="card-titile">
            <h2> Sorry You are offline </h2>
        </div>
    </div>
    <script src="{{mix('js/template-cachable.js')}}"></script>
</body>
</html>
