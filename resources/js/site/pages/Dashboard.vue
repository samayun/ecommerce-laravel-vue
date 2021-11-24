<template>
    <div class="container">
        <div class="row">
            <MultipleFilter />
            <div class="col-9">
                <PopularCategories />
                <ShopByBrands />
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
import { mapState } from "vuex";

export default {
    components: {
        PopularCategories: () =>
            import(
                /* webpackChunkName: "Chunks/Site/Components/PopularCategories" */ "../components/Category/PopularCategories.vue"
            ),
        CategoriesProducts: () =>
            import(
                /* webpackChunkName: "Chunks/Site/Components/CategoriesProducts" */ "../components/Category/CategoriesProducts"
            ),
        ProductsHome: () =>
            import(
                /* webpackChunkName: "Chunks/Site/Components/HomeProducts"*/ "../components/Product/Products.vue"
            ),
        ShopByBrands: () =>
            import(
                /* webpackChunkName: "Chunks/Site/Components/ShopByBrands" */ "../components/Brand/ShopByBrands"
            )
    },
    computed: {
        ...mapState("categoriesStoreIndex", ["categories"])
    }
};
</script>
