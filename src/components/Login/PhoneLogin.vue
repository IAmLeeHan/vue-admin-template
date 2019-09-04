<template>
  <div class="form_box_phone">
    <input
      id="phoneNumberID"
      ref="phoneNumber"
      v-model="newID"
      type="text"
      name="phoneNumber"
      placeholder="请输入手机号"
      class="phoneNumber"
      @keyup="phoneBlur"
      @blur="phoneBlur"
      @mouseup="phoneBlur"
    >
    <el-row class="testcode_box">
      <input
        ref="testcode"
        type="testcode"
        name="testcode"
        class="testcode"
        placeholder="请输入验证码"
      >
      <el-button
        :class="btnDisabled ? 'get_testcode_dis' : 'get_testcode'"
        :disabled="btnDisabled"
        @click="get_testcode_now"
      >
        {{ get_testcode }}
      </el-button>
    </el-row>

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

    <div
      class="Login_btn"
      @click="toApplying"
    >立即登录</div>

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
export default {
    data() {
        return {
            newID: '', //* 获取焦点
            testPhone: true, //* 验证手机号是否正确
            btnDisabled: false, //* 按钮禁用
            get_testcode: '获取验证码', //* 按钮显示
            timeOut: 60//* 倒计时
        }
    },
    mounted() {
        //* dom渲染自动获取焦点
        document.getElementById('phoneNumberID').focus()
    },
    methods: {

        toRegister() {
            this.$router.push('/register')
        },

        //* 失去焦点时判断手机号是否正确
        phoneBlur() {
            console.log(this.$refs.phoneNumber.value)
            const phoneNumber = this.$refs.phoneNumber.value
            if (/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(phoneNumber)) {
                //* 格式正确，返回
                this.testPhone = true
            } else {
                //* 格式错误，返回
                this.testPhone = false
            }
        },

        //* 获取验证码
        get_testcode_now() {
            if (this.testPhone) {
                this.btnDisabled = true
                if (this.btnDisabled) {
                    //* 将来会在这里写请求验证码的接口代码

                    //* 一分钟内禁止再次点击
                    const timer = setInterval(() => {
                        if (this.timeOut > 0) {
                            this.timeOut--
                            this.get_testcode = this.timeOut + '秒'
                        } else {
                            this.btnDisabled = false
                            clearTimeout(timer)
                            this.get_testcode = '重新获取'
                        }
                    }, 1000)
                    this.timeOut = 60
                }
            } else {
                this.testPhone = false
            }
        },
        toApplying() {
            this.$router.push({name:"applyingType"})
        }
    }
}
</script>

<style lang="scss" scoped>
    .phoneNumber{
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
    .testcode_box{
      width:326px;
      height: 50px;
      margin:30px auto 0;
      overflow: hidden;
      .testcode{
          float: left;
          width:200px;
          height:50px;
          border:1px solid rgba(199,204,209,1);
          border-radius:6px;
          padding-left: 30px;
          &:focus{
          outline: solid #448BD2;
          }
      }
      .get_testcode{
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
      .get_testcode_dis{
        float: left;
        width:110px;
        height:50px;
        background:#C2DFFF;
        border-radius:6px;
        margin-left: 16px;
        color:#606266;
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
        line-height: 50px;
        background:#C2DFFF;
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
