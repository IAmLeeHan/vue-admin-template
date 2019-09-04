<template>
  <div class="asset_box">
    <div class="asset_header">
      <span>资产概览</span>
    </div>
    <div class="asset_info">
      <div class="asset_left">
        <span>总资产：</span>
        <div class="asset_money">
          <img src="~img/coin_01.png" alt="">
          <span>{{money | isMoney}}</span>
        </div>
        <div class="asset_left_btn" @click="toPrepaid">立即充值</div>
      </div>
      <div class="asset_right">
        <div class="asset_right_top">
          <el-progress 
            type="circle" 
            :percentage="percentage" 
            :stroke-width="14"
            color="#448BD2"
            :show-text="false"
            :width="150"
          ></el-progress>
          <div class="peogress_text">可用额度</div>
          <div class="progress_hint">
            <div>
              <p></p><span>可用额度</span>
            </div>
            <div>
              <p></p><span>信用额度</span>
            </div>
          </div>
        </div>
        <div class="asset_right_bottom">
          <div>
            <p>信用额度：</p>
            <img src="~img/coin_01.png" alt="">
            <span>{{credit | isMoney}}</span>
          </div>
          <div>
            <p>信用额度：</p>
            <img src="~img/coin_01.png" alt="">
            <span>{{coin | isMoney}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      money:Number,
      credit:100000,
      coin:300,
      percentage:75,
    }
  },
  created(){
    this.money = this.credit + this.coin;
  },
  filters:{
    isMoney:(num)=>{
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
  },
  methods:{
    toPrepaid(){
      this.$router.push({name:'prepaid'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .asset_box{
    width:774px;
    height:400px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    float: left;
    margin-left: 20px;
    .asset_header{
      width:772px;
      height:50px;
      background:rgba(245,247,250,1);
      border-radius:10px 10px 0 0 ;
      padding-left:20px;
      line-height: 50px;
      color: #303133;
      font-weight: 900;
      font-size: 16px;
    }
    .asset_info{
      .asset_left{
        width:384px;
        float: left;
        padding:90px 80px 90px 100px;
        span{
          font-size: 18px;
          color: #606266;
          font-weight: 600;
        }
        .asset_money{
          height:38px;
          line-height: 38px;
          margin-top:20px;
          img{
            width:28px;
            height: 28px;
            float: left;
            margin-top:6px;
          }
          span{
            font-size: 38px;
            color:#303133;
            font-weight: 900;
            float: left;
            padding-left:6px;
          }
        }
        .asset_left_btn{
          width:200px;
          height:50px;
          background:#448BD2;
          border-radius:6px;
          font-size: 16px;
          color: #fff;
          margin-top:50px;
          line-height: 50px;
          text-align: center;
          cursor: pointer;
        }
      }
      .asset_right{
        width:384px;
        float: left;
        .asset_right_top{
          padding:40px 0px 40px 50px; 
          position: relative;
          .el-progress{
            float: left;
          }
          /deep/.el-progress-circle__track {
          stroke:rgba(240,242,245,1);
          }
          .peogress_text{
            width:150px;
            height: 150px;
            position: absolute;
            top:40px;
            line-height: 150px;
            text-align: center;
            color: #448BD2;
            font-size: 16px;
          }
          .progress_hint{
            float: left;
            div:first-child{
              margin:50px 0 0 30px;
              p:nth-of-type(1){
                display: inline-block;
                width:6px;
                height:6px;
                background:rgba(68,139,210,1);
              }
              span{
                color: #909399;
                font-size: 14px;
                margin-left:10px;
              }
            }
            div:last-child{
              margin:20px 0 0 30px;
              p:nth-of-type(1){
                display: inline-block;
                width:6px;
                height:6px;
                background:#F0F2F5;
              }
              span{
                color: #909399;
                font-size: 14px;
                margin-left:10px;
              }
            }
          }
        }
        .asset_right_bottom{
          width:384px;
          padding-top:44px 0 0 50px;
          overflow: hidden;
          div{
            margin-top:50px;
            height: 28px;
            line-height: 28px;
            p{
              float: left;
              font-size: 16px;
              color: #606266;
            }
            img{
              width:28px;
              height: 28px;
              float:left;
              margin:0 10px 0 10px;
            }
            span{
              font-size: 20px;
              color: #303133;
            }
          }
          div:last-child{
            margin-top:16px;
          }
        }
      }
    }
  }
</style>
