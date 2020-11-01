<template>
<div>
  <div class="wrapper" v-if="getAuthUserData">
    <admin-navbar></admin-navbar>

    <admin-sidebar v-if="getAuthUserData" :user="getAuthUserData" />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

      <!-- Main content -->
      <!-- <div class="content"> -->
        <div class="container-fluid">
              <transition name="fade">
                <router-view></router-view>
              </transition>
        </div><!-- /.container-fluid -->
      <!-- </div> -->
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <admin-footer />
  </div>
  <div v-else> <router-view></router-view> </div>
</div>
</template>

<script>
import AdminFooter from "./AdminFooter";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import { mapGetters , mapState , mapActions } from 'vuex'

export default {
    components : { AdminFooter , AdminSidebar , AdminNavbar },
    props: ['user'],
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters(['getAuthUserData'])
    },
    methods: {
      ...mapActions([
          'updateUser'])
    },
    created() {
        if (this.user) {
          this.$store.dispatch('updateUser' , this.user)
        }else {
           this.$router.push({name : 'AdminLogin'});
        }

        //  if (!this.authUser) {
          //  let authUserDT = localStorage.getItem('adminAuthUser' ) ? JSON.parse(localStorage.getItem('adminAuthUser' )) : false
            // this.updateUser(authUserDT);
            // this.$gate = Object.assign({},{
            //   user : authUserDT
            // })
        //  }else{

        //  }

        //  let authUserDT = localStorage.getItem('adminAuthUser' ) ? JSON.parse(localStorage.getItem('adminAuthUser' )) : false
        //  let isAuthenticated = authUserDT && authUserDT.id && authUserDT.email ? true : false
        //  if (!isAuthenticated) {
        //     this.updateUser(this.getAuthUserData)
        //  }
        // if (!this.getAuthUserData) {
        //   this.$router.push({name : 'AdminLogin'});
        // }

    }
}
</script>
