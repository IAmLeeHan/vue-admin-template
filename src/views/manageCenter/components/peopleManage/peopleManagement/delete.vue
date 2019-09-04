<template>
  <div class="new_email_shadow">
    <div class="new_email_box">
      <i
        class="el-icon-close"
        @click="close"
      />
      <p>删除</p>
      <div class="delete_hint">
        <img src="~img/tip_d.png" alt="">
        <span>确定要进行删除操作吗？</span>
      </div>
      <div
        class="confirm"
      >确定</div>
      <div 
      @click="close"
      class="cancel">
        取消
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['isDelete'],
    data() {
        return {
            input: ''
        }
    },
    created() {
        console.log(this.VerifyPhone)
    },
    methods: {
        close() {
            this.$emit('UnDelete', false)
        }
    }
}
</script>

<style lang="scss" scoped>
    .new_email_shadow{
        width:100%;
        height: 100%;
        position: fixed;
        top:0;
        bottom: 0;
        left:0;
        right: 0;
        margin:auto;
        background: rgba(0,0,0,.5);
        z-index: 9999;
        overflow: hidden;
        .new_email_box{
            width:554px;
            height:272px;
            background:rgba(255,255,255,1);
            border-radius:10px;
            position: fixed;
            top:0;
            bottom: 0;
            left:0;
            right: 0;
            margin:auto;
            /deep/.el-icon-close{
              position: absolute;
              top:16px;
              right: 16px;
              font-size: 14px;
              cursor: pointer;
            }
            p{
              font-size: 18px;
              color: #303133;
              font-weight: 900;
              margin:40px 0 0 50px;
            }
            .delete_hint{
              margin:40px 0 0 50px;
              height: 28px;
              line-height: 28px;
              img{
                width:28px;
                height: 28px;
                float: left;
              }
              span{
                font-size: 16px;
                color: #909399;
                padding-left:20px;
              }
            }
            .confirm{
              float:right;
              width:100px;
              height:50px;
              background:rgba(68,139,210,1);
              border-radius:6px;
              line-height: 50px;
              text-align: center;
              margin:40px 20px 0 0;
              color: #fff;
              cursor: pointer;
            }
            .cancel{
              float: right;
              width:100px;
              height:50px;
              border:1px solid rgba(144,147,153,1);
              border-radius:6px;
              line-height: 50px;
              text-align: center;
              margin:40px 20px 0 0;
              cursor: pointer;
            }
        }
    }
</style>
