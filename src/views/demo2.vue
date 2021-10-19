
<template>
  <div>
    <div class="index_main">
      <ul class="index_img_list">
        <swiper
          :options="swiperOption"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="index in 10" :key="index">
            <li>
              <img src="@/assets/img/tx.jpg" alt="" /> 
              <h3>Name: zhangyinguo</h3>
              <p>Address: dizhidizhi</p>
            </li></swiper-slide
          >
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 30,
        // 设置分页器
        pagination: {
          el: '.swiper-pagination',
          // 设置点击可切换
          clickable: true
        },
        // 设置前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 设置自动轮播
        autoplay: {
          delay: 1000 // 5秒切换一次
        },
        // 设置轮播可循环
        loop: true
      }
    }
  },
  methods: {
    onSwiper() {

    },
    onSlideChange() {

    }
  }
}

</script>

<style lang="scss" scoped>
// /deep/.swiper-slide{width: 150px !important;}
</style>