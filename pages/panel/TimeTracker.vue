<template>
  <v-container fluid class="main">
    <v-row>
      <v-col cols="12">
        <v-row class="my-10" justify="center">
          <v-col cols="11" class="pa-0 main__start">
            <v-row>
              <v-col cols="3" class="main__start__working">
                <v-text-field
                  v-model="myField"
                  label="What are you working on?"
                  single-line
                  outlined
                  dense
                  color="#353434"
                ></v-text-field>
              </v-col>

              <v-col cols="2"></v-col>
              <v-col cols="2">
                <v-btn text color="#03a9f4">
                  <v-icon style="padding-bottom: 5px">mdi-plus-circle-outline</v-icon>
                  <p style="padding-top: 10px">Project</p>
                </v-btn>
                <!-- <v-divider vertical inset class="mx-4"></v-divider> -->
              </v-col>
              <v-col cols="2">
                <v-row>
                  <v-col cols="1" class="pa-0">
                    <v-divider vertical></v-divider>
                  </v-col>
                  <v-col cols="3" class="pa-0">
                    <!-- <v-divider vertical inset style="display: inline;"></v-divider> -->
                    <v-btn icon>
                      <v-icon>mdi-tag-outline</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="1" class="pa-0">
                    <v-divider vertical></v-divider>
                  </v-col>
                  <v-col cols="3" class="pa-0">
                    <v-btn icon>
                      <v-icon>mdi-currency-usd</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="1" class="pa-0">
                    <v-divider vertical></v-divider>
                  </v-col>
                </v-row>
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
  layout: 'MyLayout',
  data() {
    return {
      myField: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  background-color: #e1ecef;
  &__start {
    height: 60px;
    border-radius: 5px;
    box-shadow: 1px 1px 33px 0 rgba(0, 1, 255, 0.08);
    background-color: #ffffff;
    &__working {
      padding-top: 10px;
      margin-left: 10px;
    }
  }
}
</style>
<style lang="scss">
html {
  overflow: hidden;
}
</style>
