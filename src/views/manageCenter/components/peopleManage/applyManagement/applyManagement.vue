<template>
  <div class="user_manage_box">
    <div class="user_manage_content">
      <div class="user_manage_form">

        <div class="user_name">
          <span>姓名</span>
          <el-input v-model="input" placeholder="请输入内容" />
        </div>

        <div class="user_phone">
          <span>手机号查询</span>
          <el-input v-model="input" placeholder="请输入内容" />
        </div>

        <div class="user_department">
          <span>状态：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="add_delete_btn">检索</div>
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
            prop="name"
            label="姓名"
            width="128"
          />
          <el-table-column
            prop="phone"
            label="手机号码"
            width="180"
          />
          <el-table-column
            prop="remarks"
            label="备注"
            width="674"
          >
            <template slot-scope="scope">
                  <el-popover
                    visible-arrow="false"
                    placement="bottom"
                    trigger="click"
                    width="674">
                    <span>{{scope.row.remarks}}</span>
                    <div slot="reference">
                      <span class="app_name">{{scope.row.remarks | remarksSizelength}}</span>
                      <i :class="scope.row.remarks.length>45?'el-icon-caret-bottom':''"></i>
                    </div>
                  </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            prop="time"
            label="申请时间"
            width="204"
          />
          <el-table-column
            prop="state"
            label="状态"
            width="134"
          />
          <el-table-column
            label="操作"
            width="288"
          >
            <template slot-scope="scope">
              <el-button type="primary" size="small">允许</el-button>
              <el-button size="small">拒绝</el-button>
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
                    name: '猩红女巫',
                    phone: '15689171001',
                    remarks: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    time: '2017-10-11 15:55',
                    state: '待审批'
                },
                {
                    name: '猩红女巫',
                    phone: '15689171001',
                    remarks: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    time: '2017-10-11 15:55',
                    state: '待审批'
                },
                {
                    name: '猩红女巫',
                    phone: '15689171001',
                    remarks: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    time: '2017-10-11 15:55',
                    state: '待审批'
                },
                {
                    name: '猩红女巫',
                    phone: '15689171001',
                    remarks: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    time: '2017-10-11 15:55',
                    state: '待审批'
                },
                {
                    name: '猩红女巫',
                    phone: '15689171001',
                    remarks: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    time: '2017-10-11 15:55',
                    state: '待审批'
                },
                {
                    name: '猩红女巫',
                    phone: '15689171001',
                    remarks: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    time: '2017-10-11 15:55',
                    state: '待审批'
                },
                {
                    name: '猩红女巫',
                    phone: '15689171001',
                    remarks: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    time: '2017-10-11 15:55',
                    state: '待审批'
                },
                {
                    name: '猩红女巫',
                    phone: '15689171001',
                    remarks: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    time: '2017-10-11 15:55',
                    state: '待审批'
                },
                {
                    name: '猩红女巫',
                    phone: '15689171001',
                    remarks: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    time: '2017-10-11 15:55',
                    state: '待审批'
                },
                {
                    name: '猩红女巫',
                    phone: '15689171001',
                    remarks: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    time: '2017-10-11 15:55',
                    state: '待审批'
                }
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
.user_manage_box{
  width:1650px;
  height:810px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(223,230,236,1);
  border-radius:10px;
  margin-left:20px;
  .user_manage_title{
    width:1650px;
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
    width:auto;
    height:700px;
    background:rgba(255,255,255,1);
    border-radius:10px;
    .user_manage_form{
      height:44px;
      line-height: 44px;
      margin:40px 0;
      .user_department{
        float: left;
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
        background:rgba(68,139,210,1);
        border-radius:6px;
        border-radius:10px;
        color:#fff;
        font-size: 14px;
        text-align: center;
        line-height: 44px;
        margin-left:30px;
      }
    }
    .user_manage_table{
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
        padding:6px 0;
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
