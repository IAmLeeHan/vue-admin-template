<template>
  <div class="Email_find_psw">
    <input
      id="ReEmailID"
      ref="Re_Email"
      v-model="ReNewID"
      type="text"
      name="Re_Email"
      placeholder="请输入邮箱"
      class="Re_Email"
      @keyup="Re_EmailBlur"
      @blur="Re_EmailBlur"
      @mouseup="Re_EmailBlur"
    >

    <div ref="dragDiv" class="drag">
      <div class="drag_bg" />
      <div class="drag_text">{{ confirmWords }}</div>
      <div ref="moveDiv" :class="{'handler_ok_bg':confirmSuccess}" class="handler handler_bg" style="position: absolute;top: 0px;left: 0px;" @mousedown="mousedownFn($event)" />
    </div>

    <button class="Email_btn">发送验证邮箱</button>

    <div
      class="errText"
      :class="[testEmail ? 'active' : '']"
    >
      <div class="tip_img_box">
        <img src="~img/tip-red.png" alt="">
      </div>
      <span
        class="testEmail"
      >
        请输入正确的邮箱账号！
      </span>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            ReNewID: '',
            beginClientX: 0, //* 距离屏幕左端距离
            mouseMoveStata: false, //* 触发拖动状态  判断
            maxwidth: '', //* 拖动最大宽度，依据滑块宽度算出来的
            confirmWords: '拖动滑块验证', //* 滑块文字
            confirmSuccess: false, //* 验证成功判断,
            testEmail: true
        }
    },
    mounted() {
        //* 加载页面获取焦点
        document.getElementById('ReEmailID').focus()

        //* 滑块验证
        this.maxwidth = this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth
        document.getElementsByTagName('html')[0].addEventListener('mousemove', this.mouseMoveFn)
        document.getElementsByTagName('html')[0].addEventListener('mouseup', this.moseUpFn)
    },
    methods: {

        //* 验证邮箱
        Re_EmailBlur() {
            const Email = this.$refs.Re_Email.value
            if (/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(Email)) {
                this.testEmail = true
            } else {
                this.testEmail = false
            }
        },
        mousedownFn(e) {
            if (this.$refs.Re_Email.value) {
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
        } //* mouseup事件
    }
}
</script>

<style lang="scss" scoped>
    .Email_find_psw{
        width:326px;
        .Re_Email{
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
        .Email_btn{
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
        .errText{
        width:100%;
        height: 26px;
        line-height: 26px;
        text-align: left;
        overflow: hidden;
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
</style>
