<template>
<div class="container">
    <div class="row">

        <MultipleFilter />
        <div class="col-9">
            <PopularCategories/>
            <ShopByBrands/>
            <ProductsHome />
        </div>
    </div>

     <CategoriesProducts
            v-for="category in categories"
            :key="category.id"
            :category="category"
    />

</div>

</template>
<script>
import { mapState } from 'vuex';

export default {
    components: {
        PopularCategories: () => import(/* webpackChunkName: "Chunks/Site/Components/PopularCategories" */ '../comonents/Category/PopularCategories'),
        CategoriesProducts: () => import(/* webpackChunkName: "Chunks/Site/Components/CategoriesProducts" */ '../comonents/Category/CategoriesProducts'),
        ProductsHome : () => import( /* webpackChunkName: "Chunks/Site/Components/HomeProducts"*/'../comonents/Product/Products.vue'),
        ShopByBrands: () => import(   /* webpackChunkName: "Chunks/Site/Components/ShopByBrands" */ '../comonents/Brand/ShopByBrands')
    },
    computed:{
      ...mapState("categoriesStoreIndex",["categories"])
    }
}
</script>
