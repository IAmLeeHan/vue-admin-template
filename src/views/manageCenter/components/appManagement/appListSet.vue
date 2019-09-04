<template>
  <div>
    <div class="appUsermanage">
      <div class="appUsermanage_header"><span>应用人员管理</span></div>
      <div class="appUsermanage_admin">
        <span>当前管理员</span>
        <div class="appUsermanage_info">
          <div class="appUsermanage_img">
            <img src="~img/default.png" alt="">
          </div>
          <div class="appUsermanage_user_info">
            <div class="user_info_content_name">
              <span>王晓东</span>
              <span>部门名称</span>
              <span>职位</span>
            </div>
            <div class="user_info_content_phone">
              <img src="~img/iphone.png" alt="">
              <span>156****0000</span>
            </div>
            <div class="user_info_content_email">
              <img src="~img/mail.png" alt="">
              <span>89898989@163.com</span>
            </div>
            <div class="user_info_content_wechat">
              <img src="~img/chat.png" alt="">
              <span>wx123456</span>
            </div>
          </div>
          <div class="appUsermanage_btn">
            更换管理员
          </div>
        </div>
      </div>
      <div class="appUsermanage_table">
        <span>当前成员</span>
        <div class="user_manage_table">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            height="400"
          >
            <el-table-column
              prop="name"
              label="姓名"
              width="208"
            />
            <el-table-column
              prop="phone"
              label="手机号码"
              width="262"
            />
            <el-table-column
              prop="department"
              label="所属部门"
              width="274"
            />
            <el-table-column
              prop="position"
              label="职位"
              width="266px"
            />
            <el-table-column
              prop="time"
              label="最近登陆时间"
              width="330"
            />
          </el-table>
        </div>
      </div>
    </div>
    <div class="appCreditSet">
      <div class="appCreditSet_header"><span>额度配置</span><span>(分配给每个应用的虚拟额度)</span></div>
      <div class="appCreditSet_info">
        <div class="appCreditSet_show">
          <span>剩余额度：</span>
          <img src="" alt="">
          <span>5,000</span>
        </div>
        <div class="appCreditSet_input">
          <label for="">添加额度：</label>
          <el-input></el-input>
          <span>元</span>】
          <div class="appCreditSet_btn">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
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
  ],
    }
  }
}
</script>

<style lang="scss" scoped>
  .appUsermanage{
    width:1650px;
    height: 760px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    margin-left:20px;
    .appUsermanage_header{
      width:1650px;
      height:50px;
      line-height: 50px;
      background:rgba(245,247,250,1);
      border-radius:10px;
      span{
        font-size: 16px;
        font-weight: 700;
        color: #303133;
        padding-left:20px;
      }
    }
    .appUsermanage_admin{
      height: 170px;
      padding-left:40px;
      margin:40px 0 50px;
      float: left;
      span{
        font-size: 16px;
        color: #303133;
        float: left;
      }
      .appUsermanage_info{
        float:left;
        .appUsermanage_img{
          width:170px;
          height:170px;
          float: left;
          margin:0 80px 0 40px;
          img{
            width:100%;
            height: 100%;
          }
        }
        .appUsermanage_user_info{
          float: left;
          .user_info_content_name{
              overflow: hidden;
              span:first-child{
                  font-size: 18px;
                  color:#303133;
                  font-weight: 700;
                  float: left;
                  padding:0;
              }
              span{
                font-size: 14px;
                color: #606266;
                padding:2px 0 0 10px;
              }
          }
          .user_info_content_phone{
              margin-top:40px;
              overflow: hidden;
              img{
                  width:18px;
                  height: 28px;
                  float: left;
                  margin:0 4px;
              }
              span{
                  float:left;
                  height: 28px;
                  line-height: 28px;
                  font-size: 16px;
                  color: #303133;
                  padding-left: 16px;
              }
          }
          .user_info_content_email{
              margin-top:20px;
              overflow: hidden;
              img{
                  width:24px;
                  height: 18px;
                  float: left;
              }
              span{
                  float:left;
                  height: 18px;
                  line-height: 18px;
                  font-size: 16px;
                  color: #303133;
                  padding-left: 16px;
              }
          }
          .user_info_content_wechat{
              margin-top:20px;
              overflow: hidden;
              img{
                  width:26px;
                  height: 22px;
                  float: left;
              }
              span{
                  float:left;
                  height: 22px;
                  line-height: 22px;
                  font-size: 16px;
                  color: #303133;
                  padding-left: 16px;
              }
          }
        }
        .appUsermanage_btn{
          width:110px;
          height:40px;
          border:1px solid rgba(144,147,153,1);
          border-radius:6px;
          line-height: 40px;
          text-align: center;
          float: left;
          margin-left:55px;
          cursor: pointer;
        }
      }
    }
    .appUsermanage_table{
      float: left;
      width:100%;
      margin-left: 40px;
      span{
        font-size: 16px;
        color: #303133;
        float: left;
      }
      .user_manage_table{
      width:1345px;
      height:400px;
      background: pink;
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
        border:1px solid #C7CCD1;
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
  .appCreditSet{
    width:1650px;
    height:220px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    margin:20px 0 0 20px;
    .appCreditSet_header{
      width:1650px;
      height:50px;
      background:rgba(245,247,250,1);
      border-radius:10px;
      line-height: 50px;
      span:first-child{
        font-size: 16px;
        color: #303133;
        padding-left:20px;
        font-weight: 700;
      }
      span:last-child{
        font-size: 14px;
        color: #606266;
        padding-left:20px;
      }
    }
    .appCreditSet_show{
      height: 28px;
      margin:34px 0 0 40px;
    }
  }
</style>
