<template>
  <div style="overflow:hidden">
    <LoginHeader></LoginHeader>
    <div class="spending_box ">
      <div class="spending_title clear">
        <p></p>
        <span>我的额度</span>
      </div>
      <div class="spending_card_box">
        <div class="spending_card" v-for="card in tagCards" :key="card.id">
          <p><span>{{card.title}}</span></p>
          <p class="clear">
            <img src="~img/coin_01.png" alt="">
            <span>{{card.num | isMoney}}</span>
          </p>
          <p>(总额度：<span>{{card.sum |isMoney}}</span>信用币)</p>
        </div>
      </div>
      <div class="spending_title clear">
        <p></p>
        <span>订单流水</span>
      </div>
      <div class="spending_tabs">
        <el-tabs type="border-card">
          <el-tab-pane label="全部订单（500）"><OrderAll></OrderAll></el-tab-pane>
          <el-tab-pane label="待支付（200）"><Unpaid></Unpaid></el-tab-pane>
          <el-tab-pane label="已支付（200）"><Prepaid></Prepaid></el-tab-pane>
          <el-tab-pane label="已退款（50）"><Refunded></Refunded></el-tab-pane>
          <el-tab-pane label="已取消（50）"><Canceled></Canceled></el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import LoginHeader from '@/components/LogonHeader'
import OrderAll from './components/orderAll'
import Refunded from './components/refunded'
import Prepaid from './components/prepaid'
import Canceled from './components/canceled'
import Unpaid from './components/unpaid'
export default {
  components:{LoginHeader,OrderAll,Refunded,Prepaid,Canceled,Unpaid},
  data(){
    return {
      tagCards:[
        {id:"ldjk",title:'雷达监控',num:20000,sum:50000},
        {id:"xybg",title:'信用报告',num:20000,sum:50000},
        {id:"dlyx",title:'大蓝营销',num:20000,sum:50000},
        {id:"crm",title:'CRM',num:20000,sum:50000},
      ]
    }
  },
  filters:{
    isMoney:(num)=>{
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
  },
}
</script>

<style lang="scss" scoped>
  .spending_box{
    width:1200px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    margin:80px auto 20px;
    overflow: hidden;
    padding:20px 0 20px 20px;
    .spending_title{
      margin-top:20px;
      p{
        width:4px;
        height:18px;
        background:rgba(68,139,210,1);
        float: left;
      }
      span{
        font-size: 18px;
        color: #303133;
        font-weight: 900;
        float: left;
        padding-left: 10px;
      }
    }
    .spending_card_box{
      overflow: hidden;
      margin:40px 0;
      .spending_card{
        float: left;
        width:270px;
        height:170px;
        background:#448BD2;
        border-radius:10px;
        margin:10px 26px 10px 0;
        color: #fff;
        padding:20px;
        text-align: center;
        overflow: hidden;
        cursor: pointer;
        p:nth-of-type(1){
          text-align: left;
          span{
            font-size: 18px;
            font-weight: 600;
          }
        }
        p:nth-of-type(2){
          margin:30px 0;
          height: 42px;
          line-height: 42px;
          display: inline-block;
          img{
            float: left;
            margin:7px 5px;
            width:28px;
            height: 28px;
            display: inline;
          }
          span{
            float: left;
            display: inline;
            font-size: 42px;
            font-weight: 900;
            font-family: DIN;
          }
        }
        p:nth-of-type(3){
          font-size: 14px;
          width:225px;
          text-align: center;
          span{
            font-size: 18px;
            font-weight: 600;
          }
        }
      }
      .spending_card:nth-of-type(4){
        margin-right:0;
      }
    }
    .spending_tabs{
      width:1160px;
      margin-top:40px;
      overflow: hidden;
      /deep/.el-tabs{
        width:1160px;
        padding-bottom:40px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(223,230,236,1);
        border-radius:10px;
        .el-tabs__content{
          padding:0!important;
        }
      }
    
    }
  }
</style>
