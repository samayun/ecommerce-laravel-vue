<template>
<span>
  <div class="container">
    <h2 class="title text-center mb-2"> {{ $t('explorePopularCategories')}} </h2><!-- End .title -->

    <div class="cat-blocks-container">
        <div class="row">
            <div class="col-6 col-sm-4 col-lg-2" v-for="category in categories" :key="category.id">
                <router-link :to="'/category/'+category.slug" class="cat-block">
                    <figure>
                        <span>
                            <img :src="category.icon" :alt="category.name">
                        </span>
                    </figure>

                    <h3 class="cat-block-title"> {{category.name }} </h3><!-- End .cat-block-title -->
                </router-link>
            </div>

        </div><!-- End .row -->
    </div><!-- End .cat-blocks-container -->
</div><!-- End .container -->
<div class="mb-2"></div><!-- End .mb-2 -->
</span>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
     name : "PopularCategories",
    computed:{
        ...mapState("categoriesStoreIndex",["categories"])
    },
    methods:{
        ...mapActions("categoriesStoreIndex",["getCategories"])
    },
    created(){
        if (this.categories.length < 1) {
            this.getCategories()
        }
    }
}
</script>
