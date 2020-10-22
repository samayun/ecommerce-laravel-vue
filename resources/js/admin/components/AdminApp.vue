<template>
<div>
  <div class="wrapper" v-if="authUser">
    <!-- <admin-navbar></admin-navbar> -->

    <admin-sidebar :user="authUser" />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
              <transition name="fade">
                <router-view></router-view>
              </transition>
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <admin-footer />
  </div> 
    <!-- ./wrapper -->
    <div v-else>
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import AdminFooter from "./AdminFooter";
import AdminSidebar from "./AdminSidebar";
import { mapGetters , mapState , mapActions } from 'vuex'

export default {
    components : { AdminFooter , AdminSidebar },
    props: ['user'],
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters({
        authUser : 'getAuthUserData'
      })
    },
    methods: {
      ...mapActions([
          'updateUser'])
    },
    created() {
        // if (this.user) {
        //   this.$store.dispatch('updateUser' , this.user)
        // }

         if (!this.authUser) {
           let authUserDT = localStorage.getItem('adminAuthUser' ) ? JSON.parse(localStorage.getItem('adminAuthUser' )) : false
            this.updateUser(authUserDT);
            this.$gate = Object.assign({},{
              user : authUserDT
            })
         }else{
           this.$router.push({name : 'AdminLogin'});
         }

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
