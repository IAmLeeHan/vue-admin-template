<template>
  <div class="user_info_page">
    <LogonHeader />
    <router-view />
  </div>
</template>

<script>
import LogonHeader from '@/components/LogonHeader'
export default {
    components: { LogonHeader },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
  .user_info_page{
    overflow: hidden;
  }
</style>
