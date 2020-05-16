<template>
  <v-app style="background: #D0D0D0;" >
    <v-app-bar
      app
      dark
      color="#600303"
    >
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer 
      v-model="drawer" 
      absolute
      temporary
      clipped
    >
      <v-list
        dense
        nav
      >
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Code</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: false
  }),
};
</script>

<style scoped>
</style>
