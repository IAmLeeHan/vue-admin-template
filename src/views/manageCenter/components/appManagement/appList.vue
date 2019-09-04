<template>
  <div class="user_manage_box">
    <div class="user_manage_content" v-if="isSet">
      <div class="user_manage_form">

        <div class="user_department">
          <span>应用种类：</span>
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
          <span>关键字查询</span>
          <el-input v-model="input" placeholder="请输入内容" />
        </div>
        <div class="add_delete_btn">应用检索</div>
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
            prop="appName"
            width="308"
          >
            <template slot-scope="scope">
              <div class="app_img">
                <img :src="scope.row.img" alt="">
              </div>
              <span class="app_name">{{scope.row.appName}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="buyTyle"
            label="购买类型"
            width="182"
          />
          <el-table-column
            prop="validity"
            label="应用有效期"
            width="304"
          />
          <el-table-column
            prop="principal"
            width="286"
          >
            <template slot-scope="scope">
              <div class="principal_headImg">
                <img :src="scope.row.headerImg" alt="">
              </div>
              <span class="principal_name">{{scope.row.principal}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="credit"
            label="可用额度"
            width="184"
          />
          <el-table-column
            label="操作"
            width="340"
          >
            <template slot-scope="scope">
              <el-button size="small" @click="toSet">设置</el-button>
              <el-button size="small">统计</el-button>
              <el-button type="danger" size="small">允许</el-button>
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
            isSet:true,
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
                    appName:"雷达监控",
                    buyTyle:"20人/年",
                    validity:"2019-09-30到2020-09-30",
                    principal:"王晓东",
                    credit:"10000信用币",
                    img:require("img/jiankong.png"),
                    headerImg:require("img/default.png")
                },
                {
                    appName:"雷达监控",
                    buyTyle:"20人/年",
                    validity:"2019-09-30到2020-09-30",
                    principal:"王晓东",
                    credit:"10000信用币",
                    img:require("img/jiankong.png"),
                    headerImg:require("img/default.png")
                },
                {
                    appName:"雷达监控",
                    buyTyle:"20人/年",
                    validity:"2019-09-30到2020-09-30",
                    principal:"王晓东",
                    credit:"10000信用币",
                    img:require("img/jiankong.png"),
                    headerImg:require("img/default.png")
                },
                {
                    appName:"雷达监控",
                    buyTyle:"20人/年",
                    validity:"2019-09-30到2020-09-30",
                    principal:"王晓东",
                    credit:"10000信用币",
                    img:require("img/jiankong.png"),
                    headerImg:require("img/default.png")
                },
                {
                    appName:"雷达监控",
                    buyTyle:"20人/年",
                    validity:"2019-09-30到2020-09-30",
                    principal:"王晓东",
                    credit:"10000信用币",
                    img:require("img/jiankong.png"),
                    headerImg:require("img/default.png")
                },
                {
                    appName:"雷达监控",
                    buyTyle:"20人/年",
                    validity:"2019-09-30到2020-09-30",
                    principal:"王晓东",
                    credit:"10000信用币",
                    img:require("img/jiankong.png"),
                    headerImg:require("img/default.png")
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
        },
        toSet(){
          this.$router.push({name:"appListSet"})
        }
    }
}
</script>

<style lang="scss" scoped>
 .user_manage_box{
  width:98%;
  height:810px;
  overflow: auto;
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
  .app_img{
    width:60px;
    height:60px;
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 15px 0px rgba(12,45,77,0.17);
    border-radius:8px;
    position: relative;
    float: left;
    margin-left:10px;
    margin-right:20px;
    img{
      width:50%;
      height: 50%;
      position: absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      margin:auto;
    }
  }
  .app_name{
    float: left;
    height: 60px;
    line-height: 60px;
  }
  .principal_headImg{
    width:60px;
    height:60px;
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 15px 0px rgba(12,45,77,0.17);
    border-radius:8px;
    position: relative;
    float: left;
    margin-left:10px;
    margin-right:20px;
    border-radius: 50%;
    img{
      width:100%;
      height: 100%;
      position: absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      margin:auto;
    }
  }
  .principal_name{
    float: left;
    height: 60px;
    line-height: 60px;
  }
}
</style>

