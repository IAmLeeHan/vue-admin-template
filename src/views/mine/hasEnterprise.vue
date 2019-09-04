<template>
  <div class="hasEnterprise">
    <!-- <div class="mine_title">
            我的应用
        </div> -->

    <div class="banner_null" />

    <!-- <div class="app_seach">
      <span>应用类型</span>
      <el-select
        v-model="value"
        placeholder="请选择种类"
        class="app_type"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.id"
        />
      </el-select>

      <span class="app_key_seach_label">关键字查询</span>
      <input
        type="text"
        placeholder="请输入关键字"
        name="app_key_seach"
        class="app_key_seach"
      >
      <div class="app_key_seach_btn">
        应用检索
      </div>
    </div> -->

    <div class="my_app_box">
      <div class="my_app_box_box_title">
        <span class="my_app_dian" />
        <span class="my_app_title">我的应用</span>
      </div>

      <div class="my_app_box_content">
        <div
          v-if="hasApp.length"
          class="my_app_box_content_has"
        >
          <div class="enterprise_app clear">
            <div
              v-for="item in hasApp"
              :id="item.appId"
              :key="item.appId"
              class="enterprise_app_box clear"
              @mouseenter="appSettingBtnshow = true;appSettingBtn($event)"
              @mouseleave="appSettingBtnshow = false;SettingBtnListShow = false"
            >
              <div
                :id="item.appId"
                class="enterprise_app_content"
                @click.stop="enterApp($event)"
              >
                <div
                  :id="item.appId"
                  class="enterprise_app_content_img"
                  @click.stop="enterApp($event)"
                >
                  <img :id="item.appId" :src="item.appImage" alt="">
                </div>
                <div
                  v-if="appSettingBtnshow"
                  class="enterprise_app_content_setting"
                  :class="[IsAppSettingBtn === item.appId * 1 ? 'active' : '']"
                  @click.stop="SettingBtnListShow = true"
                >
                  <img src="~img/set up.png" alt="">
                </div>
                <div
                  v-if="SettingBtnListShow"
                  class="setting_list"
                  :class="[IsAppSettingBtn === item.appId * 1 ? 'settingBtnActive' : '']"
                >
                  <div
                    v-if="item.admin"
                    class="setting_list_user"
                    @click.stop="user_manage(item.appId,item.orgAppId)"
                  >人员管理</div>
                  <p class="setting_line" />
                  <div
                    class="setting_list_user"
                    @click.stop="setAppToShortcut(item.appId)"
                  >{{item.shortcut ? "取消快捷" : "设置快捷"}}</div>
                  <p class="setting_line" />
                  <div
                    class="setting_list_delete"
                    @click.stop="deleteAppInPerson(item.appId)"
                  >移除</div>
                </div>
              </div>
              <div
                v-if="item.admin"
                class="admin_box"
              >
                <div class="admin_img_btn">
                  <img src="~img/admin.png" alt="">
                </div>
                <span>{{ item.appName }}</span>
              </div>
              <p
                v-else
                class="editer_box"
              >{{ item.appName }}</p>
            </div>
          </div>
        </div>
        <div
          v-else
          class="my_app_box_content_hint"
        >
          <div
            class="my_app_box_content_null"
          >
            <img src="~img/pic_02.png" alt="">
          </div>
          <p>暂无应用，可在下方企业应用中添加</p>
        </div>
      </div>
    </div>

    <div class="my_app_box">
      <div class="my_app_box_box_title">
        <span class="my_app_dian" />
        <span class="my_app_title">企业应用</span>
      </div>

      <div class="enterprise_app clear">
        <div
          v-for="item in enterpriseApp"
          :id="item.appId"
          :key="item.appId"
          class="enterprise_app_box clear"
          @mouseenter="shadow = true;IsShadow($event)"
          @mouseleave="shadow = false"
        >
          <div class="enterprise_app_content">
            <div class="enterprise_app_content_img">
              <img :src="item.appImage" alt="">
            </div>
          </div>
          <div
            v-if="shadow"
            class="add_person_app_shadow"
            :class="[isShadowActive === item.appId * 1 ? 'active' : '']"
          >
            <div
              class="add_person_app"
              @click.stop="addPersonApp(item.appId)"
            >添加应用</div>
            <div class="add_person_app_info">应用详情</div>
          </div>
          <p>{{ item.appName }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {removeMyApp,pushMyApp,setShortcutApp,IsShortcutApp,removeShortcutApp} from '@/api/mine'
import {mapState,mapGetters} from "vuex"
export default {
    data() {
        return {
            options: [{
                id: '1',
                label: '免费应用'
            }, {
                id: '2',
                label: '便宜应用'
            }, {
                id: '3',
                label: '贵贵的应用'
            }],
            isOrNot:'',
            shadow: false,
            isShadowActive: null,
            value: '',
            
            isAdmin: true,
            appSettingBtnshow: false,
            IsAppSettingBtn: null,
            SettingBtnListShow: false
        }
    },
    created(){
      this.$store.dispatch("MineApp/getAppList")
    },
    computed:{
      ...mapGetters(["enterpriseApp",'hasApp','adminApp'])
    },
    methods: {
        //* 添加应用到我的应用
        addPersonApp(id) {
            let data = {
              orgId:this.$store.getters.orgId,
              appId:id
            }
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
              formData.append(key, data[key]);
              });
            pushMyApp(formData).then(res=>{
              console.log(res)
              if(res.data){
                this.$store.dispatch("MineApp/getAppList")
              }
            }).catch((error=>{
              this.message({
                type:"error",
                massage:"链接服务器失败！"
              })
            }))
        },
        // //* 删除应用在我的应用
        deleteAppInPerson(id) {
            let data = {
              orgId:this.$store.getters.orgId,
              appId:id
            }
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
              formData.append(key, data[key]);
              });
            removeMyApp(formData).then((res)=>{
              console.log(res)
              if(res.data){
                this.$store.dispatch("MineApp/getAppList")
              }
            }).catch((error=>{
              this.message({
                type:"error",
                massage:"链接服务器失败！"
              })
            }))
        },
        //* 添加/删除快捷方式
        setAppToShortcut(id){
          let data = {
              orgId:this.$store.getters.orgId,
              appId:id
            }
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
              formData.append(key, data[key]);
              });
            IsShortcutApp(formData).then(res=>{
              if(res.data){
                removeShortcutApp(formData).then(res=>{
                  console.log(res,"res")
                  if(res.data){
                    this.$store.dispatch("MineApp/getAppList")
                  }
                })
              }else{
                setShortcutApp(formData).then((res)=>{
                  if(res.data){
                    this.$store.dispatch("MineApp/getAppList")
                  }
                })
              }
            })
            
            
        },
        


        compare(prop) {
            return function(obj1, obj2) {
                var val1 = obj1[prop]
                var val2 = obj2[prop]
                return val1 - val2
            }
        },

        //* 企业应用shadow显示/隐藏
        IsShadow(event) {
            const shadow = event.target.id * 1
            this.isShadowActive = shadow
        },
        //* 设置按钮和列表显示/隐藏
        appSettingBtn(event) {
            const settingBtn = event.target.id * 1
            console.log('setting', settingBtn)
            this.IsAppSettingBtn = settingBtn
        },
        enterApp(event) {
            const enterAppId = event.target.id * 1
            this.$router.push({ name: 'myAppDetail', params: { id: enterAppId }})
        },
        user_manage(appId,orgAppId) {
            this.$router.push({ name: 'userManage', params: { appId: appId,orgAppId:orgAppId}})
        },
        
    }
}
</script>

