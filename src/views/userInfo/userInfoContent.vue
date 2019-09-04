<template>
  <div class="user_info_content_box">
    <div class="user_info_content_title">
      <span />
      <p>基本信息</p>
      <img
        src="~img/edit.png"
        alt=""
        @click="userInfoEdit"
      >
    </div>

    <div class="user_info_content">
      <div class="user_info_content_img">
        <img src="~img/default.png" alt="">
      </div>
      <div class="user_info_content_mse_box">
        <div class="user_info_content_name">
          <span>{{userInfo.name}}</span>
          <span v-if="userInfo.sex === 0" style="padding-left:10px;font-size:16px;font-weight:500;">性别未定义</span>
          <img v-if="userInfo.sex === 1" src="~img/boy.png" alt="">
          <img v-if="userInfo.sex === 2" src="~img/girl.png" alt="">
        </div>
        <div class="user_info_content_phone">
          <img src="~img/iphone.png" alt="">
          <span>{{userInfo.phone}}</span>
        </div>
        <div class="user_info_content_email">
          <img src="~img/mail.png" alt="">
          <span>{{userInfo.email}}</span>
        </div>
        <div v-if="userInfo.WX " class="user_info_content_wechat">
          <img src="~img/chat.png" alt="">
          <span>{{userInfo.WX}}</span>
        </div>
      </div>
      <div class="user_info_change">
        <div 
          class="user_info_content_btn_phone"
          @click="VerifyPhone=true"
        >更换手机号</div>
        <div v-if="userInfo.email" class="user_info_content_btn_email"
          @click="changeEmail=true"
        >更换邮箱</div>
        <div
          v-else
          class="user_info_content_btn_email"
        >
          <img src="~img/add_01.png" alt="">
          <span>绑定</span>
        </div>
      </div>
    </div>

    <div class="user_info_position_title">
      <span />
      <p>基本信息</p>
    </div>

    <div class="user_info_position_content">
      <div class="user_info_position_content_item">
        <label for="user_info_position_content_input">姓名：</label>
        <el-input
          id="user_info_position_content_input"
          v-model="userInfo.orgUserName"
          :placeholder="userInfo.orgUserName"
          class="user_info_position_content_input"
          :disabled="true"
        />
      </div>
      <div class="user_info_position_content_item">
        <label for="user_info_position_content_input">所属公司：</label>
        <el-input
          id="user_info_position_content_input"
          v-model="userInfo.company"
          :placeholder="userInfo.company"
          class="user_info_position_content_input"
          :disabled="true"
        />
      </div>
      <div class="user_info_position_content_item">
        <label for="user_info_position_content_input">工号：</label>
        <el-input
          id="user_info_position_content_input"
          v-model="userInfo.companyNumber"
          :placeholder="userInfo.companyNumber"
          class="user_info_position_content_input"
          :disabled="true"
        />
      </div>
      <div class="user_info_position_content_item">
        <label for="user_info_position_content_input">所属部门：</label>
        <el-input
          id="user_info_position_content_input"
          v-model="userInfo.department"
          :placeholder="userInfo.department"
          class="user_info_position_content_input"
          :disabled="true"
        />
      </div>
      <div class="user_info_position_content_item">
        <label for="user_info_position_content_input">职位：</label>
        <el-input
          id="user_info_position_content_input"
          v-model="userInfo.position"
          :placeholder="userInfo.position"
          class="user_info_position_content_input"
          :disabled="true"
        />
      </div>
    </div>
    <TestPhoneNumber
      v-if="VerifyPhone"
      :verify-phone="VerifyPhone"
      @goNext="goNext"
      @close_t_box="close_t_box"
    />
    <NewPhoneNumber
      v-if="VerifyPhoneD"
      @close_n_box="close_n_box"
    />
    <changeEmailNumber
      v-if="changeEmail"
      :change-email="changeEmail"
      @changeEmail_btn="changeEmail_btn"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TestPhoneNumber from '@/components/changePhoneNumber/TestPhoneNumber'
import NewPhoneNumber from '@/components/changePhoneNumber/NewPhoneNumber'
import changeEmailNumber from '@/components/changeEmailNumber'
export default {
    components: { TestPhoneNumber, NewPhoneNumber, changeEmailNumber },
    data() {
        return {
          VerifyPhone: false,
          VerifyPhoneD: false,
          changeEmail: false
        }
    },
    created(){
      console.log("getters",this.$store.getters)
    },
    computed:{...mapGetters(['userInfo'])},
    methods: {
        userInfoEdit() {
            this.$router.push({ name: 'userInfoEdit' })
        },
        goNext(res) {
            console.log('子组件传的', res)
            this.VerifyPhoneD = res
            this.VerifyPhone = !res
        },
        changeEmail_btn(res) {
            this.changeEmail = res
        },
        close_t_box(res) {
            this.VerifyPhone = res
        },
        close_n_box(res) {
            this.VerifyPhoneD = res
        }
    }
}
</script>

