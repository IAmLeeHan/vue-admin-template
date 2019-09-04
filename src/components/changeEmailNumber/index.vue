<template>
  <div class="test_phone_shadow">
    <div class="test_phone_box">
      <i
        class="el-icon-close"
        @click="closeEmailchange"
      />
      <p>更换邮箱</p>
      <div class="input_item_phone">
        <label for="">新的邮箱：</label>
        <el-input
          v-model="newEmail"
          placeholder="请输入新的邮箱账号"
        />
      </div>
      <div class="input_item_code">
        <label for="">验证码：</label>
        <el-input
          v-model="code"
          placeholder="请输入内容"
        />
        <el-button
          :class="!confirmSuccess ? 'get_Retestcode_dis' : 'get_Retestcode'"
          :disabled="!confirmSuccess"
          @click="getCode"
        >
          {{get_Retestcode}}</el-button>
          
      </div>
      <div class="go_next" @click="changeEmail_btn">确定</div>
    </div>
  </div>
</template>

<script>
import {emailRegistered,sendEmailCode,newEmailChange} from '@/api/user'
export default {
    props: ['changeEmail'],
    data() {
        return {
            newEmail: '',
            code:'',
            timeOut: 60,
            confirmSuccess:true,
            get_Retestcode: '发送验证码',
        }
    },
    created() {
        console.log(this.VerifyPhone)
    },
    methods: {
        closeEmailchange() {
            this.$emit('changeEmail_btn', false)
        },
        getCode(){
          let data = {
            userEmail:this.newEmail
          }
          const formData = new FormData();
          Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
          });
          emailRegistered(formData).then(res=>{
            if(res.msg === '当前邮箱地址不是已注册用户邮箱'){
              let email = {
                email:this.newEmail,
                code:'',
                yt:'2'
              }
              sendEmailCode(email).then(res=>{
                if(res.code==='200'){
                  const timer = setInterval(() => {
                      if (this.timeOut > 0) {
                          this.timeOut--
                          this.get_Retestcode = this.timeOut + '秒'
                          this.confirmSuccess = false
                      } else {
                          this.btnDisabled = false
                          clearTimeout(timer)
                          this.get_Retestcode = '重新获取'
                          this.confirmSuccess = true
                      }
                  }, 1000)
                  this.timeOut = 60
                }else{
                  this.$message({
                  type:'error',
                  message:res.msg
                })
                }
              })
            }else{
              this.$message({
                type:'error',
                message:res.msg
              })
            }
          })
        },
        changeEmail_btn(){
          let email = {
            email:this.newEmail,
                code:this.code,
                yt:'2'
          }
          newEmailChange(email).then(res=>{
            if(res.code==='200'){
              this.$store.dispatch('user/getUserInfo')
              this.$emit('changeEmail_btn', false)
              this.$message({
                type:'success',
                message:"更换邮箱成功"
              })
            }else{
              this.$message({
                type:'error',
                message:"更换邮箱失败"
              })
            }
          })
        }
    }
}
</script>

<style lang="scss" scoped>
    .test_phone_shadow{
        width:100%;
        height: 100%;
        position: fixed;
        top:0;
        bottom: 0;
        left:0;
        right: 0;
        margin:auto;
        background: rgba(0,0,0,.5);
        z-index: 9999;
        overflow: hidden;
        .test_phone_box{
            width:554px;
            height:346px;
            background:rgba(255,255,255,1);
            border-radius:10px;
            position: fixed;
            top:0;
            bottom: 0;
            left:0;
            right: 0;
            margin:auto;
            /deep/.el-icon-close{
              position: absolute;
              top:16px;
              right: 16px;
              font-size: 14px;
              cursor: pointer;
            }
            p{
              font-size: 18px;
              color: #303133;
              font-weight: 900;
              margin:40px 0 0 50px;
            }
            .input_item_phone{
              height: 44px;
              margin:40px 0 0 50px;
              line-height: 44px;
              /deep/.el-input{
                width:350px;
                margin-left:30px;
                .el-input__inner{
                  height: 44px;
                  line-height: 44px;
                  color: #303133;
                }
              }
              label{
                font-size: 16px;
                color: #606266;
              }
            }
            .input_item_code{
              height: 44px;
              margin:40px 0 0 50px;
              line-height: 44px;
              /deep/.el-input{
                width:230px;
                margin-left: 46px;
                float: left;
                .el-input__inner{
                  height: 44px;
                  line-height: 44px;
                  color: #303133;
                }
              }
              label{
                font-size: 16px;
                color: #606266;
                float: left;
              }
              .get_Retestcode{
                float: left;
                width:110px;
                height:50px;
                background:#448BD2;
                border-radius:6px;
                margin-left: 16px;
                font-size:14px;
                text-align: center;
                color:rgba(255,255,255,1);
                cursor: pointer;
              }
              .get_Retestcode_dis{
                  float: left;
                  width:110px;
                  height:50px;
                  background:#C2DFFF;
                  border-radius:6px;
                  margin-left: 16px;
                  color:#606266;
              }
            }
            .go_next{
              width:454px;
              height: 50px;
              background:rgba(68,139,210,1);
              border-radius:6px;
              line-height: 50px;
              text-align: center;
              color: #fff;
              font-size: 16px;
              margin:40px auto 0;
              cursor: pointer;
            }
        }
    }
</style>
