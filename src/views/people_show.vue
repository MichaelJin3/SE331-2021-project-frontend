
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
    <div class="people_show">
      <el-row>
        <el-col :span="5">
          <img class="img" src="@/assets/img/tx.jpg" alt=""
        /></el-col>
        <el-col :span="18">
          <div class="from_list">
            <p>name:</p>
            <span>liukang</span>
          </div>
          <div class="from_list">
            <p>birth:</p>
            <span>1990/01/01</span>
          </div>
          <div class="from_list">
            <p>address:</p>
            <span>addressaddressaddressaddressaddressaddress</span>
          </div>
          <div class="from_list">
            <p>Number of vaccination tests:</p>
            <span>1</span>
          </div>
          
        </el-col>
      </el-row>
      <el-form class="people_show_txt">
        <el-form-item label="Comment" prop="desc">
          <el-input type="textarea" v-model="comment"></el-input>
        </el-form-item>
                <el-form-item>
              <el-button type="primary" @click="onSubmit">Submit</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
      </el-form>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment:' '

    }
  },
  methods: {


  }
}
</script>

<style lang="scss" scoped>
</style>