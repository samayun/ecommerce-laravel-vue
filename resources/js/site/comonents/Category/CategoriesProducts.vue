<template>
<div class="container" >
    <div class="heading heading-flex heading-border mb-3">
        <div class="heading-left">
            <h2 class="title">{{ category.name }}</h2><!-- End .title -->
        </div><!-- End .heading-left -->

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
            <!-- {{-- owl-carousel owl-full carousel-equal-height carousel-with-shadow owl-loaded owl-drag --}} -->
            <!-- {{-- owl-carousel owl-simple carousel-equal-height carousel-with-shadow --}} -->
            <div class="owl-carousel owl-full carousel-equal-height carousel-with-shadow owl-loaded owl-drag" data-toggle="owl"
                data-owl-options='{
                    "nav": false,
                    "dots": true,
                    "margin": 20,
                    "loop": true,
                    "responsive": {
                        "0": {
                            "items":2
                        },
                        "480": {
                            "items":2
                        },
                        "768": {
                            "items":3
                        },
                        "992": {
                            "items":4
                        },
                        "1280": {
                            "items":5,
                            "nav": true
                        }
                    }
                }'>

             <div class="row">
                <!-- <span > -->
                 <CardProduct v-for="product in category.products" :key="product.id"
                    :product="product" />
                    <!-- </span> -->
             </div>

            </div><!-- End .owl-carousel -->
        </div><!-- .End .tab-pane -->
        <div class="tab-pane p-0 fade " :id="category.slug+'-featured-tab'" role="tabpanel" :aria-labelledby="category.slug+'-featured-link'">
            <div class="owl-carousel owl-full carousel-equal-height carousel-with-shadow owl-loaded owl-drag" data-toggle="owl"
                data-owl-options='{
                    "nav": false,
                    "dots": true,
                    "margin": 20,
                    "loop": false,
                    "responsive": {
                        "0": {
                            "items":2
                        },
                        "480": {
                            "items":2
                        },
                        "768": {
                            "items":3
                        },
                        "992": {
                            "items":4
                        },
                        "1280": {
                            "items":5,
                            "nav": true
                        }
                    }
                }'>
              <div class="row">
                  <CardProduct
                    v-for="product in category.products" :key="product.id"
                    :product="product"
              />
              </div>
            </div><!-- End .owl-carousel -->
        </div><!-- .End .tab-pane -->
    </div><!-- End .tab-content -->

</div>

</template>
<script>
import { mapState } from 'vuex';
import CardProduct from './CardProduct';
export default {
    props: ["category"],
    components:{
        CardProduct,
    },

}
</script>
