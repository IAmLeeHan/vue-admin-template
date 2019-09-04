<template>
  <div class="hasEnterprise">
    <!-- <div class="mine_title">
      应用商店
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
     .hasEnterprise{
        background: #fff;
        height: 100%;
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
    }
</style>
