<template>
<div class="col-lg-9">
    <div class="toolbox">
        <div class="toolbox-left">
            <div class="toolbox-info">
                Showing <span> {{ products_count }}  of {{ products_count }}</span> Products
            </div><!-- End .toolbox-info -->
        </div><!-- End .toolbox-left -->

        <div class="toolbox-right">
            <div class="toolbox-sort">
                <label for="sortby">Sort by:</label>
                <div class="Select-custom" >
                   <Select v-model="filter.brand" v-if="$route.path.includes('/brand/')" >
                        <Option disabled value="" selected> Brand Sorting: Please Select one </Option>
                        <Option value="low_high" > Low To High Prices </Option>
                        <Option value="high_low" > High To Low prices </Option>
                    </Select>

                    <Select v-model="filter.category" @change="SelectFilter('category')"  v-if="$route.path.includes('/category/')" >
                        <Option disabled value="" selected> category Sorting: Please Select one </Option>
                        <Option value="low_high" > Low To High Prices </Option>
                        <Option value="high_low" > High To Low prices </Option>
                    </Select>
                </div>
            </div><!-- End .toolbox-sort -->
            <div class="toolbox-layout">
                <a @click="SET_LAYOUT('list')" class="btn-layout " :class="layout_type=='list' ? 'active' : ''" >
                    <svg width="16" height="10">
                        <rect x="0" y="0" width="4" height="4"></rect>
                        <rect x="6" y="0" width="10" height="4"></rect>
                        <rect x="0" y="6" width="4" height="4"></rect>
                        <rect x="6" y="6" width="10" height="4"></rect>
                    </svg>
                </a>

                <a @click="SET_LAYOUT('two')" class="btn-layout" :class="layout_type=='two' ?  'active': ''">
                    <svg width="10" height="10">
                        <rect x="0" y="0" width="4" height="4"></rect>
                        <rect x="6" y="0" width="4" height="4"></rect>
                        <rect x="0" y="6" width="4" height="4"></rect>
                        <rect x="6" y="6" width="4" height="4"></rect>
                    </svg>
                </a>

                <a  class="btn-layout" @click="SET_LAYOUT('three')"  :class="layout_type=='three' ? 'active' : ''">
                    <svg width="16" height="10" >
                        <rect x="0" y="0" width="4" height="4"></rect>
                        <rect x="6" y="0" width="4" height="4"></rect>
                        <rect x="12" y="0" width="4" height="4"></rect>
                        <rect x="0" y="6" width="4" height="4"></rect>
                        <rect x="6" y="6" width="4" height="4"></rect>
                        <rect x="12" y="6" width="4" height="4"></rect>
                    </svg>
                </a>

                <a @click="SET_LAYOUT('four')" class="btn-layout " :class="layout_type=='four' ? 'active' : '' ">
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
            </div><!-- End .toolbox-layout -->
        </div><!-- End .toolbox-right -->
    </div><!-- End .toolbox -->

    <slot ></slot>

</div><!-- End .col-lg-9 -->
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
    props: {
        products_count: String|Number,

    },

    computed:{
        ...mapState("brandsStoreIndex",["brand"]),
        ...mapState("settingsStoreIndex",["layout_type"]),
        ...mapState("multipleFilteringStoreIndex",["filter"]),
    },
    methods: {
      ...mapActions("brandsStoreIndex",["getBrand"]),
      ...mapMutations("settingsStoreIndex",["SET_LAYOUT"]),
      ...mapMutations("multipleFilteringStoreIndex",["select"])
    },
    created(){
         let slug = this.$route.params.slug;
        if (this.brand.slug != slug) {
            this.getBrand(slug);
        }
    },
    watch:{
        "filter.brand": function (e) {
            this.getBrand(this.$route.params.slug);
        },
    }
}
</script>
