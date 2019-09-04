<template>
  <div class="account_info_box">
    <div class="account_info_header">
      <span>账户信息</span>
    </div>
    <div class="account_info">
      <div class="account_info_title">
        <span>青岛格兰德信用管理咨询有限公司</span>
        <p>已认证</p>
      </div>
      <div class="account_info_code">
        <p>统一社会信用代码：</p>
        <span>123456789pppppp</span>
      </div>
      <div class="account_info_legal">
        <p>法人姓名：</p>
        <span>宋述大</span>
      </div>
      <div class="account_info_invite">
        <p>企业邀请码：</p>
        <Clipboard></Clipboard>
      </div>
      <div class="account_info_authorization">
        <p>企业授权书：</p>
        <div>点击查看</div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from '@/components/clipboard'
export default {
  components:{Clipboard}
}
</script>

<style lang="scss" scoped>
  .account_info_box{
    width:855px;
    height:400px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    margin-left:20px;
    float: left;
    .account_info_header{
      width:853px;
      height:50px;
      background:rgba(245,247,250,1);
      border-radius:10px 10px 0 0;
      padding-left:20px;
      line-height: 50px;
      font-size: 16px;
      color: #303133;
      font-weight: 900;
    }
    .account_info{
      padding-left: 160px;
      .account_info_title{
        height: 28px;
        line-height: 28px;
        font-size: 20px;
        color: #303133;
        font-weight: 900;
        margin-top:40px;
        p{
          float: left;
          width:70px;
          height:28px;
          background:rgba(41,205,126,1);
          border-radius:14px;
          font-size: 14px;
          color: #fff;
          text-align: center;
          font-weight: 500;
          margin-left:10px;
        }
        span{
          float: left;
        }
      }
      .account_info_code{
        height:16px;
        line-height: 16px;
        margin-top:40px;
        p{
          float: left;
          font-size: #606266;
          color: #606266;
        }
        span{
          float: left;
          padding-left:30px;
          font-size: 16px;
          color: #303133;
        }
      }
      .account_info_legal{
        height:16px;
        line-height: 16px;
        margin-top:40px;
        p{
          float: left;
          font-size: #606266;
          color: #606266;
        }
        span{
          float: left;
          padding-left:90px;
          font-size: 16px;
          color: #303133;
        }
      }
      .account_info_invite{
        height:36px;
        line-height: 36px;
        margin-top:30px;
        p{
          float: left;
          font-size: #606266;
          color: #606266;
        }
        span{
          float: left;
          padding-left:76px;
          font-size: 16px;
          color: #303133;
        }
      }
      .account_info_authorization{
        height:16px;
        line-height: 16px;
        margin-top:30px;
        p{
          float: left;
          font-size: #606266;
          color: #606266;
        }
        div{
          width:120px;
          height:50px;
          background:rgba(237,246,255,1);
          border:1px solid rgba(68,139,210,1);
          border-radius:6px;
          line-height: 50px;
          text-align: center;
          float: left;
          margin-left:80px;
        }
      }
    }
  }
</style>
