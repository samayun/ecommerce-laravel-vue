<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-light-primary elevation-4">
      <!-- Brand Logo -->
      <router-link to="/admin" class="brand-link" exact-active-class="bg-primary">
        <img src="/img/logo.png" alt="SITE LOGO" class="brand-image img-circle elevation-3"
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

            <li class="nav-item" v-if="isPermitted('view','category')">
              <router-link to="/admin/categories" class="nav-link"  exact-active-class="active">
                <i class="nav-icon fas fa-th"></i>
                <p>
                  {{ $t('sidebar.category')}}
                  <span class="right badge badge-danger">+</span>
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/brands" class="nav-link"  exact-active-class="active">
                <i class="nav-icon fas fa-tag"></i>
                <p>
                  {{ $t('sidebar.brand')}}
                  <span class="right badge badge-danger">+</span>
                </p>
              </router-link>
            </li>
             <li class="nav-item">
              <router-link to="/admin/products" class="nav-link"  exact-active-class="active">
                <i class="nav-icon fa fa-cog"></i>
                <p> {{ $t('sidebar.product')}} <span class="right badge badge-danger">+</span>
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/settings" class="nav-link"  exact-active-class="active">
                <i class="nav-icon fa fa-cog"></i>
                <p>
                  Settings
                  <span class="right badge badge-danger">+</span>
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="doLogOut">
                <i class="nav-icon fa fa-cloud"></i>
                <p>
                  {{ $t('sidebar.logout')}}
                  <span class="right badge badge-danger">-</span>
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
