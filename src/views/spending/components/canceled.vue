<template>
  <div class="user_manage_box">
    <div class="user_manage_content">
      <div class="user_manage_form">

        <div class="user_department">
          <span>筛选：</span>
          <el-select v-model="value" placeholder="请筛选下单时间">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>

         <div class="user_department">
          <el-select v-model="value" placeholder="请筛选应用">
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
      <div class="user_manage_table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="54"
          />
          <el-table-column
            prop="orderCode"
            label="订单号"
            width="208"
          />
          <el-table-column
            prop="appName"
            label="应用名称"
            width="128"
          />
          <el-table-column
            prop="commodityName"
            label="商品名称"
            width="162"
          />
          <el-table-column
            prop="describe"
            label="描述"
            width="164"
          />
          <el-table-column
            prop="orderSum"
            label="订单金额(信用币)"
            width="90"
          />
          <el-table-column
            prop="CreateTime"
            label="创建时间"
            width="166"
          />
          <el-table-column
            label="操作"
            width="140"
          >
            <template slot-scope="scope">
              <el-button size="small">删除</el-button>
            </template>
          </el-table-column>
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
                  orderCode:"2019080115JY56670870",
                  appName:"信用报告",
                  commodityName:"30家监控一年包",
                  describe:"一份",
                  orderSum:"1459",
                  CreateTime:"2019-10-10 10:10"
                },
                {
                  orderCode:"2019080115JY56670870",
                  appName:"信用报告",
                  commodityName:"30家监控一年包",
                  describe:"一份",
                  orderSum:"1459",
                  CreateTime:"2019-10-10 10:10"
                },
                {
                  orderCode:"2019080115JY56670870",
                  appName:"信用报告",
                  commodityName:"30家监控一年包",
                  describe:"一份",
                  orderSum:"1459",
                  CreateTime:"2019-10-10 10:10"
                },
                {
                  orderCode:"2019080115JY56670870",
                  appName:"信用报告",
                  commodityName:"30家监控一年包",
                  describe:"一份",
                  orderSum:"1459",
                  CreateTime:"2019-10-10 10:10"
                },
                {
                  orderCode:"2019080115JY56670870",
                  appName:"信用报告",
                  commodityName:"30家监控一年包",
                  describe:"一份",
                  orderSum:"1459",
                  CreateTime:"2019-10-10 10:10"
                },
                {
                  orderCode:"2019080115JY56670870",
                  appName:"信用报告",
                  commodityName:"30家监控一年包",
                  describe:"一份",
                  orderSum:"1459",
                  CreateTime:"2019-10-10 10:10"
                },
                {
                  orderCode:"2019080115JY56670870",
                  appName:"信用报告",
                  commodityName:"30家监控一年包",
                  describe:"一份",
                  orderSum:"1459",
                  CreateTime:"2019-10-10 10:10"
                },
                {
                  orderCode:"2019080115JY56670870",
                  appName:"信用报告",
                  commodityName:"30家监控一年包",
                  describe:"一份",
                  orderSum:"1459",
                  CreateTime:"2019-10-10 10:10"
                },
                {
                  orderCode:"2019080115JY56670870",
                  appName:"信用报告",
                  commodityName:"30家监控一年包",
                  describe:"一份",
                  orderSum:"1459",
                  CreateTime:"2019-10-10 10:10"
                },
                {
                  orderCode:"2019080115JY56670870",
                  appName:"信用报告",
                  commodityName:"30家监控一年包",
                  describe:"一份",
                  orderSum:"1459",
                  CreateTime:"2019-10-10 10:10"
                },
            ],
            current: 1
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
.user_manage_box{
  width:1200px;
  margin:0 auto;
  .user_manage_title{
    width:1200px;
    height:52px;
    margin:0 auto;
    line-height: 52px;
    padding-left: 10px;
    font-size: 14px;
    color: #606266;
    span:first-child{
      color: #448BD2;
    }
  }
  .user_manage_content{
    width:1200px;
    background:rgba(255,255,255,1);
    
    .user_manage_form{
      width:1200px;
      height:44px;
      line-height: 44px;
      margin:40px 0;
      .user_department{
        float: left;
        margin-right:30px;
        span{
          float: left;
          font-size: 16px;
          color: #606266;
          padding:0 20px;
        }
        /deep/.el-select{
          .el-input__inner{
            width:158px;
            height: 44px;
          }
        }
      }
      .user_phone{
        float: left;
        span{
          float: left;
          font-size: 16px;
          color: #606266;
          padding:0 20px 0 30px;
        }
        /deep/.el-input{
          float: left;
          width: 158px;
          .el-input__inner{
            width:158px;
            height: 44px;
          }
        }
      }
      .user_name{
        float: left;
        span{
          float: left;
          font-size: 16px;
          color: #606266;
          padding:0 20px 0 30px;
        }
        /deep/.el-input{
          float: left;
          width: 110px;
          .el-input__inner{
            width:110px;
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
    .user_manage_table{
      width:1122px;
      margin-left:20px;
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
      }
      /deep/.el-checkbox__inner{
        margin-left:6px;
      }
      /deep/.el-button{
        width:80px;
        height:30px;
        border-radius:6px;
        margin:0;
      }
      /deep/.el-button:nth-of-type(2){
        margin:0 10px;
      }
    }
  }
}
</style>
