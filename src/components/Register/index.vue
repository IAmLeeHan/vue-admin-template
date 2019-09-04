<template>
  <div class="Register_box">
    <div class="Register_box_content">
      <span
        class="Register_box_title"
      >注册信用视界专业版</span>
      <input
        id="ReUsernameID"
        ref="Re_username"
        v-model="ReNewID"
        type="text"
        name="Re_username"
        placeholder="请输入手机号"
        class="Re_username"
        @keyup="Re_usernameBlur"
        @blur="Re_usernameBlur"
        @mouseup="Re_usernameBlur"
      >

      <!-- <div class="drag" ref="dragDiv">
                <div class="drag_bg"></div>
                <div class="drag_text">{{confirmWords}}</div>
                <div ref="moveDiv" @mousedown="mousedownFn($event)" :class="{'handler_ok_bg':confirmSuccess}" class="handler handler_bg" style="position: absolute;top: 0px;left: 0px;"></div>
            </div> -->
      <div id="register" class="nc-container" :class="!confirmIsShow ? 'hide' : ''" /> <!--No-Captcha渲染的位置，其中 class 中必须包含 nc-container-->

      <el-row class="Retestcode_box">
        <input
          ref="Retestcode"
          type="Retestcode"
          name="Retestcode"
          class="Retestcode"
          placeholder="请输入验证码"
        >
        <el-button
          :class="!confirmSuccess ? 'get_Retestcode_dis' : 'get_Retestcode'"
          :disabled="!confirmSuccess"
          @click="get_code_now"
        >
          {{ get_Retestcode }}
        </el-button>
      </el-row>

      <input
        ref="Repassword"
        type="password"
        name="Repassword"
        class="Repassword"
        placeholder="请输入密码"
        @keyup="Re_passwordBlur"
        @blur="Re_passwordBlur"
        @mouseup="Re_passwordBlur"
      >

      <!-- //*错误提示 -->
      <div
        v-if="isShow"
        class="errText"
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

      <!-- //*温馨提示 -->
      <div
        v-else
        class="Wx_Text_box"
      >
        <div class="tip_img_box_default">
          <img src="~img/tip.png" alt="">
        </div>
        <span
          class="wx_text"
        >
          {{ RePasswordText }}
        </span>
      </div>

      <button
        class="Register_btn"
        @click="register_btn"
      >立即注册</button>
        <!-- `checked` 为 true 或 false -->
      <el-checkbox v-model="checked">阅读并同意<a href="" style="color:#448BD2">《信用视界专业版用户服务协议》</a></el-checkbox>
      <p
        class="toLogin"
        @click="toLogin"
      >已有账号？前往登录></p>
    </div>
  </div>
</template>

