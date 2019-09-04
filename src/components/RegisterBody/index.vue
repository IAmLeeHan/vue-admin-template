<template>
  <div class="body_main">
    <div class="body_box">
      <div class="body_box_left">
        <img src="~img/left-pic.png" alt="">
      </div>
      <div class="body_box_right">
        <Register />
      </div>
    </div>
  </div>
</template>

<script>
import Register from '@/components/Register'
export default {
    components: { Register }

}
</script>

<style lang="scss" scoped>
    .body_main{
        height: 827px;
        position: relative;
        .body_box{
            position: absolute;
            top:0;
            bottom: 0;
            left:0;
            right: 0;
            margin: auto;
            width:1200px;
            height: 628px;
            background: #FFFFFF;
            box-shadow:0px 2px 43px 0px rgba(17,47,92,0.05);
            .body_box_left{
                float: left;
                width:680px;
                height:628px;
                overflow: hidden;
                background:rgba(68,139,210,1);
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .body_box_right{
                float: left;
                width:520px;
                height:628px;
                background:rgba(255,255,255,1);
            }
        }
    }
</style>
