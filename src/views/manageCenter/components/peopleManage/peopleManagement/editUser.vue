<template>
  <div class="new_email_shadow">
    <div class="new_email_box">
      <i
        class="el-icon-close"
        @click="close"
      />
      <p>编辑用户</p>
      <div class="input_item_email">
        <label for="">姓名：</label>
        <el-input
          v-model="input"
          placeholder="钢铁侠；美国队长"
          :disabled="true"
        />
      </div>
      <div class="input_item_email">
        <label for="">手机号：</label>
        <el-input
          v-model="input"
          placeholder="钢铁侠；美国队长"
          :disabled="true"
        />
      </div>
      <div class="input_item_email">
        <label for="">邮箱：</label>
        <el-input
          v-model="input"
          placeholder="钢铁侠；美国队长"
          :disabled="true"
        />
      </div>
      <div class="input_item_email">
        <label for="">工号：</label>
        <el-input
          v-model="input"
          placeholder="钢铁侠；美国队长"
        />
      </div>
      <div class="input_item_email">
        <label for="">所属部门：</label>
        <el-input
          v-model="input"
          placeholder="钢铁侠；美国队长"
        />
      </div>
      <div class="input_item_email">
        <label for="">职位：</label>
        <el-input
          v-model="input"
          placeholder="钢铁侠；美国队长"
        />
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
    props: ['ischangegroup','isAddUser'],
    components:{OrganizationalTree},
    data() {
        return {
            input: '',
            }
    },
    created() {
        console.log(this.VerifyPhone)
    },
    methods: {
        close() {
            this.$emit('EditUser', false)
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
            height:642px;
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
              /deep/.el-input{
                width:350px;
                .el-input__inner{
                  height: 44px;
                  line-height: 44px;
                  color: #303133;
                }
              }
              
              i{
                color:#FA3C3C;
              }
              label{
                font-size: 16px;
                color: #606266;
              }
            }

            .input_item_email:nth-of-type(1){
                /deep/.el-input{
                  margin-left:50px;
                }
              }
              .input_item_email:nth-of-type(2){
                /deep/.el-input{
                  margin-left:36px;
                }
              }
              .input_item_email:nth-of-type(3){
                /deep/.el-input{
                  margin-left:50px;
                }
              }
              .input_item_email:nth-of-type(4){
                /deep/.el-input{
                  margin-left:50px;
                }
              }
              .input_item_email:nth-of-type(5){
                /deep/.el-input{
                  margin-left:20px;
                }
              }
              .input_item_email:nth-of-type(6){
                /deep/.el-input{
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
<style lang="scss">
  .el-popper{
    z-index:9999!important;
    height: 190px;
    .el-scrollbar{
      height: 190px;
      .el-scrollbar__wrap{
        overflow-x:hidden;
      }
    }
  }
</style>
