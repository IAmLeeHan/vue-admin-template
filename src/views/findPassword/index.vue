<template>
  <div>
    <Header />
    <div class="findPassword_box">
      <div
        class="findPassword_box_inter"
        :class="{EmailFind:isEmailFind}"
      >
        <div class="findPassword_form">
          <div class="findPassword_form_title_box">
            <span class="findPassword_form_title">
              忘记密码
            </span>
            <div
              class="findPassword_to_login_box"
              @click="ToLogin"
            >
              <span class="findPassword_to_login_text">返回登录</span>
              <div class="findPassword_to_login_img">
                <img src="~img/arrow.png" alt="">
              </div>
            </div>
          </div>

          <div class="findPassword_type_check">
            <span
              v-for="item in FindType"
              :key="item.id"
              class="fiedPassword_type"
              :class="{'active':type === item.type}"
              @click="type = item.type;changeFindType(type)"
            >{{ item.title }}</span>
            <div
              class="form_findPassword_box"
            >
              <PhoneNumberFind
                v-if="isPhoneNumberFind"
              />
              <EmailFind
                v-else
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import PhoneNumberFind from './PhoneNumberFind'
import EmailFind from './EmailFind'
import Footer from '@/components/Footer'
export default {
    components: { Header, PhoneNumberFind, EmailFind, Footer },
    data() {
        return {
            FindType: [
                { id: 13, title: '手机号找回', type: 'PhoneNumberFind' },
                { id: 14, title: '绑定邮箱找回', type: 'EmailFind' }
            ],
            type: 'PhoneNumberFind',
            isPhoneNumberFind: true,
            isEmailFind: false
        }
    },
    created() {
        if (this.type === 'PhoneNumberFind') {
            this.isPhoneNumberFind = true
        }
    },
    methods: {
        changeFindType(type) {
            if (this.type === 'PhoneNumberFind') {
                this.isPhoneNumberFind = true
                this.isEmailFind = false
            } else {
                this.isPhoneNumberFind = false
                this.isEmailFind = true
            }
        },
        ToLogin() {
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
    .findPassword_box{
        width:100%;
        height: 826px;
        position: relative;
        .findPassword_box_inter{
            width:520px;
            height: 678px;
            position: absolute;
            top:0;
            bottom: 0;
            left:0;
            right:0;
            margin:auto;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 43px 0px rgba(17,47,92,0.05);
            &.EmailFind{
                height: 420px;
            }
        }
        .findPassword_form{
            width:326px;
            height: 100%;
            margin: 0 auto;
            .findPassword_form_title_box{
                width:100%;
                height:36px;
                line-height: 36px;
                margin-top:42px;
                .findPassword_form_title{
                    float: left;
                    font-size:18px;
                    font-weight:900;
                    color:rgba(48,49,51,1);
                }
                .findPassword_to_login_box{
                    float: right;
                    cursor: pointer;
                    .findPassword_to_login_text{
                        float: left;
                        font-size: 14px;
                        color: #448BD2
                    }
                    .findPassword_to_login_img{
                        float: left;
                        width: 18px;
                        height: 18px;
                        margin-top:10px;
                        margin-left:10px;
                        img{
                            width:100%;
                            height: 100%;
                        }
                    }
                }
            }
            .findPassword_type_check{
                text-align: center;
                padding-top:42px;
                position: relative;
                .fiedPassword_type{
                    font-size: 18px;
                    color: #303133;
                    position: relative;
                    cursor: pointer;
                    &.active{
                        color:#448BD2;
                        position: relative;
                        transition: all 0.5s;
                    }
                }
                .fiedPassword_type:nth-of-type(2){
                    font-size: 18px;
                    color: #303133;
                    position: relative;
                    padding-left: 72px;
                    cursor: pointer;
                    &.active{
                        color:#448BD2;
                        position: relative;
                        transition: all 0.5s;
                    }
                }
            }
        }
    }
</style>
