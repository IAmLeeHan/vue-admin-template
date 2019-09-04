<template>
  <div class="organizational_box">
    <div class="organizational_title">
      <span>组织管理</span>
    </div>
    <div class="organizational_btn_box">
      <div class="organizational_btn" @click="isAddGroup=true">添加子分组</div>
      <div class="organizational_btn" @click="isEditGroup=true">编辑</div>
      <div class="organizational_btn">删除</div>
    </div>
    <div class="organizational_tree">
     <OrganizationalTree></OrganizationalTree>
    </div>
    <AddGroup
      v-if="isAddGroup"
      :isAddGroup="isAddGroup" 
      @AddGroup="AddGroup"
    ></AddGroup>

    <EditGroup
      v-if="isEditGroup"
      :isEditGroup="isEditGroup"
      @EditGroup="EditGroup"
    ></EditGroup>
  </div>
</template>

<script>
  import OrganizationalTree from '@/components/organizationTree'
  import AddGroup from './addGroup.vue'
  import EditGroup from './EditGroup.vue'
export default {
    name: 'Organizational',
    components:{OrganizationalTree,AddGroup,EditGroup},
    data(){
      return {
        isAddGroup:false,
        isEditGroup:false
      }
    },
    methods:{
      AddGroup(res){
        this.isAddGroup = res
      },
      EditGroup(res){
        this.isEditGroup = res
      }
    }
}
</script>

<style lang="scss" scoped>
  .organizational_box{
    width:430px;
    height:810px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(223,230,236,1);
    border-radius:10px;
    float: left;
    margin-left:20px;
    .organizational_title{
      width:430px;
      height:50px;
      background:rgba(245,247,250,1);
      border-radius:10px;
      line-height: 50px;
      span{
        font-size: 16px;
        color:#303133;
        font-weight: 700;
        padding-left:20px;
      }
    }
    .organizational_btn_box{
      height:44px;
      line-height: 44px;
      margin:55px 0;
      .organizational_btn{
        width:110px;
        height:44px;
        background:rgba(68,139,210,1);
        border:1px solid rgba(68,139,210,1);
        border-radius:6px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        float: left;
        margin-left:20px;
        cursor: pointer;
      }
    }
    .organizational_tree{
      width:390px;
      height:586px;
      border:1px solid rgba(223,230,236,1);
      padding:30px 0 0 20px;
      margin:0 auto;
      overflow: auto;
    }
  }
</style>
