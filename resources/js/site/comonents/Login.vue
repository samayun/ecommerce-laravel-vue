<template>
     <!-- Sign in / Register Modal -->
    <div class="modal fade" id="signin-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="icon-close"></i></span>
                    </button>

                    <div class="form-box">
                        <div class="form-tab">
                            <ul class="nav nav-pills nav-fill nav-border-anim" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="tab-content-5">
                                <div class="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                    <form action="#"  @submit.prevent="doLogin">
                                         {{validate() }}
                                        <div class="form-group">
                                            <label for="email">Username or email address *</label>
                                            <input type="text" class="form-control" id="email" name="email" 
                                              v-model="form.email" 
                                              :class="errors.email && !validate() ? 'border-danger' : '' "
                                              >
                                            <span class="text-danger" v-if="errors.email && !validate()"> {{ errors.email[0] }} </span>
                                        </div><!-- End .form-group -->

                                        <div class="form-group">
                                            <label for="password">Password *</label>
                                            <input type="password" class="form-control" id="password" 
                                                name="password" 
                                                v-model="form.password"
                                                 :class="errors.password && !validate() ? 'border-danger' : '' " >
                                            <span class="text-danger" v-if="errors.password && !validate()"> {{ errors.password[0] }} </span>
                                        </div><!-- End .form-group -->

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2" @click="doLogin" :disabled="!validate()">
                                                <span>LOG IN</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>

                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="signin-remember"
                                                    v-model="form.remember" 
                                                    checked="form.remember" 
                                                >
                                                <label class="custom-control-label" for="signin-remember"
                                                    
                                                  >Remember Me</label>
                                            </div><!-- End .custom-checkbox -->

                                            <a href="#" class="forgot-link">Forgot Your Password?</a>
                                        </div><!-- End .form-footer -->
                                    </form>
                                    <div class="form-choice">
                                        <p class="text-center">or sign in with</p>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login btn-g">
                                                    <i class="icon-google"></i>
                                                    Login With Google
                                                </a>
                                            </div><!-- End .col-6 -->
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login btn-f">
                                                    <i class="icon-facebook-f"></i>
                                                    Login With Facebook
                                                </a>
                                            </div><!-- End .col-6 -->
                                        </div><!-- End .row -->
                                    </div><!-- End .form-choice -->
                                </div><!-- .End .tab-pane -->
                                <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="register-email">Your email address *</label>
                                            <input type="email" class="form-control" id="register-email" name="register-email" required>
                                        </div><!-- End .form-group -->

                                        <div class="form-group">
                                            <label for="register-password">Password *</label>
                                            <input type="password" class="form-control" id="register-password" name="register-password" required>
                                        </div><!-- End .form-group -->

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>SIGN UP</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>

                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="register-policy" required>
                                                <label class="custom-control-label" for="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                                            </div><!-- End .custom-checkbox -->
                                        </div><!-- End .form-footer -->
                                    </form>
                                    <div class="form-choice">
                                        <p class="text-center">or sign in with</p>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login btn-g">
                                                    <i class="icon-google"></i>
                                                    Login With Google
                                                </a>
                                            </div><!-- End .col-6 -->
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login  btn-f">
                                                    <i class="icon-facebook-f"></i>
                                                    Login With Facebook
                                                </a>
                                            </div><!-- End .col-6 -->
                                        </div><!-- End .row -->
                                    </div><!-- End .form-choice -->
                                </div><!-- .End .tab-pane -->
                            </div><!-- End .tab-content -->
                        </div><!-- End .form-tab -->
                    </div><!-- End .form-box -->
                </div><!-- End .modal-body -->
            </div><!-- End .modal-content -->
        </div><!-- End .modal-dialog -->
    </div><!-- End .modal -->
</template>
<script>
    export default {
      data(){
        return {
          form : {
            email: '',
            password: '',
            remember: true
          },
         register : {
            email: '',
            password: '',
            remember: true
          },
          errors: {}
        }
      },
      computed:{

      },
       methods:{
          async doLogin() {
            try {
                if (this.validate()) {
                    let res = await axios.post('/login' , this.form);
                    if (res.status == 200) {
                          window.location.reload();
                          // this.$store.dispatch('updateUser' , res.data.user);
                          //  localStorage.setItem('adminAuthUser' , JSON.stringify(res.data.user))
                          //  this.$router.replace({name : 'AdminHome'})
                    }
                }
            }
            catch(error) {
                if (error.response.status == 422) {
                    this.errors = error.response.data.errors
                }
                console.log(error.response.data)
            }
         },
         validate(){
              if (this.form.email.trim().length < 1) {
                    this.errors.email = [ "Email is required" ]
                    return false;
                }
                 else if (this.form.password.trim().length < 1) {
                    this.errors.password = [ "Password is required" ]
                    return false;
                }
                else if (this.form.password.trim().length < 6) {
                    this.errors.password = [ "Password feild must be minumum 6 character" ]
                    return false;
                }else{
                    return true;
                }
        },
        async doRegister() {
            try {
                if (this.form.email.trim().length < 1) {
                    this.errors.email = [ "Email is required" ]
                    return;
                }
                 if (this.form.password.trim().length < 1) {
                    this.errors.password = [ "Password is required" ]
                    return;
                }
                if (this.form.password.trim().length < 6) {
                    this.errors.password = [ "Password feild must be minumum 6 character" ]
                    return;
                }
                let res = await axios.post('/register' , this.register);
                if (res.status == 200) {
                      window.location.reload();
                      // this.$store.dispatch('updateUser' , res.data.user);
                      //  localStorage.setItem('adminAuthUser' , JSON.stringify(res.data.user))
                      //  this.$router.replace({name : 'AdminHome'})
                }
            }
            catch(error) {
                if (error.response.status == 422) {
                    this.errors = error.response.data.errors
                }
                console,log(error.response.data)
            }
         },
       },
       watch:{
         'form.email' : 'validate',
         'form.password' : 'validate',
       }

    }
</script>
