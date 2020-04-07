<template>
  <v-container fluid class="main-page">
    <v-row class="mx-0 main-page__body" justify="center">
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <img src="images/clockify-logo-blue.svg" class="main-page__body__logo" />
          </v-col>
          <v-col cols="2"></v-col>
          <v-col cols="3" lg="3" md="3" sm="5">
            <v-row justify="center" class="main-page__body__text">
              <v-col cols="12">
                <v-text-field
                  v-model="myField"
                  solo
                  label="Enter Token"
                  prepend-inner-icon="mdi-account"
                  class="main-page__body__text__token"
                  color="#989090"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn
                  width="100%"
                  class="main-page__body__text__login"
                  color="rgba(0, 0, 0, 0.63)"
                  height="49px"
                  :disabled="!myField"
                  @click="Login()"
                >login</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      myField: '',
      user: {}
    }
  },
  methods: {
    async Login() {
      this.user = await this.$axios.get('https://api.clockify.me/api/v1/user', {
        headers: {
          'X-Api-Key': this.myField
        }
      })
      // console.log(this.user)
      this.$store.commit('User/setName', this.user.data.name)
      this.$store.commit('User/setToken', this.myField)
      this.$router.push('/test')
    }
  }
}
</script>
<style lang="scss" scoped>
.main-page {
  min-height: 100vh;
  object-fit: cover;
  background-image: url(../static/images/background.png);
  background-repeat: no-repeat;
  &__body {
    &__logo {
      position: absolute;
      top: 30px;
    }
    &__text {
      padding-top: 120px;
      &__token {
        height: 48px;
        border-radius: 45px;
        background-color: #ffffff;
      }

      &__login {
        border-radius: 45px;
        color: #c5c5c5;
      }
    }
  }
}
</style>
<style lang="scss">
html {
  overflow: hidden;
}
</style>