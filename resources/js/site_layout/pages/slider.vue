<template>
<div class="intro-slider-container">
    <carousel 
       nav="false"
       :lazyLoad="true"
       :responsive='{
            992 : {
                nav : true
            }
        }'>
        <div class="intro-slide"
          v-for="slider in sliders"
          :style="`background-image: url(${slider.image});`">
            <div class="container intro-content">
                <div class="row">
                    <div class="col-auto offset-lg-3 intro-col">
                        <h3 class="intro-subtitle"> {{ slider.title }} /h3><!-- End .h3 intro-subtitle -->

                        <h1 class="intro-title"> MacBook Air <br>Latest Model
                            <span>
                                <sup class="font-weight-light">from</sup>
                                <span class="text-primary">$999<sup>,99</sup></span>
                            </span>
                        </h1>

                        <a href="/category/" class="btn btn-outline-primary-2">
                            <span>Shop Now</span>
                            <i class="icon-long-arrow-right"></i>
                        </a>
                    </div><!-- End .col-auto offset-lg-3 -->
                </div><!-- End .row -->
            </div><!-- End .container intro-content -->
        </div><!-- End .intro-slide -->


    </carousel><!-- End .owl-carousel owl-simple -->

    <span class="slider-loader"></span><!-- End .slider-loader -->
</div>
</template>
<script>
export default {
   data(){
        return {
            sliders : []
        }
    }
}
</script>