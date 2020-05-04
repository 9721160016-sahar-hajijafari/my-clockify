<template>
  <v-container fluid class="main">
    <v-row>
      <v-col cols="3">
        <img src="/images/clockify-logo-blue.svg" class="main__logo" />
      </v-col>
      <v-spacer></v-spacer>

      <v-avatar size="48px" class="main__avatar">
        <img :src="avatar" />
      </v-avatar>

      <a class="main__name">{{ name }}</a>

      <v-divider class="mx-4 main__line" inset vertical></v-divider>

      <v-btn icon class="main__icon" @click="logOut">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      user: [],
      token: '',
      avatar: ''
    }
  },
  async mounted() {
    await this.$store.restored
    this.name = this.$store.getters['User/getName']
    this.token = this.$store.getters['User/getToken']
    this.user = await this.$axios.get('https://api.clockify.me/api/v1/user', {
      headers: {
        'X-Api-Key': this.token
      }
    })
    this.avatar = this.user.data.profilePicture
  },
  methods: {
    logOut() {
      this.$store.commit('User/setName', '')
      this.$store.commit('User/setToken', '')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
// .main {
//   box-shadow: 0 19px 38px 0 rgba(0, 0, 0, 0.16);
// }
// .name {
//   font-family: 'Product Sans Thin Regular' !important;
// }
.main {
  box-shadow: 0 19px 38px 0 rgba(0, 0, 0, 0.16);
  height: 88px;
  background-color: white;
  // padding-top: 21px;
  &__logo {
    width: 193.7px;
    height: 36px;
    // padding-top: 0px;
  }
  &__avatar {
    position: relative;
    top: 9px;
  }
  &__name {
    font-family: 'Product Sans Thin Regular';
    line-height: 88px;
    color: black;
    margin-top: -12px;
  }
  &__line {
    // position: relative;
    // top: -5px;
    // margin-top: -12px;
    // padding-top: 12px;
    margin-bottom: 12px;
  }
  &__icon {
    // position: relative;
    // top: 13px;
    // margin-right: 10px;
    // margin-top: 12px;
    margin: 12px 10px;
    margin-left: 0px;
  }
}
</style>