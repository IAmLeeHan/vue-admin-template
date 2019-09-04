<template>
  <div class="app_buy_box">
    <div class="app_buy_title_box">
      <div class="app_buy_header">
        <span class="app_buy_title">应用商店 / 雷达监控 / 购买</span>
        <div class="app_buy_exit">
          <span>返回</span>
          <div class="app_buy_exit_img">
            <img src="~img/arrow_01.png" alt="">
          </div>
        </div>
      </div>
      <div class="app_buy_detail">
        <p class="app_name">应用名称: <span>雷达监控</span></p>
        <div class="balanceAccount">
          <p>账户余额:</p> <img src="~img/coin_01.png" alt=""><span>-1000信用币</span>
        </div>
        <div class="balanceAccount">
          <p>剩余信用额度: </p><img src="~img/coin_01.png" alt=""><span>-1000信用币</span>
        </div>
        <div class="app_type_box">
          <p class="app_type_title">应用类型:</p>
          <div class="app_type_content">
            <!-- <div class="app_type_content_common">
              <img src="~img/putong.png" alt="">
              <p>普通版</p>
              <span>内含20家企业/年监控券</span>
            </div>
            <div class="app_type_content_extend">
              <img src="~img/kuozhan .png" alt="">
              <p>扩展版</p>
              <span>内含50家企业/年监控券</span>
            </div> -->
            <div class="app_type_content_customization">
              <img class="recommend" src="~img/tuijian.png" alt="">
              <img src="~img/dingzhi.png" alt="">
              <p>定制版</p>
              <span>内含70家企业/年监控券</span>
              <span>另附赠额外专属监控维度</span>
            </div>
          </div>
        </div>
        <div class="select_user_num">
          <span>选择人数：</span>
          <div class="select_user_num_btn">10人</div>
        </div>
        <div class="select_day_num">
          <span>选择时长：</span>
          <div class="select_day_num_btn">1个月</div>
        </div>
        <div class="app_discount">
          <span>优惠券:</span>
          <el-select v-model="value" clearable placeholder="请选择优惠券">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <p class="paymentAmount">应付金额: <span>1,000信用币</span></p>
        <div
          class="buy_now_submit"
          @click="buyNow"
        >立即购买</div>
        <el-checkbox v-model="checked">我已阅读并同意<span>《用户支付协议》</span></el-checkbox>
        <div class="pay_warm_prompt">
          <p>温馨提示：</p>
          <p>1、我是提示内容我是提示内容</p>
          <p>2、我是提示内容我是提示内容我是提示内容我是提示内容</p>
          <p>3、我是提示内容我是提示内容我是提示内容我是提示内容我是提示内容我是提示内容我是提示内容我是提示内容我是提示内容我是提示内容</p>
          <p>4、我是提示内容我是提示内容</p>
        </div>
      </div>
      <div
        v-if="notSufficientFunds"
        class="not_sufficient_funds_shadow"
        @click="notSufficientFunds=!notSufficientFunds"
      >
        <div class="not_sufficient_funds_hint">
          <p>余额不足</p>
          <p>您的账户余额不足，无法购买此应用，请立即充值。</p>
          <div>立即充值</div>
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
            enterpriseApp: [],
            options: [{
                value: '选项1',
                label: '10元优惠'
            }, {
                value: '选项2',
                label: '100元优惠'
            }, {
                value: '选项3',
                label: '500元优惠'
            }, {
                value: '选项4',
                label: '800元优惠'
            }, {
                value: '选项5',
                label: '1000元优惠'
            }],
            value: ''
        }
    },
    created() {
        this.enterpriseApp = this.$store.state.appInfo.appInfo
    },
    methods: {
        buyNow() {
            this.$router.push({ name: 'appBuySuccess', params: { id: this.$route.params.id * 1 }})
        }
    }
}
</script>

