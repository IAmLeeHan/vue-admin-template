<template>
  <div class="login_box">
    <span
      v-for="item in LoginType"
      :key="item.id"
      class="login_type"
      :class="{'active':type === item.type}"
      @click="type = item.type;changeLoginType(type)"
    >{{ item.title }}</span>
    <div
      class="form_input_box"
    >
      <AccountLogin
        v-if="isAccountLogin"
      />
      <PhoneLogin
        v-else
      />
    </div>
  </div>
</template>

<script>
import AccountLogin from './AccountLogin'
import PhoneLogin from './PhoneLogin'
export default {
    components: { AccountLogin, PhoneLogin },
    data() {
        return {
            LoginType: [
                { id: 10, title: '账号登录', type: 'accountLogin' },
                { id: 11, title: '动态登录', type: 'phoneLogin' }
            ],
            type: 'accountLogin',
            isAccountLogin: true
        }
    },
    created() {
        // location.reload();
        if (this.type === 'phoneLogin') {
            this.isAccountLogin = false
        }
        // console.log(this.type)
    },
    methods: {
        changeLoginType(type) {
            if (this.type === 'accountLogin') {
                this.isAccountLogin = true
            } else {
                this.isAccountLogin = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .login_box{
        text-align: center;
        padding-top:80px;
        position: relative;
        .login_type{
            font-size: 18px;
            color: #303133;
            padding: 0 45px;
            position: relative;
            cursor: pointer;
            &:after{
                content:'';
                width:74px;
                height: 2px;
                background: transparent;
                position: absolute;
                left: 40%;
                margin-left: -20px;
                bottom:-10px;
                transition: all 0.5s;
            }
        }
        .active{
                color:#448BD2;
                position: relative;
                transition: all 0.5s;
                &:after{
                    content: "";
                    background: #448BD2;
                    transition: all 0.5s;
                }
            }
        .form_input_box{
            width:326px;
            height: 568px;
            position: absolute;
            top:110px;
            left:96px;
        }
    }
</style>

