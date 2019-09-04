<template>
  <div class="user_info_box">
    <div class="user_info">
      <div class="user_info_header">
        <span class="user_info_title">基本信息 / 编辑资料</span>
        <div
          class="user_info_exit"
          @click="go_back"
        >
          <span>返回</span>
          <div class="user_info_exit_img">
            <img src="~img/arrow_01.png" alt="">
          </div>
        </div>
      </div>
      <div class="user_info_content">
        <div class="user_info_content_head_portrait">
          <span>头像：</span>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
            <el-button>更换头像</el-button>
          </el-upload>
        </div>
        <div class="user_info_content_username">
          <label for="username">用户名：</label>
          <input type="text" :placeholder="userInfo.name">
        </div>
        <div class="user_info_content_sex">
          <span>姓别：</span>
          <el-radio v-model="radio" label='1'>男</el-radio>
          <el-radio v-model="radio" label='2'>女</el-radio>
        </div>
        <div class="user_info_content_chat">
          <div class="user_info_content_phone">
            <span>手机号：</span>
            <span>邮箱：</span>
          </div>
          <div class="user_info_content_email">
            <p>{{userInfo.phone}}</p>
            <p>{{userInfo.email}}</p>
          </div>
          <div class="user_info_content_btn">
            <div
              @click="VerifyPhone=true"
            >更换手机号</div>
            <div
              @click="VerifyPhone=true"
            >更换邮箱</div>
          </div>
        </div>
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
import TestPhoneNumber from '@/components/changePhoneNumber/TestPhoneNumber'
import NewPhoneNumber from '@/components/changePhoneNumber/NewPhoneNumber'
import changeEmailNumber from '@/components/changeEmailNumber'
import {mapGetters} from 'vuex'
export default {
    components: { TestPhoneNumber, NewPhoneNumber, changeEmailNumber },
    data() {
        return {
            checked: false,
            imageUrl: require('img/default.png'),
            VerifyPhone: false,
            VerifyPhoneD: false,
            changeEmail: false,
            radio:''
        }
    },
    computed:{...mapGetters(['userInfo'])},
    created(){
      console.log('getters',this.userInfo)
      this.radio = this.userInfo.sex.toString()
    },
    methods: {
        go_back() {
            this.$router.back(-1)
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw)
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg'
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
        goNext(res) {
            console.log('子组件传的', res)
            this.VerifyPhoneD = res
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

<style lang="scss">
    .avatar-uploader{
        float:left;
        margin-left:60px;
        position: relative;
        .el-button{
            position: absolute;
            z-index: 9999;
            width:110px;
            height:40px;
            border:1px solid rgba(144,147,153,1);
            border-radius:6px;
            text-align: center;
            float: left;
            color: #303133;
            cursor: pointer;
            top:0px;
            left: 160px;
            // span{
            //     position: relative;
            //     top:0;
            //     left:0;
            //     bottom:0;
            //     right:0;
            //     margin:auto;
            // }
        }
    }
  .avatar-uploader .el-upload {
    /* border: 1px dashed #d9d9d9; */
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    // overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>

<style lang="scss" scoped>
    .user_info_box{
        width:100%;
        background:#f9f9f9;
        overflow: hidden;
        .user_info{
            width:1200px;
            height:840px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(223,230,236,1);
            border-radius:10px;
            margin:80px auto 20px;
            .user_info_header{
                width:1200px;
                height:50px;
                background:rgba(245,247,250,1);
                border-radius:10px 10px 0 0;
                .user_info_title{
                    float: left;
                    height: 50px;
                    line-height: 50px;
                    color: #303133;
                    font-size: 18px;
                    font-weight: 900;
                    text-indent: 20px;
                }
                .user_info_exit{
                    float: right;
                    height: 50px;
                    line-height: 50px;
                    color:#606266;
                    font-size: 14px;
                    cursor: pointer;
                    span{
                        float: left;
                    }
                    .user_info_exit_img{
                        float: left;
                        width: 18px;
                        height: 18px;
                        margin:16px 20px 0 10px;
                        img{
                            width:100%;
                            height: 100%;
                        }
                    }
                }
            }
            .user_info_content{
                margin:50px 0 0 100px;
                position: relative;
                .user_info_content_head_portrait{
                    width:100%;
                    float: left;
                    span{
                        font-size: 16px;
                        color: #606266;
                        float: left;
                    }
                }
                .user_info_content_username{
                    width:100%;
                    height: 44px;
                    line-height: 44px;
                    float: left;
                    margin-top:50px;
                    label{
                        font-size: 16px;
                        color: #606266;
                        float: left;
                        font-weight: 500;
                    }
                    input{
                        float: left;
                        width:350px;
                        height: 44px;
                        margin-left: 46px;
                        border:1px solid rgba(199,204,209,1);
                        border-radius:6px;
                        color: #303133;
                        padding-left: 20px;
                    }
                }
                .user_info_content_sex{
                    width:100%;
                    float: left;
                    margin-top:50px;
                    font-size: 16px;
                    color:#303133;
                    span{
                        color: #606266;
                        padding-right:60px;
                    }
                    /deep/.el-checkbox{
                        margin-right: 50px;
                        .el-checkbox__inner{
                            width:16px;
                            height: 16px;
                            border-radius: 50%;
                        }
                    }
                }
                .user_info_content_chat{
                    width:100%;
                    float: left;
                    .user_info_content_phone{
                        float: left;
                        height: 16px;
                        line-height: 16px;
                        margin-top:50px;
                        span{
                            width:70px;
                            display: block;
                            color: #606266;
                            font-size: 16px;
                        }
                        span:last-child{
                            padding-top:50px;
                        }
                    }
                    .user_info_content_email{
                        float: left;
                        height: 16px;
                        line-height: 16px;
                        margin-top:50px;
                        p{
                            color: #303133;
                            font-size: 16px;
                            margin-left: 40px;
                        }
                        p:last-child{
                            padding-top:50px;
                        }
                    }
                    .user_info_content_btn{
                        float: left;
                        div{
                            width:110px;
                            height:40px;
                            border:1px solid rgba(144,147,153,1);
                            border-radius:6px;
                            text-align: center;
                            line-height: 40px;
                            color: #303133;
                            font-size: 16px;
                            cursor: pointer;
                            margin-left: 20px;
                            margin-top:35px;
                        }
                        div:first-child{
                            margin-bottom:22px;
                        }
                    }
                }
            }
        }
    }
</style>
