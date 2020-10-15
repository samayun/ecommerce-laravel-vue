<template>
  <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white border-bottom ">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="/home" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>

      <!-- SEARCH FORM -->
      <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
          <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-navbar" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>

      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
             
          </li>
      </ul>
    </nav>
    <!-- /.navbar -->

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
              <router-link to="/tags" class="nav-link">
                <i class="nav-icon fas fa-tags"></i>
                <p>
                  Tags
                  <span class="right badge badge-danger">+</span>
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/categories" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>
                  Category
                  <span class="right badge badge-danger">+</span>
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <a  class="nav-link" @click.prevent="doLogout" >
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

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
              <router-view></router-view>
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->


    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="float-right d-none d-sm-inline">
        THEMify
      </div>
      <!-- Default to the left -->
      <strong>Copyright &copy; 2020-2021 <a href="https://adminlte.io">themify.io</a>.</strong> All rights reserved.
    </footer>
  </div> 
    <!-- ./wrapper -->
</template>

<script>

    export default {
        props: ['user'],
        methods:{
            doLogout(){
                // SET_USER_NULL
                // localStorage.removeItem()
                // redirect 
                this.$router.push('/login/admin')
            }
        },
        created() {
            if (!this.user) {
                this.$router.push('/login/admin')
            }
        }
    }
</script>
