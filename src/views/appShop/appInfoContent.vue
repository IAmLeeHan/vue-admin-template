<template>
  <div class="hasEnterprise">
    <div class="banner_null" />

    <!-- <div class="app_seach">

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
        <span class="my_app_title">企业管理</span>
      </div>

      <div class="enterprise_app clear">
        <div
          v-for="item in enterpriseManage"
          :key="item.appId"
          class="enterprise_app_box clear"
          @click="toAppDetail(item.appId)"
        >
          <div class="enterprise_app_content">
            <div class="enterprise_app_content_img">
              <img :src="item.appImage" alt="">
            </div>
            <div class="enterprise_app_content_img_new">
              <img src="~img/new@2x.png" alt="">
            </div>
          </div>
          <p>{{ item.appName }}</p>
        </div>
      </div>
    </div>

    <div class="my_app_box">
      <div class="my_app_box_box_title">
        <span class="my_app_dian" />
        <span class="my_app_title">信用管理</span>
      </div>

      <div class="enterprise_app clear">
        <div
          v-for="item in creditManage"
          :id="item.appId"
          :key="item.appId"
          class="enterprise_app_box clear"
          @click="toAppDetail(item.appId)"
        >
          <div class="enterprise_app_content">
            <div class="enterprise_app_content_img">
              <img :src="item.appImage" alt="">
            </div>
          </div>
          <p>{{ item.appName }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {getAppList} from '@/api/appshop'
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
            shadow: false,
            isShadowActive: null,
            value: '',
            hasApp: [],
            isAdmin: true,
            appSettingBtnshow: false,
            IsAppSettingBtn: null,
            SettingBtnListShow: false,
            appDetailId: null,
            enterpriseManage:[],
            creditManage:[]
        }
    },
    created() {
        this.getAppShopList()
    },
    methods: {
        getAppShopList(){
          let data = {
            orgId:this.$store.getters.orgId,
            keyWord:''
          }
          const formData = new FormData();
          Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
            });
          getAppList(formData).then(res=>{
            console.log(res.data[2])
            this.enterpriseManage = res.data[1]
            this.creditManage = res.data[2]
          })
        },
        toAppDetail(appId){
          this.$router.push({name:"appdetail",params:{appId:appId}})
        }
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
        height: 100%;
        overflow: hidden;
        margin-top:60px;
        .mine_title{
            width:100%;
            height: 50px;
            background: #448BD2;
            text-indent: 360px;
            line-height: 50px;
            color: #fff;
            font-size: 18px;
        }
        .banner_null{
            width: 1200px;
            height: 150px;
            background: #7FBEFD;
            margin:20px auto 0;
            border-radius:10px;
        }
        .app_key_seach_label{
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
                cursor: pointer;
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
                            width:50%;
                            height: 50%;
                            position: absolute;
                            top:0;
                            bottom:0;
                            left:0;
                            right:0;
                            margin:auto;
                        }
                    }
                    .enterprise_app_content_img_new{
                        position: absolute;
                        width:46px;
                        height: 26px;
                        left:154px;
                        top:20px;
                        z-index: 130;
                        img{
                            width:100%;
                            height: 100%;
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
                        height:80px;
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
