<template>
  <div class="new_email_shadow">
    <div class="new_email_box">
      <i
        class="el-icon-close"
        @click="closeApply"
      />
      <p>应用申请</p>
      <div class="input_item_email">
        <textarea id="appUseApplyContent" name="appUseApplyContent" cols="30" rows="10" />
      </div>
      <div
        class="go_next"
      >立即申请</div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['isApply'],
    data() {
        return {
            textarea: ''
        }
    },
    created() {
        console.log(this.VerifyPhone)
    },
    methods: {
        closeApply() {
            this.$emit('closeApply_btn', false)
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
            height:348px;
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
            .input_item_email{
              height: 44px;
              margin:30px 0 0 50px;
              line-height: 44px;
              #appUseApplyContent{
                resize: none;
                float: left;
                display: block;
                width:454px;
                height:150px;
                border:1px solid rgba(199,204,209,1);
                border-radius:6px;
              }
            }
            .go_next{
              float: left;
              width:454px;
              height: 50px;
              background:rgba(68,139,210,1);
              border-radius:6px;
              line-height: 50px;
              text-align: center;
              color: #fff;
              font-size: 16px;
              margin:30px 0 0 50px;
              cursor: pointer;
            }
        }
    }
</style>
