<template>
  <div class="order_detail_box">
    <div class="order_detail_content">
      <div class="order_detail_title">
        <div class="order_detail_title_left">
          <div class="order_detail_titlt_left_item">
            <span>订单编号：</span>
            <p>2019080115JY56670870</p>
          </div>
          <div class="order_detail_titlt_left_item">
            <span>总金额：</span>
            <div>
              <img src="~img/coin_01.png" alt="">
              <span>500</span>
            </div>
          </div>
        </div>
        <div class="order_detail_title_right">
          <span>订单状态：</span>
          <p>待支付</p>
          <div class="order_detail_title_right_btn">立即付款</div>
          <div class="order_detail_title_right_btn">取消订单</div>
        </div>
      </div>
      <div class="order_detail_subtitle clear">
        <p></p>
        <span>订单信息</span>
      </div>
      <div class="order_detail_info">
        <table>
          <tr>
            <td>应用名称</td>
            <td>信用报告</td>
            <td>创建时间</td>
            <td>2019-10-09 10:45</td>
          </tr>
          <tr>
            <td>商品名称</td>
            <td>基本信用报告</td>
            <td>订单类型</td>
            <td>商品订单</td>
          </tr>
          <tr>
            <td>描述</td>
            <td>一份</td>
            <td>金额</td>
            <td>
              <img src="~img/coin_01.png" alt="">
              <span>500</span>
            </td>
          </tr>
        </table>
      </div>
      <div class="order_detail_subtitle clear">
        <p></p>
        <span>补充信息</span>
      </div>
     <div class="order_detail_info">
        <table>
          <tr>
            <td>企业名称/目标高管信息</td>
            <td>青岛格兰德信用管理咨询有限公司</td>
            <td>企业名称（英文）</td>
            <td>Gladtrust</td>
          </tr>
          <tr>
            <td>企业地址</td>
            <td>青岛市市南区宁夏路288号市南软件园4号楼103</td>
            <td>企业地址（英文）</td>
            <td>addressaddressaddressaddressaddress</td>
          </tr>
          <tr>
            <td>公司电话</td>
            <td>23903294</td>
            <td>订单类型</td>
            <td>加急订单（7个工作日）</td>
          </tr>
          <tr>
            <td>报告语言</td>
            <td>中文；英文</td>
            <td>备注</td>
            <td style="vertical-align:meddle;"><span style="line-height:28px;">允许向目标公司透漏用户的信息 高管关联信息 - 周治平（3702841994 *******）</span></td>
          </tr>
          <tr>
            <td>联系电话</td>
            <td>15715428080</td>
            <td>联系邮箱</td>
            <td>lex@gladtrust.com</td>
          </tr>
        </table>
      </div>
      <div class="order_detail_subtitle clear">
        <p></p>
        <span>支付信息</span>
      </div>
       <div class="order_detail_info">
        <table>
          <tr>
            <td>付款人</td>
            <td>王晓东</td>
            <td>下单时间</td>
            <td>2019-10-09 10:45</td>
          </tr>
          <tr>
            <td>支付方式</td>
            <td>信用币</td>
            <td>实付金额</td>
            <td>
              <img src="~img/coin_01.png" alt="">
              <span>500</span>
            </td>
          </tr>
        </table>
      </div>
       
      <div class="order_detail_subtitle clear">
        <p></p>
        <span>退款信息</span>
      </div>
       <div class="order_detail_info">
        <table>
          <tr>
            <td>退款方式</td>
            <td>信用币</td>
            <td>退款时间</td>
            <td>2019-10-09 10:45</td>
          </tr>
          <tr>
            <td>退款金额</td>
            <td colspan="3">
              <img src="~img/coin_01.png" alt="">
              <span>500</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .order_detail_box{
    width:1650px;
    min-height:1173px;
    padding-bottom:20px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    margin:0 0 20px 20px;
    .order_detail_content{
      width:1050px;
      margin:20px auto 0;
      .order_detail_title{
        width:1050px;
        height:139px;
        background:rgba(68,139,210,.12);
        border-radius:10px;
        padding:40px 60px;
        .order_detail_title_left{
          float: left;
          width:464px;
          .order_detail_titlt_left_item{
            height: 18px;
            line-height: 18px;
            span{
              float: left;
              color: #626066;
              font-size: 14px;
            }
            p{
              float: left;
              color: #303133;
              font-size: 18px;
              padding-left:16px;
            }
          }
          .order_detail_titlt_left_item:nth-of-type(2){
            margin-top:24px;
            height: 24px;
            line-height: 28px;
            div{
              float: left;
              img{
                float: left;
                width:28px;
                height: 28px;
                margin:0 10px 0 30px;
              }
              span{
                float: left;
                font-size: 18px;
                color: #303133;
              }
            }
          }
        }
        .order_detail_title_right{
          float: left;
          height: 44px;
          line-height: 44px;
          span{
            float: left;
            color: #626066;
            font-size: 14px;
          }
          p{
            float: left;
            font-size: 22px;
            color: #FA3C3C;
            font-weight: 700;
            margin:0 60px 0 16px;
          }
          .order_detail_title_right_btn{
            float: left;
            width:110px;
            height:44px;
            background:rgba(68,139,210,1);
            border-radius:6px;
            color: #fff;
            font-size: 14px;
            line-height: 44px;
            text-align: center;
            cursor: pointer;
          }
          .order_detail_title_right_btn:nth-of-type(1){
            margin-right: 20px;
          }
        }
      }
      .order_detail_subtitle{
        height: 16px;
        margin:30px 0;
        p{
          width:4px;
          height:16px;
          background:rgba(68,139,210,1);
          float: left;
        }
        span{
          color: #303133;
          font-size: 16px;
          font-weight: 700;
          float: left;
          padding-left:10px;
        }
      }
      .order_detail_info{
        width:1050px;
        table{
          border-collapse: collapse;
          td{
            width:334px;
            min-height: 50px;
            line-height: 50px;
            padding-left:20px;
            border:1px solid #DFE6EC;
            color:#303133;
            img{
              width:28px;
              height: 28px;
              float: left;
              margin:10px 10px 0 10px;
            }
            span{
              float: left;
            }
          }
          td:nth-of-type(odd){
            background: #F0F2F5;
            width:190px;
            color: #606266;
          }
        }
      }
    }
  }
</style>
