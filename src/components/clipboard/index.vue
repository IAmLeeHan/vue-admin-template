<template>
  <div class="app-container" style="padding:0">
    <!-- <el-tabs v-model="activeName">
      <el-tab-pane label="use clipboard  directly" name="directly"> -->
        <el-input 
          v-model="inputData" 
          :disabled="true" 
          placeholder="Please input" 
          style=
          "width:174px;
          max-width:100%;
          margin-left:76px;
          padding:0;
          border:0;
          " 
        />
        <el-button class="copy" v-clipboard:copy="inputData" v-clipboard:success="clipboardSuccess" icon="document" @click="handleCopy(inputData,$event)">
          复制
        </el-button>
      <!-- </el-tab-pane> -->
      <!-- <el-tab-pane label="use clipboard by v-directive" name="v-directive">
        <el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
        <el-button v-clipboard:copy="inputData" v-clipboard:success="clipboardSuccess" type="primary" icon="document">
          copy
        </el-button>
      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly
import clipboard from '@/directive/clipboard/index.js' // use clipboard by v-directive

export default {
  name: 'ClipboardDemo',
  directives: {
    clipboard
  },
  data() {
    return {
      activeName: 'directly',
      inputData: 'NVYFYUBUHONON687y3'
    }
  },
  methods: {
    handleCopy(text, event) {
      clip(text, event)
    },
    clipboardSuccess() {
      console.log("复制成功")
      this.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500,
      })
    }
  }
}
</script>

<style lang="scss">
  .el-input__inner[disabled]{
    border:0;
    opacity: 1!important;
    padding:0;
    background: #fff!important;
    color: #303133!important;
  }
  .el-message{
    top:70px;
  }
  .copy{
    margin-left:20px;
    width:80px;
    height:36px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(144,147,153,1);
    border-radius:6px;
  }
</style>



