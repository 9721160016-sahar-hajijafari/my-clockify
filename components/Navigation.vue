<template>
  <v-card class="left-menu">
    <v-navigation-drawer permanent expand-on-hover>
      <v-list nav dense style="padding-top: 100px;">
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon color="#787575">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="left-menu__item">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'time tracker', icon: 'mdi-clock-outline' },
        { title: 'dashboard', icon: 'mdi-view-dashboard-outline' },
        { title: 'reports', icon: 'mdi-poll' },
        { title: 'projects', icon: 'mdi-text-box-outline' },
        { title: 'team', icon: 'mdi-account-group-outline' },
        { title: 'clients', icon: 'mdi-account-circle-outline' },
        { title: 'tags', icon: 'mdi-tag-outline' },
        { title: 'workspace', icon: 'mdi-projector-screen' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.left-menu {
  height: 600px;
  min-height: 100vh;

  // padding-top: 160px;
  &__item {
    color: #787575;
    text-transform: uppercase;
  }
}
</style>