<template>
<div class="container">
    <div class="row">

    <!-- <HotDealProducts/> -->
    <!-- <CategoriesProducts
            v-for="category in categories"
            :key="category.id"
            :category="category"
    /> -->

        <MultipleFilter />
        <div class="col-9">
            <PopularCategories/>
            <ShopByBrands/>
        </div>
    </div>
</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    components: {
        PopularCategories: () => import(/* webpackChunkName: "Chunks/Site-PopularCategories" */ '../comonents/Category/PopularCategories'),
        CategoriesProducts: () => import(/* webpackChunkName: "Chunks/Site-CategoriesProducts" */ '../comonents/Category/CategoriesProducts'),
        HotDealProducts: () => import(/* webpackChunkName: "Chunks/Site-HotDealProducts" */ '../comonents/Category/HotDealProducts'),
         ShopByBrands: () => import(/* webpackChunkName: "Chunks/Site-ShopByBrands" */ '../comonents/Brand/ShopByBrands')
    },
    computed:{
      ...mapState("categoriesStoreIndex",["categories"])
    }
}
</script>
