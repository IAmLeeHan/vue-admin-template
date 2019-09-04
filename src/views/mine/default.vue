<template>
  <div class="default">
    <!-- <div class="mine_title">
            我的应用
        </div> -->

    <div class="default_img">
      <img src="~img/pic_01.png" alt="">
    </div>

    <p class="Not_enterprise">您还未加入任何企业</p>
    <p class="Not_enterprise_hint">
      <span>为了更好的使用体验和数据的安全性，</span>
      <span>信用视界专业版所提供的产品与服务均需要用户认证自己所属的企业。</span>
      <span>您可以创建您的企业账户，或加入已有的企业</span>
    </p>
    <p class="Not_enterprise_state">
      <span>若已经提交企业创建申请或企业加入申请，</span>
      <span>申请通过后将自动加入企业。</span>
    </p>

    <div class="Not_enterprise_btn_box">
      <div class="Not_enterprise_add">加入企业</div>
      <div class="Not_enterprise_create">创建企业</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .default{
        background: #fff;
        height: 100%;
        overflow: hidden;
        // .mine_title{
        //     width:100%;
        //     height: 50px;
        //     background: #448BD2;
        //     text-indent: 360px;
        //     line-height: 50px;
        //     color: #fff;
        //     font-size: 18px;
        // }
        .default_img{
            width:500px;
            height: 300px;
            margin:60px auto;
            img{
                width:100%;
                height: 100%;
            }
        }
        .Not_enterprise{
            width: 100%;
            text-align: center;
            padding-top:20px;
            color: #5083B5;
            font-size: 24px;
            font-weight: 900;
        }
        .Not_enterprise_hint{
            width: 100%;
            text-align: center;
            color:#7699BD ;
            font-size: 14px;
            span:first-child{
                display: block;
                padding-top:30px;
            }
            span{
                display: block;
                padding-top: 15px;
            }
        }
        .Not_enterprise_state{
            width:426px;
            height:102px;
            line-height: 34px;
            border:1px solid rgba(157,183,200,1);
            border-radius:6px;
            margin:40px auto;
            text-align: center;
            font-size: 16px;
            color: #1E558C;
            span{
                display: block;
            }
            span:first-child{
                padding-top:20px;
            }
        }
        .Not_enterprise_btn_box{
            width:426px;
            height: 50px;
            margin:40px auto 140px;
            .Not_enterprise_add{
                float: left;
                width:200px;
                height: 50px;
                background: #448BD2;
                text-align: center;
                line-height: 50px;
                border-radius:6px;
                color: #fff;
                font-size: 16px;
            }
            .Not_enterprise_create{
                float: right;
                width:200px;
                height: 50px;
                background: #448BD2;
                text-align: center;
                line-height: 50px;
                border-radius:6px;
                color: #fff;
                font-size: 16px;
            }
        }
    }
</style>
