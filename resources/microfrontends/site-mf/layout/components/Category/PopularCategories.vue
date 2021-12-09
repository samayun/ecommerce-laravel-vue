<template>
    <div class="container mb-2">
      <h2 class="title text-center mb-2">
        {{ $t("explorePopularCategories") }}
      </h2>
      <!-- End .title -->

      <div class="cat-blocks-container">
        <!-- <div class="row"> -->
        <carousel
          :autoplay="true"
          :nav="false"
          :items="6"
          :lazyLoad="true"
          :lazyLoadEager="3"
          :loop="true"
          :margin="10"
          :dots="true"
          class="d-flex"
          :responsive="{
            0: { items: 2 },
            420: { items: 3 },
            600: { items: 4 },
            900: { items: 5, nav: false },
            1024: { items: 6, nav: false },
          }"
        >
          <!-- <div > -->
            <router-link :to="'/category/' + category.slug" v-for="category in categories" :key="category.id">
              <img
                class="owl-lazy img-thumbnail img-circle"
                style="height:130px;"
                :data-src="category.icon"
                :src="category.icon"
                data-src-retina="/storage/products/default.png"
                :alt="category.name"
              />

              <h3 class="cat-block-title">{{ category.name }}</h3>
            </router-link>
          <!-- </div> -->
        </carousel>
        <!-- </div> -->
        <!-- End .row -->
      </div>
      <!-- End .cat-blocks-container -->
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "PopularCategories",
  computed: {
    ...mapState("categoriesStoreIndex", ["categories"]),
  },
  methods: {
    ...mapActions("categoriesStoreIndex", ["getCategories"]),
  },
  created() {
    if (this.categories.length < 1) {
      this.getCategories();
    }
  },
};
</script>
<style lang="css">
 .owl-carousel.owl-loaded {
	display: flex;
}
</style>
