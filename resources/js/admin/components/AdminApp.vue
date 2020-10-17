<template>
  <div class="wrapper" v-if="authUser">
    <!-- <admin-navbar></admin-navbar> -->

    <admin-sidebar :user="user" />

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
    <admin-footer />
  </div> 
  <div v-else> <router-view></router-view> </div>
    <!-- ./wrapper -->
</template>

<script>
import AdminFooter from "./AdminFooter";
import AdminSidebar from "./AdminSidebar";
import { mapGetters , mapState , mapActions } from 'vuex'

export default {
    props: ['user'],
    components : { AdminFooter , AdminSidebar},
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
        if (this.user) {
          this.$store.dispatch('updateUser' , this.user)
        }
        if (!this.authUser) {
          this.$router.push({name : 'AdminLogin'});
        }

    }
}
</script>
