<template>
  <div class="applyingType_shadow">
    <div class="applyingType_box">
      <p class="applyingType_box_title">选择您想要开通的账号类型：</p>
      <div class="applyingType_box_btn">
        <router-link
          tag="div"
          to="/applying/createEnterprise"
          class="applyingType_box_btn_create"
        >
          <div class="applyingType_box_btn_create_img">
            <span>创建企业</span>
          </div>
          <p class="applyingType_box_btn_create_img_text">由我创建企业，邀请同事加入</p>
        </router-link>
        <router-link
          tag="div"
          to="/applying/addEnterprise"
          class="applyingType_box_btn_add"
        >
          <div class="applyingType_box_btn_add_img">
            <span>加入企业</span>
          </div>
          <p class="applyingType_box_btn_add_img_text">已有企业账户，立即申请加入</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .applyingType_shadow{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        background: rgba(0,0,0,.5);
        .applyingType_box{
            width:900px;
            height:600px;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 43px 0px rgba(17,47,92,0.05);
            position: fixed;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
            .applyingType_box_title{
                margin:70px 0 50px 110px;
                color: #303133;
                font-size: 18px;
                font-weight: 900;
            }
            .applyingType_box_btn{
                width:680px;
                height:370px;
                margin:0 auto;
                .applyingType_box_btn_create{
                    float: left;
                    width:300px;
                    height:370px;
                    background:rgba(68,139,210,1);
                    border-radius:10px;
                    overflow: hidden;
                    cursor: pointer;
                    .applyingType_box_btn_create_img{
                        width:246px;
                        height: 246px;
                        margin:30px auto 0;
                        line-height: 200px;
                        text-align: center;
                        font-size: 24px;
                        color: #303133;
                        font-weight: 900;
                        background: url("../../assets/images/apply_create.png") no-repeat center;
                    }
                    .applyingType_box_btn_create_img_text{
                        padding:20px 0 0 48px;
                        font-size: 16px;
                        color: #fff;
                    }
                }
                .applyingType_box_btn_add{
                    float: left;
                    width:300px;
                    height:370px;
                    background:#EFEFEF;
                    border-radius:10px;
                    overflow: hidden;
                    margin-left: 80px;
                    cursor: pointer;
                    .applyingType_box_btn_add_img{
                        width:246px;
                        height: 246px;
                        margin:30px auto 0;
                        line-height: 200px;
                        text-align: center;
                        font-size: 24px;
                        color: #448BD2;
                        font-weight: 900;
                        background: url("../../assets/images/apply_add.png") no-repeat center;
                    }
                    .applyingType_box_btn_add_img_text{
                        padding:20px 0 0 48px;
                        font-size: 16px;
                        color: #303133;
                    }
                }
            }
        }
    }
</style>
