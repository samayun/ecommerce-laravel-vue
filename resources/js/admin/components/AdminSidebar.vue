<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-light-primary elevation-4">
      <!-- Brand Logo -->
      <router-link to="/admin" class="brand-link">
        <img src="/img/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            style="opacity: .8">
        <span class="brand-text font-weight-light"> ECOmmerce </span>
      </router-link>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex" v-if="user">
          <div class="image">
            <img src="/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block"> {{ user.name }} </a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->

            <li class="nav-item">
              <router-link to="/admin/categories" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>
                  Category
                  <span class="right badge badge-danger">+</span>
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/brands" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>
                  Brand
                  <span class="right badge badge-danger">+</span>
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="doLogOut">
                <i class="nav-icon fas fa-th"></i>
                <p>
                  LogOut
                  <span class="right badge badge-danger">+</span>
                </p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
</template>

<script>
import { mapGetters , mapState , mapActions } from 'vuex'

export default {
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters({
        error : 'getErrorData'
      })
    },
    props: ['user'],
    methods: {
      ...mapActions(['doLogOut'])
    },
    created(){
        if (this.error) {
            console.log(this.error)
            // this.$router.push({name : 'NotFound'});
        }
    }

}
</script>