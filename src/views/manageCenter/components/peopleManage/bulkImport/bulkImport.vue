<template>
  <div class="bulkImport">
    <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
    <!-- <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table> -->
    <div class="procedure_box">
      <p>步骤：</p>
      <p>1、首先下载标准模板</p>
      <p>2、按模版中的格式编辑好数据：切勿增减调整列，以免引起数据混乱</p>
      <p>3、选择编辑好的文件，点击上传，等待一段时间，系统提示上传结果</p>
      <p>4、成功导入的用户将通过手机短信发送通知</p>
    </div>

    <div class="procedure_box">
      <p>注意事项：</p>
      <p>1、注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项</p>
      <p>2、注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项</p>
    </div>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
import Bus from '@/utils/eventBus.js'
export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: []
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: '上传的文件大于1M',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
      this.$router.push({name:"ImportPreview"})
    },
  },
  beforeDestroy() {
    Bus.$emit("sendTableData",this.tableData)
    Bus.$emit("sendTableHeader",this.tableHeader)
  },
}
</script>

<style lang="scss">
  .bulkImport{
    width:1650px;
    height:810px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    margin-left:20px;
    .procedure_box{
      width:1000px;
      margin:0 auto;
      p:first-child{
        font-size: 18px;
        color: #000000;
        font-weight: 700;
        padding:60px 0 30px;
      }
      p:last-child{
        padding:0;
      }
      p{
        font-size: 16px;
        color: #606266;
        padding-bottom:16px;
      }
    }
  }
</style>
