<template>
  <div class="mine_page">
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
            applying: false
        }
    }
}
</script>

<style lang="scss" scoped>
  .mine_page{
    overflow: hidden;
  }
</style>
