<template>
  <div class="my_app_detail_box">
    <el-row>
      <el-col :span="2">
        <div class="grid-content">
          <img
            class="fold_icon"
            src="~img/icon_right.png"
            alt=""
            @click="drawer = true"
          >
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content">
          <span
            class="app_name"
          >雷达监控</span>
        </div>
      </el-col>
      <el-col :span="18"><div class="grid-content" /></el-col>
    </el-row>
    <div class="app_content_box">
      <div class="app_content_sidebar" />
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            enterpriseApp: [],
            drawer: false,
            direction: 'rtl'
        }
    },
    created() {
        console.log('this.$route', this.$route)
        this.enterpriseApp = this.$store.state.appInfo.appInfo
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done()
                })
                .catch(_ => {})
        }
    }
}
</script>

<style lang="scss" scoped>
/deep/.el-row {
    height: 50px;
    background: #448BD2;
    line-height: 50px;
    .fold_icon{
      width:20px;
      height:20px;
      margin:15px 0 0 30px;
      cursor: pointer;
    }
    .app_name{
      font-size:18px;
      color: #fff;
      font-weight: 900;
    }
  }
</style>
