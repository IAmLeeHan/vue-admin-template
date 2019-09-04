<template>
  <div class="msg_detail_box">
    <div class="msg_detail_title">
      <span>消息详情</span>
      <p>查看详情</p>
    </div>
    <div v-if="!detail" class="detail_empty">
      <span>点击左侧查看消息</span>
    </div>
    <div v-else>
      <div class="msg_detail_subtitle">
        <div class="msg_detai_img">
          <img :src="detail.img" alt="">
        </div>
        <div class="msg_detail_text">
          <p>{{detail.title}}</p>
          <span>{{detail.date}}</span>
        </div>
      </div>
      <div class="msg_detail_content">
        {{detail.content}}
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '@/utils/eventBus'
export default {
  data(){
    return {
      detail:null
    }
  },
  created(){
    Bus.$on('sendMsgDetail',(msg)=>{
      this.detail = msg;
      console.log("detail",this.detail)
    })
  }
}
</script>

<style lang="scss" scoped>
  .msg_detail_box{
    float: left;
    width:895px;
    height:800px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    .msg_detail_title{
      width:893px;
      height:50px;
      background:rgba(245,247,250,1);
      border-radius:10px 10px 0 0;
      line-height: 50px;
      padding:0 20px;
      span{
        float: left;
        font-size: 16px;
        font-weight: 900;
        color:#303133;
      }
      p{
        float: right;
        width:118px;
        height:38px;
        background:rgba(68,139,210,1);
        border-radius:6px;
        margin-top:6px;
        line-height: 38px;
        text-align: center;
        color: #fff;
        font-size: 14px;
      }
    }
    .msg_detail_subtitle{
      height: 50px;
      margin:40px;
      .msg_detai_img{
        float: left;
        width:50px;
        height: 50px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 13px 0px rgba(12,45,77,0.17);
        border-radius:8px;
        position: relative;
        img{
          position: absolute;
          top:0;
          bottom:0;
          right:0;
          left:0;
          margin:auto;
        }
      }
      .msg_detail_text{
        padding-left:20px;
        float: left;
        p{
          font-size: 16px;
          color: 16px;
          font-weight: 600;
          padding:6px 0;
        }
        span{
          font-size: 14px;
          color: #909399;
        }
      }
    }
    .msg_detail_content{
      height: 620px;;
      padding:0 40px 40px;
      overflow: auto;
    }
    .detail_empty{
      width:895px;
      height: 620px;
      text-align: center;
      line-height: 620px;
      font-size: 20px;
      color: #606266;
    }
  }
</style>
