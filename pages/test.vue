<template>
  <p>{{ name }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    this.name = this.$store.getters['User/getName']
  }
}
</script>

<style>
</style>