<template>
  <div class="create_enterprise_shadow">
    <div class="create_enterpris_box">
      <div class="create_enterpris_title_box">
        <span class="create_enterpris_title">创建企业客户</span>
        <div
          class="create_enterpris_back"
          @click="go_back"
        >
          <span>返回</span>
          <div class="create_enterpris_back_icon">
            <img src="~img/arrow.png" alt="">
          </div>
        </div>
      </div>
      <div class="create_enterpris_form_box">
        <div class="create_enterpris_item">
          <label for="enterpriseName"><i>*</i>企业名称:</label>
          <input id="enterpriseName" type="text" name="enterpriseName" placeholder="请输入并匹配企业名称">
        </div>
        <div class="create_enterpris_item">
          <label for="UnifiedSocialCreditCode"><i>*</i>统一社会信用代码:</label>
          <input id="UnifiedSocialCreditCode" type="text" name="UnifiedSocialCreditCode" placeholder="请输入统一社会信用代码">
        </div>
        <div class="create_enterpris_item">
          <label for="legalPersonName"><i>*</i>法人姓名:</label>
          <input id="legalPersonName" type="text" name="legalPersonName" placeholder="请输入法人姓名">
        </div>
        <div class="create_enterpris_item">
          <label for="LegalPersonIdNumber"><i>*</i>法人身份证号:</label>
          <input id="LegalPersonIdNumber" type="text" name="LegalPersonIdNumber" placeholder="请输入法人身份证号">
        </div>
        <div class="create_enterpris_authorization">
          <p><i>*</i>企业授权书:</p>
          <div class="create_enterpris_authorization_update">
            <span>下载授权模板</span>
            <!-- <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        </el-upload> -->
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              drag
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <div
                v-else
                class="upload_hint"
              >
                <img src="~img/upload.png" alt="">
                <p class="el-upload__text">将文件拖到此处，或<em>点击上传</em></p>
              </div>
            </el-upload>
          </div>
        </div>
        <div
         class="create_enterpris_submit"
          @click="toSuccess"
        >
          申请创建
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: ''
        }
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw)
        },
        //   beforeAvatarUpload(file) {
        //     const isJPG = file.type === 'image/jpeg';
        //     const isLt2M = file.size / 1024 / 1024 < 2;

        //     if (!isJPG) {
        //       this.$message.error('上传头像图片只能是 JPG 格式!');
        //     }
        //     if (!isLt2M) {
        //       this.$message.error('上传头像图片大小不能超过 2MB!');
        //     }
        //     return isJPG && isLt2M;
        //   },
        go_back() {
            this.$router.back(-1)
        },
        toSuccess(){
          this.$router.push({name:"applyingFinished"})
        }
    }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<style lang="scss" scoped>
    .create_enterprise_shadow{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        background: rgba(0,0,0,.5);
        z-index: 9999;
        .create_enterpris_box{
            width:680px;
            height:744px;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 43px 0px rgba(17,47,92,0.05);
            position: fixed;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
            .create_enterpris_title_box{
                width:520px;
                margin:50px auto 0;
                height:20px;
                line-height: 20px;
                .create_enterpris_title{
                    float: left;
                    color: #303133;
                    font-size: 18px;
                    font-weight: 900;
                }
                .create_enterpris_back{
                    float: right;
                    cursor: pointer;
                    span{
                        float: left;
                        padding-right: 10px;
                        color: #448BD2;
                        font-size: 14px;
                    }
                    .create_enterpris_back_icon{
                        float: left;
                        width: 18px;
                        height: 18px;
                        margin-right: 30px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
        .create_enterpris_form_box{
            width:520px;
            margin:20px auto 0;
            overflow: hidden;
            .create_enterpris_item{
                height: 44px;
                margin-top:30px;
                line-height: 44px;
                label{
                    display: inline-block;
                    width:168px;
                    font-size: 16px;
                    color: #606266;
                    float: left;
                    font-weight: 500;
                    i{
                        color:#FA3C3C;
                    }
                }
                input{
                    width:350px;
                    height: 44px;
                    border:1px solid rgba(199,204,209,1);
                    border-radius:6px;
                    padding-left: 20px;
                    float: left;
                }
            }
            .create_enterpris_authorization{
                margin-top:30px;
                p{
                    float: left;
                    width:158px;
                    font-size: 16px;
                    color: #606266;
                    i{
                        color:#FA3C3C;
                    }
                }
                .create_enterpris_authorization_update{
                    float: right;
                    width:350px;
                    height: 240px;
                    span{
                        display: block;
                        font-size: 16px;
                        color:#448BD2;
                        margin-bottom: 20px;
                        font-weight: 700;
                    }
                    /deep/.el-upload-dragger{
                            width:345px;
                            height: 135px;
                            border: none;
                            .avatar{
                                width:100%;
                                height: 100%;
                            }
                        }
                    .upload_hint{
                        width:350px;
                        img{
                            margin:28px auto;
                        }
                        p{
                            width:350px;
                            text-align: center;
                        }
                    }
                }
            }
            .create_enterpris_submit{
                background: #448BD2;
                width:518px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-size: 16px;
                color: #fff;
                margin:50px auto;
                position: absolute;
                bottom: 0px;
                border-radius: 6px;
            }
        }
    }
</style>
