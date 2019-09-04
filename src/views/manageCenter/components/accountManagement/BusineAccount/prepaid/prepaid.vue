<template>
  <div class="prepaid_box clear">
    <div class="prepaid_box_left">
      <div class="prepaid_enterprise">
        <span>充值企业：</span>
        <p>青岛格兰德信用管理咨询有限公司</p>
      </div>
      <div class="prepaid_balance">
        <span>账户余额：</span>
        <img src="~img/coin_01.png" alt="">
        <p>-1000</p>
      </div>
      <div class="usanle_credit">
        <span>可用信用额度：</span>
        <img src="~img/coin_01.png" alt="">
        <p>10000</p>
      </div>
      <div class="prepaid_sum">
        <span>充值金额：</span>
        <div class="prepaid_sum_box">
          <div 
            class="prepaid_sum_btn"
            :class="{active:item.id==n}" 
            v-for="item in sum" 
            :key="item.id"
            @click="setListCheck(item.id)"
            >
            <div>
              <img src="~img/coin_01.png" alt="">
              <span>{{item.num}}</span>
            </div>
          </div>
          <div class="prepaid_sum_input">
            <el-input v-model="input" placeholder="请输入内容" @focus="n=0" @change="inputvalue(input)" :autofocus="autofocus"></el-input>
            <span>（必须为100的整数倍）</span>
          </div>
        </div>
      </div>
      <p class="line"></p>
      <div class="pay_type_box">
        <span>充值方式：</span>
        <div class="pay_type">
          <div class="pay_type_btn" v-for="type in payType" :key="type.id" :class="{active:type.id === x}" @click="payTypeCheck(type.id)">
            <div>
              <img :src="type.img" alt="">
              <span>{{type.title}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="prepaid_online" v-if="isXianxia">
        <div class="prepaid_online_item">
          <span>账户名称：</span>
          <p>青岛格兰德信用管理咨询有限公司</p>
        </div>
        <div class="prepaid_online_item">
          <span>统一社会信用代码：</span>
          <p>91370202790847870Q</p>
        </div>
        <div class="prepaid_online_item">
          <span>地点：</span>
          <p>青岛市市南区宁夏路288号市南软件园4号楼103</p>
        </div>
        <div class="prepaid_online_item">
          <span>联系方式：</span>
          <p>0532-66773355</p>
        </div>
        <div class="prepaid_online_item">
          <span>开户银行：</span>
          <p>中国工商银行青岛市香港中路支行</p>
        </div>
        <div class="prepaid_online_item">
          <span>银行账号：</span>
          <p>3803210919000073034</p>
        </div>
        <div class="prepaid_online_hint">
          <span>充值成功后请联系在线客服</span>
        </div>
      </div>
      <div class="prepaid_payable">
        <span>应付：</span>
        <p><span>{{payAble | IsMoney}}</span>元</p>
      </div>
      <div class="prepaid_btn" @click="prepaidSuccess">
        立即充值
      </div>
    </div>
    <div class="prepaid_box_right">
      <div class="prepaid_box_left_img">
        <img src="~img/coin_01@2x.png" alt="">
      </div>
      <p>信用币</p>
      <span>• 信用币可以用来够买信用视界-专业版平台内所有的应用及应用内商品；</span>
      <span>• 信用币仅能兑换信用视界专业版平台上所运营的产品和服务，不能兑换现金，不能进行转账交易，不能兑换信用视界专业版平台体系外的产品和服务。</span>
      <div class="prepaid_box_agreement">
         <el-checkbox v-model="checked">我已阅读并同意<span class="agreement">《用户充值服务协议》</span></el-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sum:[
        {id:1,num:1000},
        {id:2,num:2000},
        {id:3,num:3000},
        {id:4,num:4000},
        {id:5,num:5000},
        {id:6,num:6000},
      ],
      input:'',
      n:0,
      x:String,
      autofocus:false,
      payType:[
        {id:'weixin',title:'微信',img:require('img/weixin_03.png')},
        {id:'zhifubao',title:'支付宝',img:require('img/zhifubao.png')},
        {id:'xianxia',title:'线下充值',img:require('img/xianxiachong.png')},
      ],
      isXianxia:false,
      payAble:1000000,
      checked:false
    }
  },
  created(){
    console.log(this.input,"input")
  },
  methods:{
    setListCheck(id){
      this.n = id
      this.sum.map((obj)=>{
        if(id === obj.id){
          console.log("obj",obj.num)
        }
      })
    },
    inputvalue(input){
      console.log(this.input)
      if(input % 100 !== 0){
        this.$message({
          type:'error',
          message:'请输入100的倍数！',
          duration:3000
        })
        this.input = ''
        this.autofocus = true
      }
    },
    payTypeCheck(id){
      this.x = id
      if(id === 'xianxia'){
        this.isXianxia = true
      }else{
        this.isXianxia = false
      }
    },
    prepaidSuccess(){
      this.$router.push({name:'preSuccess'})
    }
  },
  filters:{
    IsMoney:(value)=>{
      return (value.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    }
  }
}
</script>

