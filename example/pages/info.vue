<template>
    <h1> in info</h1>
</template>

<script>
export default {
  mounted() {
    if(this.$logger) {
      this.$logger?.info('Logging in info.vue')
    }
  }
}
</script>

<style>

</style>