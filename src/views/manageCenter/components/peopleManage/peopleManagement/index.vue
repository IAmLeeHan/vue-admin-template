<template>
  <div class="peopleManagement">
    <organizational />
    <organizationName></organizationName>
  </div>
</template>

<script>
import organizational from './organizational'
import organizationName from './organizationName'

export default {
    components: { organizational,organizationName }
}
</script>

<style lang="scss" scoped>
</style>
