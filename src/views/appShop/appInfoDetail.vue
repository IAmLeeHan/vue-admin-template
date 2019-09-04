<template>
  <div class="appInfoDetail">
    <div
      v-for="item in appDetailInfo"
      :key="item.appId"
      class="appInfoDetail_box"
    >
      <div class="appInfoDetail_header">
        <span class="appInfoDetail_title">应用商店 / {{ item.appName }}</span>
        <div class="appInfoDetail_exit">
          <span>返回</span>
          <div class="appInfoDetail_exit_img">
            <img src="~img/arrow_01.png" alt="">
          </div>
        </div>
      </div>
      <div class="appInfoDetail_description">
        <div class="appInfoDetail_description_img_box">
          <div class="appInfoDetail_description_img">
            <img :src="item.appIcon" alt="">
          </div>
        </div>
        <div class="appInfoDetail_description_box">
          <div class="appInfoDetail_description_title_box">
            <span>{{ item.appName }}</span>
            <div
              class="appInfoDetail_description_btn"
              @click="go_buy"
            >购买</div>
            <div class="appInfoDetail_description_btn">试用</div>
            <div
              class="appInfoDetail_description_btn"
              @click="isApply = true"
            >申请</div>
          </div>
          <div class="appInfoDetail_description_content">
            <span
              class="appInfoDetail_description_content_text"
            >
              {{ item.appDetails | InterceptDescription }}
            </span>
            <span class="appInfoDetail_description_content_more">
              更多 >>>
            </span>
          </div>
        </div>
      </div>
      <div class="appInfoDetail_banner">
        banner预留位置
      </div>

      <div class="appInfoDetail_X">
        此处是相应产品的详情页
        内容待定，需单独设计页面
        参考次框架数值
      </div>
    </div>
    <AppUseApply
      v-if="isApply"
      :is-apply="isApply"
      @closeApply_btn="closeApply_btn"
    />
  </div>
</template>

<script>
import AppUseApply from '@/components/AppUseApply'
import {getAppDetail} from '@/api/appshop'
export default {
    components: { AppUseApply },
    filters: {
        InterceptDescription(value) {
            return value && value.length > 132 ? value.substr(0, 132) + '...' : value || ''
        }
    },
    data() {
        return {
            appDetailInfo: [],
            enterpriseApp: [],
            isApply: false
        }
    },
    created() {
        // 
        this.getAppDetailInfo()
        console.log(this.appDetailInfo)
    },
    methods: {
        go_buy() {
            this.$router.push({ name: 'appBuy', params: { id: this.$route.params.appId * 1 }})
        },
        closeApply_btn(res) {
            this.isApply = res
        },
        getAppDetailInfo(){
          let data = {
            appId:this.$route.params.appId
          }
          const formData = new FormData();
          Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
          });
          getAppDetail(formData).then(res=>{
            console.log(res,"detail")
            this.appDetailInfo = res.data
          })
        }
    }
}
</script>

<style lang="scss" scoped>
    .appInfoDetail{
        width:100%;
        background:#f9f9f9;
        overflow: hidden;
        .appInfoDetail_box{
            width:1200px;
            height:2502px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(223,230,236,1);
            border-radius:10px;
            margin:20px auto 96px;
            .appInfoDetail_header{
                width:1200px;
                height:50px;
                background:rgba(245,247,250,1);
                border-radius:10px 10px 0 0;
                .appInfoDetail_title{
                    float: left;
                    height: 50px;
                    line-height: 50px;
                    color: #303133;
                    font-size: 18px;
                    font-weight: 900;
                    text-indent: 20px;
                }
                .appInfoDetail_exit{
                    float: right;
                    height: 50px;
                    line-height: 50px;
                    color:#606266;
                    font-size: 14px;
                    span{
                        float: left;
                    }
                    .appInfoDetail_exit_img{
                        float: left;
                        width: 18px;
                        height: 18px;
                        margin:16px 20px 0 10px;
                        img{
                            width:100%;
                            height: 100%;
                        }
                    }
                }
            }
            .appInfoDetail_description{
                width:1000px;
                height: 300px;
                margin:0 auto;
                .appInfoDetail_description_img_box{
                    width:200px;
                    height:200px;
                    background:rgba(68,139,210,1);
                    border-radius:10px;
                    margin:50px 0;
                    float: left;
                    position: relative;
                    .appInfoDetail_description_img{
                        width:80px;
                        height:80px;
                        background:rgba(255,255,255,1);
                        box-shadow:0px 5px 15px 0px rgba(12,45,77,0.17);
                        border-radius:8px;
                        position: absolute;
                        top:0;
                        bottom:0;
                        left:0;
                        right:0;
                        margin: auto;
                        img{
                            width:38px;
                            height: 50px;
                            position: absolute;
                            top:0;
                            bottom:0;
                            left:0;
                            right:0;
                            margin: auto;
                        }
                    }
                }
                .appInfoDetail_description_box{
                    float: left;
                    width:756px;
                    margin:50px 0 50px 40px;
                    .appInfoDetail_description_title_box{
                        width:756px;
                        height: 50px;
                        margin:20px 0 30px 0;
                        line-height: 50px;
                        span{
                            float: left;
                            color: #303133;
                            font-size: 22px;
                            padding-right: 40px;
                        }
                        .appInfoDetail_description_btn{
                            float: left;
                            width:110px;
                            height:50px;
                            background:rgba(68,139,210,1);
                            border-radius:6px;
                            color: #fff;
                            font-size: 16px;
                            line-height: 50px;
                            text-align: center;
                            margin-right: 30px;
                            cursor: pointer;
                        }
                    }
                }
                .appInfoDetail_description_content{
                    width:756px;
                    height:80px;
                    position: relative;
                    overflow: hidden;
                    .appInfoDetail_description_content_text{
                        display: block;
                        width:756px;
                        height: 56px;
                        font-size: 14px;
                        line-height: 24px;
                        margin-top:-6px;
                    }
                    .appInfoDetail_description_content_more{
                        position: absolute;
                        right:0;
                        bottom:0;
                        color: #448BD2;
                        font-size: 14px;
                    }
                }
            }
            .appInfoDetail_banner{
                width:999px;
                height:562px;
                border-radius:10px;
                background: #448BD2;
                line-height:562px;
                text-align: center;
                font-size: 69px;
                margin:0 auto;
            }
            .appInfoDetail_X{
                width:1000px;
                height:1443px;
                background:rgba(215,227,244,1);
                border-radius:10px;
                line-height: 443px;
                text-align: center;
                font-size: 69px;
                margin:50px auto;
            }
        }
    }
</style>
