<template>
<div class="container">
    <h2 class="title title-border mb-5">{{ $t('ShopByBrands') }}</h2>
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
            1280: { items: 6, nav: false, dots: true }
          }"
        >

            <router-link
            v-for="brand in brands"
            :key="brand.id" :to="`/brand/${brand.slug}`" class="brand">

                <img
                    class="owl-lazy img-circle"
                    style="height:130px;"
                    :data-src="brand.logo"
                    :src="brand.logo"
                    data-src-retina="/storage/products/default.png"
                   :alt="brand.name"  >
            </router-link>

        </carousel>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    name : "ShopByBrands",
    computed:{
        ...mapState("brandsStoreIndex",["brands"])
    },
    methods:{
        ...mapActions("brandsStoreIndex",["getBrands"])
    },
    created(){
        if (this.brands.length < 1) {
            this.getBrands()
        }
    }
}
</script>
<style lang="css">
 .owl-carousel.owl-loaded {
  display: flex;
}
</style>
