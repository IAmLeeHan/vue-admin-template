<template>
  <div class="accountStatement_box">
    <div class="accountStatement_header">
      <span>账户流水</span>
    </div>
    <div class="accountStatement_content">
      <div class="accountStatement_form">
        <div class="accountStatement_type">
          <span>类型：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="accountStatement_time">
          <span>发生时间：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="add_delete_btn">记录检索</div>
      </div>
      <div class="accountStatement_table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            prop="type"
            label="类型"
            width="298"
          />
          <el-table-column
            prop="projectName"
            label="项目名称"
            width="490"
          />
          <el-table-column
            prop="amount"
            label="金额（信用币）"
            width="254"
          />
          <el-table-column
            prop="time"
            label="发生时间"
            width="304"
          />
          <el-table-column
            prop="operator"
            label="操作人"
            width="260"
          />
        </el-table>
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
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            input: '',
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            tableData: [
                {
                    type:"线上充值",
                    projectName:"网银充值10000信用币",
                    amount:"+10000",
                    time:"2019-10-23 10:35",
                    operator:"王晓东",
                },
                {
                    type:"线上充值",
                    projectName:"网银充值10000信用币",
                    amount:"+10000",
                    time:"2019-10-23 10:35",
                    operator:"王晓东",
                },
                {
                    type:"线上充值",
                    projectName:"网银充值10000信用币",
                    amount:"+10000",
                    time:"2019-10-23 10:35",
                    operator:"王晓东",
                },
                {
                    type:"线上充值",
                    projectName:"网银充值10000信用币",
                    amount:"+10000",
                    time:"2019-10-23 10:35",
                    operator:"王晓东",
                },
                {
                    type:"线上充值",
                    projectName:"网银充值10000信用币",
                    amount:"+10000",
                    time:"2019-10-23 10:35",
                    operator:"王晓东",
                },
                {
                    type:"线上充值",
                    projectName:"网银充值10000信用币",
                    amount:"+10000",
                    time:"2019-10-23 10:35",
                    operator:"王晓东",
                },
                {
                    type:"线上充值",
                    projectName:"网银充值10000信用币",
                    amount:"+10000",
                    time:"2019-10-23 10:35",
                    operator:"王晓东",
                },
                {
                    type:"线上充值",
                    projectName:"网银充值10000信用币",
                    amount:"+10000",
                    time:"2019-10-23 10:35",
                    operator:"王晓东",
                },
                {
                    type:"线上充值",
                    projectName:"网银充值10000信用币",
                    amount:"+10000",
                    time:"2019-10-23 10:35",
                    operator:"王晓东",
                },
                {
                    type:"线上充值",
                    projectName:"网银充值10000信用币",
                    amount:"+10000",
                    time:"2019-10-23 10:35",
                    operator:"王晓东",
                },
            ],
            current: 1,
            // remarksSize:true
        }
    },
    created(){
      // this.tableData.map((item)=>{
      //   if(item.remarks.length>=45){
      //     this.remarksSize = false
      //   }
      // })
    },
    filters: {
        remarksSizelength:(value)=>{
            return value && value.length >= 45 ? value.substr(0, 44) + '...' : value || ''
        }
    },
    methods: {
        apply_manage() {
            console.log(this.$route.params.id * 1)
            this.$router.push({ name: 'userApplyManage', params: { id: this.$route.params.id * 1 }})
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row)
                })
            } else {
                this.$refs.multipleTable.clearSelection()
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.accountStatement_box{
  width:1650px;
  height:810px;
  float: left;
  background:rgba(255,255,255,1);
  border:1px solid rgba(223,230,236,1);
  border-radius:10px;
  margin:20px 0 20px 20px;
  .accountStatement_header{
  width:1650px;
  height:50px;
  background:rgba(245,247,250,1);
  border-radius:10px;
  line-height: 50px;
  color: #303133;
  font-size: 16px;
  font-weight: 900;
  padding-left:20px;
  }
  .accountStatement_content{
    width:auto;
    height:700px;
    background:rgba(255,255,255,1);
    border-radius:10px;
    .accountStatement_form{
      height:44px;
      line-height: 44px;
      margin:40px 0;
      .accountStatement_type{
        float: left;
        span{
          float: left;
          font-size: 16px;
          color: #606266;
          padding:0 20px;
        }
        /deep/.el-select{
          .el-input__inner{
            width:186px;
            height: 44px;
          }
        }
      }
      .accountStatement_time{
        float: left;
        span{
          float: left;
          font-size: 16px;
          color: #606266;
          padding:0 20px;
        }
        /deep/.el-select{
          .el-input__inner{
            width:200px;
            height: 44px;
          }
        }
      }

      .add_delete_btn{
        float: left;
        width:110px;
        height:44px;
        background:rgba(237,246,255,1);
        border:1px solid rgba(68,139,210,1);
        border-radius:6px;
        color:#448BD2;
        font-size: 14px;
        text-align: center;
        line-height: 44px;
        margin-left:30px;
        cursor: pointer;
      }
    }
    .accountStatement_table{
      width:1610px;
      height:501px;
      margin:0 auto;
      /deep/.el-table__header{
        border-collapse: collapse;
      }
      /deep/.el-table__body{
        border-collapse: collapse;
        border:1px solid #C7CCD1!important;
      }
      /deep/.el-table__body-wrapper{
        border-bottom:1px solid #C7CCD1!important;
      }
      /deep/.el-table .is-leaf{
        border-top:1px solid #C7CCD1;
        border-left:1px solid #C7CCD1;
        border-right:1px solid #C7CCD1;
        border-bottom: 0;
      }
      /deep/.el-table td{
        border:1px solid #C7CCD1;
        padding:10px 0;
      }
      /deep/.el-checkbox__inner{
        margin-left:6px;
      }
      /deep/.el-button{
        width:80px;
        height:30px;
        border-radius:6px;
        margin-left:20px;
      }
    }
  }
  .app_name{
    cursor: pointer;
  }
  
}
</style>

<style lang="scss">
  .el-popover{
    border:1px solid #303133;
    font-size:16px;
  }
  .popper__arrow{
    display: none!important;
  }
</style>
