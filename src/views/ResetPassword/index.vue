<template>
  <div class="mine_page">
    <LogonHeader />
    <ResetPassword />
  </div>
</template>

<script>
import LogonHeader from '@/components/LogonHeader'
import ResetPassword from './ResetPassword'
export default {
    components: { LogonHeader, ResetPassword },
    data() {
        return {
            hasEnterprise: true
        }
    }
}
</script>

<style>

</style>
