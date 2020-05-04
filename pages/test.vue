<template>
  <div>
    <p>aa {{ name }} aa but</p>
    <navigation />
  </div>
</template>

<script>
// import Navigation from '../components/Navigation'
export default {
 
  data() {
    return {
      name: ''
    }
  },
  async mounted() {
    await this.$store.restored
    this.name = this.$store.getters['User/getName']
    // console.log(this.name)
    await this.$axios.get('https://api.clockify.me/api/v1/user', {
      headers: {
        'X-Api-Key': this.$store.getters['User/getToken']
      }
    })
  }
}
</script>

<style>
</style>