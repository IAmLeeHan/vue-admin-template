<template>
  <div class="test_phone_shadow">
    <div class="test_phone_box">
      <i
        class="el-icon-close"
        @click="close_new_box"
      />
      <p>更换手机号</p>
      <div class="input_item_phone">
        <label for="">新手手机：</label>
        <el-input
          v-model="newPhone"
          placeholder="请输入新的手机号码"
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
      <div class="go_next" @click="changePhone_btn">确定</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'   
import { getPhoneCode } from '@/api/common'
import {verifyPhoneRegistered,changePhone} from '@/api/user'
export default {
    data() {
        return {
            newPhone: '',
            code:'',
            timeOut: 60,
            confirmSuccess:true,
            get_Retestcode: '发送验证码',
        }
    },
    computed:{...mapGetters(['userInfo'])},
    methods: {
        close_new_box() {
            this.$emit('close_n_box', false)
        },
        getCode(){
          this.confirmSuccess = true
          let data = {
            phone:this.newPhone,
          }
          const formData = new FormData();
          Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
          });
          verifyPhoneRegistered(formData).then(res=>{
            console.log(res,"验证手机号是否被注册")
            if(res.msg==="当前手机不是已注册用户手机号"){
              let data2 = {
                phone:this.newPhone,
                yt:'5'
              }
              getPhoneCode(data2).then(res =>{
                console.log("绑定新手机的验证码",res)
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
                    type:"error",
                    message:res.msg
                  })
                }
              })
            }else{
              this.$message({
                type:"error",
                message:"手机号已被注册！请更换新的手机号！"
              })
            }
          })
        },
        changePhone_btn(){
          let data = {
            phone:this.newPhone,
            code:this.code,
            yt:"5"
          }
          changePhone(data).then(res=>{
            console.log(res,"绑定新的手机号了")
            if(res.code==='200'){
              this.$store.dispatch('user/getUserInfo')
              this.$emit('close_n_box', false)
              this.$message({
                type:'success',
                message:"更换手机号成功"
              })
            }else{
              this.$message({
                type:'error',
                message:"更换手机号失败"
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
