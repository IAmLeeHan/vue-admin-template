<template>
  <div class="applying_finished_shadow">
    <div class="applying_finished">
      <div class="applying_finished_icon">
        <img src="~img/Success.png" alt="">
      </div>
      <p class="applying_finished_hint">申请已发送，等待管理员审核</p>
      <div 
        class="applying_finished_submit"
        @click="toMine"
      >完成</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
      toMine(){
        this.$router.replace("/mine/mineDefault")
      }
    }
}
</script>

<style lang="scss" scoped>
    .applying_finished_shadow{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        background: rgba(0,0,0,.5);
        .applying_finished{
            width:500px;
            height: 480px;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 43px 0px rgba(17,47,92,0.05);
            position: fixed;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
            .applying_finished_icon{
                width:190px;
                height: 190px;
                margin:76px auto 0;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .applying_finished_hint{
                width:500px;
                text-align: center;
                padding-top:30px;
                font-size: 18px;
                color: #303133;
                font-weight: 900;
            }
            .applying_finished_submit{
                width:280px;
                height: 50px;
                background:rgba(68,139,210,1);
                border-radius:6px;
                text-align: center;
                line-height: 50px;
                font-size: 16px;
                color: #fff;
                margin:40px auto 0;
                cursor: pointer;
            }
        }
    }
</style>