<style lang="scss" scoped>
    .app_buy_box{
        width:100%;
        background:#f9f9f9;
        overflow: hidden;
        .app_buy_title_box{
            width:1200px;
            // height:1120px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(223,230,236,1);
            border-radius:10px;
            margin:20px auto 96px;
            .app_buy_header{
                width:1200px;
                height:50px;
                background:rgba(245,247,250,1);
                border-radius:10px 10px 0 0;
                .app_buy_title{
                    float: left;
                    height: 50px;
                    line-height: 50px;
                    color: #303133;
                    font-size: 18px;
                    font-weight: 900;
                    text-indent: 20px;
                }
                .app_buy_exit{
                    float: right;
                    height: 50px;
                    line-height: 50px;
                    color:#606266;
                    font-size: 14px;
                    span{
                        float: left;
                    }
                    .app_buy_exit_img{
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
            .app_buy_detail{
                width:960px;
                margin:10px auto;
                overflow: hidden;
                .app_name{
                    height: 16px;
                    font-size: 16px;
                    color:#606266;
                    margin-top:40px;
                    span{
                        padding-left: 50px;
                        font-size: 16px;
                        color: #303133;
                        font-weight: 900;
                    }
                }
                .balanceAccount{
                    height: 28px;
                    font-size: 16px;
                    line-height: 28px;
                    color:#606266;
                    margin-top:40px;
                    width:100%;
                  p{
                    float: left;
                  }
                  img{
                    float: left;
                  }
                  span{
                    float: left;
                      padding-left: 10px;
                      font-size: 16px;
                      color: #303133;
                      font-weight: 900;
                  }
                }
                .balanceAccount:nth-of-type(1){
                  p{
                    padding-right: 52px;
                  }
                }
                .balanceAccount:nth-of-type(2){
                  p{
                    padding-right: 20px;
                  }
                }
                .app_type_box{
                    width: 960px;
                    height: 360px;
                    margin-top:40px;
                    .app_type_title{
                        font-size: 16px;
                        color:#606266;
                        float: left;
                    }
                    .app_type_content{
                        float: left;
                        margin-left: 40px;
                        .app_type_content_common{
                            width:260px;
                            height:360px;
                            background:rgba(255,255,255,1);
                            border:1px solid rgba(223,230,236,1);
                            border-radius:10px;
                            float: left;
                            text-align: center;
                            &:hover{
                                cursor: pointer;
                                background: #F0F2F5;
                            }
                            img{
                                width:145px;
                                height: 134px;
                                margin:50px auto 0;
                            }
                            p{
                                height: 18px;
                                font-weight: 900;
                                font-size: 18px;
                                color: #303133;
                                margin:60px 0 20px;
                            }
                            span{
                                font-size: 16px;
                                color: #303133;
                            }
                        }
                        .app_type_content_extend{
                            width:260px;
                            height:360px;
                            background:rgba(255,255,255,1);
                            border:1px solid rgba(223,230,236,1);
                            border-radius:10px;
                            float: left;
                            text-align: center;
                            margin-left: 30px;
                            &:hover{
                                cursor: pointer;
                                background: #F0F2F5;
                            }
                            img{
                                width:145px;
                                height: 134px;
                                margin:50px auto 0;
                            }
                            p{
                                height: 18px;
                                font-weight: 900;
                                font-size: 18px;
                                color: #303133;
                                margin:60px 0 20px;
                            }
                            span{
                                font-size: 16px;
                                color: #303133;
                            }
                        }
                        .app_type_content_customization{
                            width:260px;
                            height:360px;
                            background:rgba(255,255,255,1);
                            border:1px solid rgba(223,230,236,1);
                            border-radius:10px;
                            float: left;
                            text-align: center;
                            margin-left: 30px;
                            position: relative;
                            &:hover{
                                cursor: pointer;
                                background: #F0F2F5;
                            }
                            .recommend{
                                width:90px;
                                height: 90px;
                                position: absolute;
                                top:0;
                                left:0;
                                margin:0;
                            }
                            img{
                                width:145px;
                                height: 134px;
                                margin:50px auto 0;
                            }
                            p{
                                height: 18px;
                                font-weight: 900;
                                font-size: 18px;
                                color: #303133;
                                margin:60px 0 20px;
                            }
                            span{
                                display: block;
                                font-size: 16px;
                                color: #303133;
                            }
                        }
                    }
                }
                .select_user_num{
                  height: 50px;
                  line-height: 50px;
                  margin-top:40px;
                  span{
                    float: left;
                    padding-right:42px;
                    font-size: 16px;
                    color: #606266;
                  }
                  .select_user_num_btn{
                    width:140px;
                    height:50px;
                    border:1px solid rgba(199,204,209,1);
                    border-radius:6px;
                    line-height: 50px;
                    text-align: center;
                    float: left;
                  }
                }
                .select_day_num{
                  height: 50px;
                  line-height: 50px;
                  margin-top:40px;
                  span{
                    float: left;
                    padding-right:42px;
                    font-size: 16px;
                    color: #606266;
                  }
                  .select_day_num_btn{
                    width:140px;
                    height:50px;
                    border:1px solid rgba(199,204,209,1);
                    border-radius:6px;
                    line-height: 50px;
                    text-align: center;
                    float: left;
                  }
                }
                .app_discount{
                    margin-top:40px;
                    span{
                        padding-right: 56px;
                        font-size: 16px;
                        color: #606266;
                    }
                }
                .paymentAmount{
                    font-size: 16px;
                    color:#606266;
                    margin-top:40px;
                    span{
                        padding-left: 40px;
                        font-size: 20px;
                        color: #FA3C3C;
                        font-weight: 900;
                    }
                }
                .buy_now_submit{
                    width:250px;
                    height:50px;
                    background:rgba(68,139,210,1);
                    border-radius:6px;
                    text-align: center;
                    line-height: 50px;
                    font-size: 16px;
                    color:#fff;
                    margin-top:60px;
                }
                /deep/.el-checkbox{
                    margin-top:22px;
                    .el-checkbox__label{
                        span{
                        color: #448BD2;
                        }
                    }
                }
                .pay_warm_prompt{
                    margin-top:80px;
                    p:first-child{
                        font-size: 16px;
                        color: #303133;
                        font-weight: 900;
                        padding-bottom:20px;
                    }
                    p{
                        font-size: 14px;
                        color: #606266;
                        padding-bottom:8px;
                    }
                }
            }
        }
        .not_sufficient_funds_shadow{
            width:100%;
            height: 100%;
            background: rgba(0, 0, 0, .5);
            position: fixed;
            top:0;
            bottom:0;
            right:0;
            left:0;
            margin:auto;
            z-index: 9999;
            .not_sufficient_funds_hint{
                width:500px;
                height:260px;
                background:rgba(255,255,255,1);
                border-radius:10px;
                position: fixed;
                top:0;
                bottom:0;
                right:0;
                left:0;
                margin:auto;
                z-index: 9999;
                text-align: center;
                p:first-child{
                    font-size: 18px;
                    color: #303133;
                    font-weight: 900;
                    padding-top:52px;
                }
                p:nth-child(2){
                    font-size: 16px;
                    color: #606266;
                    padding-top: 20px;
                }
                div{
                    width:140px;
                    height:50px;
                    background:rgba(68,139,210,1);
                    border-radius:6px;
                    text-align: center;
                    line-height: 50px;
                    font-size: 16px;
                    color: #fff;
                    cursor: pointer;
                    margin:50px auto 0;
                }
            }
        }
    }
</style>
