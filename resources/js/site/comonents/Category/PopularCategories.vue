<template>
  <span>
    <div class="container">
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
            480: { items: 2 },
            768: { items: 3 },
            992: { items: 4, nav: false },
            1280: { items: 6, nav: false },
          }"
        >
          <!-- <div > -->
            <router-link :to="'/category/' + category.slug" v-for="category in categories" :key="category.id">
              <img
                class="owl-lazy"
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
    <!-- End .container -->
    <div class="mb-2"></div>
    <!-- End .mb-2 -->
  </span>
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
