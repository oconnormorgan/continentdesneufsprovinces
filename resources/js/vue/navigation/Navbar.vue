<template>
  <v-container fluid class="ma-0 pa-0">
    <v-app-bar color="deep-black" dark class="ma-0 pa-0">
      <v-toolbar-title class="pa-3">Le Continent des Neufs Provinces</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = true" class="pa-3"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right dark>
      <v-list nav dense>
        <v-title>Le Continent des Neufs Provinces</v-title>
        <v-divider class="my-5"></v-divider>
        <v-list-item-group v-model="group" active-class="orange--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Mon compte</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
};
</script>>