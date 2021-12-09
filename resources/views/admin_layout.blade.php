
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
   <title>{{ env('APP_NAME' ,'Admin Panel') }}</title>
    <!-- CSRF Token -->
   <meta name="csrf-token" content="{{ csrf_token() }}">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <!-- Font Awesome Icons -->
   <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
   <!-- Theme style -->
   <link rel="stylesheet" href="{{ asset('css/app.css') }}">
   <link rel="manifest" href="{{ asset('manifest.json') }}" />
   <meta name="theme-color" content="#FFFFFF" />
   {{-- @laravelPWA  --}}
   <script>
    (function () {
        window.Laravel = {
            csrfToken: '{{ csrf_token() }}'
        };
    })();
</script>
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
 <script src="{{mix('js/admin.js')}}" defer></script> 

</body>
</html>
