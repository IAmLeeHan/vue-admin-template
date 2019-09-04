<template>
  <div class="Email_amend_password">
    <div class="Email_amend_password_title">
      修改密码
    </div>

    <div class="Email_amend_password_form_box">
      <div class="Email_amend_password_form">
        <div class="Email_amend_password_item">
          <label for="">旧密码：</label>
          <el-input 
            type="text" 
            placeholder="请输入旧密码" 
            name="enterOldPassword"
            v-model="oldPass"
          ></el-input>
          <div class="Email_amend_password_OK" v-if='oldPassword'>
            <img src="~img/right.png" alt="">
          </div>
        </div>

        <div class="Email_amend_password_item">
          <label for="">新密码：</label>
          <el-input 
            type="text" 
            placeholder="请输入新密码" 
            name="enterOldPassword"
            v-model="newPass"  
          ></el-input>
        </div>
        <div class="Email_amend_password_item">
          <label for="">确认密码：</label>
          <el-input 
            type="text" 
            placeholder="确认密码" 
            name="enterOldPassword"
            v-model="testpass"
          ></el-input>
          <div class="Email_amend_password_tip" v-if="testNewPassword">
            <img src="~img/tip-red.png" alt="">
            <span>请确认密码</span>
          </div>
        </div>
        <div class="Email_amend_password_submit">
          确定
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      oldPassword:false,
      testNewPassword:false,
      oldPass:'',
      newPass:'',
      testpass:'',
    }
  }
}
</script>

<style lang="scss" scoped>
    .Email_amend_password_title{
            width:100%;
            height: 50px;
            background: #448BD2;
            text-indent: 360px;
            line-height: 50px;
            color: #fff;
            font-size: 18px;
        }
    .Email_amend_password_form_box{
        width:1200px;
        height:640px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(223,230,236,1);
        border-radius:10px;
        margin:40px auto;
        .Email_amend_password_form{
            width:500px;
            margin:170px auto;
            .Email_amend_password_item{
                width:400px;
                height: 50px;
                line-height: 50px;
                margin-bottom:30px;
                border-radius: 6px;
                position: relative;
                label{
                  float: left;
                }
                /deep/.el-input{
                    width:324px;
                    height: 48px;
                    border:0;
                    padding-left:30px;
                    border-radius: 6px;
                    margin:0;
                    float: left;
                }
                
                .Email_amend_password_OK{
                    width:32px;
                    height: 32px;
                    position: absolute;
                    top:8px;
                    right:-50px;
                    img{
                        width:100%;
                        height: 100%;
                    }
                }
                .Email_amend_password_tip{
                    position: absolute;
                    height: 40px;
                    line-height: 40px;
                    bottom: 12px;
                    top:4px;
                    right:-105px;
                    img{
                        float: left;
                        width:18px;
                        height: 18px;
                        margin-top:12px;
                    }
                    span{
                        float: left;
                        color:#FA3C3C;
                        font-size: 14px;
                        padding-left: 5px;
                    }
                }
            }
            .Email_amend_password_item:nth-of-type(3){
                  /deep/.el-input{
                    width:324px;
                    height: 48px;
                    border:0;
                    border-radius: 6px;
                    margin:0;
                    float: left;
                    padding-left:16px;
                    /deep/.el-input__inner{
                      width:294px;
                    } 
                  }
                }
            .Email_amend_password_submit{
                width:294px;
                height: 50px;
                margin:10px 0 0 86px;
                text-align: center;
                line-height: 50px;
                font-size: 18px;
                color: #fff;
                background:rgba(68,139,210,1);
                border-radius:6px;
                cursor: pointer;
            }
        }
    }
</style>
