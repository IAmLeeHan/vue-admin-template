<template>
  <div class="user_manage_box">
    <div class="user_manage_title">
      <span>雷达监控></span><span>人员管理</span>
    </div>
    <div class="user_manage_content">
      <div class="user_manage_header">
        <span>人员管理</span>
        <div
          class="user_apply_btn"
          @click="apply_manage"
        >
          <img src="~img/icon_apply.png" alt="">
          <span>申请管理</span>
        </div>
      </div>
      <div class="user_manage_form">
        <div class="user_department">
          <span>所属部门</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="user_phone">
          <span>手机号</span>
          <el-input v-model="input" placeholder="请输入内容" />
        </div>
        <div class="user_name">
          <span>姓名</span>
          <el-input v-model="input" placeholder="请输入内容" />
        </div>
        <p>筛选成员</p>
        <div class="add_delete_btn">增加</div>
        <div class="add_delete_btn">删除</div>
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
            prop="name"
            label="姓名"
            width="156"
          />
          <el-table-column
            prop="phone"
            label="手机号码"
            width="230"
          />
          <el-table-column
            prop="department"
            label="所属部门"
            width="214"
          />
          <el-table-column
            prop="position"
            label="职位"
            width="214px"
          />
          <el-table-column
            prop="time"
            label="最近登陆时间"
            width="290"
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
                    name: '钢铁侠',
                    phone: '15858585858',
                    department: '复仇者联盟',
                    position: 'boss',
                    time: '2019-07-15 20:00'
                },
                {
                    name: '钢铁侠',
                    phone: '15858585858',
                    department: '复仇者联盟',
                    position: 'boss',
                    time: '2019-07-15 20:00'
                },
                {
                    name: '钢铁侠',
                    phone: '15858585858',
                    department: '复仇者联盟',
                    position: 'boss',
                    time: '2019-07-15 20:00'
                },
                {
                    name: '钢铁侠',
                    phone: '15858585858',
                    department: '复仇者联盟',
                    position: 'boss',
                    time: '2019-07-15 20:00'
                },
                {
                    name: '钢铁侠',
                    phone: '15858585858',
                    department: '复仇者联盟',
                    position: 'boss',
                    time: '2019-07-15 20:00'
                },
                {
                    name: '钢铁侠',
                    phone: '15858585858',
                    department: '复仇者联盟',
                    position: 'boss',
                    time: '2019-07-15 20:00'
                },
                {
                    name: '钢铁侠',
                    phone: '15858585858',
                    department: '复仇者联盟',
                    position: 'boss',
                    time: '2019-07-15 20:00'
                },
                {
                    name: '钢铁侠',
                    phone: '15858585858',
                    department: '复仇者联盟',
                    position: 'boss',
                    time: '2019-07-15 20:00'
                },
                {
                    name: '钢铁侠',
                    phone: '15858585858',
                    department: '复仇者联盟',
                    position: 'boss',
                    time: '2019-07-15 20:00'
                },
                {
                    name: '钢铁侠',
                    phone: '15858585858',
                    department: '复仇者联盟',
                    position: 'boss',
                    time: '2019-07-15 20:00'
                }
                // {
                //   name:"钢铁侠",
                //   phone:"15858585858",
                //   department:"复仇者联盟",
                //   position:"boss",
                //   time:"2019-07-15 20:00"
                // },
                // {
                //   name:"钢铁侠",
                //   phone:"15858585858",
                //   department:"复仇者联盟",
                //   position:"boss",
                //   time:"2019-07-15 20:00"
                // },
                // {
                //   name:"钢铁侠",
                //   phone:"15858585858",
                //   department:"复仇者联盟",
                //   position:"boss",
                //   time:"2019-07-15 20:00"
                // },
                // {
                //   name:"钢铁侠",
                //   phone:"15858585858",
                //   department:"复仇者联盟",
                //   position:"boss",
                //   time:"2019-07-15 20:00"
                // },
                // {
                //   name:"钢铁侠",
                //   phone:"15858585858",
                //   department:"复仇者联盟",
                //   position:"boss",
                //   time:"2019-07-15 20:00"
                // },
                // {
                //   name:"钢铁侠",
                //   phone:"15858585858",
                //   department:"复仇者联盟",
                //   position:"boss",
                //   time:"2019-07-15 20:00"
                // },
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
  margin:60px auto 0;
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
    height:800px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    .user_manage_header{
      width:1200px;
      height:50px;
      background: #DFE6EC;
      line-height: 50px;
      span{
        float: left;
        color: #303133;font-size: 18px;
        padding-left: 20px;
        font-weight: 900;
      }
      .user_apply_btn{
        float:right;
        width:118px;
        height:38px;
        background:rgba(68,139,210,1);
        border-radius:6px;
        line-height: 38px;
        text-align: center;
        margin:6px 20px 0 0;
        cursor: pointer;
        img{
          float: left;
          width:18px;
          height: 18px;
          margin:10px 0 0 18px;
        }
        span{
          float: left;
          color: #fff;
          font-size:14px;
          padding-left:10px;
        }
      }
    }
    .user_manage_form{
      width:1200px;
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
      p{
        float: left;
        width:110px;
        height:44px;
        background:rgba(237,246,255,1);
        border:1px solid rgba(68,139,210,1);
        border-radius:6px;
        text-align: center;
        line-height: 44px;
        color:#448BD2;
        font-size: 14px;
        margin:0 60px;
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
        margin-right:20px;
      }
    }
    .user_manage_table{
      width:1160px;
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
      }
      /deep/.el-checkbox__inner{
        margin-left:6px;
      }
    }
  }
}
</style>
