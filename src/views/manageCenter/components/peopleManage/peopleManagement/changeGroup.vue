<template>
  <div class="new_email_shadow">
    <div class="new_email_box">
      <i
        class="el-icon-close"
        @click="close"
      />
      <p>移动分组</p>
      <div class="input_item_email">
        <label for="">移动人员：</label>
        <el-input
          v-model="input"
          placeholder="钢铁侠；美国队长"
          :disabled="true"
        />
      </div>
      <div class="input_item_hint">
        <span>移动至：</span>
        <div class="tree">
          <OrganizationalTree></OrganizationalTree>
        </div>
      </div>
      <div
        class="go_next"
      >确定</div>
    </div>
  </div>
</template>

<script>
  import OrganizationalTree from '@/components/organizationTree'
export default {
    props: ['ischangegroup'],
    components:{OrganizationalTree},
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
            this.$emit('changegroup', false)
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
            height:652px;
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
            .input_item_hint{
              height: 14px;
              margin:20px 0 0 50px;
              line-height: 14px;
              span{
                float: left;
                height: 14px;
                font-size: 16px;
                color: #606266;
                font-weight: 700;
              }
              .tree{
                float: left;
                width:350px;
                height:360px;
                border:1px solid rgba(199,204,209,1);
                border-radius:6px;
                padding:20px;
                margin-left:50px;
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