<style lang="scss" scoped>
    .user_info_content_box{
        width:1200px;
        height:844px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(223,230,236,1);
        border-radius:10px;
        margin:80px auto 20px;
        overflow: hidden;
        .user_info_content_title{
            width:100%;
            float: left;
            margin:50px 0 0 100px;
            font-size: 18px;
            color:#303133;
            font-weight: 800;
            text-indent: 10px;
            span{
                float: left;
                width:4px;
                height:18px;
                margin-top:4px;
                background:rgba(68,139,210,1);
            }
            p{
                float: left;
                height: 24px;
                line-height: 24px;
            }
            img{
                float: left;
                width:24px;
                height: 24px;
                margin-left: 10px;
                cursor: pointer;
            }
        }
        .user_info_content{
            margin:46px 0 0 200px;
            width:100%;
            float: left;
            .user_info_content_img{
                width:170px;
                height: 170px;
                float: left;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .user_info_content_mse_box{
                float: left;
                margin-left:100px;
                .user_info_content_name{
                    font-size: 18px;
                    color:#303133;
                    font-weight: 700;
                    overflow: hidden;
                    span{
                        float: left;
                    }
                    img{
                        width:18px;
                        height: 18px;
                        float: left;
                        margin-left: 10px;
                    }
                }
                .user_info_content_phone{
                    margin-top:30px;
                    overflow: hidden;
                    img{
                        width:18px;
                        height: 28px;
                        float: left;
                        margin:0 4px;
                    }
                    span{
                        float:left;
                        height: 28px;
                        line-height: 28px;
                        font-size: 16px;
                        color: #303133;
                        padding-left: 16px;
                    }
                }
                .user_info_content_email{
                    margin-top:30px;
                    overflow: hidden;
                    img{
                        width:24px;
                        height: 18px;
                        float: left;
                    }
                    span{
                        float:left;
                        height: 18px;
                        line-height: 18px;
                        font-size: 16px;
                        color: #303133;
                        padding-left: 16px;
                    }
                }
                .user_info_content_wechat{
                    margin-top:30px;
                    overflow: hidden;
                    img{
                        width:26px;
                        height: 22px;
                        float: left;
                    }
                    span{
                        float:left;
                        height: 22px;
                        line-height: 22px;
                        font-size: 16px;
                        color: #303133;
                        padding-left: 16px;
                    }
                }
            }
            .user_info_change{
                float: left;
                margin-left:40px;
                .user_info_content_btn_phone{
                    width:110px;
                    height:40px;
                    border:1px solid rgba(144,147,153,1);
                    border-radius:6px;
                    margin-top:46px;
                    font-size: 14px;
                    color: #303133;
                    text-align: center;
                    line-height: 40px;
                    cursor: pointer;
                }
                .user_info_content_btn_email{
                    width:110px;
                    height:40px;
                    border:1px solid rgba(144,147,153,1);
                    border-radius:6px;
                    margin-top:14px;
                    font-size: 14px;
                    color: #303133;
                    text-align: center;
                    line-height: 40px;
                    cursor: pointer;
                    img{
                        float: left;
                        width:14px;
                        height: 14px;
                        margin:12px 8px 0 30px;
                    }
                    span{
                        float: left;
                        color:#448BD2;
                    }
                }
            }
        }
        .user_info_position_title{
            width:100%;
            float: left;
            margin:80px 0 0 100px;
            font-size: 18px;
            color:#303133;
            font-weight: 800;
            text-indent: 10px;
            span{
                float: left;
                width:4px;
                height:18px;
                margin-top:4px;
                background:rgba(68,139,210,1);
            }
            p{
                float: left;
                height: 24px;
                line-height: 24px;
            }
            img{
                float: left;
                width:24px;
                height: 24px;
                margin-left: 10px;
            }
        }
        .user_info_position_content{
            margin:50px 0 0 200px;
            width:100%;
            float: left;
            .user_info_position_content_item{
                height:44px;
                line-height: 44px;
                margin-bottom:30px;
                label{
                    float: left;
                    width: 100px;
                    font-size: 16px;
                    color: #606266;
                    font-weight: 500;
                }
                .user_info_position_content_input{
                    float: left;
                    width:350px;
                    height: 44px;
                    /deep/.el-input__inner{
                        height: 44px;
                        border:1px solid rgba(199,204,209,1);
                        border-radius:6px;
                        background: #fff;
                        padding-left:20px;
                    }
                }
            }
        }
    }
</style>
