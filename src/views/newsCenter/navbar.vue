<template>
  <el-container>
      <el-aside :collapse="isCollapse" :class="isCollapse?'isCollapse':'unCollapse'">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened @select="handleMenuSelect">
          <template v-for="nav in navbar">
            <el-submenu v-if="nav.items.length>0" :key="nav.id" :index="nav.title">
              <template slot="title">
                <i class="iconfont" :class="nav.icon" />
                <span slot="title">{{ nav.title }}</span>
                <span>99</span>
              </template>
              <el-menu-item-group v-for="item in nav.items" :key="item.id">
                <router-link :to="item.path">
                  <el-menu-item :index="item.title">
                    {{ item.title }}
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <router-link v-else :key="nav.id" :to="nav.path">
              <el-menu-item :index="nav.title">
                <i class="iconfont" :class="nav.icon" />
                <span slot="title">
                  {{ nav.title }}
                </span>
                <p class="msg_hint" v-if="nav.msg">{{nav.msg | isMsg}}</p>
              </el-menu-item>
            </router-link>
          </template>

        </el-menu>
      </el-aside>
    <el-container :class="isCollapse?'nopadding':''">
      <el-header>
        <i
          :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"
          @click.stop="isCollapse=!isCollapse"
        />
        <Breadcrumb></Breadcrumb>
        <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(list,index) in breads" :key="index">{{ list }}</el-breadcrumb-item>
        </el-breadcrumb> -->
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components:{Breadcrumb},
    data() {
        return {
            isCollapse: false,
            ClientWidth: document.documentElement.clientWidth,
            navbar: [
                { id: 1, title: '企业消息', msg:null,items: [], icon: 'icon-qiye', path: '/newscenter/enterpriseMsg' },
                { id: 2, title: '应用消息', msg:10,items: [], icon: 'icon-yingyong1', path: '/newscenter/appMsg' },
                { id: 3, title: '系统消息', msg:111,items: [], icon: 'icon-svg45-copy', path: '/newscenter/systemMsg' },
            ],
            // breads: []
        }
    },
    // created() {
    //     console.log(this.$route.fullPath)
    //     this.navbar.map((obj) => {
    //         if (obj.path && obj.path === this.$route.fullPath) {
    //             this.breads.push(obj.title)
    //         } else {
    //             if (obj.items.length > 0) {
    //                 obj.items.map((item) => {
    //                     if (this.$route.fullPath === item.path) {
    //                         console.log(obj.title, item.title)
    //                         this.breads.push(obj.title, item.title)
    //                     }
    //                 })
    //             }
    //         }
    //     })
    // },
    beforeDestroy() {
        this.breads = []
    },
    mounted() {
        this.ClientWidth = document.documentElement.clientWidth
        const _that = this
        window.onresize = function temp() {
            _that.ClientWidth = document.body.clientWidth
            console.log('clientWidth', _that.ClientWidth)
            if (_that.ClientWidth < 1920) {
                _that.isCollapse = true
            } 
            else if (_that.ClientWidth = 1920) {
                _that.isCollapse = false
            }
        }
    },
    methods: {
        handleMenuSelect(index, indexPath) {
            this.breads = indexPath
            console.log(this.breads, 'breads')
        }
    },
    filters:{
      isMsg(val){
        return val && val > 99 ? '···' : val
      }
    }
}
</script>

<style lang="scss" scoped>
/deep/.el-container{
  height: 100%;
  width:100%;
  margin:60px 0 0 230px;
  &.nopadding{
    margin:60px 0 0 64px;
  }
  // position: fixed;
  // top:60px;
  // left:230px;
}
@media screen and (max-width:1780px){
  /deep/.el-main{
    width:1750px;
  }
}
  
  /deep/.el-header{
    background-color: #F0F2F5;
    color: #606266;
    text-align: center;
    line-height: 60px;
    text-align: left;
    position: fixed;
    top:60px;
    width:100%;
    z-index: 1000;
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
      line-height: 60px;
    }
  }

  /deep/.el-aside {
    background-color: #F0F2F5;
    text-align: center;
    line-height: 200px;
    height:100%;
    width:64px;
    position: fixed;
    top:60px;
    left:0;
    bottom:0;
    z-index: 9998;
    &.unCollapse{
      width:230px!important;
    }
    &.isCollapse{
      width:64px!important;
    }
  }

  /deep/.el-main {
    background-color: #F0F2F5;
    padding:0;
    overflow: auto;
    padding-top:60px;
  }
  /deep/.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    height: 100%;
    background: #304156;
    font-size: 14px;
    color: #BFCBD9;
  }
  /deep/.el-menu-vertical-demo {
    height: 100%;
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
        position: relative;
        &.is-active{
          color: #1890ff;
          background: #1F2D3D;
        }
      }
  /deep/.el-breadcrumb__item:first-child{
    .el-breadcrumb__inner:first-child{
      color: #1890ff;
    }
  }
    .iconfont{
      font-size: 14px;
    }
    .msg_hint{
      width:20px;
      height:20px;
      background:rgba(250,60,60,1);
      border-radius:50%;
      line-height: 20px;
      text-align: center;
      font-size:14px;
      font-family:Arial;
      font-weight:400;
      color:rgba(255,255,255,1);
      position: absolute;
      right: 20px;
      top:20px;
    }
</style>
