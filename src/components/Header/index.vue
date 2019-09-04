<template>
  <div class="app_page_box">
    <div class="nav_bar_box">
      <div class="route_box">
        <div class="nav_bar_img">
          <img src="~img/new_logo@2x.png">
        </div>
        <ul class="first_route">
          <li
            v-for="item in routes"
            :key="item.id"
            class="first_route_titlt"
          >
            <router-link
              :to="item.path"
              class="first_route_titlt_link"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>

        <div class="btn_box">
          <router-link
            v-for="item in btn"
            :key="item.id"
            tag="button"
            class="btn_button"
            :to="item.path"
          >{{ item.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            routes: [
                { id: 1, title: '首页', path: '/home' },
                { id: 2, title: '产品', path: '/product' },
                { id: 3, title: '服务', path: '/service' },
                { id: 4, title: '解决方案', path: '/solution' },
                { id: 5, title: '联系我们', path: '/contact' },
                { id: 6, title: '企业简介', path: '/enterprise' },
                { id: 7, title: '新闻资讯', path: '/news' }
            ],
            activeClass: -1,
            btn: [
                { id: 8, title: '登录', path: '/login' },
                { id: 9, title: '注册', path: '/register' }
            ]
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
  .app_page_box{
    background: rgba(255,255,255,1);
    .nav_bar_box{
      width:100%;
      height: 60px;
      .route_box{
        width:1200px;
        height: 60px;
        background: rgba(255,255,255,1);
        margin: 0 auto;
        overflow: hidden;
        .nav_bar_img{
          width:150px;
          height: 40px;
          margin-top:10px;
          float: left;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .first_route{
          padding-left: 20px;
          height: 60px;
          line-height: 60px;
          float: left;
          .first_route_titlt{
            float: left;
          }
          .first_route_titlt_link{
            display: block;
            padding: 0 20px;
            font-size: 14px;
            &.router-link-active{
              color:#2486EE;
            }
          }
        }
        .btn_box{
          float: right;
          height: 60px;
          vertical-align: middle;
          padding-top: 12px;
          .btn_button{
            float: left;
            width:74px;
            height: 36px;
            border:0;
            margin-left: 20px;
            padding: 0;
            background: #F7F8F8;
            text-align: center;
            line-height: 36px;
            font-size: 14px;
            color: #303133;
            border-radius: 6px;
            &.router-link-active{
              background:#2486EE;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
