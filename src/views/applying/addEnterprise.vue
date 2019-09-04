<template>
  <div class="add_enterprise_shadow">
    <div class="add_enterpris_box">
      <div class="add_enterpris_title_box">
        <span class="add_enterpris_title">申请加入企业</span>
        <div
          class="add_enterpris_back"
          @click="go_back"
        >
          <span>返回</span>
          <div class="add_enterpris_back_icon">
            <img src="~img/arrow.png" alt="">
          </div>
        </div>
      </div>
      <div class="add_enterpris_form_box">
        <div class="add_enterpris_item">
          <label for="enterpriseCode"><i>*</i>企业邀请码:
            <el-tooltip class="item" effect="light" :content="tipContent" placement="top-start">
              <i class="iconfont icon-wenhaoyuanyiwenxianxing"></i>
            </el-tooltip>
          </label>
          <el-input
            id="enterpriseCode"
            type="text"
            name="enterpriseCode"
            placeholder="请输入企业邀请码"
          />
        </div>
        <div class="add_enterpris_item">
          <label for="enterpriseName"><i>*</i>对应企业名称:</label>
          <el-input
            id="enterpriseName"
            :disabled="true"
            type="text"
            name="enterpriseName"
            placeholder="对应企业名称"
          />
        </div>
        <div class="add_enterpris_item">
          <label for="UserName"><i>*</i>姓名:</label>
          <el-input
            id="UserName"
            :disabled="true"
            type="text"
            name="UserName"
            placeholder="姓名"
          />
        </div>
        <div class="add_enterpris_area">
          <p for="applyInfo"><i>*</i>申请说明:</p>
          <div class="applyInfoArea">
            <el-input
              v-model="textarea"
              type="textarea"
              placeholder="请输入申请说明"
              maxlength="30"
              show-word-limit
            />
          </div>
        </div>
        <div 
          class="add_enterpris_submit"
          @click="toSuccess"
        >
          立即申请
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            textarea: '',
            tipContent:"企业邀请码是企业账户的识别码，通过该邀请码识别你的企业并申请加入。企业邀请码在企业管理员的【管理中心】-【企业账户】中查看，你可以跟所属企业的企业管理员索要企业邀请码。"
        }
    },
    methods: {
        go_back() {
            this.$router.back(-1)
        },
        toSuccess(){
            this.$router.push({name:"applyingFinished"})
        }
    }
}
</script>

<style lang="scss" scoped>
    .add_enterprise_shadow{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        background: rgba(0,0,0,.5);
        z-index: 9998;
        .add_enterpris_box{
            width:680px;
            height:660px;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 43px 0px rgba(17,47,92,0.05);
            position: fixed;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
            .add_enterpris_title_box{
                width:520px;
                margin:50px auto 0;
                height:20px;
                line-height: 20px;
                .add_enterpris_title{
                    float: left;
                    color: #303133;
                    font-size: 18px;
                    font-weight: 900;
                }
                .add_enterpris_back{
                    float: right;
                    cursor: pointer;
                    span{
                        float: left;
                        padding-right: 10px;
                        color: #448BD2;
                        font-size: 14px;
                    }
                    .add_enterpris_back_icon{
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
        .add_enterpris_form_box{
            width:520px;
            margin:20px auto 0;
            overflow: hidden;
            .add_enterpris_item{
                height: 44px;
                margin-top:30px;
                line-height: 44px;
                label{
                    float: left;
                    width:168px;
                    font-size: 16px;
                    color: #606266;
                    font-weight: 500;
                    i{
                        color:#FA3C3C;
                    }
                    .icon-wenhaoyuanyiwenxianxing{
                      color:#606266;
                      padding-left:10px;
                      cursor: pointer;
                    }
                }
                
                /deep/.el-input{
                    float: left;
                    width:350px;
                    height: 44px;
                    #enterpriseName{
                        background: #C2DFFF;
                        color: #3066A2;
                        font-size: 14px;
                    }
                    #UserName{
                        color: #303133;
                        font-size: 16px;
                    }
                    .el-input__inner{
                        width:350px;
                        height: 44px;
                        border:1px solid rgba(199,204,209,1);
                        border-radius:6px;
                        padding-left: 20px;
                    }
                }
            }
            .add_enterpris_area{
                margin-top:30px;
                p{
                    float: left;
                    width:168px;
                    font-size: 16px;
                    color: #606266;
                    i{
                        color: #FA3C3C;
                    }
                }
                .applyInfoArea{
                    float: left;
                    width:350px;
                    height: 160px;
                    border:1px solid rgba(199,204,209,1);
                    border-radius:6px;
                    /deep/.el-textarea__inner{
                        height:158px;
                        border:0;
                        resize: none;
                    }
                }
            }
            .add_enterpris_submit{
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
                cursor: pointer;
            }
        }
        
    }
</style>
<style lang="scss">
  .el-tooltip__popper{
    width:300px;
    line-height:20px;
    z-index: 9999!important;
  }
</style>

