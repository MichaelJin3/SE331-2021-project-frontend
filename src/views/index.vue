
<template>
  <div class="index">
    <div class="index_top">
      <el-row>
        <el-col :span="4"><div class="index_logo">COVID-19</div></el-col>
        <el-col :span="8"
          ><div class="index_nav">
             <ul>
              <li @click="$router.push('/index')">Home</li>
              <li @click="$router.push('/people_list')">Detail</li>
            <li @click="$router.push('/people_input')">Add</li>
            </ul>
          </div></el-col
        >
        <el-col :span="8"
          ><div style="margin-top: 20px">
            <el-input
              placeholder="Search for..."
              v-model="input3"
              class="input-with-select"
            >
              <el-select v-model="select" placeholder="请输入关键词">
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input></div
        ></el-col>
        <el-col :span="4"><div class="index_login">LOGIN</div></el-col>
      </el-row>
    </div>
    <div class="index_banner">
      <el-carousel height="400px">
        <el-carousel-item>
          <img src="@/assets/img/banner.png" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/img/1.png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="index_main">
      <ul class="index_img_list">
        <swiper
          :options="swiperOption"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="index in 10" :key="index">
            <li @click="$router.push('/people_show')">
              <img src="@/assets/img/tx.jpg" alt="" />
              <h3>zhangyinguo1</h3>
              <p>add:dizhidizhi</p>
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
          delay: 3000 // 5秒切换一次
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

</style>