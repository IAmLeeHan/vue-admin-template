<template>
  <el-container>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location" />
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location" />
          <span slot="title">导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location" />
          <span slot="title">导航三</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location" />
          <span slot="title">导航四</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <el-container>
      <el-header>
        <i
          :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"
          @click.stop="isCollapse=!isCollapse"
        />
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item to="#">人员管理</el-breadcrumb-item>
          <el-breadcrumb-item>人员管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
            ClientWidth: document.documentElement.clientWidth
        }
    },
    mounted() {
        this.ClientWidth = document.documentElement.clientWidth
        const _that = this
        window.onresize = function temp() {
            _that.ClientWidth = document.body.clientWidth
            console.log('clientWidth', _that.ClientWidth)
            if (_that.ClientWidth <= 1200) {
                _that.isCollapse = true
            } else if (_that.ClientWidth > 1200) {
                _that.isCollapse = false
            }
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

<style lang="scss" scoped>
  /deep/.el-header{
    background-color: #F0F2F5;
    color: #606266;
    text-align: center;
    line-height: 60px;
    text-align: left;
    .el-icon-s-fold{
      font-size: 20px;
      color: #606266;
      cursor: pointer;
      float: left;
      padding-top:20px;
    }
    .el-icon-s-unfold{
      font-size: 20px;
      color: #606266;
      cursor: pointer;
      float: left;
      padding-top:20px;
    }
    .el-breadcrumb{
      float: left;
      margin-left:20px;
      padding-top:22px;
    }
  }

  /deep/.el-aside {
    background-color: #F0F2F5;
    text-align: center;
    line-height: 200px;
    height: 886px;
    width:230px!important;
    background:rgba(48,65,86,1);
  }

  /deep/.el-main {
    background-color: #F0F2F5;
    text-align: center;
    line-height: 160px;
  }
  /deep/.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    height: 886px;
    background: #304156;
    font-size: 14px;
    color: #BFCBD9;
  }
  /deep/.el-menu-vertical-demo {
    height: 886px;
    background: #304156;
    font-size: 14px;
    color: #BFCBD9;
  }
  /deep/.el-submenu__title{
    color:#BFCBD9;
  }
  /deep/.el-menu-item-group{
    background: #1F2D3D;
    .el-menu-item-group__title{
      font-size: 14px;
      background: #1F2D3D;
    }
  }
  /deep/.el-menu-item{
        color: #BFCBD9;
        &.is-active{
          color: #1890ff;
          background: #1F2D3D;
        }
      }
  /deep/.el-breadcrumb__inner{
      &.is-link{
        color: #1890ff;
      }
    }
</style>
