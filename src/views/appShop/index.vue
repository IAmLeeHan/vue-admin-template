<template>
  <div class="default_page">
    <LogonHeader />
    <AppInfo />
  </div>
</template>

<script>
import LogonHeader from '@/components/LogonHeader'
import AppInfo from './appInfo'
export default {
    components: { LogonHeader, AppInfo }
}
</script>

<style>
  .default_page{
    overflow: hidden;
  }
</style>
