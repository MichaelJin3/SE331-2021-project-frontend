
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
        <el-carousel-item v-for="item in 1" :key="item">
          <img src="@/assets/img/banner.png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="index_main">
      <ul class="index_img_list">
        <li
          @click="$router.push('/people_show')"
          v-for="index in 10"
          :key="index"
        >
          <img src="@/assets/img/tx.jpg" alt="" />
          <h3>zhangyinguo1</h3>
          <p>add:dizhidizhi</p>
        </li>
      </ul>
      <div class="cf"></div>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {


  }
}
</script>

<style lang="scss" scoped>
</style>