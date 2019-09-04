<template>
  <div class="import_preview_box">
    <div class="import_preview_title">
      <span>导入预览</span>
    </div>
    <div class="import_preview_table">
      <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-pagination
        background
        :page-size="10"
        :current-page="current"
        layout="total, prev, pager, next, jumper"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import Bus from '@/utils/eventBus.js'
export default {
  data(){
    return {
      tableData: [],
      tableHeader: [],
      current:1
    }
  },
  created(){
    Bus.$on("sendTableData",(msg)=>{
      this.tableData = msg
      // console.log("msg",this.tableData)
    })
    Bus.$on("sendTableHeader",(msg)=>{
      this.tableHeader = msg
      // console.log("msg1",this.tableHeader)
    })
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
}
</script>

<style lang="scss" scoped>
  .import_preview_box{
    width:1650px;
    height:810px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    margin:20px 0 0 20px; 
    .import_preview_title{
      width:1648px;
      height:50px;
      background:rgba(245,247,250,1);
      border-radius:10px 10px 0 0;
      padding-left:20px;
      line-height: 50px;
      span{
        font-size: 16px;
        color: #303133;
        font-weight: 700;
      }
    }
    .import_preview_table{
      width:1610px;
      height:553px;
      margin:20px 0 0 20px;
      /deep/.el-table col:nth-of-type(1){
        width:80px!important;
      }
      /deep/.el-table col:nth-of-type(2){
        width:132px;
      }
      /deep/.el-table col:nth-of-type(3){
        width:178px;
      }
      /deep/.el-table col:nth-of-type(4){
        width:268px;
      }
      /deep/.el-table col:nth-of-type(5){
        width:120px;
      }
      /deep/.el-table col:nth-of-type(6){
        width:334px;
      }
      /deep/.el-table col:nth-of-type(7){
        width:156px;
      }
      /deep/.el-table col:nth-of-type(8){
        width:370px;
      }
    }
  }
</style>
