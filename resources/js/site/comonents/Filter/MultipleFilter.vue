<template>
  <aside class="col-lg-3 order-lg-first">
        <div class="sidebar sidebar-shop">
            <div class="widget widget-clean">
                <label>Filters:</label>
                <a href="#" class="sidebar-filter-clear" @click="$store.state.multipleFilteringStoreIndex.selected = {
                    categories: [],
                    brands: [],
                    sizes: [],
                    prices: 0
                }">Clean All</a>
            </div>
            <div class="widget widget-collapsible" v-show="!$route.path.includes('/category/')">
                <h3 class="widget-title">
                    <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                        Category
                    </a>
                </h3><!-- End .widget-title -->

                <div class="collapse show" id="widget-1">
                    <div class="widget-body">
                        <div class="filter-items filter-items-count">
                            <div class="filter-item"
                                v-for="category in categories"
                                :key="category.id">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" :id="`cat-${category.id}`"  v-model="selected.categories"  :value="category.id">
                                    <label class="custom-control-label" :for="`cat-${category.id}`"> {{ category.name }} </label>
                                     <span class="badge badge-success float-right"> {{ category.products_count }} </span>
                                </div><!-- End .custom-checkbox -->

                            </div><!-- End .filter-item -->

                        </div><!-- End .filter-items -->
                    </div><!-- End .widget-body -->
                </div><!-- End .collapse -->
            </div><!-- End .widget -->

            <div class="widget widget-collapsible">
                <h3 class="widget-title">
                    <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
                        Size
                    </a>
                </h3><!-- End .widget-title -->

                <div class="collapse show" id="widget-2">
                    <div class="widget-body">
                        <div class="filter-items">

                            <div class="filter-item"
                                v-for="size in attributes.sizes"
                                :key="size.id"
                            >
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" :id="`size-${size.id}`" :value="size.slug" v-model="selected.sizes">
                                    <label class="custom-control-label" :for="`size-${size.id}`"> {{ size.name }} </label>
                                    <span class="float-right badge badge-warning"> {{ size.products_count }} </span>
                                </div>
                            </div><!-- End .filter-item -->

                        </div><!-- End .filter-items -->
                    </div><!-- End .widget-body -->
                </div><!-- End .collapse -->
            </div><!-- End .widget -->

            <div class="widget widget-collapsible">
                <h3 class="widget-title">
                    <a data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
                        Colour
                    </a>

                </h3><!-- End .widget-title -->

                <div class="collapse show" id="widget-3">
                    <div class="widget-body">
                        <div class="filter-colors">

                            <a
                             v-for="colour in attributes.colours"
                                :key="colour.id"

                             href="#" :style="`background: ${colour.slug};`"><span class="sr-only">
                                 {{ colour.name }}
                                 </span>
                                 </a>
                            <!-- <a href="#" class="selected" style="background: #cc3333;"><span class="sr-only">Color Name</span></a> -->
                        </div><!-- End .filter-colors -->
                    </div><!-- End .widget-body -->
                </div><!-- End .collapse -->
            </div><!-- End .widget -->

            <div class="widget widget-collapsible" v-show="!$route.path.includes('/brand/')" >
                <h3 class="widget-title">
                    <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                        Brand
                    </a>
                </h3><!-- End .widget-title -->

                <div class="collapse show" id="widget-4">
                    <div class="widget-body">
                        <div class="filter-items">

                            <div class="filter-item"
                              v-for="brand in brands"
                                :key="brand.id"
                            >
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" :id="`brand-${brand.id}`" :value="brand.id" v-model="selected.brands">
                                    <label class="custom-control-label" :for="`brand-${brand.id}`" > {{ brand.name }} </label>
                                    <span class="float-right badge badge-info"> {{ brand.products_count }} </span>
                                </div><!-- End .custom-checkbox -->
                            </div><!-- End .filter-item -->

                        </div><!-- End .filter-items -->
                    </div><!-- End .widget-body -->
                </div><!-- End .collapse -->
            </div><!-- End .widget -->

            <div class="widget widget-collapsible">
                <h3 class="widget-title">
                    <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                        Price
                    </a>
                </h3><!-- End .widget-title -->

                <div class="collapse show" id="widget-5">
                    <div class="widget-body">
                        <div class="filter-price">
                            <div class="filter-price-text">
                                Price Range:
                                <span id="filter-price-range">$0 - $${{  selected.prices?  selected.prices: 0 }}</span>
                            </div><!-- End .filter-price-text -->

                            <!-- <div id="price-slider" class="noUi-target noUi-ltr noUi-horizontal"><div class="noUi-base"><div class="noUi-connects"><div class="noUi-connect" style="transform: translate(0%) scale(0.75, 1);"></div></div><div class="noUi-origin" style="transform: translate(-100%); z-index: 5;"><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="550.0" aria-valuenow="0.0" aria-valuetext="$0"><div class="noUi-touch-area"></div><div class="noUi-tooltip">$0</div></div></div><div class="noUi-origin" style="transform: translate(-25%); z-index: 4;"><div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="200.0" aria-valuemax="1000.0" aria-valuenow="750.0" aria-valuetext="$750"><div class="noUi-touch-area"></div><div class="noUi-tooltip">$750</div></div></div></div></div> -->
                            <input type="range" min="0" max="750" v-model="selected.prices"/>

                        </div><!-- End .filter-price -->
                    </div><!-- End .widget-body -->
                </div><!-- End .collapse -->
            </div><!-- End .widget -->
        </div><!-- End .sidebar sidebar-shop -->
    </aside><!-- End .col-lg-3 -->
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: "MultipleFilter",
    computed:{
        ...mapState("brandsStoreIndex",["brands"]),
        ...mapState("categoriesStoreIndex",["categories"]),
        ...mapState("attributesStoreIndex",["attributes"]),
        ...mapState("multipleFilteringStoreIndex",["selected"])
    },
    methods: {
      ...mapActions("brandsStoreIndex",["getBrands"]),
      ...mapActions("attributesStoreIndex",["getAttributes"]),
      ...mapActions("categoriesStoreIndex",["getCategories"]),
       ...mapActions("multipleFilteringStoreIndex",["getFilteredData"]),
      fetchData(){
         if (this.brands.length < 1) {
            this.getBrands()
        }
        if (this.categories.length < 1) {
            this.getCategories()
        }
         if (Object.keys(this.attributes).length < 1) {
            this.getAttributes()
        }
      }
    },
    created(){
        this.fetchData();
    },
    // mounted(){
    //     this.fetchData();
    // },
    watch:{
        "selected.categories" : function(e){
            this.getFilteredData();
        },
        "selected.brands" : function(e){
             this.getFilteredData();
        },
         "selected.sizes" : function(e){
             this.getFilteredData();
        },
         "selected.prices" : function(e){
             this.getFilteredData();
        },
    }
}
</script>
