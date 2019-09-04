<template>
  <div class="new_email_shadow">
    <div class="new_email_box">
      <i
        class="el-icon-close"
        @click="closeAddGroup"
      />
      <p>添加分组</p>
      <div class="input_item_email">
        <label for="">分组名称：</label>
        <el-input
          v-model="input"
          placeholder="请输入分组名称"
        />
      </div>
      <div
        class="go_next"
      >确定</div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['isAddGroup'],
    data() {
        return {
            input: ''
        }
    },
    created() {
        console.log(this.VerifyPhone)
    },
    methods: {
        closeAddGroup() {
            this.$emit('AddGroup', false)
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
            .input_item_email{
              height: 44px;
              margin:40px 0 0 50px;
              line-height: 44px;
              /deep/.el-input{
                width:350px;
                margin-left:30px;
                .el-input__inner{
                  height: 44px;
                  line-height: 44px;
                  color: #303133;
                }
              }
              label{
                font-size: 16px;
                color: #606266;
              }
            }
            .go_next{
              width:464px;
              height: 50px;
              background:rgba(68,139,210,1);
              border-radius:6px;
              line-height: 50px;
              text-align: center;
              float: left;
              color: #fff;
              font-size: 16px;
              margin:40px 0 0 50px;
              cursor: pointer;
            }
        }
    }
</style>
