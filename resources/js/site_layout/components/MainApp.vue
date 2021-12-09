<template>
  <div class="page-wrapper">
    <Header />
    <main class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: ["user"],
  components: {
    Header: () =>
      import(/* webpackChunkName: "Chunks/Site/Main-App-Header" */ "./Header"),
    Footer: () =>
      import(/* webpackChunkName: "Chunks/Site/Main-App-Footer" */ "./Footer"),
  },
  methods: {
    ...mapMutations("authStoreIndex", ["changeState"]),
  },
  created() {
    this.changeState({ user: this.user });
  },
};
</script>
