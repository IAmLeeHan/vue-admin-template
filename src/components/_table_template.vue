<template>
  <div class="user_manage_box">
    <div class="user_manage_content">
      <div class="user_manage_header">
        <span>人员管理</span>
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
