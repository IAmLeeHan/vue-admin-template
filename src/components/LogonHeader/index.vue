<template>
  <el-row>
    <el-col :sm="3">
      <div class="Header_logo">
        <img src="~img/new_logo@2x.png" alt="">
      </div>
    </el-col>
    <el-col :sm="6">
      <div
        class="select_enterprise"
        @click="IsShowEnterpriseList = !IsShowEnterpriseList"
      >

        <span class="select_enterprise_title">
          {{ placeholder }}
          <i v-if="MsgDot" class="iconfont icon-dot" />
        </span>

        <i
          v-if="!IsShowEnterpriseList"
          class="el-icon-caret-bottom icon_left"
        />
        <i
          v-else
          class="el-icon-caret-top icon_left"
        />

        <div
          v-if="IsShowEnterpriseList"
          class="EnterpriseList"
        >
          <div
            v-for="(item,index) in options"
            :key="item.value"
            ref="enterprise"
            class="EnterpriseListItem"
            @click.stop="EnterpriseListItem(index)"
          >
            <span class="enter_name">{{ item.label }}</span>
            <p class="msgHint" v-if="item.msg"><span>{{item.msg | isMsg}}</span></p>
          </div>
          <div class="add_enterprise">
            <div class="add_enterprise_btn">
              <div class="add_enterprise_btn_img">
                <img src="~img/add.png" alt="">
              </div>
              <span class="add_enterprise_btn_text">
                添加企业
              </span>
            </div>
          </div>
        </div>
      </div>
    </el-col>

    <el-col :sm="12">
      <ul class="FunctionSelector">
        <router-link
          v-for="item in FunctionSelector"
          :key="item.id"
          tag="div"
          :to="item.path"
          class="myAppSelector"
          @mouseleave.native="hideShortcutList(item.id)"
          @mouseenter.native="showShortcutList(item.id)"
        >
          <div class="icon_box">
            <i class="iconfont" :class="item.icon" />
          </div>
          <div class="title_box">
            <span>{{ item.title }}</span>
          </div>
          <div 
            class="shortcutListbox" 
            v-if="a===item.id"
          >
            <p v-for="item in shortcutList" :key="item.appId">
              <img :src="item.appImage" alt="">
              <span>{{item.appName}}</span>
            </p>
          </div>
        </router-link>
      </ul>
    </el-col>
    <el-col :sm="3">
      <div class="user_info" @click="IsShowUserManage = !IsShowUserManage">
        <div class="user_info_img">
          <img src="" alt="">
        </div>
        <span>{{userInfo.name}}</span>
        <i
          v-if="!IsShowUserManage"
          class="el-icon-caret-bottom icon_left"
        />
        <i
          v-else
          class="el-icon-caret-top icon_left"
        />

        <div
          v-if="IsShowUserManage"
          class="UserManage"
        >
          <div
            v-for="item in UserManage"
            :key="item.id"
            class="userManageBox"
          >
            <div class="UserManage_img">
              <img :src="item.img" alt="">
            </div>
            <span
              :id="item.id"
              @click="shoeUserInfo($event)"
            >
              {{ item.title }}

            </span>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {getMyApp} from '@/api/mine'
import {mapState,mapGetters} from "vuex"
import { userInfo } from 'os';
export default {
    data() {
        return {
            a:-1,
            //*快捷方式
            showShortcutListbox:false,
            // shortcutList:[],
            //* 企业标题
            placeholder: '暂无企业',
            MsgDot:null,
            //* 企业列表
            IsShowEnterpriseList: false,
            IsShowUserManage: false,
            //* 列表数据（暂时自定义）
            options: [{
                value: '1',
                label: '格兰德',
                msg:100,
            }, {
                value: '2',
                label: '腾讯',
                msg:100,
            }, {
                value: '3',
                label: '阿里巴巴阿里巴巴阿里巴巴阿里巴巴阿里巴巴',
                msg:5,
            }, {
                value: '4',
                label: '小米',
                msg:10,
            }, {
                value: '5',
                label: '海尔',
                msg:null,
  
            }],
            value: '',
            FunctionSelector: [
                { id: 1, title: '我的应用', icon: 'icon-menu-home-normal', path: '/mine' },
                { id: 2, title: '应用商店', icon: 'icon-yingyong', path: '/appshop' },
                { id: 3, title: '管理中心', icon: 'icon-shezhi', path: '/managecenter' },
                { id: 4, title: '消息中心', icon: 'icon-xiaoxi', path: '/newscenter' }
            ],
            UserManage: [
                { id: 1, title: '个人信息', img: require('img/personal.png') },
                { id: 2, title: '修改密码', img: require('img/password.png') },
                { id: 3, title: '我的消费', img: require('img/consumption.png') },
                { id: 4, title: '退出', img: require('img/Sign out.png') }
            ],
        }
    },
    created(){
      // this.getAppList()
      console.log('getter',this.userInfo)
    },
    computed:{
      ...mapGetters(["shortcutList","userInfo"])
    },
    methods: {
        EnterpriseListItem(index) {
            const _placeholder = this.options[index].label
            this.placeholder = _placeholder
            this.IsShowEnterpriseList = false
            this.MsgDot = this.options[index].msg
        },
        shoeUserInfo(event) {
            console.log(event.target.id)
            if (event.target.id * 1 === 1) {
                this.$router.push({ name: 'userInfoContent' })
            }else if(event.target.id * 1 === 3){
              console.log("我的消费")
              this.$router.push({name:"spending"})
            }else if(event.target.id * 1 === 2){
              console.log("1111111111111111")
              this.$router.push({name:"resetPassword"})
            }
        },
        showShortcutList(id){
          if(id === 1 && this.shortcutList.length !== 0){
            this.a = id
          }
        },
        hideShortcutList(id){
          if(id === 1){
            this.a = -1
          }
        },
    },
    filters:{
      isMsg(val){
        return val && val > 99 ? '···' : val
      }
    }
}
</script>