<style lang="scss" scoped>
  .prepaid_box{
    position: relative;
    width:1650px;
    min-height:810px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    margin-left:20px;
    margin-bottom: 20px;
    padding-bottom:20px;
    .prepaid_box_left{
      float: left;
      margin-left:120px;
      width:666px;
      .prepaid_enterprise{
        margin-top:40px;
        height: 16px;
        line-height: 16px;
        span{
          font-size: 16px;
          color: #606266;
          float: left;
        }
        p{
          font-size:16px;
          color: #303133;
          font-weight: 900; 
          float: left;
          margin-left:40px;
        }
      }
      .prepaid_balance{
        margin-top:25px;
        height: 28px;
        line-height: 28px;
        span{
          font-size: 16px;
          color: #606266;
          float: left;
        }
        img{
          width:28px;
          height: 28px;
          float: left;
          margin:0 10px 0 40px;
        }
        p{
          font-size: 16px;
          font-weight: 900;
          color: #303133;
        }
      }
      .usanle_credit{
        margin-top:25px;
        height: 28px;
        line-height: 28px;
        span{
          font-size: 16px;
          color: #606266;
          float: left;
        }
        img{
          width:28px;
          height: 28px;
          float: left;
          margin:0 10px 0 8px;
        }
        p{
          font-size: 16px;
          font-weight: 900;
          color: #303133;
        }
      }
      .prepaid_sum{
        margin-top:25px;
        span{
          color: #606266;
          font-size: 16px;
          float: left;
        }
        .prepaid_sum_box{
          width:540px;
          float: left;
          margin-left:40px;
          .prepaid_sum_btn{
            width:160px;
            height:60px;
            float: left;
            border:1px solid rgba(199,204,209,1);
            border-radius:10px;
            text-align: center;
            line-height: 60px;
            position: relative;
            margin-right:30px;
            cursor: pointer;
           &.active{
             border: 2px solid #FA3C3C;
             color: #FA3C3C;
             font-weight: 900;
             background: url('../../../../../../assets/images/xuanzhong.png') no-repeat right bottom;
             span{
               color: #FA3C3C!important;
             }
           }
            div{
              width:100px;
              height: 28px;
              position: absolute;
              top:0;
              bottom:0;
              left:0;
              right:0;
              margin:auto;
              line-height: 28px;
            }
            img{
              float: left;
              width:28px;
              height: 28px;
            }
            span{
              float: left;
              font-size: 18px;
              color: #303133;
              padding-left:10px;
            }
          }
          .prepaid_sum_btn:nth-of-type(3n){
            margin-right: 0;
          }
          .prepaid_sum_btn:nth-of-type(4){
            margin-top: 30px;
          }
          .prepaid_sum_btn:nth-of-type(5){
            margin-top: 30px;
          }
          .prepaid_sum_btn:nth-of-type(6){
            margin-top: 30px;
          }
          .prepaid_sum_input{
            float: left;
            margin-top:30px;
            height: 60px;
            line-height: 60px;
            /deep/.el-input{
              float: left;
              width:350px;
            }
            /deep/.el-input__inner{
              width:350px;
              height:60px;
              border:1px solid rgba(199,204,209,1);
              border-radius:6px;
              float: left;
            }
            span{
              float: left;
              padding-left: 10px;
              font-size: 14px;
              color:#909399;
            }
          }
        }
      }
      .line{
        width:605px;
        height:1px;
        border:1px dashed rgba(199,204,209,1);
        margin:40px 0;
        float: left;
      }
      .pay_type_box{
        height: 50px;
        line-height: 50px;
        float: left;
        span{
          color: #606266;
          font-size: 16px;
          float: left;
        }
        .pay_type{
          margin-left:40px;
          width:480px;
          float: left;
          .pay_type_btn{
            width:140px;
            height:50px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(199,204,209,1);
            border-radius:6px;
            line-height: 50px;
            text-align: center;
            position: relative;
            float: left;
            margin-right:20px;
            cursor: pointer;
            &.active{
              border: 2px solid #FA3C3C;
              color: #FA3C3C;
              font-weight: 900;
              background: url('../../../../../../assets/images/xuanzhong.png') no-repeat right bottom;
            }
            div{
              height: 28px;
              line-height: 28px;
              position: absolute;
              top:0;
              bottom:0;
              left:0;
              right:0;
              margin:auto;
              img{
                float: left;
              }
              span{
                float: left;
                padding-left: 10px;
              }
            }
          }
          .pay_type_btn:nth-of-type(1){
            div{
              width:70px;
            }
          }
          .pay_type_btn:nth-of-type(2){
            div{
              width:90px;
            }
          }
          .pay_type_btn:nth-of-type(3){
            div{
              width:110px;
            }
          }
        }
      }
      .prepaid_online{
        width:540px;
        height:296px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(199,204,209,1);
        border-radius:6px;
        float: right;
        margin-top:30px;
        padding:32px 0 0 22px;
        position: relative;
        .prepaid_online_item{
          margin-bottom: 22px;
          height: 16px;
          line-height: 16px;
          span{
            float: left;
            font-size: 16px;
            color: #606266;
          }
          p{
            float: left;
            font-size: 16px;
            color: #303133;
          }
        }
        .prepaid_online_item:nth-of-type(1){
          p{
            padding-left:70px;
          }
        }
        .prepaid_online_item:nth-of-type(2){
          p{
            padding-left:4px;
          }
        }
        .prepaid_online_item:nth-of-type(3){
          p{
            padding-left:102px;
          }
        }
        .prepaid_online_item:nth-of-type(4){
          p{
            padding-left:70px;
          }
        }
        .prepaid_online_item:nth-of-type(5){
          p{
            padding-left:70px;
          }
        }
        .prepaid_online_item:nth-of-type(6){
          p{
            padding-left:70px;
          }
        }
        .prepaid_online_hint{
          width:540px;
          height:40px;
          background:rgba(240,242,245,1);
          border-radius:6px;
          position: absolute;
          bottom: 0;
          left:0;
          line-height: 40px;
          padding-left: 20px;
          font-size: 14px;
          color: #909399;
        }
      }
      .prepaid_payable{
        float: left;
        width:666px;
        margin-top:40px;
        height: 26px;
        line-height: 26px;
        span{
          float: left;
        }
        p{
          float: left;
          padding-left:70px;
          font-size: 26px;
          color: #FA3C3C;
          font-weight: 700;
          span{
            padding-right:10px;
          }
        }
      }
      .prepaid_btn{
        width:300px;
        height:60px;
        background:rgba(250,60,60,1);
        border-radius:6px;
        margin-top:40px;
        line-height: 60px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        float: left;
        cursor: pointer;
      }
    }
    .prepaid_box_right{
      width:260px;
      float: left;
      margin:40px 0 0 324px;
      .prepaid_box_left_img{
        width:228px;
        height:200px;
        background:rgba(254,240,207,1);
        border:1px solid rgba(255,190,38,1);
        border-radius:6px;
        position: relative;
        margin-left: 16px;
        img{
          width:90px;
          height: 90px;
          position: absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          margin:auto;
        }
      }
      p{
        width:260px;
        height:18px;
        font-size: 18px;
        color: #303133;
        text-align: center;
        font-weight: 900;
        margin:30px 0;
      }
      span{
        display: block;
        width:260px;
        margin-bottom:30px;
        font-size: 14px;
        color: #606266;
        line-height: 24px;
      }
      .agreement{
        display: inline;
        color: #448BD2;
      }
    }
  }
</style>
<style lang="scss">
  .el-message{
      top:66px;
    }
</style>
