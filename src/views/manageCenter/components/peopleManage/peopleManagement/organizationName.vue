<template>
  <div class="user_manage_box">
    <div class="user_manage_content">
      <div class="user_manage_header">
        <span>组织名称——用户列表</span>
        <div
          class="user_apply_btn"
          @click="bulkImport"
        >
          <img src="~img/pldr.png" alt="">
          <span>批量导入</span>
        </div>
        <div
          class="user_apply_btn"
        >
          <img src="~img/add_y.png" alt="">
          <span @click.stop="isAddUser = true">新增用户</span>
        </div>
      </div>
      <div class="user_manage_form">
        <p @click="ischangegroup = true">移动分组</p>
        <p @click="isDelete =true">删除</p>
        <p>设为负责人</p>
        <div class="user_phone">
          <span>手机号</span>
          <el-input v-model="input" placeholder="请输入内容" />
        </div>
        <div class="user_name">
          <span>姓名</span>
          <el-input v-model="input" placeholder="请输入内容" />
        </div>
        <p>筛选成员</p>
      </div>
      <div class="user_manage_table">
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
              width="166"
            />
            <el-table-column
              prop="phone"
              label="手机号码"
              width="164"
            />
            <el-table-column
              prop="email"
              label="邮箱"
              width="196"
            />
            <el-table-column
              prop="jobNumber"
              label="工号"
              width="80"
            />
            <el-table-column
              prop="department"
              label="所属部门"
              width="130"
            />
            <el-table-column
              prop="position"
              label="职位"
              width="138"
            />
            <el-table-column
              label="操作"
              width="210"
            >
              <template slot-scope="scope">
                <el-button type="primary" size="small" @click="isEditUser=true">编辑</el-button>
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
    <changeGroup
      v-if="ischangegroup"
      @changegroup="changegroup"
      :ischangegroup=ischangegroup
    ></changeGroup>
    <AddUser
       v-if="isAddUser"
      @addUser="addUser"
      :isAddUser=isAddUser
    ></AddUser>

    <Delete
    v-if="isDelete"
    :isDelete="isDelete"
    @UnDelete="UnDelete"
    ></Delete>

    <EditUser
      v-if="isEditUser"
      :isEditUser="isEditUser"
      @EditUser="EditUser"
    ></EditUser>
</div>
</template>

<script>
  import changeGroup from './changeGroup'
  import AddUser from './addUser.vue'
  import Delete from './delete.vue'
  import EditUser from './editUser.vue'
  export default {
    components:{changeGroup,AddUser,Delete,EditUser},
    data() {
        return {
            tableData: [
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
                {
                    name:"美国队长",
                    phone:"15858585858",
                    email:"15858585858@163.com",
                    jobNumber:"001",
                    department:"复仇者联盟",
                    position:"队长",
                },
            ],
            current: 1,
            input:'',
            ischangegroup:false,
            isAddUser:false,
            isDelete:false,
            isEditUser:false
        }
    },
    methods: {
        bulkImport() {
            this.$router.push({ name: 'bulkImport'})
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
        changegroup(res){
          console.log("res",res)
          this.ischangegroup = res
        },
        addUser(res){
          console.log("res",res)
          this.isAddUser = res
        },
        UnDelete(res){
          console.log("res",res)
          this.isDelete = res
        },
        EditUser(res){
          console.log("res",res)
          this.isEditUser = res
        }
    }
}
</script>

<style lang="scss" scoped>
.user_manage_box{
  width:1200px;
  height:810px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(223,230,236,1);
  border-radius:10px;
  float: left;
  margin-left:20px;
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
    border-radius:10px;
    .user_manage_header{
      width:1200px;
      height:50px;
      background:rgba(245,247,250,1);
      border-radius:10px;
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
        margin-left:210px;
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
        margin-left:20px;
        cursor: pointer;
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
        padding:7px 0;
      }
      /deep/.el-checkbox__inner{
        margin-left:6px;
      }
      /deep/.el-button{
        width:80px;
        height:30px;
        border-radius:6px;
        margin-left:10px;
      }
    }
  }
}
</style>