<style lang="scss" scoped>
  .el-row {
    background: #fff;
    width:100%;
    height:60px;
    position: fixed;
    z-index: 9999;
  }
  .el-col {
    border-radius: 4px;
  }
  @media screen and (max-width:1520px){
    .icon_left{
        display: none;
      }
  }
  @media screen and (max-width:1420px){
      .Header_logo{
          display: none;
      }
      .select_enterprise{
          width:354px;
          position: absolute;
          left:0;
      }
      .FunctionSelector{
          width:710px;
          position: absolute;
          right:0;
      }
      .user_info{
          display: none;
      }
  }
  @media screen and (max-width:820px){
      .Header_logo{
          display: none;
      }
      .select_enterprise{
          display: none;
      }
      .FunctionSelector{
          width:710px;
          position: absolute;
          left:0;
      }
      .user_info{
          display: none;
      }
  }
  .Header_logo{
      width: 135px;
      height: 36px;
      margin:12px 0 0 40px;
      img{
          width: 100%;
          height: 100%;
      }
  }

  .select_enterprise{
      text-align: left;
      height: 60px;
      line-height: 60px;
      position: relative;
      cursor: pointer;
      .select_enterprise_title{
          position: relative;
          float: left;
          padding-right:10px;
          font-size: 16px;
          max-width: 17em;
          color:#303133;
          font-weight: 900;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
      }
      .icon-dot{
       color: #FA3C3C;
       font-size: 20px;
       position: absolute;
       right:0px;
       top:-8px;   
      }
      .EnterpriseList{
          width:338px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(220,221,221,1);
          box-shadow:0px 2px 27px 0px rgba(17,47,92,0.6);
          border-radius:6px;
          width: 340px;
          left:-60px;
          position: absolute;
          top:60px;
          color: #303133;
          font-size: 14px;
          z-index: 9999;
        .EnterpriseListItem{
            text-indent: 20px;
            height: 50px;
            line-height: 50px;
            background: #fff;
            cursor: pointer;
            &:hover{
                background: #F0F2F5;
            }
            .enter_name{
              float: left;
            }
            .msgHint{
              width:20px;
              height: 20px;
              background:#FA3C3C ;
              border-radius: 50%;
              text-align: center;
              line-height: 20px;
              float: right;
              position: relative;
              top:14px;
              right:5px;
              span{
                position: absolute;
                top:0;
                bottom:0;
                left:-20px;
                right:0;
                margin:auto;
                font-size: 10px;
                color: #fff;
              }
            }
        }
      }
  }

  .icon_left{
      float: left;
      margin-top: 22px;
  }

  .FunctionSelector{
      height: 60px;
      .myAppSelector{
        width:130px;
          height: 60px;
          margin-right:30px;
          float: left;
          line-height: 60px;
          text-indent: 10px;
          position: relative;
          cursor: pointer;
          &.router-link-active{
            color: #448BD2;
          }
          .icon_box{
            height: 60px;
            line-height: 60px;
            float: left;
            .iconfont{
              font-size: 26px;
            }
          }
          .title_box{
            height: 60px;
            line-height: 60px;
            float: left;
          }
        .shortcutListbox{
          position: absolute;
          width:200px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(220,221,221,1);
          box-shadow:0px 2px 27px 0px rgba(17,47,92,0.6);
          border-radius:6px;
          top:60px;
          left:-50px;
          p{
            width:200px;
            height:50px;
            border-radius:6px;
            padding-left: 40px;
            line-height: 50px;
            &:hover{
              background: #F0F2F5;
              cursor: pointer;
            }
            img{
              width:14px;
              height: 18px;
              margin-top:16px;
              float: left;
            }
            span{
              float: left;
              font-size: 14px;
              color: #303133;
              padding-left:20px;
            }
          }
        }
      }
  }
  .user_info{
      height: 60px;
      line-height: 60px;
      text-indent: 10px;
      position: relative;
      cursor: pointer;
      .user_info_img{
          width:36px;
          height: 36px;
          border-radius: 50%;
          background: #DCDDDD;
          float: left;
          margin-top:12px;
          img{
              width:100%;
              height: 100%;
          }
      }
      span{
          position: relative;
          float: left;
          font-size: 16px;
          max-width: 8em;
          color:#303133;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
      }
      .UserManage{
          position: absolute;
          top:60px;
          left:50px;
          width:150px;
          height: 200px;
          background: #fff;
          box-shadow:0px 2px 10px 0px rgba(17,47,92,0.6);
          border-radius:6px;
          .userManageBox{
              width:150px;
              height:50px;
              line-height: 50px;
              &:hover{
                  background:rgba(240,242,245,1);
              }
              .UserManage_img{
                  float: left;
                  width:18px;
                  height: 18px;
                  margin:18px 10px 0 32px;
                  img{
                      width: 100%;
                      height: 100%;
                  }
              }
              span{
                  float: left;
              }
          }
      }
  }
  .add_enterprise{
      width:340px;
      height: 80px;
      border-top:1px solid #DCDDDD;
      .add_enterprise_btn{
          width:140px;
          height:40px;
          border:1px solid rgba(68,139,210,1);
          border-radius:6px;
          margin:20px auto;
          line-height: 40px;
          font-size:16px;
          color:rgba(68,139,210,1);
          .add_enterprise_btn_img{
              width:18px;
              height: 18px;
              margin:11px 14px 11px 12px;
              float: left;
              img{
                  width:100%;
                  height: 100%;
              }
          }
      }
  }
</style>
