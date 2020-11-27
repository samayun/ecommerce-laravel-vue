<template>
  <div>
    <div
      class="page-header text-center"
      v-if="category.category"
      :style="'background-image: url(' + category.category.icon + ')'"
    >
      <div class="container">
        <h1 class="page-title">
          {{ category.name }}
          <span> {{ category.slug }} </span>
        </h1>
      </div>
      <!-- End .container -->
    </div>
    <!-- End .page-header -->
    <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
      <div class="container">
        <ol class="breadcrumb">
          "
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/categories"> Category </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ category.slug }}
          </li>
        </ol>
      </div>
      <!-- End .container -->
    </nav>
    <!-- End .breadcrumb-nav -->

    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="toolbox">
              <div class="toolbox-left">
                <div class="toolbox-info">
                  Showing
                  <span>
                    {{ category.products_count }} of
                    {{ category.products_count }}</span
                  >
                  Products
                </div>
                <!-- End .toolbox-info -->
              </div>
              <!-- End .toolbox-left -->

              <div class="toolbox-right">
                <div class="toolbox-sort">
                  <label for="sortby">Sort by:</label>
                  <div class="Select-custom">
                    <select v-model="filter.category" class="form-control">
                      <option disabled value="" selected>
                        Please Select one
                      </option>
                      <option value="low_high"> Low To High Prices </option>
                      <option value="high_low"> High To Low prices </option>
                    </select>
                  </div>
                </div>
                <!-- End .toolbox-sort -->
                <div class="toolbox-layout">
                  <a
                    @click="SET_LAYOUT('list')"
                    class="btn-layout"
                    :class="layout_type == 'list' ? 'active' : ''"
                  >
                    <svg width="16" height="10">
                      <rect x="0" y="0" width="4" height="4"></rect>
                      <rect x="6" y="0" width="10" height="4"></rect>
                      <rect x="0" y="6" width="4" height="4"></rect>
                      <rect x="6" y="6" width="10" height="4"></rect>
                    </svg>
                  </a>

                  <a
                    @click="SET_LAYOUT('two')"
                    class="btn-layout"
                    :class="layout_type == 'two' ? 'active' : ''"
                  >
                    <svg width="10" height="10">
                      <rect x="0" y="0" width="4" height="4"></rect>
                      <rect x="6" y="0" width="4" height="4"></rect>
                      <rect x="0" y="6" width="4" height="4"></rect>
                      <rect x="6" y="6" width="4" height="4"></rect>
                    </svg>
                  </a>

                  <a
                    class="btn-layout"
                    @click="SET_LAYOUT('three')"
                    :class="layout_type == 'three' ? 'active' : ''"
                  >
                    <svg width="16" height="10">
                      <rect x="0" y="0" width="4" height="4"></rect>
                      <rect x="6" y="0" width="4" height="4"></rect>
                      <rect x="12" y="0" width="4" height="4"></rect>
                      <rect x="0" y="6" width="4" height="4"></rect>
                      <rect x="6" y="6" width="4" height="4"></rect>
                      <rect x="12" y="6" width="4" height="4"></rect>
                    </svg>
                  </a>

                  <a
                    @click="SET_LAYOUT('four')"
                    class="btn-layout"
                    :class="layout_type == 'four' ? 'active' : ''"
                  >
                    <svg width="22" height="10">
                      <rect x="0" y="0" width="4" height="4"></rect>
                      <rect x="6" y="0" width="4" height="4"></rect>
                      <rect x="12" y="0" width="4" height="4"></rect>
                      <rect x="18" y="0" width="4" height="4"></rect>
                      <rect x="0" y="6" width="4" height="4"></rect>
                      <rect x="6" y="6" width="4" height="4"></rect>
                      <rect x="12" y="6" width="4" height="4"></rect>
                      <rect x="18" y="6" width="4" height="4"></rect>
                    </svg>
                  </a>
                </div>
                <!-- End .toolbox-layout -->
              </div>
              <!-- End .toolbox-right -->
            </div>
            <!-- End .toolbox -->

            <div class="products mb-3">
              <div class="row justify-content-center">
                <Product
                  v-for="pro in category.products"
                  :key="pro.id"
                  :product="pro"
                />
              </div>
              <!-- End .row -->
            </div>
            <!-- End .products -->

            <nav aria-label="Page navigation">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a
                    class="page-link page-link-prev"
                    href="#"
                    aria-label="Previous"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <span aria-hidden="true"
                      ><i class="icon-long-arrow-left"></i></span
                    >Prev
                  </a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item-total">of 6</li>
                <li class="page-item">
                  <a
                    class="page-link page-link-next"
                    href="#"
                    aria-label="Next"
                  >
                    Next
                    <span aria-hidden="true"
                      ><i class="icon-long-arrow-right"></i
                    ></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- End .col-lg-9 -->
          <MultipleFilter />
        </div>
        <!-- End .row -->
      </div>
      <!-- End .container -->
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Product from "../components/Product";
export default {
 name: 'Products',
  components: {
    Product,
  },
  computed: {
    ...mapActions("productsStoreIndex",["getProduct"]),
    ...mapState("categoriesStoreIndex", ["category", "filter"]),
    ...mapState("settingsStoreIndex", ["layout_type"]),
  },
  methods: {
    ...mapMutations("settingsStoreIndex", ["SET_LAYOUT"]),
    ...mapActions("categoriesStoreIndex", ["getCategoryBySlug"]),
  },
  created() {
    let slug = this.$route.params.slug;
    if (this.category.slug != slug) {
      this.getCategoryBySlug(slug);
    }

    let _this = this;
    $Bus.$on("404", function () {
      alert("404 Not Found");
    });
  },
  watch: {
    "$route.params.slug": "getCategoryBySlug",
    "filter.category": function (e) {
      this.getCategoryBySlug(this.$route.params.slug);
    },
  },
};
</script>

<script>
import { mapActions } from 'vuex'
export default {
 computed:{

 }
}
</script>
