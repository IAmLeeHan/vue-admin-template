<template>
  <el-button
    :class="!confirmSuccess ? 'get_Retestcode_dis' : 'get_Retestcode'"
    :disabled="!confirmSuccess"
    @click="getCode"
  >
    {{get_Retestcode}}</el-button>
</template>

<script>
import { getPhoneCode,verifyPhoneCode } from '@/api/common'
export default {
  data(){
    return {
      timeOut: 60,
      confirmSuccess:true,
      get_Retestcode: '发送验证码',
    }
  },
  methods:{
    getCode(){
      this.confirmSuccess = true
      let phone = this.userInfo.phone
      let data = {
        phone:'15689171001',
        yt:'4'
      }
      getPhoneCode(data).then(res =>{
        console.log("更换手机的验证码",res)
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
    },
  }
}
</script>

<style>
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
</style>
