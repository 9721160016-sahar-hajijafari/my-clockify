<template>
  <div>
    <v-app>
      <v-content>
        <template>
          <Header class="header" />
          <v-card>
            <v-navigation-drawer permanent expand-on-hover app>
              <v-list dense nav flat style="padding-top:130px">
                <v-list-item-group v-model="model" mandatory color="#03A9F4">
                  <v-list-item v-for="(item, i) in items" :key="i" :to="item.path">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </template>
        <nuxt style="padding-top:88px" />
      </v-content>
    </v-app>
  </div>
</template>



<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  },
  data: () => ({
    model: 0,
    items: [
      {
        text: 'time tracker',
        icon: 'mdi-clock-outline',
        path: '/panel/timeTracker'
      },
      {
        text: 'dashboard',
        icon: 'mdi-view-dashboard-outline',
        path: '/panel/dashboard'
      },
      {
        text: 'reports',
        icon: 'mdi-poll',
        path: '/panel/reports'
      },
      {
        text: 'projects',
        icon: 'mdi-text-box-outline',
        path: '/panel/projects'
      },
      {
        text: 'team',
        icon: 'mdi-account-group-outline',
        path: '/panel/team'
      },
      {
        text: 'clients',
        icon: 'mdi-account-circle-outline',
        path: '/panel/clients'
      },
      {
        text: 'tags',
        icon: 'mdi-tag-outline',
        path: '/panel/tags'
      },
      {
        text: 'workspace',
        icon: 'mdi-projector-screen',
        path: '/panel/workspace'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
}
</style>