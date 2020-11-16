# Build Offline First Website

    * Step -1 : make & add `manifest.json` file *
    * Step -2 : `sw.js` serviceWorker file create
    * Step -3 : register sw
    * Step -4 : cachee assets in sw
    * Step-5 : ENJOY :smile:

## Step-1:
    
``` html
<!-- root.html -->
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title> Site -  {{ env('APP_NAME') }} </title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#ffffff">
         <link rel="manifest" href="/manifest.json"> 
         <!-- manifest ^^ -->
        <link rel="stylesheet" href="{{ mix('css/main-app.min.css') }}">
</head>
<body>
    <div id="main-app"></div>
    <script src="{{mix('js/template-cachable.js')}}"></script>
    <script >
       if ('serviceWorker' in navigator) {
           navigator.serviceWorker.register('/sw.js')
       }else{
           console.log('Failed to register');
       }
    </script>
</body>
</html>
```

``` json
// manifest.json
{
  "short_name": "E Penguin Shop",
  "name": "Penguin Online Shop ",
  "icons": [
    {
      "src": "/storage/site/logo.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/storage/site/logo.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/",
  "background_color": "#009688",
  "display": "standalone",
  "scope": "/",
  "theme_color": "#f96545"
}
```
# Step-2 & 3: SW Create & Register
``` js
var staticCacheName = "pwa-v" + new Date().getTime();
// fileToCache must be empty error
var filesToCache = [
    '/offline',
    '/css/main-app.min.css',
    '/js/template-cachable.js',
];

// Cache on install
self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("pwa-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline');
                // when offline show this 
            })
    )
});
```


# Is there available more easy way ? - YES :smile: 
It's easy.
Install 

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

