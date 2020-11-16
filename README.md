#### Php artisan commands
``` console
    composer create-project --prefer-dist laravel/laravel ECommerce "8"
    composer require laravel/ui --dev
    php artisan ui vue --auth
    npm install admin-lte vue-router vuex @fortawesome/fontawesome-free moment vform view-design vue-i18n
    npm install
    npm run watch-poll

    composer require silviolleite/laravelpwa
```
## PWA

`composer require silviolleite/laravelpwa`
`php artisan vendor:publish --provider="LaravelPWA\Providers\LaravelPWAServiceProvider"`

``` html
<!DOCTYPE html>
<html >
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title>{{ env('APP_NAME' ,'Admin Panel') }}</title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <link rel="manifest" href="{{ asset('manifest.json') }}" />
  <meta name="theme-color" content="#FFFFFF" />
    @laravelPWA
    <!-- Just add above line -->
  <script>

    (function () {
        window.Laravel = {
            csrfToken: '{{ csrf_token() }}'
        };
    })();

</script>
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini">
  <div id="admin">
       @if (Auth::guard('admin')->check())
         <admin-app :user="{{ Auth::guard('admin')->user() }}"></admin-app>
       @else
         <admin-app :user="false"></admin-app>
       @endif
  </div>

  <script>
      window.adminUser = @json(auth()->guard('admin')->user());
  </script>
<!-- REQUIRED SCRIPTS -->
<script src="{{mix('js/admin.js')}}" defer></script>
</body>
</html>
```
JUST Edit `config/laravelpwa.php`
Assets,SW will auto generated .


Just Visit your site now.

and Install Your PWA App

* Happy Coding
