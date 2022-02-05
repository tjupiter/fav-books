<template>
 <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    
</swiper>
 
 
 <!-- <div>
      <div class="block-1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, repellendus?</p>
      </div>
      <div class="wrapper">
          <div class="swiper">
              <swiper
                :slides-per-view="3"
                :space-between="50"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper>
          </div>
          <div class="block-text"></div>
      </div>
 </div> -->
</template>

<script>
// Import Swiper Vue.js components

  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      }
    },
  };
</script>

<style>

    .swiper-container {
        height: 400px;
        width: 100%
    }
    .block-1 {
        height: 400px;
        width: 100%;
        text-align: center;
    }

    .block-1 p {
        font-size: 2rem;
        margin: 2rem auto;
    }

    .wrapper {
        height: 400px;
        display: grid;
        gap: 0;
    }

</style>