<template>
<div class="container" >
    <div class="heading heading-flex heading-border mb-3">
        <div class="heading-left">
            <h2 class="title">{{ category.name }}  <span> ( {{ category.products_count }} ) </span> </h2>
        </div>

       <div class="heading-right">
            <ul class="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" :id="category.slug+'-new-link'" data-toggle="tab"
                    :href="'#'+category.slug+'-new-tab'" role="tab" :aria-controls="category.slug+'-new-tab'" aria-selected="true">New</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " :id="category.slug+'-featured-link'" data-toggle="tab" :href="'#'+category.slug+'-featured-tab'" role="tab" :aria-controls="category.slug+'-featured-tab'" aria-selected="false">Featured</a>
                </li>
            </ul>
       </div><!-- End .heading-right -->
    </div><!-- End .heading -->

    <div class="tab-content tab-content-carousel">
        <div class="tab-pane p-0 fade show active" :id="category.slug+'-new-tab'" role="tabpanel" :aria-labelledby="category.slug+'-new-link'">
            <carousel
                :autoplay="true"
                :nav="false"
                :items="6"

                :loop="true"
                :margin="10"
                :dots="true"
                class="d-flex"
                :responsive="{
                    0: { items: 2 },
                    420: { items: 3 },
                    600: { items: 4 },
                    900: { items: 5, nav: false },
                    1024: { items: 6, nav: true },
                }"
                >
                 <CardProduct v-for="product in category.products" :key="product.id" :product="product" />
            </carousel>
        </div><!-- .End .tab-pane -->
        <div class="tab-pane p-0 fade " :id="category.slug+'-featured-tab'" role="tabpanel" :aria-labelledby="category.slug+'-featured-link'">
            <carousel
                :autoplay="true"
                :nav="false"
                :items="4"
                :lazyLoad="true"
                :lazyLoadEager="3"
                :loop="false"
                :margin="10"
                :dots="true"
                class="d-flex"
                :responsive="{
                    0: { items: 2 },
                    420: { items: 3 },
                    600: { items: 4 },
                    900: { items: 5, nav: false },
                    1024: { items: 6, nav: false },
                }"
                >
                 <CardProduct v-for="product in category.products" :key="product.id"
                    :product="product" v-show="product.featured == 1" />
            </carousel>
        </div><!-- .End .tab-pane -->
    </div><!-- End .tab-content -->

</div>

</template>
<script>
import { mapState } from 'vuex';

export default {
    props: ["category"],
    components:{
        CardProduct : () => import( /* webpackChunkName: "Chunks/Site/Components/CardProduct" */ './CardProduct')
    },

}
</script>
<style lang="css">
 .owl-carousel.owl-loaded {
    display: flex;
}
</style>
