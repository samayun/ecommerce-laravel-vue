<template>
<div class="container">
    <h2 class="title title-border mb-5">{{ $t('ShopByBrands') }}</h2><!-- End .title -->
    <!-- <div class="owl-carousel mb-5 owl-simple row" data-toggle="owl"
                    data-owl-options='{
                        "nav": false,
                        "dots": true,
                        "margin": 30,
                        "loop": false,
                        "responsive": {
                            "0": {
                                "items":2
                            },
                            "420": {
                                "items":3
                            },
                            "600": {
                                "items":4
                            },
                            "900": {
                                "items":5
                            },
                            "1024": {
                                "items":6
                            },
                            "1280": {
                                "items":6,
                                "nav": true,
                                "dots": false
                            }
                        }
                    }'> -->
        <div class="row">
         <div class="col-md-2"
            v-for="brand in brands"
            :key="brand.id">
            <router-link :to="`/brand/${brand.slug}`" class="brand">
                <img :src="brand.logo" :alt="brand.name" width="50" >
            </router-link>
        </div>
    </div>
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