<script>
import {getPhoneCode} from '@/api/common'
import { register } from '@/api/register'
export default {
    data() {
        return {
            ReNewID: '',
            isShow: false, //* 验证手机号格式
            confirmIsShow: true,
            checked:false,

            //* 滑块验证
            confirmSuccess: false, //* 验证成功判断
            get_Retestcode: '发送验证码',
            timeOut: 60,
            RePasswordText: '密码是6位及以上的字母-数字组合',
            reload: true,
            scene: null,
            sessionId: null,
            sig: null,
            token: null
        }
    },
    mounted() {
        this.init()
        const phoneNumber = this.$refs.Re_username.value
        if (phoneNumber) {
            this.confirmIsShow = true
        } else {
            console.log('meishu')
            this.confirmIsShow = false
        }

        //* 加载页面获取焦点
        document.getElementById('ReUsernameID').focus()
    },
    methods: {
        //* toLogin
        toLogin() {
            this.$router.push('/login')
        },
        register_btn() {
          if(this.checked){

            const code = this.$refs.Retestcode.value
            const password = this.$refs.Repassword.value
            const phone = this.$refs.Re_username.value
            const data = {
                code: code,
                password: password,
                phone: phone,
                scene: 'nc_register',
                sessionId: this.sessionId,
                sig: this.sig,
                token: this.token
            }
            console.log('data', data)
    
            register(data).then(res => {
                console.log('注册res', res)
            })
          }else{
            this.$message({
              type:"error",
              message:"请阅读并同意《信用视界专业版用户服务协议》"
            })
          }
        },

        //* 判断手机号
        Re_usernameBlur() {
            const phoneNumber = this.$refs.Re_username.value
            if (/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(phoneNumber)) {
                this.isShow = false
                this.confirmIsShow = true
            } else {
                this.isShow = true
                this.confirmIsShow = false
            }
        },

        //* 判断密码
        Re_passwordBlur() {
            const RePassword = this.$refs.Repassword.value
            if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(RePassword)) {
                this.RePasswordText = '密码可用'
            } else {
                this.RePasswordText = '密码非纯字母或数字且不小于6位'
            }
        },
        get_code_now() {
            if (this.confirmSuccess) {
                //* 将来会在这里写请求验证码的接口代码
                const phone = this.$refs.Re_username.value
                console.log('phone', phone)
                const data = {
                    phone: phone,
                    yt: '2'
                }
                console.log('params', data)
                getPhoneCode(data).then(res => {
                    console.log('手机验证码res', res)
                    if(res.code==="200"){
                      //* 一分钟内禁止再次点击
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

            }
        },
        init() {
            var _this = this
            //* 阿里云集成的js
            var nc_token = ['FFFF0N0000000000829D', (new Date()).getTime(), Math.random()].join(':')
            var NC_Opt =
            {
                renderTo: '#register',
                appkey: 'FFFF0N0000000000829D',
                scene: 'nc_register',
                token: nc_token,
                customWidth: 326,
                trans: { 'key1': 'code0' },
                elementID: ['usernameID'],
                is_Opt: 0,
                language: 'cn',
                isEnabled: true,
                timeout: 3000,
                times: 5,
                apimap: {
                    // 'analyze': '//a.com/nocaptcha/analyze.jsonp',
                    // 'get_captcha': '//b.com/get_captcha/ver3',
                    // 'get_captcha': '//pin3.aliyun.com/get_captcha/ver3'
                    // 'get_img': '//c.com/get_img',
                    // 'checkcode': '//d.com/captcha/checkcode.jsonp',
                    // 'umid_Url': '//e.com/security/umscript/3.2.1/um.js',
                    // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
                    // 'umid_serUrl': 'https://g.com/service/um.json'
                },
                callback: function(data) {
                    // console.log('阿里云返回的数据', data)
                    // window.console && console.log(nc_token)
                    // window.console && console.log(data.csessionid)
                    // window.console && console.log(data.sig)
                    // console.log('this.confirmSuccess', _this)
                    _this.confirmSuccess = true
                    _this.sessionId = data.csessionid
                    _this.sig = data.sig
                    _this.token = nc_token
                }
            }
            var nc = new noCaptcha(NC_Opt)
            nc.upLang('cn', {
                _startTEXT: '请按住滑块，拖动到最右边',
                _yesTEXT: '验证通过',
                _error300: '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
                _errorNetwork: '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .Register_box_content{
        width:326px;
        margin: 0 auto;
        text-align: center;
        .Register_box_title{
            display: block;
            font-size:18px;
            color:rgba(68,139,210,1);
            margin-top:80px;
        }
        .Re_username{
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
        .errText{
            width:100%;
            height: 26px;
            line-height: 26px;
            text-align: left;
            overflow: hidden;
            margin-top:10px;
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
        .Wx_Text_box{
            width:100%;
            height: 26px;
            line-height: 26px;
            text-align: left;
            overflow: hidden;
            margin-top:10px;
            .tip_img_box_default{
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
        /deep/.nc-container{
            margin-top:20px;
            &.hide{
                display: none;
            }
            #nc_1_wrapper{
                width:326px!important;
                height: 40px!important;
                .nc_scale{
                    height: 40px!important;
                    .btn_slide{
                        width:60px!important;
                        height: 40px!important;
                        line-height: 40px!important;
                    }
                    .btn_ok{
                        width:60px!important;
                        height: 40px!important;
                        line-height: 40px!important;
                    }
                    .scale_text{
                        line-height: 40px!important;
                    }
                }
            }
        }
        .Retestcode_box{
            width:326px;
            height: 50px;
            margin:20px auto 0;
            overflow: hidden;
            .Retestcode{
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
        .Repassword{
            display: block;
            width:326px;
            height:50px;
            border:1px solid rgba(199,204,209,1);
            border-radius:6px;
            padding-left: 30px;
            margin:20px auto 0;
            &:focus{
            outline: solid #448BD2;
            }
        }
        .Register_btn{
            width:326px;
            height:50px;
            background:rgba(68,139,210,1);
            border-radius:6px;
            margin:50px auto 0;
            padding: 0;
            border: 0;
            font-size:18px;
            color:rgba(255,255,255,1);
            cursor: pointer;
        }
        /deep/.el-checkbox{
          margin:10px 0 0 -50px;
        }
        .toLogin{
        color: #448BD2;
        font-size: 16px;
        height: 16px;
        cursor: pointer;
        margin-top: 30px;
    }
    }
</style>
