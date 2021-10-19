
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
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Profile Photo">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="" />
              </el-dialog>
            </el-form-item>
            <el-form-item label="Name">
              <el-input v-model="index"></el-input>
            </el-form-item>
            <el-form-item label="Bidth">
              <el-input v-model="index"></el-input>
            </el-form-item>
            <el-form-item label="Address">
              <el-input v-model="index"></el-input>
            </el-form-item>
            <el-form-item label="Vaccination tests">
              <el-select v-model="index" placeholder="Number of tests">
                <el-option label="1" value="shanghai"></el-option>
                <el-option label="2" value="beijing"></el-option>
                <el-option label="3" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Submit</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form></el-col
        >

        <el-col :span="12"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false

    }
  },
  methods: {
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    onSwiper() {

    },
    onSlideChange() {

    }

  }
}
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>