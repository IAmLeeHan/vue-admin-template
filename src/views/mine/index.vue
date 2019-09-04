<template>
  <div class="mine_page">
    <LogonHeader />
    <!-- <Default v-if="hasEnterprise" />
    <hasEnterprise v-else /> -->
    <router-view />
  </div>
</template>

<script>
import LogonHeader from '@/components/LogonHeader'
import Default from './default'
import hasEnterprise from './hasEnterprise'
import myAppDetailVue from './myAppDetail.vue'
export default {
    components: { LogonHeader, Default, hasEnterprise },
    data() {
        return {
            hasEnterprise: true
        }
    },
    created() {
        if (this.hasEnterprise && this.$route.name === 'mineDefault') {
            this.$router.push('/mine/hasEnterprise')
        }
    }
}
</script>

<style lang="scss" scoped>
  .mine_page{
    overflow: hidden;
  }
</style>
