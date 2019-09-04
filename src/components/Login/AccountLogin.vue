<template>
  <div class="form_box_accound">
    <input
      id="usernameID"
      ref="username"
      v-model="newID"
      type="text"
      name="username"
      placeholder="请输入手机号"
      class="username"
      @blur="usernameBlur"
      @keyup="usernameBlur"
      @mouseup="usernameBlur"
    >
    <input
      ref="password"
      type="password"
      name="password"
      class="password"
      placeholder="请输入密码"
    >
    <p
      class="forget_password"
      @click="findPassword"
    >忘记密码</p>

    <div
      class="errText"
      :class="[testPhone ? 'active' : '']"
    >
      <div class="tip_img_box">
        <img src="~img/tip-red.png" alt="">
      </div>
      <span
        class="testPhone"
      >
        请输入正确的手机号！
      </span>
    </div>

    <button
      class="Login_btn"
      @click="getLoginState"
    >立即登录</button>

    <p
      class="toRegister"
      @click="toRegister"
    >没有账号？前往注册></p>

    <div class="quick_login_box">
      <span
        class="quick_login_text"
      >
        快捷登录 :
      </span>
      <div class="quick_login_img_box">
        <img src="~img/weixin.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {testUserAddEnterprise} from '@/api/mine'
import {getMemberInfo} from '@/api/user'
export default {
    data() {
        return {
            newID: '',
            testPhone: true
        }
    },
    mounted() {
        document.getElementById('usernameID').focus()
    },
    methods: {
        usernameBlur() {
            const phoneNumber = this.$refs.username.value
            if (/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(phoneNumber)) {
                this.testPhone = true
            } else {
                this.testPhone = false
            }
        },
        toRegister() {
            this.$router.push('/register')
        },
        findPassword() {
            this.$router.push('/findpassword')
        },
        getLoginState() {
            // * 假设已经登录成功，并且获得用户id+token
            // let data = {
            //   token:''
            // }
            // const formData = new FormData();
            // Object.keys(data).forEach((key) => {
            //   formData.append(key, data[key]);
            //   });
            this.$store.dispatch('user/getUserInfo')
            console.log(this.$store.getters)
            let data = {
              userId:this.$store.getters.userID
            }
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
              formData.append(key, data[key]);
              });
            testUserAddEnterprise(formData).then(res=>{
              console.log(res)
              if(res.msg === 'No'){
                this.$router.push('/applying/applyingType')
              }else{
                this.$router.push('/mine')
                this.$store.dispatch("MineApp/getAppList")
              }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .username{
        display: block;
        width:326px;
        height:50px;
        border:1px solid rgba(199,204,209,1);
        border-radius:6px;
        padding-left: 30px;
        margin:50px auto 0;
        &:focus{
         outline: solid #448BD2;
        }
    }
    .password{
        display: block;
        width:326px;
        height:50px;
        border:1px solid rgba(199,204,209,1);
        border-radius:6px;
        padding-left: 30px;
        margin:30px auto 0;
        &:focus{
         outline: solid #448BD2;
        }
    }

    .forget_password{
        width:100%;
        font-size:16px;
        color:rgba(68,139,210,1);
        text-align: right;
        margin-top: 30px;
        cursor: pointer;
    }

    .errText{
        width:100%;
        height: 26px;
        line-height: 26px;
        text-align: left;
        overflow: hidden;
        margin-top:34px;
        &.active{
            visibility: hidden;
        }
        .tip_img_box{
            width:18px;
            height: 18px;
            float: left;
            margin-top:4px;
            img{
                width:100%;
                height: 100%;
            }
        }
        span{
            padding-left: 10px;
        }
    }

    .Login_btn{
        width:326px;
        height:50px;
        background:rgba(68,139,210,1);
        border-radius:6px;
        margin:12px auto 0;
        padding: 0;
        border: 0;
        font-size:18px;
        color:rgba(255,255,255,1);
        cursor: pointer;
    }
    .toRegister{
        color: #448BD2;
        font-size: 16px;
        height: 16px;
        cursor: pointer;
        margin-top: 30px;
    }

    .quick_login_box{
        width:100%;
        height: 72px;
        line-height: 72px;
        text-align: left;
        overflow: hidden;
        margin-top:34px;
        .quick_login_img_box{
            width:36px;
            height: 36px;
            margin-top:18px;
            float: left;
            img{
                width:100%;
                height: 100%;
            }
        }
        span{
            padding-right: 20px;
            float: left;
            color: #606266;
            font-size: 16px;
        }
    }
</style>
