
<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title>{{ env('APP_NAME') }} - Admin Panel</title>

  <!-- Font Awesome Icons -->
  <!-- <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css"> -->
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body  id="admin" style="background: url('/img/background.jpg')">
<div class="container" >
  <div class="login-box bg-primary"  style="margin: 7% auto;">
    <div class="login-logo">
      <a href="/" class="text-white"><b>{{env('APP_NAME')}}</b></a>
      
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <form method="POST" action="{{ route('adminLogin') }}">
           @csrf
          <div class="input-group mb-3">
              @error('email')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
          <input id="email" type="email" placeholder="Enter Your Email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
            <div class="input-group-append input-group-text">
                <span class="fas fa-envelope"></span>
            </div>
          </div>
          <div class="input-group mb-3">
              <input id="password"  placeholder="Enter Your Password"  type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="password">

              @error('password')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
            <div class="input-group-append input-group-text">
                <span class="fas fa-lock"></span>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="ml-3">
                   <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }} />
                <label for="remember">
                  Remember Me
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
            <!-- /.col -->
          </div>
        </form>

      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
</div>

<!-- REQUIRED SCRIPTS -->
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
