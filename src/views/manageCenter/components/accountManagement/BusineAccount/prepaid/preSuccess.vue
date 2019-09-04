<template>
  <div class="app_buy_success_box">
    <div class="app_buy_success">
      <div class="oder_detail">
        <div class="oder_detail_left">
          <img class="oder_detail_ok" src="~img/icon_success.png" alt="">
          <div class="oder_detail_text">
            <img src="~img/coin_01.png" alt="">
            <p><span>10000</span>,购买成功</p>
          </div>
          <div class="show_ass">查看流水</div>
        </div>
        <div class="oder_detail_right">
          <div class="oder_detail_right_title">
            <p>订单编号：</p>
            <p>收款方：</p>
            <p>商品名：</p>
            <p>支付金额：</p>
            <p>下单时间：</p>
          </div>
          <div class="oder_detail_right_info">
            <p>2019080115JY56670870</p>
            <p>青岛格兰德信用管理咨询有限公司</p>
            <p>雷达监控</p>
            <p>1,000信用币</p>
            <p>2019-10-09 10:34</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            notSufficientFunds: false,
            checked: false,
            //* 产品简介
            enterpriseApp: []
        }
    },
    created() {
        this.enterpriseApp = this.$store.state.appInfo.appInfo
    }
}
</script>

<style lang="scss" scoped>
    .app_buy_success_box{
        width:100%;
        background:#f9f9f9;
        overflow: hidden;
        .app_buy_success{
            width:1650px;
            height:941px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(223,230,236,1);
            border-radius:10px;
            margin:20px auto 380px;
            .oder_detail{
                width:1000px;
                height: 300px;
                background: #fff;
                margin:40px auto;
                border:1px solid rgba(223,230,236,1);
                border-radius:10px;
                .oder_detail_left{
                    float: left;
                    width:440px;
                    height:300px;
                    background:rgba(68,139,210,1);
                    border-radius:10px 0px 0px 10px;
                    text-align: center;
                    img{
                        width:82px;
                        height: 82px;
                        margin:40px auto 0;
                    }
                    div{
                        width:150px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        font-size: 16px;
                        color: #448BD2;
                        background: url('../../../../../../assets/images/button.png') no-repeat center;
                        cursor: pointer;
                    }
                    .oder_detail_text{
                      height:28px;
                      line-height: 28px;
                      font-size: 22px;
                      color: #fff;
                      width: 200px;
                      background: #448bd2;
                      margin:30px auto 0;
                      img{
                        width:28px;
                        height: 28px;
                        float: left;
                        margin:0;
                      }
                      p{
                        float: left;
                        padding:0;
                        background: #448bd2;
                        span{
                          padding-left:10px;
                        }
                      }
                    }
                    .show_ass{
                      margin:30px auto;
                    }
                }
                .oder_detail_right{
                    float: left;
                    .oder_detail_right_title{
                        float: left;
                        margin:50px 0 0 110px;
                        color: #606266;
                        font-size: 16px;
                        p:first-child{
                            padding:0;
                        }
                        p{
                            padding-top:20px;
                        }
                    }
                    .oder_detail_right_info{
                        float: left;
                        margin:50px 0 0 20px;
                        color: #303133;
                        font-size: 16px;
                        p:first-child{
                            padding:0;
                        }
                        p{
                            padding-top:22px;
                        }
                    }
                }
            }
        }
        
    }
</style>