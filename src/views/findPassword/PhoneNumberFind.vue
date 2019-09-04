<template>
  <div class="phoneNumber_find_psw">
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

    <div ref="dragDiv" class="drag">
      <div class="drag_bg" />
      <div class="drag_text">{{ confirmWords }}</div>
      <div ref="moveDiv" :class="{'handler_ok_bg':confirmSuccess}" class="handler handler_bg" style="position: absolute;top: 0px;left: 0px;" @mousedown="mousedownFn($event)" />
    </div>

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

    <input
      ref="Ispassword"
      type="password"
      name="Ispassword"
      class="Ispassword"
      placeholder="确认密码"
      @keyup="Is_passwordBlur"
      @blur="Is_passwordBlur"
      @mouseup="Is_passwordBlur"
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
        {{ passwordCheck }}
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
        {{ RepasswordText }}
      </span>
    </div>

    <button class="Register_btn">确定</button>

  </div>
</template>

<script>
export default {
    data() {
        return {
            ReNewID: '',
            isShow: false, //* 验证手机号格式

            //* 滑块验证
            beginClientX: 0, //* 距离屏幕左端距离
            mouseMoveStata: false, //* 触发拖动状态  判断
            maxwidth: '', //* 拖动最大宽度，依据滑块宽度算出来的
            confirmWords: '拖动滑块验证', //* 滑块文字
            confirmSuccess: false, //* 验证成功判断
            get_Retestcode: '发送验证码',
            timeOut: 60,
            Repassword: null,
            RepasswordText: '密码是6位及以上的字母-数字组合',
            passwordCheck: '请输入正确的手机号'
        }
    },
    mounted() {
        //* 加载页面获取焦点
        document.getElementById('ReUsernameID').focus()

        //* 滑块验证
        this.maxwidth = this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth
        document.getElementsByTagName('html')[0].addEventListener('mousemove', this.mouseMoveFn)
        document.getElementsByTagName('html')[0].addEventListener('mouseup', this.moseUpFn)
    },
    methods: {
        //* toLogin
        toLogin() {
            this.$router.push('/login')
        },

        //* 判断手机号
        Re_usernameBlur() {
            const phoneNumber = this.$refs.Re_username.value
            if (/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(phoneNumber)) {
                this.isShow = false
            } else {
                this.isShow = true
            }
        },

        //* 判断密码
        Re_passwordBlur() {
            this.Repassword = this.$refs.Repassword.value
            if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(this.Repassword)) {
                console.log('111111111111111111')
                this.RepasswordText = '密码可用'
            } else {
                this.RepasswordText = '密码非纯字母或数字且不小于6位'
            }
        },

        Is_passwordBlur() {
            const Ispassword = this.$refs.Ispassword.value
            if (Ispassword === this.Repassword) {
                this.isShow = false
                this.RepasswordText = '密码正确'
            } else {
                this.isShow = true
                this.passwordCheck = '两次密码不一致'
            }
        },

        mousedownFn(e) {
            if (this.$refs.Re_username.value) {
                if (!this.confirmSuccess) {
                    e.preventDefault && e.preventDefault() //* 阻止文字选中等 浏览器默认事件
                    this.mouseMoveStata = true
                    this.beginClientX = e.clientX
                }
            }
        }, //* mousedoen 事件
        successFunction() {
            this.confirmSuccess = true
            this.confirmWords = '验证通过'
            if (window.addEventListener) {
                document.getElementsByTagName('html')[0].removeEventListener('mousemove', this.mouseMoveFn)
                document.getElementsByTagName('html')[0].removeEventListener('mouseup', this.moseUpFn)
            } else {
                document.getElementsByTagName('html')[0].removeEventListener('mouseup', () => {})
            }
            document.getElementsByClassName('drag_text')[0].style.color = '#fff'
            document.getElementsByClassName('handler')[0].style.left = this.maxwidth + 'px'
            document.getElementsByClassName('drag_bg')[0].style.width = this.maxwidth + 'px'
        }, //* 验证成功函数
        mouseMoveFn(e) {
            if (this.mouseMoveStata) {
                const width = e.clientX - this.beginClientX
                if (width > 0 && width <= this.maxwidth) {
                    document.getElementsByClassName('handler')[0].style.left = width + 'px'
                    document.getElementsByClassName('drag_bg')[0].style.width = width + 'px'
                } else if (width > this.maxwidth) {
                    this.successFunction()
                }
            }
        }, //* mousemove事件
        moseUpFn(e) {
            this.mouseMoveStata = false
            var width = e.clientX - this.beginClientX
            if (width < this.maxwidth) {
                document.getElementsByClassName('handler')[0].style.left = 0 + 'px'
                document.getElementsByClassName('drag_bg')[0].style.width = 0 + 'px'
            }
        }, //* mouseup事件
        get_code_now() {
            if (this.confirmSuccess) {
                //* 将来会在这里写请求验证码的接口代码

                //* 一分钟内禁止再次点击
                const timer = setInterval(() => {
                    if (this.timeOut > 0) {
                        this.timeOut--
                        this.get_Retestcode = this.timeOut + '秒'
                    } else {
                        this.btnDisabled = false
                        clearTimeout(timer)
                        this.get_Retestcode = '重新获取'
                    }
                }, 1000)
                this.timeOut = 60
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .phoneNumber_find_psw{
        width:326px;
        height: 545px;
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
        .drag{
            position: relative;
            background-color: #e8e8e8;
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            top:20px;
        }
        .handler{
            width: 40px;
            height: 40px;
            border: 1px solid #ccc;
            cursor: move;
        }
        .handler_bg{
            background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==") no-repeat center;
        }
        .handler_ok_bg{
            background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==") no-repeat center;
            background-size: 26px 26px;
        }
        .drag_bg{
            background-color: #7ac23c;
            height: 40px;
            width: 0px;
        }
        .drag_text{
            position: absolute;
            top: 0px;
            width: 100%;text-align: center;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            -o-user-select:none;
            -ms-user-select:none;
        }
        .Retestcode_box{
            width:326px;
            height: 50px;
            margin:40px auto 0;
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
        .Ispassword{
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
    }
</style>

