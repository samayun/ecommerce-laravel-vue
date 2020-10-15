<template>
  <div class="login-box bg-primary"  style="margin: 7% auto;">
    <div class="login-logo">
    
      
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <form >
          <div class="input-group mb-3">

          <input id="email" type="email" placeholder="Enter Your Email" class="form-control" name="email" value="" required autocomplete="email" autofocus>
            <div class="input-group-append input-group-text">
                <span class="fas fa-envelope"></span>
            </div>
          </div>
          <div class="input-group mb-3">
              <input id="password"  placeholder="Enter Your Password"  type="password" class="form-control" name="password" required autocomplete="password">

            <div class="input-group-append input-group-text">
                <span class="fas fa-lock"></span>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="ml-3">
                   <input class="form-check-input" type="checkbox" name="remember" id="remember" />
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
</template>
<script>
    export default {
        created() {
            console.log('admin Component mounted.')
        }
    }
</script>
