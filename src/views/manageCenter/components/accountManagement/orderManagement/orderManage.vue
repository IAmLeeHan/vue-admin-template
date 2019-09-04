<template>
  <div class="order_manage_box">
    <div class="order_manage_header">
      <p></p>
      <span>账户流水</span>
    </div>
    <div class="order_manage_view">
      <div class="order_manage_card" v-for="order in orders" :key="order.id">
        <span>{{order.title}}</span>
        <span>{{order.num}}</span>
        <span>单</span>
      </div>
    </div>
    <div class="order_manage_header">
      <p></p>
      <span>订单列别</span>
    </div>
    <div class="order_manage_content">
      <div class="order_manage_form">
        <div class="order_manage_type">
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
        <div class="order_manage_time">
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
        <div class="order_manage_time">
          <span>应用名称：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="order_manage_time">
          <span>订单状态：</span>
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
      <div class="order_manage_table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          @row-click="showDetail"
        >
          <el-table-column
            prop="orderNum"
            label="订单号"
            width="220"
          />
          <el-table-column
            prop="orderType"
            label="订单类型"
            width="116"
          />
          <el-table-column
            prop="appName"
            label="应用名称"
            width="118"
          />
          <el-table-column
            prop="commodityName"
            label="商品名称"
            width="284"
          />
          <el-table-column
            prop="orderAmount"
            label="订单金额（信用币）"
            width="148"
          />
          <el-table-column
            prop="createTime"
            label="创建时间"
            width="174"
          />
          <el-table-column
            prop="orderState"
            label="订单状态"
            width="106"
          />
          <el-table-column
            prop="actualPayment"
            label="实付金额（信用币）"
            width="148"
          />
          <el-table-column
            prop="payTime"
            label="付款时间"
            width="178"
          />
          <el-table-column
            prop="creator"s
            label="创建人"
            width="114"
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
                id:1,
                orderNum:"2019080115JY56670870",
                orderType:"应用订单",
                appName:"应用订单",
                commodityName:"应用订单",
                orderAmount:"39",
                createTime:"2019-10-09 10:30",
                orderState:"待支付",
                actualPayment:"39",
                payTime:"2019-10-09 10:30",
                creator:"王晓东",
              },
              {
                id:2,
                orderNum:"2019080115JY56670870",
                orderType:"应用订单",
                appName:"应用订单",
                commodityName:"应用订单",
                orderAmount:"39",
                createTime:"2019-10-09 10:30",
                orderState:"待支付",
                actualPayment:"39",
                payTime:"2019-10-09 10:30",
                creator:"王晓东",
              },
              {
                id:3,
                orderNum:"2019080115JY56670870",
                orderType:"应用订单",
                appName:"应用订单",
                commodityName:"应用订单",
                orderAmount:"39",
                createTime:"2019-10-09 10:30",
                orderState:"待支付",
                actualPayment:"39",
                payTime:"2019-10-09 10:30",
                creator:"王晓东",
              },
              {
                id:4,
                orderNum:"2019080115JY56670870",
                orderType:"应用订单",
                appName:"应用订单",
                commodityName:"应用订单",
                orderAmount:"39",
                createTime:"2019-10-09 10:30",
                orderState:"待支付",
                actualPayment:"39",
                payTime:"2019-10-09 10:30",
                creator:"王晓东",
              },
              {
                id:5,
                orderNum:"2019080115JY56670870",
                orderType:"应用订单",
                appName:"应用订单",
                commodityName:"应用订单",
                orderAmount:"39",
                createTime:"2019-10-09 10:30",
                orderState:"待支付",
                actualPayment:"39",
                payTime:"2019-10-09 10:30",
                creator:"王晓东",
              },
              {
                id:6,
                orderNum:"2019080115JY56670870",
                orderType:"应用订单",
                appName:"应用订单",
                commodityName:"应用订单",
                orderAmount:"39",
                createTime:"2019-10-09 10:30",
                orderState:"待支付",
                actualPayment:"39",
                payTime:"2019-10-09 10:30",
                creator:"王晓东",
              },
              {
                id:7,
                orderNum:"2019080115JY56670870",
                orderType:"应用订单",
                appName:"应用订单",
                commodityName:"应用订单",
                orderAmount:"39",
                createTime:"2019-10-09 10:30",
                orderState:"待支付",
                actualPayment:"39",
                payTime:"2019-10-09 10:30",
                creator:"王晓东",
              },
              {
                id:8,
                orderNum:"2019080115JY56670870",
                orderType:"应用订单",
                appName:"应用订单",
                commodityName:"应用订单",
                orderAmount:"39",
                createTime:"2019-10-09 10:30",
                orderState:"待支付",
                actualPayment:"39",
                payTime:"2019-10-09 10:30",
                creator:"王晓东",
              },
              {
                id:9,
                orderNum:"2019080115JY56670870",
                orderType:"应用订单",
                appName:"应用订单",
                commodityName:"应用订单",
                orderAmount:"39",
                createTime:"2019-10-09 10:30",
                orderState:"待支付",
                actualPayment:"39",
                payTime:"2019-10-09 10:30",
                creator:"王晓东",
              },
              {
                id:10,
                orderNum:"2019080115JY56670870",
                orderType:"应用订单",
                appName:"应用订单",
                commodityName:"应用订单",
                orderAmount:"39",
                createTime:"2019-10-09 10:30",
                orderState:"待支付",
                actualPayment:"39",
                payTime:"2019-10-09 10:30",
                creator:"王晓东",
              }
            ],
            current: 1,
            // remarksSize:true,
            orders:[
              {id:1,title:"全部订单",num:500},
              {id:2,title:"待支付",num:300},
              {id:3,title:"已支付",num:150},
              {id:4,title:"已退款",num:50},
            ]
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
        },
        showDetail(row){
          console.log(row)
          this.$router.push({name:'orderDetail',params:{id:row.id}})
        }
    }
}
</script>

<style lang="scss" scoped>
.order_manage_box{
  width:1650px;
  float: left;
  background:rgba(255,255,255,1);
  border:1px solid rgba(223,230,236,1);
  border-radius:10px;
  margin:20px 0 20px 20px;
  .order_manage_header{
  width:1650px;
  height:96px;
  line-height: 96px;
  color: #303133;
  font-size: 16px;
  font-weight: 900;
  padding-left:20px;
    p{
      width:4px;
      height:16px;
      background:rgba(68,139,210,1);
      float: left;
      margin-top: 40px;
    }
    span{
      color: #303133;
      font-size: 16px;
      padding-left:10px;
      float: left;
    }
  }
  .order_manage_view{
    height: 130px;
    .order_manage_card{
      width:250px;
      height:130px;
      background:rgba(68,139,210,1);
      border-radius:10px;
      color: #fff;
      float: left;
      margin-left:20px;
      padding:20px;
      overflow: hidden;
      text-align: center;
      span:first-child{
        display: block;
        font-size: 16px;
        margin:0 0 20px -120px;
      }
      span:nth-child(2){
        font-size: 46px;
        font-family: DIN;
      }
      span{
        font-size: 16px;
      }
    }
  }
  .order_manage_content{
    width:auto;
    height:700px;
    background:rgba(255,255,255,1);
    border-radius:10px;
    .order_manage_form{
      height:44px;
      line-height: 44px;
      margin-bottom:40px;
      .order_manage_type{
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
      .order_manage_time{
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
    .order_manage_table{
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