<style lang="scss">
    .app_seach{
        width: 1200px;
        height: 50px;
        margin:40px auto 0;
        font-size: 16px;
        color: #303133;
        .app_type{
            .el-input__inner{
                width:200px;
                height: 50px;
                margin-left: 20px;
                border:1px solid rgba(199,204,209,1);
                border-radius:6px;
                color: #909399;
                font-size: 14px;
            }
        }
    }
</style>

<style lang="scss" scoped>
     .hasEnterprise{
        background: #fff;
        min-height: 886px;
        overflow: hidden;
        margin-top:60px;
        // .mine_title{
        //     width:100%;
        //     height: 50px;
        //     background: #448BD2;
        //     text-indent: 360px;
        //     line-height: 50px;
        //     color: #fff;
        //     font-size: 18px;
        // }
        .banner_null{
            width: 1200px;
            height: 150px;
            background: #7FBEFD;
            margin:20px auto 0;
            border-radius:10px;
        }
        .app_key_seach_label{
            padding-left:80px;
            font-size: 16px;
            color: #303133;
        }
        .app_key_seach{
            width:400px;
            height:50px;
            border:1px solid rgba(199,204,209,1);
            border-radius:6px;
            margin-left:20px;
            padding-left:20px;
        }
        .app_key_seach_btn{
            display: inline-block;
            width:110px;
            height:50px;
            background:rgba(68,139,210,1);
            border-radius:6px;
            margin-left:20px;
            text-align:center;
            line-height:50px;
            color:#fff;
            font-size:14px;
        }
        .my_app_box{
            width:1200px;
            margin:80px auto;
            .my_app_box_box_title{
                width:100%;
                height: 18px;
                line-height:18px;
                .my_app_dian{
                    float: left;
                    width:4px;
                    height:18px;
                    background:rgba(68,139,210,1);
                }
                .my_app_title{
                    float: left;
                    padding-left:10px;
                    color:#303133;
                    font-size:18px;
                    font-weight:900;
                }
            }
            .my_app_box_content{
                width:1200px;
                .my_app_box_content_hint{
                    width:256px;
                    margin:20px auto;
                    .my_app_box_content_null{
                        width:222px;
                        height: 230px;
                        img{
                            width:100%;
                            height: 100%;
                        }
                    }
                    p{
                        padding-top:30px;
                        color:#909399;
                        font-size:16px;
                    }
                }
            }
        }
        .enterprise_app{
            width:1200px;
            .enterprise_app_box{
                width:260px;
                height: 200px;
                border-radius:8px;
                box-shadow:0px 2px 12px 0px rgba(12,45,77,0.1);
                float: left;
                margin-top:50px;
                margin-right:40px;
                position: relative;
                .add_person_app_shadow{
                    width:260px;
                    height:140px;
                    background:#448BD2;
                    position:absolute;
                    border-radius:8px 8px 0 0;
                    top:0;
                    left:0;
                    z-index: -1;
                    &.active{
                        z-index: 100;
                    }
                    .add_person_app{
                        width:120px;
                        height:34px;
                        background:rgba(255,255,255,0.2);
                        border:1px solid rgba(251,251,251,1);
                        border-radius:4px;
                        margin:28px 0 0 70px;
                        text-align:center;
                        line-height:34px;
                        font-size:14px;
                        color:#fff;
                        cursor: pointer;
                    }
                    .add_person_app_info{
                        width:120px;
                        height:34px;
                        background:rgba(255,255,255,0.2);
                        border:1px solid rgba(251,251,251,1);
                        border-radius:4px;
                        margin:16px 0 0 70px;
                        text-align:center;
                        line-height:34px;
                        font-size:14px;
                        color:#fff;
                        cursor: pointer;
                    }
                }
                .enterprise_app_content{
                    width:260px;
                    height:140px;
                    border-radius:8px 8px 0 0;
                    background:#F0F2F5 url("../../assets/images/bg_pic.png") no-repeat top center;
                    position: relative;
                    cursor: pointer;
                    .enterprise_app_content_img{
                        width:64px;
                        height:64px;
                        position: absolute;
                        top:0;
                        bottom:0;
                        left:0;
                        right:0;
                        margin:auto;
                        background:rgba(255,255,255,1);
                        box-shadow:0px 5px 15px 0px rgba(12,45,77,0.17);
                        border-radius:8px;
                        margin:auto;
                        z-index: 99;
                        img{
                            // width:100%;
                            // height: 100%;
                            position: absolute;
                            top:0;
                            bottom:0;
                            left:0;
                            right:0;
                            margin:auto;
                        }
                    }
                    .enterprise_app_content_setting{
                        position: absolute;
                        top:10px;
                        right:10px;
                        width:26px;
                        height: 26px;
                        z-index: -1;
                        cursor: pointer;
                        &.active{
                            z-index: 109;
                        }
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .setting_list{
                        width:90px;
                        background:rgba(68,139,210,1);
                        border-radius:4px;
                        position: absolute;
                        top:42px;
                        right:10px;
                        z-index: -1;
                        &.settingBtnActive{
                            z-index:120;
                        }
                        .setting_list_user{
                            width:90px;
                            height:40px;
                            background:#448BD2;
                            border-radius:4px 4px 0 0;
                            text-align:center;
                            line-height:40px;
                            cursor: pointer;
                            font-size:14px;
                            color:#fff;
                            &:hover{
                                background:#266DB8;
                            }
                        }
                        .setting_line{
                            width:74px;
                            height:1px;
                            background:rgba(38,109,184,1);
                            opacity:0.5;
                            filter:alpha(opacity=50);
                            border-radius:4px;
                            margin:0 auto;
                        }
                        .setting_list_delete{
                            width:90px;
                            height:40px;
                            background:#448BD2;
                            border-radius:0 0 4px 4px;
                            text-align:center;
                            line-height:40px;
                            cursor: pointer;
                            font-size:14px;
                            color:#fff;
                            &:hover{
                                background:#266DB8;
                            }
                        }
                    }
                }
                p{
                    width:260px;
                    height: 60px;
                    background:#fff;
                    text-align:center;
                    line-height:60px;
                    font-size:16px;
                    color:#303133;
                    border-radius:0 0 8px 8px;
                }
                .admin_box{
                        width:260px;
                        height: 60px;
                        background:#fff;
                        text-align:center;
                        line-height:60px;
                        font-size:16px;
                        color:#303133;
                        border-radius:0 0 8px 8px;
                        .admin_img_btn{
                            width:22px;
                            height: 26px;
                            float: left;
                            margin:18px 66px 0 10px;
                            img{
                                width:100%;
                                height: 100%;
                            }
                        }
                        span{
                            float:left;
                        }
                    }
            }
        }
    }
</style>
