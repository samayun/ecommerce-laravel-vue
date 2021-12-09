<template>
  <!-- Sign in / Register Modal -->
  <div
    class="modal "
    id="signin-modal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"

  >
    <div class="modal-dialog modal-dialog-centered" role="document" id="auth" v-if="!user">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="icon-close"></i></span>
          </button>

          <div class="form-box">
            <div class="form-tab">
              <ul class="nav nav-pills nav-fill nav-border-anim" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="signin-tab"
                    data-toggle="tab"
                    href="#signin"
                    role="tab"
                    aria-controls="signin"
                    aria-selected="true"
                    >Sign In</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="register-tab"
                    data-toggle="tab"
                    href="#register"
                    role="tab"
                    aria-controls="register"
                    aria-selected="false"
                    >Register</a
                  >
                </li>
              </ul>
              <div class="tab-content" id="tab-content-5">
                <div
                  class="tab-pane fade show active"
                  id="signin"
                  role="tabpanel"
                  aria-labelledby="signin-tab"
                >
                  <form action="#" @submit.prevent="doLogin">
                    <div class="form-group">
                      <label for="email">Username or email address *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        name="email"
                        v-model="form.email"
                        :class="errors.email ? 'border-danger' : ''"
                      />
                      <span class="text-danger" v-if="errors.email">
                        {{ errors.email[0] }}
                      </span>
                    </div>
                    <!-- End .form-group -->

                    <div class="form-group">
                      <label for="password">Password *</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        v-model="form.password"
                        :class="errors.password ? 'border-danger' : ''"
                      />
                      <span class="text-danger" v-if="errors.password"
                        >{{ errors.password[0] }}
                      </span>
                    </div>
                    <!-- End .form-group -->

                    <div class="form-footer">
                      <button type="submit" class="btn btn-outline-primary-2">
                        <span>LOG IN</span>
                        <i class="icon-long-arrow-right"></i>
                      </button>

                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="signin-remember"
                          v-model="form.remember"
                          checked="form.remember"
                        />
                        <label
                          class="custom-control-label"
                          for="signin-remember"
                          >Remember Me</label
                        >
                      </div>
                      <!-- End .custom-checkbox -->

                      <a href="#" class="forgot-link">Forgot Your Password?</a>
                    </div>
                    <!-- End .form-footer -->
                  </form>
                  <div class="form-choice">
                    <p class="text-center">or sign in with</p>
                    <div class="row">
                      <div class="col-sm-6">
                        <a href="#" class="btn btn-login btn-g">
                          <i class="icon-google"></i>
                          Login With Google
                        </a>
                      </div>
                      <!-- End .col-6 -->
                      <div class="col-sm-6">
                        <a href="#" class="btn btn-login btn-f">
                          <i class="icon-facebook-f"></i>
                          Login With Facebook
                        </a>
                      </div>
                      <!-- End .col-6 -->
                    </div>
                    <!-- End .row -->
                  </div>
                  <!-- End .form-choice -->
                </div>

                <div
                  class="tab-pane fade"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <form action="#" @submit.prevent="doRegister">
                    <div class="form-group">
                      <label for="name"> Name </label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        v-model="formRegister.name"
                        :class="errors.name ? 'border-danger' : ''"
                      />
                      <span class="text-danger" v-if="errors.name">
                        {{ errors.name[0] }}
                      </span>
                    </div>
                    <!-- End .form-group -->
                    <div class="form-group">
                      <label for="email"> Email address *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        name="email"
                        v-model="formRegister.email"
                        :class="errors.email ? 'border-danger' : ''"
                      />
                      <span class="text-danger" v-if="errors.email">
                        {{ errors.email[0] }}
                      </span>
                    </div>
                    <!-- End .form-group -->

                    <div class="form-group">
                      <label for="password">Password *</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        v-model="formRegister.password"
                        :class="errors.password ? 'border-danger' : ''"
                      />
                      <span class="text-danger" v-if="errors.password"
                        >{{ errors.password[0] }}
                      </span>
                    </div>
                    <!-- End .form-group -->
                    <div class="form-group">
                      <label for="password"> Confirm Password *</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        v-model="formRegister.password_confirmation"
                        :class="errors.password ? 'border-danger' : ''"
                      />
                      <span class="text-danger" v-if="errors.password"
                        >{{ errors.password[0] }}
                      </span>
                    </div>
                    <!-- End .form-group -->

                    <div class="form-footer">
                      <button type="submit" class="btn btn-outline-primary-2">
                        <span>SIGN UP</span>
                        <i class="icon-long-arrow-right"></i>
                      </button>

                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="register-policy"
                          required
                        />
                        <label
                          class="custom-control-label"
                          for="register-policy"
                          >I agree to the
                          <a href="#">privacy policy</a> *</label
                        >
                      </div>
                      <!-- End .custom-checkbox -->
                    </div>
                    <!-- End .form-footer -->
                  </form>
                  <div class="form-choice">
                    <p class="text-center">or sign in with</p>
                    <div class="row">
                      <div class="col-sm-6">
                        <a href="#" class="btn btn-login btn-g">
                          <i class="icon-google"></i>
                          Login With Google
                        </a>
                      </div>
                      <!-- End .col-6 -->
                      <div class="col-sm-6">
                        <a href="#" class="btn btn-login btn-f">
                          <i class="icon-facebook-f"></i>
                          Login With Facebook
                        </a>
                      </div>
                      <!-- End .col-6 -->
                    </div>
                    <!-- End .row -->
                  </div>
                  <!-- End .form-choice -->
                </div>
                <!-- .End .tab-pane -->
              </div>
              <!-- End .tab-content -->
            </div>
            <!-- End .form-tab -->
          </div>
          <!-- End .form-box -->
        </div>
        <!-- End .modal-body -->
      </div>
      <!-- End .modal-content -->
    </div>
    <!-- End .modal-dialog -->
  </div>
  <!-- End .modal -->
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false,
      },
      formRegister: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },
  computed: {
    ...mapState("authStoreIndex", ["user"]),
  },
  methods: {
    ...mapMutations("authStoreIndex", ["changeState"]),
    async doLogin() {
      try {
        if (this.validate()) {
          let res = await axios.post("/login", this.form,{
              headers : {
                  Authorization : window.Laravel.csrfToken
              }
          });
          if (res.status == 200 || res.status == 302) {
            this.changeState({ user: res.data.user });
            this.$awn.success(`Welcome ${res.data.user.name}.${res.data.message}`);
            // $(document).ready(function (){
                $('#signin-modal').hide();
            // });
            this.form.email = "";
            this.form.password = "";
          }
        }
      } catch (error) {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
        this.$awn.warning(error.response.data.message);
      }
    },
    validate() {
      if (this.form.email.trim().length < 1) {
        this.errors.email = ["Email is required"];
        this.$awn.warning("Email is required");
        return false;
      }
      if (this.form.password.trim().length < 1) {
        this.errors.password = ["Password is required"];
        this.$awn.warning("Password is required");
        return false;
      }
      if (this.form.password.trim().length < 6) {
        this.errors.password = ["Password feild must be minumum 6 character"];
        this.$awn.warning("Password feild must be minumum 6 character");
        return false;
      }
      this.errors = { email: [], password: [] };
      return true;
    },
    async doRegister() {
      try {
        if (this.formRegister.name.trim().length < 1) {
          this.errors.name = ["Name is required"];
          this.$awn.warning("Name is required");
          return;
        }
        if (this.formRegister.email.trim().length < 1) {
          this.errors.email = ["Email is required"];
          this.$awn.warning("Email is required");
          return;
        }
        if (this.formRegister.password.trim().length < 1) {
          this.errors.password = ["Password is required"];
          this.$awn.warning("Password is required");
          return;
        }
        if (this.formRegister.password.trim().length < 6) {
          this.errors.password = ["Password feild must be minumum 6 character"];
          this.$awn.warning("Password feild must be minumum 6 character");
          return;
        }
        if (
          this.formRegister.password.trim() !=
          this.formRegister.password_confirmation.trim()
        ) {
          this.errors.password = ["The password confirmation does not match. "];
          this.$awn.warning("The password confirmation does not match.");
          return;
        }
        let res = await axios.post("/register", this.formRegister);
        if (res.status == 201 || res.status == 302) {
          this.$awn.success(
            `Welcome ${this.formRegister.name}. registration success. PLease Login Now`
          );
          this.changeState({ user: res.data.user });
           $('#signin-modal').hide()
          this.formRegister.name = "";
          this.formRegister.email = "";
          this.formRegister.password = "";
          this.formRegister.password_confirmation = "";
          this.errors = {};
        }
      } catch (error) {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
        this.$awn.warning(error.response.data.message);
      }
    },
  },
};
</script>
<style >
 /* .modal-backdrop.show {
     opacity: 0;
 } */
</style>
